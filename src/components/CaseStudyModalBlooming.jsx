import { useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Pre-generated pink-particle field for the modal background. Deterministic
// (no random seeding) so each render places the same set of pinpoints.
function ParticleField({ count = 60 }) {
  const particles = useMemo(() => {
    const arr = []
    for (let i = 0; i < count; i++) {
      const seed = i * 9301 + 49297
      const r1 = ((seed % 233280) / 233280)
      const r2 = (((seed * 2) % 233280) / 233280)
      const r3 = (((seed * 3) % 233280) / 233280)
      const r4 = (((seed * 5) % 233280) / 233280)
      arr.push({
        top: `${(r1 * 100).toFixed(2)}%`,
        left: `${(r2 * 100).toFixed(2)}%`,
        size: 2 + r3 * 5,
        delay: r4 * -10,
        dur: 4 + r3 * 6,
        hue: r4 > 0.5 ? '#ff2e76' : '#ff8fb6',
        drift: 12 + r2 * 24,
      })
    }
    return arr
  }, [count])

  return (
    <div className="csb-particles" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          className="csb-particle"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.hue,
            boxShadow: `0 0 ${p.size * 3}px ${p.hue}`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            '--csb-drift': `${p.drift}px`,
          }}
        />
      ))}
    </div>
  )
}

