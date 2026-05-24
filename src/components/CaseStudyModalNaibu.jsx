import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ASSETS = '/portfolio/assets/case-studies/naibu'

// Small interactive widget — turns the 6×6 Uhri sprite sheet into a live
// pixel character. Idle-bobs by default, walks across its plate on hover.
function UhriSprite() {
  return (
    <div className="csn-uhri-sprite" role="img" aria-label="Uhri sprite — hover to walk">
      <span className="csn-uhri-frame" />
      <span className="csn-uhri-hint">hover · she walks ↺</span>
    </div>
  )
}

// Atmospheric dark-purple case-study layout — custom for NAIBU, replicated
// from the Figma design at figma.com/design/ciWPRYix723zzP2qAvksiA.
// Scoped under .csn-* so it doesn't clash with other modals.
export default function CaseStudyModalNaibu({ hero, onClose }) {
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
  const ytMatch = cs.youtubeUrl?.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/)
  const ytId = ytMatch?.[1]

  return (
    <AnimatePresence>
      <motion.div
        className="csn-overlay"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.article
          className="csn-modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <button className="csn-close" onClick={onClose} aria-label="Close">×</button>

          {/* Ambient glow blobs */}
          <div className="csn-bg-glow csn-bg-glow-purple" aria-hidden="true" />
          <div className="csn-bg-glow csn-bg-glow-cyan" aria-hidden="true" />

          {/* HERO */}
          <section className="csn-hero">
            <div className="csn-pill">Thesis Project • Video Game Design</div>
            <h1 className="csn-title">NAIBU</h1>
            <p className="csn-subtitle">A Journey Through Social Anxiety</p>
            <p className="csn-lede">
              An interactive video game experience that illuminates the invisible battle of social anxiety
              through immersive gameplay, ethereal design, and meaningful storytelling.
            </p>
            <span className="csn-down" aria-hidden="true">↓</span>
          </section>

          {/* VISION + SCOPE/ACHIEVEMENT */}
          <section className="csn-section csn-section-bordered">
            <div className="csn-vision">
              <div className="csn-vision-text">
                <h2 className="csn-h2">The <span className="csn-grad">Vision</span></h2>
                <p>
                  Naibu revolves around <strong>Uhri</strong>, a protagonist suffering from severe social
                  anxiety. The core objective was to surface this profound psychological experience and
                  demonstrate it through a fully playable video game.
                </p>
                <p>
                  Every single element — from the purple-blue monochromatic palette with ethereal neon
                  touches, to the sound design, characters, and level architecture — was carefully crafted
                  to represent different facets of social anxiety.
                </p>
              </div>
              <div className="csn-vision-cards">
                <div className="csn-card">
                  <div className="csn-card-icon">📐</div>
                  <h3>Project Scope</h3>
                  <p>6 intensive months of single-handed development, resulting in a complete vertical slice and comprehensive thesis.</p>
                </div>
                <div className="csn-card">
                  <div className="csn-card-icon">🏆</div>
                  <h3>Achievement</h3>
                  <p>Awarded the highest "Meritory" grade distinction for the exceptional 168-page thesis work.</p>
                </div>
              </div>
            </div>

            {/* STATS */}
            <div className="csn-stats">
              {[
                { n: '1',    l: 'Solo Developer' },
                { n: '6',    l: 'Months' },
                { n: '12+',  l: 'Animations' },
                { n: '168',  l: 'Thesis Pages' },
              ].map((s) => (
                <div className="csn-stat" key={s.l}>
                  <div className="csn-stat-n">{s.n}</div>
                  <div className="csn-stat-l">{s.l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CORE MECHANICS */}
          <section className="csn-section">
            <header className="csn-head">
              <h2 className="csn-h2 csn-h2-large">Core <span className="csn-grad-purple">Mechanics</span></h2>
              <p>Translating psychological struggles into engaging gameplay loops.</p>
            </header>
            <div className="csn-mechanics">
              <div className="csn-mech">
                <div className="csn-mech-icon">⚔️</div>
                <h3>Battling Anxiety Manifestations</h3>
                <p>
                  Enemies are not mere monsters; they are direct symbols of anxiety symptoms. Uhri must
                  combat overwhelming self-doubt, fear of judgment, and intrusive thoughts using mechanics
                  that require focus and resilience.
                </p>
              </div>
              <div className="csn-mech">
                <div className="csn-mech-icon">🌀</div>
                <h3>The Panic Attack Stage</h3>
                <p>
                  A pivotal, intense stage designed to simulate the claustrophobia and sensory overload of
                  a panic attack. The environment shifts, vision distorts, and mechanics change to reflect
                  the loss of control.
                </p>
              </div>
              <div className="csn-mech">
                <div className="csn-mech-icon">🧠</div>
                <h3>Introspective Exploration</h3>
                <p>
                  Navigate through ethereal, neon-lit corridors that metaphorically represent Uhri's mind.
                  The level design requires solving puzzles that reflect cognitive behavioral techniques.
                </p>
              </div>
            </div>
          </section>

          {/* PRODUCTION PLAN — cronogram + phase-by-phase walkthrough */}
          {cs.phases?.length > 0 && (
            <>
              <section className="csn-section csn-section-bordered">
                <header className="csn-head">
                  <h2 className="csn-h2 csn-h2-large">The <span className="csn-grad-purple">Production Plan</span></h2>
                  <p>Six months structured across nine production categories — concept, narrative, research, design, art, animation, documentation, programming, and delivery.</p>
                </header>
                <figure className="csn-cronogram">
                  <img src={`${ASSETS}/cronogram.png`} alt="NAIBU production cronogram" />
                  <figcaption>The original 6-month plan — each colour stripe is a category, each column a week.</figcaption>
                </figure>

                {/* Phase navigation */}
                <nav className="csn-phase-nav" aria-label="Production phases">
                  {cs.phases.map((p) => (
                    <a key={p.id} href={`#csn-phase-${p.id}`} className="csn-phase-chip">
                      <span className="csn-phase-chip-num">{p.num}</span>
                      <span>{p.category}</span>
                    </a>
                  ))}
                </nav>
              </section>

              {/* Each phase as its own chapter */}
              {cs.phases.map((p, i) => {
                const flip = i % 2 === 1
                const mediaList = Array.isArray(p.media) ? p.media : (p.media ? [p.media] : [])
                return (
                  <section
                    id={`csn-phase-${p.id}`}
                    key={p.id}
                    className={`csn-phase${flip ? ' csn-phase-flip' : ''}${mediaList.length === 0 ? ' csn-phase-text-only' : ''}`}
                  >
                    <div className="csn-phase-inner">
                      <div className="csn-phase-text">
                        <span className="csn-phase-num">{p.num}</span>
                        <span className="csn-phase-cat">{p.category}</span>
                        <h3 className="csn-phase-title">{p.title}</h3>
                        <p className="csn-phase-body">{p.body}</p>
                        {p.items?.length > 0 && (
                          <ul className="csn-phase-items">
                            {p.items.map((it) => <li key={it}>{it}</li>)}
                          </ul>
                        )}
                      </div>
                      {mediaList.length > 0 && (
                        <div className={`csn-phase-media csn-phase-media-${mediaList.length}`}>
                          {mediaList.map((m, j) => {
                            const isUhriSheet = m.src?.endsWith('uhri-spritesheet.png')
                            return (
                              <figure key={j}>
                                {isUhriSheet
                                  ? <UhriSprite />
                                  : <img src={m.src} alt={m.caption || ''} />}
                                {m.caption && <figcaption>{m.caption}</figcaption>}
                              </figure>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  </section>
                )
              })}
            </>
          )}

          {/* REEL (YouTube embed slot) */}
          {ytId && (
            <section className="csn-section csn-section-bordered">
              <header className="csn-head">
                <h2 className="csn-h2 csn-h2-large">The <span className="csn-grad-purple">Reel</span></h2>
                <p>Gameplay walkthrough captured from the vertical-slice build.</p>
              </header>
              <div className="csn-reel">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${ytId}?modestbranding=1&rel=0&playsinline=1`}
                  title={`${hero.title} reel`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </section>
          )}

          {/* OUTCOME — awards + exhibitions */}
          {cs.awards?.length > 0 && (
            <section className="csn-section csn-section-bordered">
              <header className="csn-head">
                <h2 className="csn-h2 csn-h2-large"><span className="csn-grad-purple">Outcome</span></h2>
                <p>From thesis defence to gallery floor — five years and counting.</p>
              </header>
              <ul className="csn-awards">
                {cs.awards.map((a) => (
                  <li key={a.name}>
                    <span className="csn-award-year">{a.year}</span>
                    <span className="csn-award-name">{a.name}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* CLOSING */}
          <section className="csn-section csn-closing">
            <div className="csn-bg-glow csn-bg-glow-center" aria-hidden="true" />
            <h2 className="csn-h2-mega">
              Illuminating the <span className="csn-grad">invisible struggles</span>
            </h2>
            <p className="csn-closing-text">
              Naibu is more than a thesis project — it is a testament to the power of interactive media as
              a tool for empathy, awareness, and understanding mental health.
            </p>
            <button className="csn-cta" onClick={onClose}>← Back to portfolio</button>
          </section>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  )
}
