import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { caseStudyIndex } from '../data/work.js'

// Animated SVG eye — pupil tracks slowly, lid blinks on a loop, gold iris glow.
function AnimatedEye() {
  return (
    <svg
      className="csv-eye-svg"
      viewBox="0 0 240 120"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id="csv-iris" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="#fff7cf" />
          <stop offset="30%" stopColor="#d4af37" />
          <stop offset="75%" stopColor="#6b4f12" />
          <stop offset="100%" stopColor="#1a1208" />
        </radialGradient>
        <radialGradient id="csv-sclera" cx="50%" cy="55%" r="60%">
          <stop offset="0%"  stopColor="#f5ecd9" />
          <stop offset="80%" stopColor="#cbb98a" />
          <stop offset="100%" stopColor="#8b7340" />
        </radialGradient>
        <clipPath id="csv-eye-clip">
          <path d="M 12 60 Q 120 -8 228 60 Q 120 128 12 60 Z" />
        </clipPath>
      </defs>

      {/* Sclera */}
      <g clipPath="url(#csv-eye-clip)">
        <ellipse cx="120" cy="60" rx="115" ry="50" fill="url(#csv-sclera)" />

        {/* Iris — tracks via CSS */}
        <g className="csv-eye-iris">
          <circle cx="120" cy="60" r="34" fill="url(#csv-iris)" />
          {/* iris fibres */}
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i / 24) * Math.PI * 2
            const x1 = 120 + Math.cos(a) * 12
            const y1 = 60  + Math.sin(a) * 12
            const x2 = 120 + Math.cos(a) * 32
            const y2 = 60  + Math.sin(a) * 32
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(0,0,0,0.35)" strokeWidth="0.6" />
          })}
          {/* Pupil */}
          <circle cx="120" cy="60" r="14" fill="#050505" />
          {/* Catch-light */}
          <circle cx="112" cy="52" r="4" fill="#fff8d6" opacity="0.95" />
          <circle cx="128" cy="65" r="1.6" fill="#fff8d6" opacity="0.7" />
        </g>

        {/* Lid shadow */}
        <path d="M 12 60 Q 120 -8 228 60 L 228 -10 L 12 -10 Z" fill="rgba(0,0,0,0.32)" />
      </g>

      {/* Eyelid — blinks via CSS */}
      <path
        className="csv-eyelid"
        d="M 12 60 Q 120 60 228 60 Q 120 60 12 60 Z"
        fill="#0a0a0a"
      />

      {/* Outline */}
      <path
        d="M 12 60 Q 120 -8 228 60 Q 120 128 12 60 Z"
        fill="none"
        stroke="#d4af37"
        strokeWidth="1.6"
      />

      {/* Lashes */}
      {Array.from({ length: 14 }).map((_, i) => {
        const t = i / 13
        const x = 24 + t * 192
        const y = 60 - Math.sin(t * Math.PI) * 48
        const ax = x + (t - 0.5) * 6
        const ay = y - 10 - Math.sin(t * Math.PI) * 4
        return <line key={i} x1={x} y1={y} x2={ax} y2={ay} stroke="#0a0a0a" strokeWidth="1.6" strokeLinecap="round" />
      })}
    </svg>
  )
}

// Polaroid wall — tilted instax cards (mirrors blooming's vibe).
const POLAROID_TILTS = [
  { r: -7,   x:  4,  y:  6 },
  { r:  5.5, x: -6,  y: -2 },
  { r: -4,   x:  10, y: 10 },
  { r:  9,   x: -4,  y: -6 },
]

