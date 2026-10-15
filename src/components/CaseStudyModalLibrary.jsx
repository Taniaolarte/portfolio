import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── Deterministic star field ───────────────────────────────────────────────
function StarField({ count = 90 }) {
  const stars = useMemo(() => {
    const arr = []
    for (let i = 0; i < count; i++) {
      const seed = i * 7919 + 104729
      const r = (k) => ((seed * k) % 233280) / 233280
      arr.push({
        top: `${(r(1) * 100).toFixed(2)}%`,
        left: `${(r(2) * 100).toFixed(2)}%`,
        size: 1 + r(3) * 2.4,
        delay: r(4) * -8,
        dur: 2.5 + r(5) * 4,
        tint: r(6) > 0.8 ? '#ffd1f0' : r(6) > 0.6 ? '#bfe9ff' : '#fff3c4',
      })
    }
    return arr
  }, [count])
  return (
    <div className="csl-stars" aria-hidden="true">
      {stars.map((s, i) => (
        <span
          key={i}
          className="csl-star"
          style={{
            top: s.top, left: s.left,
            width: `${s.size}px`, height: `${s.size}px`,
            background: s.tint,
            boxShadow: `0 0 ${s.size * 3}px ${s.tint}`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
          }}
        />
      ))}
    </div>
  )
}

// ── Core Book typewriter ───────────────────────────────────────────────────
function Typewriter({ lines, speed = 22, pause = 650 }) {
  const [li, setLi] = useState(0)
  const [ci, setCi] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (done) return
    const line = lines[li]
    if (!line) { setDone(true); return }
    if (ci < line.length) {
      const t = setTimeout(() => setCi((c) => c + 1), speed)
      return () => clearTimeout(t)
    }
    if (li < lines.length - 1) {
      const t = setTimeout(() => { setLi((l) => l + 1); setCi(0) }, pause)
      return () => clearTimeout(t)
    }
    setDone(true)
  }, [li, ci, lines, speed, pause, done])

  const skip = () => {
    if (done) return
    setLi(lines.length - 1)
    setCi(lines[lines.length - 1].length)
    setDone(true)
  }

  return (
    <div className="csl-type" onClick={skip} role="button" tabIndex={0} aria-label="Skip dialogue"
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') skip() }}>
      {lines.slice(0, li).map((l, i) => <p key={i}>{l}</p>)}
      <p>
        {lines[li]?.slice(0, ci)}
        {!done && <span className="csl-caret" aria-hidden="true">▍</span>}
      </p>
      {!done && <span className="csl-type-hint">tap to skip</span>}
    </div>
  )
}

// ── Paper-fold flipbook — scrub with the pointer, autoplays when idle ──────
function FoldBook({ frames }) {
  const [i, setI] = useState(0)
  const [hover, setHover] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (hover || !frames?.length) return
    const t = setInterval(() => setI((x) => (x + 1) % frames.length), 220)
    return () => clearInterval(t)
  }, [hover, frames])

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX ?? e.touches?.[0]?.clientX ?? 0) - rect.left
    const idx = Math.max(0, Math.min(frames.length - 1, Math.floor((x / rect.width) * frames.length)))
    setI(idx)
  }

  if (!frames?.length) return null
  return (
    <div
      ref={ref}
      className="csl-fold"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={onMove}
      onTouchStart={() => setHover(true)}
      onTouchMove={onMove}
      onTouchEnd={() => setHover(false)}
    >
      {frames.map((src, k) => (
        <img key={src} src={src} alt="" className={k === i ? 'on' : ''} loading="lazy" draggable="false" />
      ))}
      <div className="csl-fold-bar" aria-hidden="true">
        {frames.map((_, k) => <span key={k} className={k === i ? 'on' : ''} />)}
      </div>
      <span className="csl-fold-hint">{hover ? 'scrub →' : 'hover to scrub'}</span>
    </div>
  )
}

function Stamp({ e, className = '' }) {
  if (!e.stamp) return <span className={`csl-card-glyph ${className}`}>{e.glyph}</span>
  return <img src={e.stamp} alt="" className={`${className}${e.stampTile ? ' is-tile' : ''}`} />
}

