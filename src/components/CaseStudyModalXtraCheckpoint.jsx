import { useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Deterministic starfield — same set of pinpoints every render, no random.
function Starfield({ count = 80 }) {
  const stars = useMemo(() => {
    const arr = []
    for (let i = 0; i < count; i++) {
      const seed = i * 9301 + 49297
      const r1 = ((seed % 233280) / 233280)
      const r2 = (((seed * 2) % 233280) / 233280)
      const r3 = (((seed * 3) % 233280) / 233280)
      const r4 = (((seed * 5) % 233280) / 233280)
      arr.push({
        top:   `${(r1 * 100).toFixed(2)}%`,
        left:  `${(r2 * 100).toFixed(2)}%`,
        size:  1 + r3 * 2.4,
        delay: r4 * -6,
        dur:   2.5 + r3 * 4,
      })
    }
    return arr
  }, [count])

  return (
    <div className="cse-stars" aria-hidden="true">
      {stars.map((s, i) => (
        <span
          key={i}
          className="cse-star"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
          }}
        />
      ))}
    </div>
  )
}

// XTRACHECKPOINT — cosmic gaming-journalism brand-book modal.
// Scoped under .cse-* (Checkpoint Extra) so it doesn't clash with other modals.
export default function CaseStudyModalXtraCheckpoint({ hero, onClose }) {
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

  return (
    <AnimatePresence>
      <motion.div
        className="cse-overlay"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <motion.article
          className="cse-modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <button className="cse-close" onClick={onClose} aria-label="Close">×</button>

          {/* Cosmic background */}
          <Starfield count={100} />
          <div className="cse-blob cse-blob-purple" aria-hidden="true" />
          <div className="cse-blob cse-blob-violet" aria-hidden="true" />

          {/* HERO */}
          <section className="cse-hero">
            <span className="cse-pill">{cs.eyebrow}</span>
            <h1 className="cse-title">{cs.title}</h1>
            <p className="cse-tagline">{cs.tagline}</p>
            <p className="cse-lede">{cs.intro}</p>
          </section>

          {/* HERO GIF BANNER — full-bleed inside modal */}
          {cs.heroGif && (
            <section className="cse-banner" aria-hidden="false">
              <img src={cs.heroGif} alt="XtraCheckpoint intro" />
              <div className="cse-banner-glow" aria-hidden="true" />
            </section>
          )}

          {/* BRAND PILLARS */}
          {cs.pillars?.length > 0 && (
            <section className="cse-section">
              <div className="cse-section-inner">
                <span className="cse-step">BRAND PILLARS</span>
                <h2 className="cse-h2">What XtraCheckpoint stands for</h2>
                <div className="cse-pillars">
                  {cs.pillars.map((p) => (
                    <div className="cse-pillar" key={p.num}>
                      <span className="cse-pillar-num">{p.num}</span>
                      <h4>{p.label}</h4>
                      <p>{p.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* TEAM — the crew */}
          {cs.team?.length > 0 && (
            <section className="cse-section cse-section-tinted">
              <div className="cse-section-inner">
                <span className="cse-step">THE CREW</span>
                <h2 className="cse-h2">Three astronauts, one signal</h2>
                <div className="cse-team">
                  {cs.team.map((m) => (
                    <div className="cse-crew" key={m.name}>
                      <div className="cse-port">
                        <div className="cse-port-inner">
                          <span className="cse-port-init">{m.name.split(' ').map(w => w[0]).join('').slice(0, 2)}</span>
                        </div>
                      </div>
                      <h4>{m.name}</h4>
                      <span className="cse-crew-role">{m.role}</span>
                      <p>{m.bio}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* LOGO SYSTEM */}
          {cs.logo && (
            <section className="cse-section">
              <div className="cse-section-inner">
                <span className="cse-step">IMAGOTYPE</span>
                <h2 className="cse-h2">{cs.logo.title}</h2>
                <div className="cse-logo-grid">
                  <div className="cse-logo-media">
                    <img src={cs.logo.image} alt="XtraCheckpoint logo system" />
                  </div>
                  <div className="cse-logo-text">
                    <p className="cse-p">{cs.logo.body}</p>
                    <ul className="cse-logo-rules">
                      {cs.logo.rules?.map((r) => (
                        <li key={r.label}>
                          <span className="cse-rule-label">{r.label}</span>
                          <span className="cse-rule-note">{r.note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {cs.logo.variations?.length > 0 && (
                  <>
                    <h3 className="cse-h3">Variations</h3>
                    <div className="cse-logo-vars">
                      {cs.logo.variations.map((v) => (
                        <div className="cse-logo-var" key={v.label}>
                          <div
                            className="cse-logo-swatch"
                            style={{ background: v.swatch === 'transparent' ? 'transparent' : v.swatch, borderColor: v.swatch === 'transparent' ? '#fff' : v.swatch }}
                          />
                          <span>{v.label}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </section>
          )}

          {/* PALETTE */}
          {cs.palette && (
            <section className="cse-section cse-section-tinted">
              <div className="cse-section-inner">
                <span className="cse-step">COLOUR SYSTEM</span>
                <h2 className="cse-h2">Primary palette</h2>
                <div className="cse-palette">
                  {cs.palette.primary?.map((c) => (
                    <div className="cse-swatch" key={c.hex}>
                      <div className="cse-swatch-blob" style={{ background: c.hex }} />
                      <span className="cse-swatch-hex">{c.hex}</span>
                      <span className="cse-swatch-name">{c.name}</span>
                      <span className="cse-swatch-note">{c.note}</span>
                    </div>
                  ))}
                </div>

                <h3 className="cse-h3">Complementary palette</h3>
                <div className="cse-palette">
                  {cs.palette.complementary?.map((c) => (
                    <div className="cse-swatch" key={c.hex}>
                      <div className="cse-swatch-blob" style={{ background: c.hex }} />
                      <span className="cse-swatch-hex">{c.hex}</span>
                      <span className="cse-swatch-name">{c.name}</span>
                      <span className="cse-swatch-note">{c.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* TYPOGRAPHY */}
          {cs.typography?.length > 0 && (
            <section className="cse-section">
              <div className="cse-section-inner">
                <span className="cse-step">TYPOGRAPHY</span>
                <h2 className="cse-h2">Typography</h2>
                <div className="cse-type">
                  {cs.typography.map((t) => (
                    <div className="cse-type-row" key={t.family}>
                      <div className="cse-type-meta">
                        <h4>{t.family}</h4>
                        <span className="cse-type-role">{t.role}</span>
                        <span className="cse-type-weights">{t.weights}</span>
                      </div>
                      <div className="cse-type-sample">{t.sample}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* MOODBOARD */}
          {cs.moodboard && (
            <section className="cse-section cse-section-tinted">
              <div className="cse-section-inner">
                <span className="cse-step">MOODBOARD</span>
                <h2 className="cse-h2">The world we wanted to live in</h2>
                <p className="cse-p cse-p-wide">{cs.moodboard.body}</p>
                <ul className="cse-mood">
                  {cs.moodboard.directions?.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* APPLICATIONS — brand in use */}
          {cs.applications?.length > 0 && (
            <section className="cse-section">
              <div className="cse-section-inner">
                <span className="cse-step">BRAND IN USE</span>
                <h2 className="cse-h2">Applications</h2>
                <div className="cse-apps">
                  {cs.applications.map((a, i) => (
                    <figure className="cse-app" key={i}>
                      {a.image && <img src={a.image} alt={a.title} />}
                      <figcaption>
                        <h4>{a.title}</h4>
                        <p>{a.body}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* PROCESS */}
          {cs.process?.length > 0 && (
            <section className="cse-section cse-section-tinted">
              <div className="cse-section-inner">
                <span className="cse-step">PROCESS</span>
                <h2 className="cse-h2">From discovery to handoff</h2>
                <ol className="cse-process">
                  {cs.process.map((p) => (
                    <li key={p.num}>
                      <div className="cse-process-num">{p.num}</div>
                      <div>
                        <span className="cse-process-eyebrow">{p.eyebrow}</span>
                        <h4>{p.title}</h4>
                        <p>{p.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          )}

          {/* OUTCOME */}
          {cs.awards?.length > 0 && (
            <section className="cse-section">
              <div className="cse-section-inner">
                <span className="cse-step">OUTCOME</span>
                <h2 className="cse-h2">Where the brand landed</h2>
                <ul className="cse-awards">
                  {cs.awards.map((a) => (
                    <li key={a.name}>
                      <span className="cse-award-year">{a.year}</span>
                      <span className="cse-award-name">{a.name}</span>
                    </li>
                  ))}
                </ul>
                {cs.behanceUrl && (
                  <a className="cse-cta" href={cs.behanceUrl} target="_blank" rel="noopener noreferrer">
                    View on Behance ↗
                  </a>
                )}
              </div>
            </section>
          )}

          {/* CREDITS */}
          {cs.credits?.length > 0 && (
            <section className="cse-credits-section">
              <div className="cse-credits">
                {cs.credits.map((c) => (
                  <div className="cse-credit" key={c.label}>
                    <span className="cse-credit-lbl">{c.label}</span>
                    <span className="cse-credit-val">{c.value}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CLOSING */}
          <section className="cse-closing">
            <h3 className="cse-closing-title">HELLO GAMER, SEE YOU AT THE NEXT CHECKPOINT.</h3>
            <button className="cse-back" onClick={onClose}>← Back to portfolio</button>
          </section>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  )
}
