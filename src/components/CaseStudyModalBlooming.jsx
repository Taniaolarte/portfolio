import { useEffect, useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// "Blooming" word — letters dissolve into pink particles on hover, re-form
// on mouseleave. Each letter is a span with a staggered animation, plus a
// short-lived particle burst spawns from the title's bounds.
function BloomingDissolve({ text = 'Blooming' }) {
  const wrapRef = useRef(null)
  const burstRef = useRef(null)
  const intervalRef = useRef(null)

  const spawnOne = () => {
    const wrap = wrapRef.current
    const host = burstRef.current
    if (!wrap || !host) return
    const rect = wrap.getBoundingClientRect()
    const p = document.createElement('span')
    p.className = 'csb-title-particle'
    const x = Math.random() * rect.width
    const y = rect.height * (0.25 + Math.random() * 0.6)
    const dx = (Math.random() - 0.5) * 90
    const dy = -30 - Math.random() * 90
    const size = 1.5 + Math.random() * 3.5
    const hue = Math.random() > 0.5 ? '#ff2e76' : '#ff8fb6'
    p.style.left = `${x}px`
    p.style.top = `${y}px`
    p.style.width = `${size}px`
    p.style.height = `${size}px`
    p.style.background = hue
    p.style.boxShadow = `0 0 ${size * 3}px ${hue}`
    p.style.setProperty('--dx', `${dx}px`)
    p.style.setProperty('--dy', `${dy}px`)
    host.appendChild(p)
    setTimeout(() => p.remove(), 1800)
  }

  const startStream = () => {
    if (intervalRef.current) return
    for (let i = 0; i < 18; i++) setTimeout(spawnOne, i * 18)
    intervalRef.current = setInterval(() => {
      spawnOne(); spawnOne(); spawnOne()
    }, 50)
  }

  const stopStream = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => () => stopStream(), [])

  return (
    <span
      ref={wrapRef}
      className="csb-title-2 csb-title-dissolve"
      onMouseEnter={startStream}
      onMouseLeave={stopStream}
    >
      {text.split('').map((ch, i) => (
        <span
          key={i}
          className="csb-title-letter"
          style={{ '--li': i, '--ln': text.length }}
          aria-hidden={ch === ' '}
        >
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
      <span ref={burstRef} className="csb-title-burst" aria-hidden="true" />
    </span>
  )
}

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
// Hand-picked tilts + offsets so the polaroid wall reads as scattered, not
// fanned. Index → { rotation deg, x offset px, y offset px }.
const INSTAX_TILTS = [
  { r: -8.5, x: -6,  y: 10 },
  { r:  6,   x:  8,  y: -4 },
  { r: -3.5, x:  4,  y: 14 },
  { r: 11,   x: -10, y: 2 },
  { r: -12,  x:  6,  y: -8 },
  { r:  4.5, x: -4,  y:  6 },
]

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
              <a href="#csb-process">PROCESS</a>
              <a href="#csb-flowers">FLOWERS</a>
              <a href="#csb-outcome">OUTCOME</a>
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
              <BloomingDissolve text="Blooming" />
            </h1>
            <p className="csb-place">{cs.placeLine}</p>

            {/* Hero video — wide */}
            {cs.heroVideo && (
              <div className="csb-hero-reel">
                <video
                  src={cs.heroVideo}
                  poster={cs.heroPoster}
                  autoPlay muted loop playsInline
                />
              </div>
            )}

            {/* Intro — process-led, with a small flower divider above */}
            <div className="csb-intro">
              <svg
                className="csb-quote-flower"
                viewBox="0 0 40 40"
                aria-hidden="true"
                width="34" height="34"
              >
                <g fill="#ff2e76">
                  <ellipse cx="20" cy="9"  rx="4" ry="6.5" />
                  <ellipse cx="20" cy="31" rx="4" ry="6.5" />
                  <ellipse cx="9"  cy="20" rx="6.5" ry="4" />
                  <ellipse cx="31" cy="20" rx="6.5" ry="4" />
                  <ellipse cx="12" cy="12" rx="4.5" ry="4.5" transform="rotate(-45 12 12)" />
                  <ellipse cx="28" cy="12" rx="4.5" ry="4.5" transform="rotate(45 28 12)" />
                  <ellipse cx="12" cy="28" rx="4.5" ry="4.5" transform="rotate(45 12 28)" />
                  <ellipse cx="28" cy="28" rx="4.5" ry="4.5" transform="rotate(-45 28 28)" />
                </g>
                <circle cx="20" cy="20" r="3" fill="#ffd9e6" />
              </svg>
              <p>{cs.intro?.body}</p>
            </div>
          </section>

          {/* PROCESS — step-by-step, with the engine + stack folded in */}
          {cs.process?.length > 0 && (
            <section id="csb-process" className="csb-section csb-process-section">
              <div className="csb-section-inner">
                <div className="csb-section-head">
                  <span className="csb-step">PROCESS</span>
                  <h2 className="csb-h2 csb-h2-left">From scan to dome to outdoor screen</h2>
                  <p className="csb-section-lede">Eight stages took the bloom from a real flower to a reactive twin breathing on the Bunjil Place outdoor screen.</p>
                </div>
                <ol className="csb-process">
                  {cs.process.map((p) => (
                    <li className={`csb-process-step${p.media ? ' csb-process-step-media' : ''}`} key={p.num}>
                      <div className="csb-process-num">{p.num}</div>
                      <div className="csb-process-body">
                        <span className="csb-process-eyebrow">{p.eyebrow}</span>
                        <h3 className="csb-process-title">{p.title}</h3>
                        <p className="csb-process-text">{p.body}</p>
                        {p.media && (
                          <figure className="csb-process-media">
                            <video
                              src={p.media.video}
                              poster={p.media.poster}
                              autoPlay muted loop playsInline
                            />
                            {p.media.caption && (
                              <figcaption>{p.media.caption}</figcaption>
                            )}
                          </figure>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>

                {/* Inside the engine — Particle Engine etc., folded into process */}
                {cs.features?.length > 0 && (
                  <div className="csb-process-sub">
                    <div className="csb-section-head csb-section-head-sub">
                      <span className="csb-step">INSIDE THE ENGINE</span>
                      <h3 className="csb-h2 csb-h2-left csb-h2-sub">What's running on every frame</h3>
                    </div>
                    <div className="csb-features">
                      {cs.features.map((f) => (
                        <div className="csb-feature" key={f.label}>
                          <div className="csb-feature-icon" aria-hidden="true">
                            <span />
                          </div>
                          <h4 className="csb-feature-label">{f.label}</h4>
                          <p className="csb-feature-body">{f.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* The stack under the bloom — tools, folded into process */}
                {cs.tools?.length > 0 && (
                  <div className="csb-process-sub">
                    <div className="csb-section-head csb-section-head-sub">
                      <span className="csb-step">TOOLS</span>
                      <h3 className="csb-h2 csb-h2-left csb-h2-sub">The stack under the bloom</h3>
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
                )}
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

          {/* Installation gallery — only rendered when there are items */}
          {cs.gallery?.length > 0 && (
            <section className="csb-section">
              <div className="csb-section-inner">
                <div className="csb-gallery-head">
                  <h2 className="csb-h2 csb-h2-left">The Installation</h2>
                  <p className="csb-gallery-cap">
                    Captured moments of the interactive journey where physical reality meets digital abstraction.
                  </p>
                </div>
                <div className="csb-gallery">
                  {cs.gallery.map((g, i) => (
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
          )}

          {/* The flowers — four blooms from the linear cut, side by side */}
          {cs.flowers?.length > 0 && (
            <section id="csb-flowers" className="csb-section">
              <div className="csb-section-inner">
                <div className="csb-gallery-head">
                  <h2 className="csb-h2 csb-h2-left">{cs.flowersHead?.title || 'The flowers'}</h2>
                  {cs.flowersHead?.caption && (
                    <p className="csb-gallery-cap">{cs.flowersHead.caption}</p>
                  )}
                </div>
                <div className="csb-gallery csb-flowers-grid">
                  {cs.flowers.map((f, i) => (
                    <figure className="csb-gif csb-flower-tile" key={i}>
                      <video
                        src={f.video}
                        poster={f.poster}
                        autoPlay muted loop playsInline
                      />
                      {f.caption && <figcaption>{f.caption}</figcaption>}
                    </figure>
                  ))}
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

          {/* Outcome — vision realised + Bunjil exhibition + upcoming SIGGRAPH Asia */}
          {cs.exhibition && (
            <section id="csb-outcome" className="csb-exh-section">
              {(cs.exhibition.outcomeTitle || cs.exhibition.vision) && (
                <div className="csb-section-head">
                  <span className="csb-step">{cs.exhibition.outcomeEyebrow || 'OUTCOME'}</span>
                  {cs.exhibition.outcomeTitle && (
                    <h2 className="csb-h2 csb-h2-left">{cs.exhibition.outcomeTitle}</h2>
                  )}
                  {cs.exhibition.vision && (
                    <p className="csb-section-lede">{cs.exhibition.vision}</p>
                  )}
                </div>
              )}

              {cs.exhibition.outcomeVideo && (
                <div className="csb-outcome-reel">
                  <video
                    src={cs.exhibition.outcomeVideo}
                    poster={cs.exhibition.outcomePoster}
                    autoPlay muted loop playsInline
                  />
                  <div className="csb-media-glow" aria-hidden="true" />
                </div>
              )}

              {cs.exhibition.instax?.length > 0 && (
                <div className="csb-instax-wall" aria-label="Opening night polaroids">
                  {cs.exhibition.instax.map((shot, i) => {
                    const t = INSTAX_TILTS[i % INSTAX_TILTS.length]
                    return (
                      <figure
                        className="csb-instax"
                        key={i}
                        style={{
                          '--rot': `${t.r}deg`,
                          '--tx': `${t.x}px`,
                          '--ty': `${t.y}px`,
                        }}
                      >
                        <div className="csb-instax-photo">
                          <img src={shot.src} alt={shot.caption || ''} loading="lazy" />
                        </div>
                        {shot.caption && (
                          <figcaption className="csb-instax-cap">{shot.caption}</figcaption>
                        )}
                      </figure>
                    )
                  })}
                </div>
              )}

              <div className="csb-exh">
                <div className="csb-exh-tag">{cs.exhibition.tag || 'Featured'}</div>
                <h3 className="csb-h2 csb-h2-left">{cs.exhibition.title}</h3>
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

              {/* Upcoming / in process */}
              {cs.exhibition.upcoming?.length > 0 && (
                <div className="csb-runs csb-runs-upcoming">
                  <h4 className="csb-runs-title">Upcoming · in process</h4>
                  <ul>
                    {cs.exhibition.upcoming.map((r, i) => (
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