// ── Emotion picker + shelf ────────────────────────────────────────────────
function EmotionLab({ emotions }) {
  const [active, setActive] = useState(emotions[0]?.id)
  const [shelf, setShelf] = useState([])
  const [pulse, setPulse] = useState(null)
  const cur = emotions.find((e) => e.id === active) || emotions[0]

  const stampIt = () => {
    if (!cur || shelf.includes(cur.id)) return
    setShelf((s) => [...s, cur.id])
    setPulse(cur.id)
    setTimeout(() => setPulse(null), 700)
  }

  return (
    <div className="csl-lab" style={{ '--em': cur.colour, '--em-ink': cur.ink }}>
      <div className="csl-lab-left">
        <div className="csl-picker" role="tablist" aria-label="Core emotions">
          {emotions.map((e) => (
            <button
              key={e.id}
              role="tab"
              aria-selected={e.id === active}
              className={`csl-pick${e.id === active ? ' on' : ''}${shelf.includes(e.id) ? ' done' : ''}`}
              style={{ '--c': e.colour, '--ci': e.ink }}
              onClick={() => setActive(e.id)}
            >
              <span className="csl-pick-dot" aria-hidden="true"><Stamp e={e} /></span>
              <span className="csl-pick-lbl">{e.label}</span>
              {shelf.includes(e.id) && <span className="csl-pick-tick" aria-label="shelved">✓</span>}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={cur.id}
            className={`csl-card${cur.screens?.length ? ' has-screens' : ''}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            <div className="csl-card-stamp" aria-hidden="true"><Stamp e={cur} /></div>
            <div className="csl-card-body">
              <span className="csl-card-eyebrow">{cur.technique} → {cur.mechanic}{cur.sensor ? ` · ${cur.sensor}` : ''}</span>
              <h3 className="csl-card-title">{cur.label}</h3>
              {cur.tagline && <p className="csl-card-tagline">“{cur.tagline}”</p>}
              <p>{cur.body}</p>
              <div className="csl-subs" aria-label="Sub-emotions">
                <span className="csl-subs-lbl">Shades</span>
                {cur.subs.map((s) => <span key={s} className="csl-sub">{s}</span>)}
              </div>
              <button className="csl-stamp-btn" onClick={stampIt} disabled={shelf.includes(cur.id)}>
                {shelf.includes(cur.id) ? 'On the shelf ✓' : `Stamp ${cur.label} on the shelf`}
              </button>
            </div>
            {cur.screens?.length > 0 && (
              <div className={`csl-card-screens${cur.screens.some((s) => s.wide) ? ' is-wide' : ''}`}>
                {cur.screens.map((sc) => (
                  <figure key={sc.src} className={sc.wide ? 'wide' : ''}>
                    <img src={sc.src} alt={sc.caption || ''} loading="lazy" />
                    {sc.caption && <figcaption>{sc.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="csl-shelf" aria-label="Library shelf">
        <div className="csl-shelf-head">
          <span className="csl-step">THE SHELF</span>
          <span className="csl-shelf-count">{shelf.length} / {emotions.length} shelved</span>
        </div>
        <div className="csl-shelf-grid">
          {emotions.map((e) => {
            const on = shelf.includes(e.id)
            return (
              <div
                key={e.id}
                className={`csl-slot${on ? ' on' : ''}${pulse === e.id ? ' pulse' : ''}`}
                style={{ '--c': e.colour }}
                title={on ? e.label : 'empty slot'}
              >
                {on && <Stamp e={e} />}
              </div>
            )
          })}
        </div>
        <p className="csl-shelf-note">
          {shelf.length === 0
            ? 'Pick an emotion, read its mechanic, then stamp it. The shelf is the Library system: it remembers.'
            : shelf.length < emotions.length
              ? 'Each stamp is a word. Keep going — the vocabulary is the point.'
              : 'Six core emotions shelved. In the prototype, sub-emotions branch from here.'}
        </p>
        {shelf.length > 0 && (
          <button className="csl-shelf-reset" onClick={() => setShelf([])}>Clear shelf</button>
        )}
      </div>
    </div>
  )
}

// ── Modal ─────────────────────────────────────────────────────────────────
export default function CaseStudyModalLibrary({ hero, onClose }) {
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
        className="csl-overlay"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <motion.article
          className="csl-modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <button className="csl-close" onClick={onClose} aria-label="Close">×</button>

          <header className="csl-topbar">
            <span className="csl-brand">STUDIO | LIBRARY OF EMOTIONS</span>
            <nav className="csl-nav">
              <a href="#csl-story">STORY</a>
              <a href="#csl-emotions">EMOTIONS</a>
              <a href="#csl-screens">SCREENS</a>
              <a href="#csl-app">THE APP</a>
              <a href="#csl-process">PROCESS</a>
              <a href="#csl-paper">RESEARCH</a>
            </nav>
          </header>

          <div className="csl-cloud csl-cloud-a" aria-hidden="true" />
          <div className="csl-cloud csl-cloud-b" aria-hidden="true" />
          <div className="csl-planet" aria-hidden="true"><span /><span /></div>
          <StarField />

          {/* HERO */}
          <section className="csl-hero">
            <span className="csl-pill">{cs.eyebrow}</span>
            <h1 className="csl-title">
              <span className="csl-title-1">Library of</span>{' '}
              <span className="csl-title-2">
                {'Emotions'.split('').map((ch, i) => (
                  <span key={i} className="csl-letter" style={{ '--i': i }}>{ch}</span>
                ))}
              </span>
            </h1>
            <p className="csl-place">{cs.placeLine}</p>
            <p className="csl-inquiry">{cs.inquiry}</p>
          </section>

          {/* STORY — the Core Book */}
          {cs.coreBook && (
            <section id="csl-story" className="csl-section">
              <div className="csl-inner csl-story">
                <figure className="csl-book csl-book-character">
                  <img src={cs.coreBook.image} alt="The Core Book, a winged blue book with three eyes, the game's mascot" />
                  <figcaption>{cs.coreBook.name} · narrator of the Library planet</figcaption>
                </figure>
                <div className="csl-story-text">
                  <span className="csl-step">OPENING DIALOGUE</span>
                  <Typewriter lines={cs.coreBook.lines} />
                  {cs.coreBook.screens?.length > 0 && (
                    <div className="csl-story-screens">
                      {cs.coreBook.screens.map((sc) => (
                        <figure key={sc.src}>
                          <img src={sc.src} alt={sc.caption || ''} loading="lazy" />
                          <figcaption>{sc.caption}</figcaption>
                        </figure>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* EMOTIONS — the interactive lab */}
          {cs.emotions?.length > 0 && (
            <section id="csl-emotions" className="csl-section">
              <div className="csl-inner">
                <div className="csl-head">
                  <span className="csl-step">SIX CORE EMOTIONS · ONE MECHANIC EACH</span>
                  <h2 className="csl-h2">Pick a feeling. Play its metaphor. Shelve it.</h2>
                  <p className="csl-lede">
                    The six stamps on the “How do you feel today?” screen. Each one translates an existing mental-health
                    technique into a tactile micro-game; sub-emotions branch from the same mechanic with new colours,
                    assets and feedback, so the vocabulary grows without new systems.
                  </p>
                </div>
                <EmotionLab emotions={cs.emotions} />
              </div>
            </section>
          )}

          {/* SCREENS — the real build */}
          {cs.screens?.length > 0 && (
            <section id="csl-screens" className="csl-section csl-screens-section">
              <div className="csl-inner">
                <div className="csl-head">
                  <span className="csl-step">SCREENS</span>
                  <h2 className="csl-h2">Screens from the live build and the Unity prototype</h2>
                </div>
              </div>
              <div className="csl-screens" role="list">
                {cs.screens.map((sc) => (
                  <figure key={sc.src} role="listitem">
                    <img src={sc.src} alt={sc.caption || ''} loading="lazy" />
                    <figcaption>{sc.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}

          {/* THE APP — progression, rewards, sensors, stack */}
          {cs.app && (
            <section id="csl-app" className="csl-section csl-app-section">
              <div className="csl-inner">
                <div className="csl-head">
                  <span className="csl-step">{cs.app.eyebrow}</span>
                  <h2 className="csl-h2">{cs.app.title}</h2>
                  <p className="csl-lede">{cs.app.body}</p>
                  {cs.liveUrl && (
                    <a className="csl-live" href={cs.liveUrl} target="_blank" rel="noopener noreferrer">Play the web demo ↗</a>
                  )}
                </div>
                <div className="csl-app-grid">
                  <div className="csl-app-col">
                    <span className="csl-step">PHONE SENSORS</span>
                    <ul className="csl-sensors">
                      {cs.app.sensors.map((x) => (
                        <li key={x.label}>
                          <strong>{x.label}</strong>
                          <span>{x.sensor}</span>
                          <em>{x.ritual}</em>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="csl-app-col">
                    <span className="csl-step">PROGRESSION</span>
                    <ol className="csl-days">
                      {cs.app.progression.map((d) => (
                        <li key={d.day}><strong>{d.day}</strong><span>{d.body}</span></li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="csl-rewards">
                  {cs.app.rewards.map((r) => (
                    <div className="csl-reward" key={r.label}>
                      <h4>{r.label}</h4>
                      <p>{r.body}</p>
                    </div>
                  ))}
                </div>
                <ul className="csl-stack">
                  {cs.app.stack.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            </section>
          )}

          {/* LOOP */}
          {cs.loop?.length > 0 && (
            <section className="csl-section csl-loop-section">
              <div className="csl-inner">
                <div className="csl-head">
                  <span className="csl-step">CORE INTERACTION LOOP</span>
                  <h2 className="csl-h2">Literacy embedded in the mechanics, not layered on top</h2>
                </div>
                <ol className="csl-loop">
                  {cs.loop.map((l, i) => (
                    <li key={l.num}>
                      <span className="csl-loop-num">{l.num}</span>
                      <h3>{l.title}</h3>
                      <p>{l.body}</p>
                      {i < cs.loop.length - 1 && <span className="csl-loop-arrow" aria-hidden="true">→</span>}
                    </li>
                  ))}
                </ol>
                {cs.loopImage && (
                  <figure className="csl-loop-figure">
                    <img src={cs.loopImage.src} alt={cs.loopImage.caption || ''} loading="lazy" />
                    <figcaption>{cs.loopImage.caption}</figcaption>
                  </figure>
                )}
              </div>
            </section>
          )}

          {/* FOLD STUDIES */}
          {cs.foldFrames?.length > 0 && (
            <section className="csl-section">
              <div className="csl-inner csl-fold-row">
                <div className="csl-fold-text">
                  <span className="csl-step">FRAME STUDIES</span>
                  <h2 className="csl-h2">Paper that remembers a fold</h2>
                  <p className="csl-lede">
                    Hand-painted frames from the Unity prototype for the Happy ritual. The fold is the gratitude entry:
                    one crease per small good thing, until the star is ready to keep. Move across the strip to scrub the frames.
                  </p>
                </div>
                <FoldBook frames={cs.foldFrames} />
              </div>
            </section>
          )}

          {/* PROCESS */}
          {cs.phases?.length > 0 && (
            <section id="csl-process" className="csl-section">
              <div className="csl-inner">
                <div className="csl-head">
                  <span className="csl-step">PROCESS</span>
                  <h2 className="csl-h2">From inquiry to a planet with shelves</h2>
                </div>
                <ol className="csl-phases">
                  {cs.phases.map((p) => {
                    const media = Array.isArray(p.media) ? p.media : p.media ? [p.media] : []
                    return (
                      <li className="csl-phase" key={p.num}>
                        <div className="csl-phase-rail"><span>{p.num}</span></div>
                        <div className="csl-phase-body">
                          <span className="csl-phase-cat">{p.category}</span>
                          <h3>{p.title}</h3>
                          <p>{p.body}</p>
                          {p.items?.length > 0 && (
                            <ul className="csl-phase-items">
                              {p.items.map((it) => <li key={it}>{it}</li>)}
                            </ul>
                          )}
                          {media.length > 0 && (
                            <div className={`csl-phase-media${media.length > 1 ? ' multi' : ''}`}>
                              {media.map((m) => (
                                <figure key={m.src}>
                                  <img src={m.src} alt={m.caption || ''} loading="lazy" />
                                  {m.caption && <figcaption>{m.caption}</figcaption>}
                                </figure>
                              ))}
                            </div>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ol>
              </div>
            </section>
          )}

          {/* CONFERENCES — kept light */}
          {cs.conferences?.length > 0 && (
            <section className="csl-section csl-conf-section">
              <div className="csl-inner">
                <div className="csl-head">
                  <span className="csl-step">WHERE IT HAS BEEN</span>
                  <h2 className="csl-h2">Six venues in a year</h2>
                </div>
                <ul className="csl-conf">
                  {cs.conferences.map((c) => (
                    <li key={c.venue}>
                      <span className="csl-conf-venue">{c.venue}</span>
                      <span className="csl-conf-where">{c.where}</span>
                      <span className="csl-conf-format">{c.format}</span>
                      <span className="csl-conf-status">{c.status}</span>
                    </li>
                  ))}
                </ul>
                <p className="csl-conf-note">Full details, formats and citations on the <a href="/research">research page →</a></p>
              </div>
            </section>
          )}

          {/* PAPER */}
          {cs.paper && (
            <section id="csl-paper" className="csl-section">
              <div className="csl-inner">
                <div className="csl-paper">
                  <span className="csl-step">{cs.paper.eyebrow}</span>
                  <h2 className="csl-paper-title">{cs.paper.title}</h2>
                  <p className="csl-paper-venue">{cs.paper.venue}</p>
                  <div className="csl-paper-links">
                    <a href={cs.paper.doiUrl} target="_blank" rel="noopener noreferrer">Open access · DOI {cs.paper.doi} ↗</a>
                    <a href={cs.paper.researchUrl}>Paper page on this site →</a>
                    <a href={cs.paper.projectUrl}>Project record →</a>
                  </div>
                  <p className="csl-paper-note">{cs.paper.note}</p>
                </div>
              </div>
            </section>
          )}

          {/* CREDITS */}
          <section className="csl-credits-section">
            <div className="csl-credits">
              {cs.credits?.map((c) => (
                <div className="csl-credit" key={c.label}>
                  <span className="csl-credit-lbl">{c.label}</span>
                  <span className="csl-credit-val">{c.value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="csl-closing">
            <h3 className="csl-closing-title">{cs.closing?.title}</h3>
            <p className="csl-closing-tag">{cs.closing?.tagline}</p>
            <button className="csl-back" onClick={onClose}>← Back to portfolio</button>
          </section>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  )
}
