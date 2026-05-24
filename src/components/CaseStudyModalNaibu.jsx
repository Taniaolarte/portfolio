import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ASSETS = '/portfolio/assets/case-studies/naibu'

// Hidden things in the dark — scattered pixel glyphs (eyes, stars, runes,
// asterisks) embedded in the modal background at ~7% opacity. A soft
// spotlight follows the cursor; only symbols inside the spotlight become
// visible. Pure ambient interaction, no buttons, no copy required.
const GLYPHS = [
  // Open eye — almond outline + solid pupil
  <svg viewBox="0 0 20 12" key="eye-open"><path d="M2 6 Q10 0 18 6 Q10 12 2 6 Z" fill="none" stroke="currentColor" strokeWidth="1.2"/><circle cx="10" cy="6" r="2.2" fill="currentColor"/></svg>,
  // Closed eye — single curve like a sleeping line
  <svg viewBox="0 0 20 6" key="eye-closed"><path d="M2 3 Q10 6 18 3" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  // Star
  <svg viewBox="0 0 14 14" key="star"><path d="M7 0 L8.5 5 L14 5 L9.5 8 L11 14 L7 10.5 L3 14 L4.5 8 L0 5 L5.5 5 Z" fill="currentColor"/></svg>,
  // Asterisk
  <svg viewBox="0 0 12 12" key="aster"><g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><line x1="6" y1="1" x2="6" y2="11"/><line x1="1" y1="6" x2="11" y2="6"/><line x1="2.5" y1="2.5" x2="9.5" y2="9.5"/><line x1="9.5" y1="2.5" x2="2.5" y2="9.5"/></g></svg>,
  // Rune / triangle
  <svg viewBox="0 0 14 14" key="rune"><path d="M7 1 L13 12 L1 12 Z" fill="none" stroke="currentColor" strokeWidth="1.2"/><circle cx="7" cy="9" r="1.4" fill="currentColor"/></svg>,
  // Wide-open watchful eye — bigger pupil, more iris detail
  <svg viewBox="0 0 22 14" key="eye-wide"><path d="M1 7 Q11 0 21 7 Q11 14 1 7 Z" fill="none" stroke="currentColor" strokeWidth="1.2"/><circle cx="11" cy="7" r="3.4" fill="none" stroke="currentColor" strokeWidth="1"/><circle cx="11" cy="7" r="1.6" fill="currentColor"/></svg>,
  // Crescent
  <svg viewBox="0 0 14 14" key="moon"><path d="M11 2 A6 6 0 1 0 11 12 A4.5 4.5 0 1 1 11 2 Z" fill="currentColor"/></svg>,
  // Triple-eye — three small eyes stacked, folkloric
  <svg viewBox="0 0 20 20" key="eye-triple"><g fill="currentColor"><circle cx="10" cy="4" r="1.6"/><circle cx="5"  cy="14" r="1.6"/><circle cx="15" cy="14" r="1.6"/></g><g fill="none" stroke="currentColor" strokeWidth="0.9"><circle cx="10" cy="4" r="3"/><circle cx="5"  cy="14" r="3"/><circle cx="15" cy="14" r="3"/></g></svg>,
]

