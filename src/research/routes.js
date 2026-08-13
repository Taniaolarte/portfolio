// Route resolution + <head> metadata for the Research section.
//
// Deliberately free of JSX, React and browser globals: scripts/prerender.mjs
// imports this at build time to write real <title>, meta, canonical, Open Graph
// and JSON-LD into each static HTML file, and the browser bundle imports the
// same functions so client-side navigation stays consistent with what crawlers
// were served.

import {
  researchSite,
  author,
  orcidUrl,
  intro,
  themes,
  outputs,
  pages,
  getOutput,
  absoluteUrl,
} from '../data/research.js'

const SITE_NAME = 'Tania Olarte'
const DEFAULT_OG_IMAGE = '/assets/case-studies/naibu/portada.png'

/** Strip trailing slashes so `/research/` and `/research` resolve identically. */
export function normalizePath(pathname) {
  const clean = (pathname || '/').split('?')[0].split('#')[0].replace(/\/+$/, '')
  return clean === '' ? '/' : clean
}

export function isResearchPath(pathname) {
  const p = normalizePath(pathname)
  return p === researchSite.base || p.startsWith(`${researchSite.base}/`)
}

/** → { kind: 'landing' | 'detail' | 'notfound', output? } */
export function resolveRoute(pathname) {
  const p = normalizePath(pathname)
  if (p === researchSite.base) return { kind: 'landing' }
  const match = p.match(/^\/research\/([A-Za-z0-9-]+)$/)
  if (match) {
    const output = getOutput(match[1])
    if (output) return { kind: 'detail', output }
  }
  return { kind: 'notfound' }
}

/** Every path the prerenderer should emit as a static file. */
export function allResearchPaths() {
  return [researchSite.base, ...pages.map((o) => `${researchSite.base}/${o.slug}`)]
}

function personSchema() {
  const person = {
    '@type': 'Person',
    name: author.name,
    givenName: author.givenName,
    familyName: author.familyName,
    jobTitle: author.jobTitle,
    url: absoluteUrl('/'),
    affiliation: {
      '@type': 'Organization',
      name: author.affiliation,
      url: author.affiliationUrl,
    },
    sameAs: [...author.sameAs, ...(orcidUrl ? [orcidUrl] : [])],
  }
  if (orcidUrl) person.identifier = orcidUrl
  return person
}

function breadcrumbSchema(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.label,
      item: absoluteUrl(crumb.href),
    })),
  }
}

/**
 * Schema.org type per output. Papers, articles and theses are scholarly
 * articles; ongoing practice-based work is a CreativeWork carrying an
 * additionalType so the distinction survives.
 */
export function schemaTypeOf(output) {
  if (output.schemaType) return output.schemaType
  return /thesis|paper|article/i.test(output.type) ? 'ScholarlyArticle' : 'CreativeWork'
}

function outputSchema(output) {
  const url = absoluteUrl(`${researchSite.base}/${output.slug}`)
  const abstract = output.page?.abstract?.join(' ') || output.summary

  const node = {
    '@context': 'https://schema.org',
    '@type': schemaTypeOf(output),
    headline: output.title,
    name: output.title,
    author: personSchema(),
    creator: personSchema(),
    datePublished: output.datePublished || String(output.year),
    abstract,
    description: output.metaDescription || output.summary,
    keywords: (output.keywords || []).join(', '),
    inLanguage: 'en',
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    identifier: output.doi ? `https://doi.org/${output.doi}` : url,
    isAccessibleForFree: true,
    license: output.license || undefined,
    creativeWorkStatus: output.status === 'project' ? 'In progress' : undefined,
  }

  if (output.dateModified) node.dateModified = output.dateModified
  if (output.doi) node.sameAs = [`https://doi.org/${output.doi}`]
  // `publisher` is the publishing body (ACM), not the conference — the
  // proceedings go in `isPartOf`, which is what reference managers read.
  const publisherName = output.publisherName || output.venue
  if (publisherName) node.publisher = { '@type': 'Organization', name: publisherName }
  if (output.proceedings) {
    node.isPartOf = { '@type': 'Book', name: output.proceedings }
  }
  if (output.pages) node.pagination = output.pages
  if (schemaTypeOf(output) !== 'ScholarlyArticle') node.additionalType = 'ResearchProject'
  if (output.page?.citation?.apa) node.citation = output.page.citation.apa
  if (output.image) {
    node.image = absoluteUrl(output.image)
    node.associatedMedia = [
      ...(output.page?.figures || [{ src: output.image, caption: output.imageAlt }]),
    ].map((fig) => ({
      '@type': 'ImageObject',
      contentUrl: absoluteUrl(fig.src),
      caption: fig.caption || fig.alt || '',
    }))
  }
  if (output.themes?.length) {
    node.about = output.themes
      .map((id) => themes.find((t) => t.id === id))
      .filter(Boolean)
      .map((t) => ({ '@type': 'Thing', name: t.label }))
  }

  // Drop undefined keys so the emitted JSON-LD stays clean.
  return JSON.parse(JSON.stringify(node))
}

function landingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Research — Tania Olarte',
    description: intro.lede,
    url: absoluteUrl(researchSite.base),
    inLanguage: 'en',
    about: themes.map((t) => ({ '@type': 'Thing', name: t.label, description: t.body })),
    author: personSchema(),
    mainEntity: {
      '@type': 'ItemList',
      itemListOrder: 'https://schema.org/ItemListUnordered',
      numberOfItems: outputs.length,
      itemListElement: outputs.map((o, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: o.title,
        ...(o.page ? { url: absoluteUrl(`${researchSite.base}/${o.slug}`) } : {}),
      })),
    },
  }
}

/**
 * Everything the <head> of a given path needs.
 * → { title, description, canonical, ogImage, ogType, jsonLd: [...], breadcrumbs }
 */
export function headFor(pathname) {
  const route = resolveRoute(pathname)

  if (route.kind === 'detail') {
    const o = route.output
    const path = `${researchSite.base}/${o.slug}`
    const breadcrumbs = [
      { label: 'Home', href: '/' },
      { label: 'Research', href: researchSite.base },
      { label: o.shortTitle || o.title, href: path },
    ]
    return {
      title: `${o.shortTitle || o.title} — Research — ${SITE_NAME}`,
      description: o.metaDescription || o.summary,
      canonical: absoluteUrl(path),
      ogImage: absoluteUrl(o.image || DEFAULT_OG_IMAGE),
      ogType: 'article',
      breadcrumbs,
      jsonLd: [outputSchema(o), breadcrumbSchema(breadcrumbs)],
    }
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Research', href: researchSite.base },
  ]

  if (route.kind === 'notfound') {
    return {
      title: `Not found — Research — ${SITE_NAME}`,
      description: 'This research page could not be found.',
      canonical: absoluteUrl(researchSite.base),
      ogImage: absoluteUrl(DEFAULT_OG_IMAGE),
      ogType: 'website',
      breadcrumbs,
      jsonLd: [],
    }
  }

  return {
    title: `Research — Games, Emotional Literacy & Mental Health — ${SITE_NAME}`,
    description:
      'Practice-based research by Tania Olarte on how interaction, game mechanics and visual metaphor support emotional reflection, emotional literacy and the communication of mental-health experiences.',
    canonical: absoluteUrl(researchSite.base),
    ogImage: absoluteUrl(DEFAULT_OG_IMAGE),
    ogType: 'website',
    breadcrumbs,
    jsonLd: [landingSchema(), breadcrumbSchema(breadcrumbs)],
  }
}
