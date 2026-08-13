// Shared building blocks for the Research section.
//
// Everything here renders identically on the server and in the browser: no
// framer-motion, no IntersectionObserver, no window access during render. That
// is what lets scripts/prerender.mjs bake the full text of every page into
// static HTML, so the content is readable with JavaScript disabled and by
// crawlers that don't execute scripts. Motion is CSS-only.

import { useState } from 'react'
import { statusOf, researchSite, author, orcidUrl } from '../data/research.js'

/* ── Chrome ──────────────────────────────────────────────────────────────── */

export function ResearchHeader() {
  return (
    <header className="rs-topbar">
      <a className="rs-logo" href="/">
        TANIA OLARTE<span>.</span>
      </a>
      <nav className="rs-topnav" aria-label="Section">
        <a href={researchSite.base}>Research</a>
        <a href="/#work">Work</a>
        <a href="/#about">About</a>
        <a className="rs-topnav-cta" href="/#contact">
          Get in touch
        </a>
      </nav>
    </header>
  )
}

export function Breadcrumbs({ trail }) {
  return (
    <nav className="rs-crumbs" aria-label="Breadcrumb">
      <ol>
        {trail.map((crumb, i) => {
          const last = i === trail.length - 1
          return (
            <li key={crumb.href}>
              {last ? (
                <span aria-current="page">{crumb.label}</span>
              ) : (
                <a href={crumb.href}>{crumb.label}</a>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export function ResearchFooter() {
  return (
    <footer className="rs-footer">
      <div className="rs-footer-inner">
        <div>
          <p className="rs-footer-name">{author.name}</p>
          <p className="rs-footer-role">
            {author.jobTitle} · {author.affiliation}
          </p>
        </div>
        <nav className="rs-footer-links" aria-label="Footer">
          <a href={researchSite.base}>Research index</a>
          <a href="/">Portfolio</a>
          <a href="/#contact">Contact</a>
          {orcidUrl && (
            <a href={orcidUrl} target="_blank" rel="noopener noreferrer me">
              ORCID
            </a>
          )}
        </nav>
      </div>
      <p className="rs-footer-copy">© 2026 {author.shortName}.</p>
    </footer>
  )
}

/** Page frame — topbar, breadcrumb, <main>, footer. */
export function ResearchShell({ trail, children }) {
  return (
    <div className="rs-root">
      <a className="rs-skip" href="#main">
        Skip to content
      </a>
      <ResearchHeader />
      <Breadcrumbs trail={trail} />
      <main id="main" className="rs-main">
        {children}
      </main>
      <ResearchFooter />
    </div>
  )
}

/* ── Atoms ───────────────────────────────────────────────────────────────── */

export function StatusBadge({ output }) {
  const status = statusOf(output)
  return <span className={`rs-status is-${status.tone}`}>{status.label}</span>
}

// Verb-first link labels — never "Learn more".
const LINK_LABELS = {
  doi: 'View Publication',
  oa: 'Open Access',
  pdf: 'Download PDF',
  project: 'View Project',
  dataset: 'Open Dataset',
  internal: 'Read Research',
  code: 'View Code',
  venue: 'View at Venue',
}

export function OutputLinks({ links = [], className = '' }) {
  if (!links.length) return null
  return (
    <div className={`rs-actions ${className}`.trim()}>
      {links.map((link) => {
        const external = /^https?:/.test(link.href)
        return (
          <a
            key={link.href + link.kind}
            className={`rs-btn is-${link.kind}`}
            href={link.href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {link.label || LINK_LABELS[link.kind] || 'Open'}
            <span aria-hidden="true">→</span>
          </a>
        )
      })}
    </div>
  )
}

/** Card used on the landing page for every kind of output. */
export function OutputCard({ output }) {
  const href = output.page ? `${researchSite.base}/${output.slug}` : null
  const links = output.links || []
  const primary = href
    ? [{ kind: 'internal', label: 'Read Research', href }, ...links.filter((l) => l.kind !== 'internal')]
    : links

  return (
    <article className={`rs-card${href ? ' has-page' : ''}`}>
      <div className="rs-card-meta">
        <span className="rs-card-type">{output.typeShort || output.type}</span>
        <span className="rs-card-year">{output.yearLabel || output.year}</span>
        <StatusBadge output={output} />
      </div>

      <h3 className="rs-card-title">
        {href ? <a href={href}>{output.title}</a> : output.title}
      </h3>

      {output.venue && <p className="rs-card-venue">{output.venue}</p>}
      {output.summary && <p className="rs-card-summary">{output.summary}</p>}

      {!!(output.keywords || []).length && (
        <ul className="rs-keywords" aria-label="Research keywords">
          {output.keywords.map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>
      )}

      <OutputLinks links={primary} className="rs-card-actions" />
    </article>
  )
}

/* ── Concept-to-Interaction diagram ──────────────────────────────────────── */

/**
 * An ordered list styled as a flow diagram. Kept as real text rather than an
 * image so it is readable by screen readers, crawlers and anyone with images
 * or JavaScript off; the connectors are CSS pseudo-elements.
 */
export function ConceptDiagram({ diagram }) {
  return (
    <figure className="rs-diagram">
      <ol className="rs-flow">
        {diagram.steps.map((step, i) => (
          <li className="rs-flow-step" key={step.label}>
            <span className="rs-flow-num" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="rs-flow-label">{step.label}</span>
            {step.note && <span className="rs-flow-note">{step.note}</span>}
          </li>
        ))}
      </ol>
      <figcaption className="rs-diagram-caption">{diagram.caption}</figcaption>
    </figure>
  )
}

/* ── Citation ────────────────────────────────────────────────────────────── */

function CopyButton({ value, label }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    let ok = false
    try {
      await navigator.clipboard.writeText(value)
      ok = true
    } catch {
      // Clipboard API can be denied (insecure context, permissions policy,
      // older browsers). Fall back to a throwaway textarea + execCommand so
      // "copy citation" still works where it matters most — someone grabbing
      // a reference mid-write-up.
      const ta = document.createElement('textarea')
      ta.value = value
      ta.setAttribute('readonly', '')
      ta.style.cssText = 'position:fixed;top:0;left:-9999px;opacity:0'
      document.body.appendChild(ta)
      ta.select()
      try {
        ok = document.execCommand('copy')
      } catch {
        ok = false
      }
      document.body.removeChild(ta)
    }
    if (!ok) return // the text stays visible and selectable on the page
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button type="button" className={`rs-copy${copied ? ' is-copied' : ''}`} onClick={copy}>
      {copied ? '✓ Copied' : label}
    </button>
  )
}

export function CiteBlock({ output }) {
  const citation = output.page?.citation
  if (!citation) return null
  const permanentUrl = `${researchSite.origin}${researchSite.base}/${output.slug}`

  return (
    <section className="rs-section rs-cite" aria-labelledby="how-to-cite">
      <h2 id="how-to-cite">How to Cite</h2>

      <div className="rs-cite-block">
        <div className="rs-cite-head">
          <h3>APA</h3>
          <CopyButton value={citation.apa} label="Copy citation" />
        </div>
        <p className="rs-cite-text">{citation.apa}</p>
      </div>

      {citation.bibtex && (
        <div className="rs-cite-block">
          <div className="rs-cite-head">
            <h3>BibTeX</h3>
            <CopyButton value={citation.bibtex} label="Copy BibTeX" />
          </div>
          <pre className="rs-cite-code">
            <code>{citation.bibtex}</code>
          </pre>
        </div>
      )}

      <div className="rs-cite-block">
        <div className="rs-cite-head">
          <h3>{output.doi ? 'DOI' : 'Persistent URL'}</h3>
          <CopyButton
            value={output.doi ? `https://doi.org/${output.doi}` : permanentUrl}
            label="Copy link"
          />
        </div>
        <p className="rs-cite-text">
          <a href={output.doi ? `https://doi.org/${output.doi}` : permanentUrl}>
            {output.doi ? `https://doi.org/${output.doi}` : permanentUrl}
          </a>
        </p>
      </div>

      {citation.note && <p className="rs-note">{citation.note}</p>}
    </section>
  )
}
