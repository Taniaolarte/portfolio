import {
  ResearchShell,
  StatusBadge,
  OutputLinks,
  ConceptDiagram,
  CiteBlock,
  OutputCard,
} from './parts.jsx'
import { author, orcidUrl, relatedTo, researchSite, statusOf } from '../data/research.js'

/** Definition-list row that simply disappears when there is nothing to show. */
function MetaRow({ label, children }) {
  if (!children) return null
  return (
    <div className="rs-meta-row">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  )
}

export default function ResearchDetail({ output, trail }) {
  const page = output.page
  const permanentUrl = `${researchSite.origin}${researchSite.base}/${output.slug}`
  const related = relatedTo(output)

  return (
    <ResearchShell trail={trail}>
      <article className="rs-article">
        <header className="rs-hero rs-article-hero">
          <p className="rs-eyebrow">{output.type}</p>
          <h1 className="rs-h1 rs-article-title">{output.title}</h1>
          {page.lede && <p className="rs-lede">{page.lede}</p>}
          <OutputLinks links={output.links} />
        </header>

        {/* ── Publication metadata ─────────────────────────────────────── */}
        <section className="rs-section rs-metadata" aria-labelledby="publication-metadata">
          <h2 id="publication-metadata" className="rs-h2-quiet">
            Publication metadata
          </h2>
          <dl className="rs-meta">
            <MetaRow label="Authors">{(output.authors || [author.name]).join('; ')}</MetaRow>
            <MetaRow label="Year">{output.yearLabel || output.year}</MetaRow>
            <MetaRow label="Venue / Institution">
              {output.venue}
              {output.venueNote && <span className="rs-meta-note">{output.venueNote}</span>}
            </MetaRow>
            <MetaRow label="Publication type">{output.type}</MetaRow>
            <MetaRow label="Status">
              <StatusBadge output={output} />
            </MetaRow>
            <MetaRow label={output.doi ? 'DOI' : 'Permanent identifier'}>
              <a href={output.doi ? `https://doi.org/${output.doi}` : permanentUrl}>
                {output.doi ? `https://doi.org/${output.doi}` : permanentUrl}
              </a>
            </MetaRow>
            {orcidUrl ? (
              <MetaRow label="ORCID">
                <a href={orcidUrl} target="_blank" rel="noopener noreferrer me">
                  {orcidUrl.replace('https://', '')}
                </a>
              </MetaRow>
            ) : null}
            <MetaRow label="Access">
              {output.openAccessUrl ? (
                <a href={output.openAccessUrl} target="_blank" rel="noopener noreferrer">
                  Open access copy
                </a>
              ) : (
                'Open access — full text readable on this page'
              )}
            </MetaRow>
            {output.publisherUrl ? (
              <MetaRow label="Version of record">
                <a href={output.publisherUrl} target="_blank" rel="noopener noreferrer">
                  Publisher version
                </a>
              </MetaRow>
            ) : null}
            <MetaRow label="Keywords">
              <ul className="rs-keywords is-inline">
                {(output.keywords || []).map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </ul>
            </MetaRow>
            <MetaRow label="Recommended citation">
              <span className="rs-meta-citation">{page.citation?.apa}</span>
            </MetaRow>
          </dl>
        </section>

        {/* ── Abstract (plain visible text, never collapsed) ────────────── */}
        <section className="rs-section rs-abstract" aria-labelledby="abstract">
          <h2 id="abstract">Abstract</h2>
          {page.abstract.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          {page.abstractNote && <p className="rs-note">{page.abstractNote}</p>}
        </section>

        {/* ── Research at a glance ──────────────────────────────────────── */}
        {!!page.glance?.length && (
          <section className="rs-section" aria-labelledby="at-a-glance">
            <div className="rs-section-head">
              <h2 id="at-a-glance">Research at a Glance</h2>
              <p className="rs-section-hint">Question → contribution → evidence, in brief</p>
            </div>
            <div className="rs-glance">
              {page.glance.map((item) => (
                <div className={`rs-glance-item is-${item.id}`} key={item.id}>
                  <h3>{item.label}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Questions this research can help answer ───────────────────── */}
        {!!page.questions?.length && (
          <section className="rs-section rs-questions" aria-labelledby="questions">
            <h2 id="questions">Questions this research can help answer</h2>
            <ul className="rs-question-list">
              {page.questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
            {page.questionsNote && <p className="rs-note">{page.questionsNote}</p>}
          </section>
        )}

        {/* ── Key contributions ─────────────────────────────────────────── */}
        {!!page.contributions?.length && (
          <section className="rs-section" aria-labelledby="contributions">
            <h2 id="contributions">Key Contributions</h2>
            <div className="rs-contribs">
              {page.contributions.map((c, i) => (
                <article className="rs-contrib" key={c.title}>
                  <span className="rs-contrib-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </article>
              ))}
            </div>
            {page.contributionsNote && <p className="rs-note">{page.contributionsNote}</p>}
          </section>
        )}

        {/* ── Concept-to-Interaction mapping ────────────────────────────── */}
        {page.diagram && (
          <section className="rs-section rs-diagram-section" aria-labelledby="mapping">
            <h2 id="mapping">{page.diagram.title}</h2>
            <ConceptDiagram diagram={page.diagram} />
          </section>
        )}

        {/* ── Practice-derived design considerations ────────────────────── */}
        {page.considerations && (
          <section className="rs-section" aria-labelledby="considerations">
            <h2 id="considerations">{page.considerations.title}</h2>
            <div className="rs-considerations">
              {page.considerations.items.map((c, i) => (
                // <details> rather than a JS accordion: expandable with the
                // mouse, keyboard-operable, and fully readable with JS off.
                <details className="rs-consideration" key={c.title} open={i === 0}>
                  <summary>
                    <span className="rs-consideration-num" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{c.title}</span>
                  </summary>
                  <p>{c.body}</p>
                </details>
              ))}
            </div>
            {page.considerations.note && <p className="rs-note">{page.considerations.note}</p>}
          </section>
        )}

        {/* ── Figures ───────────────────────────────────────────────────── */}
        {!!page.figures?.length && (
          <section className="rs-section rs-figures" aria-labelledby="figures">
            <h2 id="figures" className="rs-h2-quiet">
              Selected design material
            </h2>
            <div className="rs-figure-grid">
              {page.figures.map((fig) => (
                <figure key={fig.src}>
                  <img src={fig.src} alt={fig.alt} loading="lazy" decoding="async" />
                  <figcaption>{fig.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* ── Limitations ───────────────────────────────────────────────── */}
        {!!page.limitations?.length && (
          <section className="rs-section rs-limitations" aria-labelledby="limitations">
            <h2 id="limitations">{page.limitationsHeading || 'Limitations'}</h2>
            <p className="rs-limitations-intro">
              What this research does <em>not</em> establish:
            </p>
            <ul>
              {page.limitations.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </section>
        )}

        <CiteBlock output={output} />

        {/* ── Related research ──────────────────────────────────────────── */}
        {!!related.length && (
          <section className="rs-section rs-related" aria-labelledby="related">
            <div className="rs-section-head">
              <h2 id="related">Related research</h2>
              <p className="rs-section-hint">
                Connected by shared concepts, methods and research questions
              </p>
            </div>
            <div className="rs-card-grid">
              {related.map((o) => (
                <OutputCard output={o} key={o.slug} />
              ))}
            </div>
          </section>
        )}

        <p className="rs-backlink">
          <a href={researchSite.base}>← All research</a>
          <span className="rs-backlink-status">
            {statusOf(output).label} · last updated {output.dateModified || output.year}
          </span>
        </p>
      </article>
    </ResearchShell>
  )
}