export default function CaseStudyModalTheVault({ hero, onClose, onOpenCase }) {
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
  const biggerCase = cs.bigger?.linkCaseId ? caseStudyIndex[cs.bigger.linkCaseId] : null

  const handleOpenBigger = () => {
    if (biggerCase && onOpenCase) {
      onClose()
      // Defer so the close animation can start before the next modal mounts.
      setTimeout(() => onOpenCase(biggerCase), 80)
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className="csv-overlay"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <motion.article
          className="csv-modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <button className="csv-close" onClick={onClose} aria-label="Close">×</button>

          {/* Scanline + grain overlay */}
          <div className="csv-scanlines" aria-hidden="true" />
          <div className="csv-grain" aria-hidden="true" />

          {/* HERO */}
          <header className="csv-hero">
            <div className="csv-stencil">CONFIDENTIAL · DO NOT REMOVE</div>
            <div className="csv-eye-stage">
              <AnimatedEye />
              <span className="csv-eye-glow" aria-hidden="true" />
            </div>
            <h1 className="csv-title">THE&nbsp;VAULT</h1>
            <p className="csv-subtitle">Escape Rooms · Canberra</p>
            <div className="csv-rule" aria-hidden="true" />
            <p className="csv-meta">
              <span>FILE · 2024</span>
              <span>·</span>
              <span>LOOP · 00:12</span>
              <span>·</span>
              <span>STATUS · INSTALLED</span>
            </p>
          </header>

          {/* THE EYE — video reel */}
          <section className="csv-section">
            <div className="csv-section-head">
              <span className="csv-step">EXHIBIT A</span>
              <h2 className="csv-h2">THE EYE</h2>
            </div>
            {cs.eyeVideo && (
              <figure className="csv-eye-reel">
                <video src={cs.eyeVideo} autoPlay muted loop playsInline />
                <figcaption>Looping in-room screen · The Vault Canberra</figcaption>
              </figure>
            )}
          </section>

          {/* BRIEF */}
          {cs.brief && (
            <section className="csv-section">
              <div className="csv-brief">
                <span className="csv-step">{cs.brief.eyebrow}</span>
                <h2 className="csv-h2 csv-h2-left">{cs.brief.title}</h2>
                <p className="csv-brief-body">{cs.brief.body}</p>
              </div>
            </section>
          )}

          {/* VENUE / SAME CREATORS */}
          {cs.venue && (
            <section className="csv-section csv-venue-section">
              <div className="csv-venue">
                <span className="csv-step">{cs.venue.eyebrow}</span>
                <h2 className="csv-h2 csv-h2-left">{cs.venue.label}</h2>
                <p className="csv-brief-body">{cs.venue.body}</p>
                {cs.venue.links?.length > 0 && (
                  <div className="csv-venue-links">
                    {cs.venue.links.map((l) => (
                      <a
                        key={l.url}
                        className="csv-venue-link"
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {l.label} <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* PROCESS */}
          {cs.process?.length > 0 && (
            <section className="csv-section">
              <div className="csv-section-head">
                <span className="csv-step">PROCESS</span>
                <h2 className="csv-h2 csv-h2-left">Three steps to a watcher</h2>
              </div>
              <ol className="csv-process">
                {cs.process.map((p) => (
                  <li key={p.num}>
                    <span className="csv-process-num">{p.num}</span>
                    <span className="csv-process-label">{p.label}</span>
                    <p className="csv-process-text">{p.text}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* POLAROIDS */}
          {cs.polaroids?.length > 0 && (
            <section className="csv-section">
              <div className="csv-section-head">
                <span className="csv-step">IN&nbsp;THE&nbsp;ROOM</span>
                <h2 className="csv-h2 csv-h2-left">{cs.polaroidsHead?.title || 'Polaroids'}</h2>
                {cs.polaroidsHead?.caption && (
                  <p className="csv-section-lede">{cs.polaroidsHead.caption}</p>
                )}
              </div>
              <div className="csv-polaroid-wall">
                {cs.polaroids.map((shot, i) => {
                  const t = POLAROID_TILTS[i % POLAROID_TILTS.length]
                  return (
                    <figure
                      key={i}
                      className="csv-polaroid"
                      style={{
                        '--rot': `${t.r}deg`,
                        '--tx':  `${t.x}px`,
                        '--ty':  `${t.y}px`,
                      }}
                    >
                      <div className="csv-polaroid-photo">
                        <img src={shot.src} alt={shot.caption || ''} loading="lazy" />
                      </div>
                      {shot.caption && (
                        <figcaption className="csv-polaroid-cap">{shot.caption}</figcaption>
                      )}
                    </figure>
                  )
                })}
              </div>
            </section>
          )}

          {/* CREDITS */}
          {cs.credits?.length > 0 && (
            <section className="csv-section">
              <div className="csv-credits">
                {cs.credits.map((c) => (
                  <div className="csv-credit" key={c.label}>
                    <span className="csv-credit-lbl">{c.label}</span>
                    <span className="csv-credit-val">{c.value}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* BIGGER PROJECT CALLOUT */}
          {cs.bigger && (
            <section className="csv-section csv-bigger-section">
              <div className="csv-bigger">
                <span className="csv-step">{cs.bigger.eyebrow}</span>
                <h2 className="csv-h2 csv-h2-left">{cs.bigger.title}</h2>
                <p className="csv-bigger-body">{cs.bigger.body}</p>
                {biggerCase && (
                  <button className="csv-bigger-cta" onClick={handleOpenBigger}>
                    {cs.bigger.cta || 'View the case study →'}
                  </button>
                )}
              </div>
            </section>
          )}

          <footer className="csv-foot">
            <button className="csv-back" onClick={onClose}>← Close the Vault</button>
            <p className="csv-foot-copy">© 2026 Tania Olarte · Animator</p>
          </footer>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  )
}
