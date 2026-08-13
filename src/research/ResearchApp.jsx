import ResearchLanding from './ResearchLanding.jsx'
import ResearchDetail from './ResearchDetail.jsx'
import { ResearchShell } from './parts.jsx'
import { resolveRoute, headFor } from './routes.js'
import { researchSite } from '../data/research.js'

function ResearchNotFound({ trail }) {
  return (
    <ResearchShell trail={trail}>
      <header className="rs-hero">
        <p className="rs-eyebrow">Research</p>
        <h1 className="rs-h1">Page not found</h1>
        <p className="rs-lede">
          That research page doesn’t exist — it may have moved, or the link may be mistyped.
        </p>
        <div className="rs-actions">
          <a className="rs-btn is-internal" href={researchSite.base}>
            Browse all research<span aria-hidden="true">→</span>
          </a>
        </div>
      </header>
    </ResearchShell>
  )
}

/**
 * Renders whichever Research page `pathname` resolves to. Used by both
 * src/main.jsx (browser) and src/entry-server.jsx (prerender), so the static
 * HTML and the hydrated app are the same tree.
 */
export default function ResearchApp({ pathname }) {
  const route = resolveRoute(pathname)
  const { breadcrumbs } = headFor(pathname)

  if (route.kind === 'detail') {
    return <ResearchDetail output={route.output} trail={breadcrumbs} />
  }
  if (route.kind === 'landing') {
    return <ResearchLanding trail={breadcrumbs} />
  }
  return <ResearchNotFound trail={breadcrumbs} />
}