// Pre-baked scatter — fixed positions so they don't reshuffle on re-render
// (would defeat the "hidden things you find" feel). 32 glyphs across the
// modal's vertical span, picked to avoid clustering on hero/closing bands.
const SCATTER = [
  // DENSE HERO BAND — 0%–22% (behind title / subtitle / lede)
  { top:'2%',   left:'5%',  size:28, glyph:4, rot:-12 },
  { top:'3%',   left:'18%', size:22, glyph:1, rot:8   },
  { top:'4%',   left:'32%', size:36, glyph:0, rot:-4  },
  { top:'2%',   left:'48%', size:26, glyph:5, rot:18  },
  { top:'5%',   left:'62%', size:30, glyph:3, rot:-22 },
  { top:'3%',   left:'78%', size:24, glyph:7, rot:14  },
  { top:'2%',   left:'92%', size:32, glyph:2, rot:-8  },
  { top:'7%',   left:'10%', size:34, glyph:6, rot:24  },
  { top:'8%',   left:'24%', size:24, glyph:1, rot:-6  },
  { top:'9%',   left:'40%', size:28, glyph:4, rot:16  },
  { top:'7%',   left:'56%', size:38, glyph:0, rot:-18 },
  { top:'9%',   left:'70%', size:22, glyph:5, rot:10  },
  { top:'8%',   left:'84%', size:30, glyph:3, rot:-26 },
  { top:'8%',   left:'96%', size:26, glyph:6, rot:6   },
  { top:'12%',  left:'4%',  size:32, glyph:0, rot:-8  },
  { top:'13%',  left:'16%', size:24, glyph:2, rot:14  },
  { top:'12%',  left:'30%', size:28, glyph:4, rot:-14 },
  { top:'14%',  left:'44%', size:22, glyph:7, rot:22  },
  { top:'12%',  left:'58%', size:34, glyph:1, rot:-4  },
  { top:'13%',  left:'72%', size:30, glyph:5, rot:18  },
  { top:'12%',  left:'88%', size:26, glyph:3, rot:-20 },
  { top:'17%',  left:'8%',  size:24, glyph:6, rot:10  },
  { top:'18%',  left:'22%', size:36, glyph:4, rot:-22 },
  { top:'17%',  left:'36%', size:22, glyph:1, rot:8   },
  { top:'19%',  left:'50%', size:30, glyph:3, rot:-12 },
  { top:'17%',  left:'64%', size:28, glyph:0, rot:16  },
  { top:'18%',  left:'80%', size:26, glyph:7, rot:-6  },
  { top:'19%',  left:'94%', size:32, glyph:2, rot:24  },
  { top:'22%',  left:'12%', size:26, glyph:5, rot:-16 },
  { top:'22%',  left:'30%', size:30, glyph:6, rot:8   },
  { top:'22%',  left:'48%', size:24, glyph:4, rot:-24 },
  { top:'22%',  left:'66%', size:28, glyph:1, rot:12  },
  { top:'22%',  left:'82%', size:34, glyph:0, rot:-10 },

  // REST OF MODAL — sparser ambient cover
  { top:'27%',  left:'72%', size:28, glyph:3, rot:0   },
  { top:'33%',  left:'4%',  size:26, glyph:7, rot:18  },
  { top:'36%',  left:'92%', size:40, glyph:0, rot:10  },
  { top:'41%',  left:'38%', size:22, glyph:1, rot:-4  },
  { top:'44%',  left:'62%', size:30, glyph:5, rot:24  },
  { top:'48%',  left:'9%',  size:34, glyph:6, rot:-12 },
  { top:'52%',  left:'80%', size:24, glyph:2, rot:-18 },
  { top:'56%',  left:'25%', size:28, glyph:4, rot:8   },
  { top:'59%',  left:'68%', size:32, glyph:3, rot:-6  },
  { top:'63%',  left:'6%',  size:24, glyph:7, rot:30  },
  { top:'67%',  left:'94%', size:30, glyph:5, rot:-14 },
  { top:'71%',  left:'18%', size:22, glyph:1, rot:6   },
  { top:'74%',  left:'85%', size:36, glyph:0, rot:22  },
  { top:'78%',  left:'48%', size:26, glyph:6, rot:-20 },
  { top:'82%',  left:'12%', size:32, glyph:4, rot:14  },
  { top:'86%',  left:'76%', size:24, glyph:2, rot:-10 },
  { top:'90%',  left:'30%', size:28, glyph:7, rot:18  },
  { top:'30%',  left:'58%', size:26, glyph:5, rot:12  },
  { top:'45%',  left:'45%', size:30, glyph:3, rot:-8  },
  { top:'61%',  left:'40%', size:24, glyph:2, rot:20  },
  { top:'77%',  left:'63%', size:28, glyph:4, rot:-16 },
  { top:'38%',  left:'82%', size:34, glyph:0, rot:-4  },
  { top:'54%',  left:'95%', size:22, glyph:7, rot:26  },
  { top:'70%',  left:'52%', size:32, glyph:3, rot:-10 },
  { top:'88%',  left:'88%', size:28, glyph:5, rot:16  },
  { top:'94%',  left:'18%', size:30, glyph:4, rot:24  },
]

function NaibuHiddenLayer({ scope }) {
  const layerRef = useRef(null)
  useEffect(() => {
    const el = scope.current
    const layer = layerRef.current
    if (!el || !layer) return
    let raf = 0
    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top + el.scrollTop
        layer.style.setProperty('--mx', `${x}px`)
        layer.style.setProperty('--my', `${y}px`)
        layer.style.setProperty('--on', '1')
      })
    }
    const onLeave = () => { layer.style.setProperty('--on', '0') }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [scope])
  return (
    <div className="csn-hidden-layer" ref={layerRef} aria-hidden="true">
      {SCATTER.map((p, i) => (
        <span
          key={i}
          className="csn-hidden-glyph"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            transform: `rotate(${p.rot}deg)`,
          }}
        >
          {GLYPHS[p.glyph]}
        </span>
      ))}
    </div>
  )
}

// Atmospheric dark-purple case-study layout — custom for NAIBU, replicated
// from the Figma design at figma.com/design/ciWPRYix723zzP2qAvksiA.
// Scoped under .csn-* so it doesn't clash with other modals.
export default function CaseStudyModalNaibu({ hero, onClose }) {
  const modalRef = useRef(null)
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
          ref={modalRef}
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

          {/* Hidden glyph layer — flashlight cursor reveals scattered symbols */}
          <NaibuHiddenLayer scope={modalRef} />

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
                          {mediaList.map((m, j) => (
                            <figure key={j}>
                              <img src={m.src} alt={m.caption || ''} />
                              {m.caption && <figcaption>{m.caption}</figcaption>}
                            </figure>
                          ))}
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
