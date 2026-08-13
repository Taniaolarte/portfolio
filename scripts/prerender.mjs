// Post-build prerender for the Research section.
//
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
// For every research route it renders the React tree to static HTML and writes
// a real file — dist/research/index.html, dist/research/<slug>/index.html —
// with a proper <title>, meta description, canonical, Open Graph and JSON-LD
// baked into the <head>.
//
// Why bother on a SPA: GitHub Pages serves those files directly, so the pages
// are complete documents for crawlers, AI retrieval systems, link previews and
// anyone with JavaScript disabled. The client bundle then hydrates the same
// markup, so behaviour is unchanged for everyone else.
//
// Also emits sitemap.xml and robots.txt so the URL list can never drift from
// the data in src/data/research.js.

import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

const { renderPage, allResearchPaths } = await import(
  pathToFileURL(join(root, 'dist-ssr', 'entry-server.js')).href
)
const { researchSite, pages } = await import(
  pathToFileURL(join(root, 'src', 'data', 'research.js')).href
)

const template = await readFile(join(dist, 'index.html'), 'utf8')

/** Escape for use inside an HTML attribute. */
const attr = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** `</` inside a <script> would close the tag early. */
const jsonLdSafe = (obj) => JSON.stringify(obj, null, 2).replace(/<\//g, '<\\/')

function buildHead(head) {
  const tags = [
    `<meta name="description" content="${attr(head.description)}" />`,
    `<link rel="canonical" href="${attr(head.canonical)}" />`,
    // Explicitly invite indexing and rich previews. No noindex anywhere in this
    // section — these pages are meant to be found and cited.
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`,
    `<meta property="og:type" content="${attr(head.ogType)}" />`,
    `<meta property="og:title" content="${attr(head.title)}" />`,
    `<meta property="og:description" content="${attr(head.description)}" />`,
    `<meta property="og:url" content="${attr(head.canonical)}" />`,
    `<meta property="og:image" content="${attr(head.ogImage)}" />`,
    `<meta property="og:site_name" content="Tania Olarte" />`,
    `<meta property="og:locale" content="en" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${attr(head.title)}" />`,
    `<meta name="twitter:description" content="${attr(head.description)}" />`,
    `<meta name="twitter:image" content="${attr(head.ogImage)}" />`,
    ...head.jsonLd.map(
      (node) => `<script type="application/ld+json">${jsonLdSafe(node)}</script>`
    ),
  ]
  return tags.map((t) => `    ${t}`).join('\n')
}

async function writePage(pathname) {
  const { html, head } = renderPage(pathname)

  const doc = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${attr(head.title)}</title>`)
    .replace('</head>', `${buildHead(head)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)

  const outDir = join(dist, pathname.replace(/^\//, ''))
  await mkdir(outDir, { recursive: true })
  await writeFile(join(outDir, 'index.html'), doc, 'utf8')
  return `${pathname}/index.html`
}

const routes = allResearchPaths()
const written = []
for (const route of routes) written.push(await writePage(route))

// ── sitemap.xml ─────────────────────────────────────────────────────────────
// Homepage + every research route. Drafts are excluded upstream: `pages` is
// already filtered, so an unconfirmed publication can never leak into here.
const today = new Date().toISOString().slice(0, 10)
const urls = [
  { loc: '/', priority: '1.0', changefreq: 'monthly' },
  { loc: researchSite.base, priority: '0.9', changefreq: 'monthly' },
  ...pages.map((p) => ({
    loc: `${researchSite.base}/${p.slug}`,
    priority: '0.8',
    changefreq: 'yearly',
    lastmod: p.dateModified || String(p.year),
  })),
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${researchSite.origin}${u.loc === '/' ? '/' : u.loc}</loc>
    <lastmod>${u.lastmod && u.lastmod.length === 10 ? u.lastmod : today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`
await writeFile(join(dist, 'sitemap.xml'), sitemap, 'utf8')

// ── robots.txt ──────────────────────────────────────────────────────────────
// Everything public is crawlable, including AI search/retrieval agents — the
// research pages exist to be retrieved and cited.
const robots = `# https://taniaolarte.com
User-agent: *
Allow: /

# AI search and retrieval agents are welcome on the research pages.
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: ${researchSite.origin}/sitemap.xml
`
await writeFile(join(dist, 'robots.txt'), robots, 'utf8')

// ── 404.html ────────────────────────────────────────────────────────────────
// GitHub Pages serves this (with a real 404 status) for unknown paths, so a
// mistyped /research/... URL still lands in the site rather than on GitHub's
// default page.
await writeFile(join(dist, '404.html'), template, 'utf8')

console.log(`prerendered ${written.length} research page(s):`)
for (const w of written) console.log(`  ${w}`)
console.log(`sitemap.xml → ${urls.length} urls · robots.txt · 404.html`)