// "Second Blooming" — dark, poetic, neon-magenta layout for the holographic
// flower installation. Doris Huang × Tania Olarte, sound by Santino Castagna.
// Looping muted videos are used as lightweight "gifs" throughout.
export default function CaseStudyModalBlooming({ hero, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!hero) return null
  const cs = hero.caseStudy
  const expYt = cs.experience?.youtubeId

  return (
    <AnimatePresence>
      <motion.div
        className="csb-overlay"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <motion.article
          className="csb-modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <button className="csb-close" onClick={onClose} aria-label="Close">×</button>

          {/* Top studio bar */}
          <header className="csb-topbar">
            <span className="csb-brand">STUDIO | SECOND BLOOMING</span>
            <nav className="csb-nav">
              {cs.chapters?.map((ch) => (
                <a key={ch.nav} href={`#csb-${ch.nav.toLowerCase()}`}>{ch.nav}</a>
              ))}
              <a href="#csb-exhibition">EXHIBITION</a>
            </nav>
          </header>

          {/* Ambient pink glows + drifting particle field */}
          <div className="csb-blob csb-blob-rose" aria-hidden="true" />
          <div className="csb-blob csb-blob-magenta" aria-hidden="true" />
          <ParticleField count={70} />

          {/* HERO */}
          <section className="csb-hero">
            <span className="csb-pill">{cs.eyebrow}</span>
            <h1 className="csb-title">
              <span className="csb-title-1">Second</span>{' '}
              <span className="csb-title-2">Blooming</span>
            </h1>
            <p className="csb-place">{cs.placeLine}</p>

            {/* Hero video */}
            {cs.heroVideo && (
              <div className="csb-hero-reel">
                <video
                  src={cs.heroVideo}
                  poster={cs.heroPoster}
                  autoPlay muted loop playsInline
                />
              </div>
            )}

            {/* Pull-quote intro */}
            <div className="csb-intro">
              <span className="csb-quote-glyph" aria-hidden="true">"</span>
              <p>
                Second Blooming is a meditation on the digital afterlife of organic forms.
                By capturing the essence of a physical flower and translating it into a reactive
                particle system, we create a dialogue between the{' '}
                <span className="csb-pink">tangible</span> and the{' '}
                <span className="csb-pink-soft">ephemeral</span>.
              </p>
            </div>
          </section>

          {/* Three alternating chapters */}
          {cs.chapters?.map((ch, i) => (
            <section
              id={`csb-${ch.nav.toLowerCase()}`}
              key={ch.nav}
              className={`csb-chapter${ch.flip ? ' csb-chapter-flip' : ''}`}
            >
              <div className="csb-chapter-inner">
                <div className="csb-chapter-text">
                  <span className="csb-step">{ch.eyebrow}</span>
                  <h2 className="csb-h2">{ch.title}</h2>
                  <p className="csb-p">{ch.body}</p>
                </div>
                <div className="csb-chapter-media">
                  <video
                    src={ch.media.video}
                    poster={ch.media.poster}
                    autoPlay muted loop playsInline
                  />
                  <div className="csb-media-glow" aria-hidden="true" />
                </div>
              </div>
            </section>
          ))}

          {/* PROCESS — step-by-step */}
          {cs.process?.length > 0 && (
            <section className="csb-section csb-process-section">
              <div className="csb-section-inner">
                <div className="csb-section-head">
                  <span className="csb-step">PROCESS</span>
                  <h2 className="csb-h2 csb-h2-left">From scan to dome</h2>
                  <p className="csb-section-lede">Six stages took the bloom from a real flower to a reactive twin breathing on the Bunjil Place outdoor screen.</p>
                </div>
                <ol className="csb-process">
                  {cs.process.map((p) => (
                    <li className="csb-process-step" key={p.num}>
                      <div className="csb-process-num">{p.num}</div>
                      <div className="csb-process-body">
                        <span className="csb-process-eyebrow">{p.eyebrow}</span>
                        <h3 className="csb-process-title">{p.title}</h3>
                        <p className="csb-process-text">{p.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          )}

          {/* EXPLORATION — what didn't make the cut */}
          {cs.exploration && (
            <section className="csb-section csb-exploration-section">
              <div className="csb-section-inner">
                <div className="csb-section-head">
                  <span className="csb-step">{cs.exploration.eyebrow}</span>
                  <h2 className="csb-h2 csb-h2-left">{cs.exploration.title}</h2>
                  <p className="csb-section-lede">{cs.exploration.body}</p>
                </div>
                <ul className="csb-exploration">
                  {cs.exploration.items?.map((it) => (
                    <li key={it.label}>
                      <span className="csb-expl-label">{it.label}</span>
                      <span className="csb-expl-note">{it.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Feature grid */}
          <section className="csb-features-section">
            <div className="csb-features">
              {cs.features?.map((f) => (
                <div className="csb-feature" key={f.label}>
                  <div className="csb-feature-icon" aria-hidden="true">
                    <span />
                  </div>
                  <h4 className="csb-feature-label">{f.label}</h4>
                  <p className="csb-feature-body">{f.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Installation gallery */}
          <section className="csb-section">
            <div className="csb-section-inner">
              <div className="csb-gallery-head">
                <h2 className="csb-h2 csb-h2-left">The Installation</h2>
                <p className="csb-gallery-cap">
                  Captured moments of the interactive journey where physical reality meets digital abstraction.
                </p>
              </div>
              <div className="csb-gallery">
                {cs.gallery?.map((g, i) => (
                  <figure className="csb-gif" key={i}>
                    <video
                      src={g.video}
                      poster={g.poster}
                      autoPlay muted loop playsInline
                    />
                    {g.caption && <figcaption>{g.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </div>
          </section>

          {/* TOOLS — stack table */}
          {cs.tools?.length > 0 && (
            <section className="csb-section csb-tools-section">
              <div className="csb-section-inner">
                <div className="csb-section-head">
                  <span className="csb-step">TOOLS</span>
                  <h2 className="csb-h2 csb-h2-left">The stack under the bloom</h2>
                </div>
                <div className="csb-tools">
                  {cs.tools.map((t) => {
                    const Tag = t.url ? 'a' : 'div'
                    const linkProps = t.url
                      ? { href: t.url, target: '_blank', rel: 'noopener noreferrer' }
                      : {}
                    return (
                      <Tag className={`csb-tool${t.url ? ' csb-tool-link' : ''}`} key={t.name} {...linkProps}>
                        <span className="csb-tool-group">{t.group}</span>
                        <h4 className="csb-tool-name">
                          {t.name}
                          {t.url && <span className="csb-tool-arrow" aria-hidden="true"> ↗</span>}
                        </h4>
                        <p className="csb-tool-role">{t.role}</p>
                      </Tag>
                    )
                  })}
                </div>
              </div>
            </section>
          )}

          {/* Experience the bloom — big YouTube */}
          {expYt && (
            <section className="csb-experience">
              <div className="csb-experience-frame">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${expYt}?modestbranding=1&rel=0&playsinline=1`}
                  title="Experience the Bloom"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="csb-experience-overlay" aria-hidden="true">
                  <span className="csb-experience-label">{cs.experience.label}</span>
                  <span className="csb-experience-sub">▶ {cs.experience.sub}</span>
                </div>
              </div>
            </section>
          )}

          {/* Credits */}
          <section className="csb-credits-section">
            <div className="csb-credits">
              {cs.credits?.map((c) => (
                <div className="csb-credit" key={c.label}>
                  <span className="csb-credit-lbl">{c.label}</span>
                  <span className="csb-credit-val">{c.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Exhibition card */}
          {cs.exhibition && (
            <section id="csb-exhibition" className="csb-exh-section">
              <div className="csb-exh">
                <div className="csb-exh-tag">Now Showing</div>
                <h2 className="csb-h2 csb-h2-left">{cs.exhibition.title}</h2>
                <p className="csb-exh-meta">{cs.exhibition.meta}</p>
                <p className="csb-exh-blurb">{cs.exhibition.blurb}</p>
                <a
                  className="csb-exh-cta"
                  href={cs.exhibition.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit the exhibition ↗
                </a>
              </div>

              {/* Exhibition history */}
              {cs.exhibition.runs?.length > 0 && (
                <div className="csb-runs">
                  <h4 className="csb-runs-title">Exhibition history</h4>
                  <ul>
                    {cs.exhibition.runs.map((r, i) => (
                      <li key={i}>
                        <span className="csb-run-date">{r.date}</span>
                        <span className="csb-run-venue">{r.venue}</span>
                        <span className="csb-run-city">{r.city}</span>
                        <span className="csb-run-status">{r.status}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Press */}
              {cs.exhibition.press?.length > 0 && (
                <div className="csb-press">
                  {cs.exhibition.press.map((q, i) => (
                    <blockquote className="csb-press-quote" key={i}>
                      <p>“{q.quote}”</p>
                      <cite>— {q.source}, {q.author}</cite>
                    </blockquote>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Closing */}
          <section className="csb-closing">
            <h3 className="csb-closing-title">{cs.closing?.title}</h3>
            <p className="csb-closing-tag">{cs.closing?.tagline}</p>
            <button className="csb-back" onClick={onClose}>← Back to portfolio</button>
          </section>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  )
}
