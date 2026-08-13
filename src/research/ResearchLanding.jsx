import { ResearchShell, OutputCard } from './parts.jsx'
import {
  intro,
  themes,
  categories,
  outputs,
  author,
  orcidUrl,
  researchSite,
} from '../data/research.js'

export default function ResearchLanding({ trail }) {
  // Only categories that actually have public outputs appear — the section
  // grows as entries are added, and never renders an empty heading.
  const grouped = categories
    .map((cat) => ({ cat, items: outputs.filter((o) => o.category === cat.id) }))
    .filter((g) => g.items.length)

  return (
    <ResearchShell trail={trail}>
      <header className="rs-hero">
        <p className="rs-eyebrow">Research</p>
        <h1 className="rs-h1">Research</h1>
        <p className="rs-lede">{intro.lede}</p>
        <p className="rs-body">{intro.body}</p>

        <ul className="rs-fields" aria-label="Fields of research">
          {intro.fields.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <p className="rs-byline">
          {author.name} · {author.jobTitle}, {author.affiliation}
          {orcidUrl && (
            <>
              {' · '}
              <a href={orcidUrl} target="_blank" rel="noopener noreferrer me">
                ORCID
              </a>
            </>
          )}
        </p>
      </header>

      <section className="rs-section rs-themes" aria-labelledby="research-areas">
        <div className="rs-section-head">
          <h2 id="research-areas">Research Areas</h2>
          <p className="rs-section-hint">Three lines of enquiry that cross every project</p>
        </div>

        <div className="rs-theme-grid">
          {themes.map((theme) => {
            const related = outputs.filter((o) => (o.themes || []).includes(theme.id) && o.page)
            return (
              <article className="rs-theme" key={theme.id} id={theme.id}>
                <span className="rs-theme-num" aria-hidden="true">
                  {theme.num}
                </span>
                <h3>{theme.label}</h3>
                <p>{theme.body}</p>
                {!!related.length && (
                  <ul className="rs-theme-links">
                    {related.map((o) => (
                      <li key={o.slug}>
                        <a href={`${researchSite.base}/${o.slug}`}>{o.shortTitle || o.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            )
          })}
        </div>
      </section>

      <section className="rs-section" aria-labelledby="research-outputs">
        <div className="rs-section-head">
          <h2 id="research-outputs">Research Outputs</h2>
          <p className="rs-section-hint">
            Publications, projects, theses and recognised work — newest thinking first
          </p>
        </div>

        {grouped.map(({ cat, items }) => (
          <div className="rs-group" key={cat.id} id={cat.id}>
            <div className="rs-group-head">
              <h3>{cat.label}</h3>
              <span>{cat.hint}</span>
            </div>
            <div className="rs-card-grid">
              {items.map((o) => (
                <OutputCard output={o} key={o.slug} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="rs-section rs-collab" aria-labelledby="collaboration">
        <h2 id="collaboration">Collaboration & enquiries</h2>
        <p>
          I welcome contact from researchers, supervisors, conference organisers and practitioners
          working on games, emotional literacy and mental-health representation — including
          collaboration, review, speaking and supervision-adjacent conversations.
        </p>
        <div className="rs-actions">
          <a className="rs-btn is-internal" href="/#contact">
            Contact me<span aria-hidden="true">→</span>
          </a>
          <a className="rs-btn is-project" href="/">
            View design portfolio<span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </ResearchShell>
  )
}
