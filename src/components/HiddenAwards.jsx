import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { honours } from '../data/awards.js'

// Toy pinwheel — fixed in the corner of the hidden page.
// Lifecycle: starts spinning on its own → friction slows it to a stop → the
// user revives it by moving the cursor/finger in circles around it. Pointer
// angular delta (signed) is added to angular velocity each frame, so circling
// clockwise spins it clockwise and counter-clockwise reverses it.
function Pinwheel() {
  const wrapperRef = useRef(null)
  const rotorRef = useRef(null)
  const velRef = useRef(0)             // current angular velocity (deg/frame)
  const angleRef = useRef(0)           // current rotation (deg)
  const lastPointerAngleRef = useRef(null) // last pointer angle relative to center

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    velRef.current = reduced ? 0 : 9   // initial autonomous spin (~540°/s @60fps)
    const FRICTION = 0.985             // ~5–7s to coast to a stop from initial vel
    const GAIN = 0.04                  // how strongly mouse circling drives spin
    const MAX_VEL = 26                 // safety cap
    const RADIUS_MAX = 260             // only count pointer motion within this radius
    const RADIUS_MIN = 12              // dead-zone at the very center

    let raf
    const tick = () => {
      angleRef.current += velRef.current
      velRef.current *= FRICTION
      if (Math.abs(velRef.current) < 0.015) velRef.current = 0
      if (rotorRef.current) {
        rotorRef.current.style.transform = `rotate(${angleRef.current.toFixed(2)}deg)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onMove = (e) => {
      const rotor = rotorRef.current
      if (!rotor) return
      // The rotor rotates around its own center, so its bbox center is stable
      // even mid-spin. Using it (rather than the wrapper) keeps the stick from
      // throwing off the perceived rotation axis.
      const r = rotor.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.hypot(dx, dy)
      if (dist > RADIUS_MAX || dist < RADIUS_MIN) {
        lastPointerAngleRef.current = null
        return
      }
      const a = Math.atan2(dy, dx) * 180 / Math.PI
      const last = lastPointerAngleRef.current
      if (last !== null) {
        let delta = a - last
        // Wrap delta into [-180, 180] so a tiny step across ±180° doesn't
        // register as a near-full-circle leap in the wrong direction.
        if (delta > 180) delta -= 360
        if (delta < -180) delta += 360
        velRef.current += delta * GAIN
        if (velRef.current > MAX_VEL) velRef.current = MAX_VEL
        if (velRef.current < -MAX_VEL) velRef.current = -MAX_VEL
      }
      lastPointerAngleRef.current = a
    }
    window.addEventListener('pointermove', onMove)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <div className="ha-pinwheel" ref={wrapperRef} aria-hidden="true">
      <div className="ha-pinwheel-stick" />
      <div className="ha-pinwheel-rotor" ref={rotorRef}>
        <svg viewBox="-50 -50 100 100" width="100%" height="100%">
          {[
            { rot: 0,   fill: '#ad46ff' },
            { rot: 90,  fill: '#3885ff' },
            { rot: 180, fill: '#ff7aa8' },
            { rot: 270, fill: '#f4c87a' },
          ].map((b, i) => (
            <path
              key={i}
              transform={`rotate(${b.rot})`}
              d="M 0 0 L 44 -14 Q 50 0 44 14 Z"
              fill={b.fill}
              opacity="0.94"
            />
          ))}
          <circle cx="0" cy="0" r="6" fill="#1a1a22" stroke="#fff" strokeWidth="1.6" />
          <circle cx="0" cy="0" r="2" fill="#ad46ff" />
        </svg>
      </div>
      <div className="ha-pinwheel-hint">circle me ↻</div>
    </div>
  )
}

// Full-page secret takeover listing grants, distinctions, selections & research.
// Hidden from the nav — opened by the magic word or the #/honours hash (see App.jsx).
export default function HiddenAwards({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="ha-page"
          role="dialog"
          aria-modal="true"
          aria-label="Honours and research archive"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Drifting sparkles for the "you found something magic" feel */}
          <div className="ha-sparkles" aria-hidden="true">
            {[...Array(14)].map((_, i) => (
              <motion.span
                key={i}
                className="ha-sparkle"
                style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
                animate={{ opacity: [0, 1, 0], scale: [0.4, 1, 0.4], y: [0, -14, 0] }}
                transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
              >
                ✦
              </motion.span>
            ))}
          </div>

          <button className="ha-close" onClick={onClose} aria-label="Close">×</button>

          <Pinwheel />

          <motion.div
            className="ha-inner"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
          >
            <header className="ha-header">
              <span className="ha-eyebrow">✦ you found the hidden shelf</span>
              <h1 className="ha-title">Honours <span>&amp;</span> Research</h1>
              <p className="ha-intro">{honours.intro}</p>
            </header>

            {honours.sections.map((section) => (
              <section className="ha-section" key={section.id}>
                <div className="ha-section-head">
                  <h2>{section.label}</h2>
                  {section.hint && <span className="ha-hint">{section.hint}</span>}
                </div>
                <ul className="ha-list">
                  {section.items.map((it, i) => (
                    <li className={`ha-item${it.highlight ? ' is-highlight' : ''}`} key={i}>
                      <div className="ha-item-top">
                        <h3>{it.title}</h3>
                        {it.period && <span className="ha-period">{it.period}</span>}
                      </div>
                      {it.org && <p className="ha-org">{it.org}</p>}
                      {it.note && <p className="ha-note">{it.note}</p>}
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <footer className="ha-footer">
              <span className="ha-footer-mark">✦</span>
              <button className="ha-back" onClick={onClose}>← Back to the portfolio</button>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
