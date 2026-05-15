import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const JELLYFISH_SRC = '/portfolio/assets/images/jellyfish.svg'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const scrollTo = (e, id) => {
  e.preventDefault()
  const t = document.querySelector(id)
  if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const orbRef = useRef(null)
  const jellyRef = useRef(null)

  // Continuously track the jellyfish position via rAF — this works whether the
  // orb is being dragged OR drifting autonomously (framer-motion's animate
  // doesn't fire onDrag, so we need the rAF loop). Writes to CSS vars directly,
  // no React state, no re-renders.
  useEffect(() => {
    let raf
    let lastX = null
    let smoothVx = 0
    let sway = 0
    const tick = () => {
      const orb = orbRef.current
      const title = titleRef.current
      const jelly = jellyRef.current
      if (orb) {
        const o = orb.getBoundingClientRect()
        const cx = o.left + o.width / 2
        // Velocity (px/frame). Low-pass-filter, then map to a clamped sway.
        if (lastX !== null) {
          const vx = cx - lastX
          smoothVx += (vx - smoothVx) * 0.35
        }
        lastX = cx
        // Tentacles trail OPPOSITE to motion. Velocity (~px/frame) → degrees.
        const targetSway = Math.max(-28, Math.min(28, -smoothVx * 1.6))
        // Spring relax back to 0 when at rest.
        sway += (targetSway - sway) * 0.18
        if (jelly) jelly.style.setProperty('--jelly-sway', `${sway.toFixed(2)}deg`)

        if (title) {
          const t = title.getBoundingClientRect()
          const x = cx - t.left
          // Lens center aligned with the bell's actual visual center (measured at 23.2%
          // of orb height — was 15% which left a ~30px vertical offset).
          const y = o.top + o.height * 0.235 - t.top
          title.style.setProperty('--reveal-x', `${x}px`)
          title.style.setProperty('--reveal-y', `${y}px`)
        }
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <motion.section
      id="hero"
      ref={heroRef}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="hero-tag" variants={item}>Portfolio</motion.div>

      <motion.div ref={titleRef} className="hero-name-stack" variants={item}>
        <h1 className="hero-name hero-name-sketch" aria-hidden="true">Portfolio</h1>
        <h1 className="hero-name hero-name-display">Tania Olarte</h1>
      </motion.div>

      <motion.p className="hero-title" variants={item}>Multimedia Specialist</motion.p>
      <motion.p className="hero-desc" variants={item}>
        Developing interactive digital design solutions through animation, graphics, games, web and interactive experiences.
      </motion.p>
      <motion.div className="hero-btns" variants={item}>
        <a href="#work" className="btn-primary" onClick={(e) => scrollTo(e, '#work')}>View Work</a>
        <a href="#contact" className="btn-outline" onClick={(e) => scrollTo(e, '#contact')}>Get in Touch</a>
      </motion.div>

      <motion.div
        ref={orbRef}
        className="hero-orb"
        drag
        dragConstraints={heroRef}
        dragElastic={0.18}
        dragMomentum={false}
        whileTap={{ scale: 1.05 }}
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{
          opacity: 1,
          scale: 1,
          // She hovers next to the title's "T" and swims across the name and
          // back. Wide horizontal sway so the bell visibly drifts over the
          // letters (triggering the lens reveal as a side-effect).
          x: [0, 80, -30, 140, -50, 60, 0],
          y: [0, 30, -22, 48, -10, 36, 0],
          rotate: [0, -6, 4, -8, 5, -4, 0],
        }}
        transition={{
          opacity: { delay: 0.9, duration: 0.5 },
          scale:   { delay: 0.9, duration: 0.5 },
          // Hold at start position ~2s after she fades in, then begin the
          // long drifting cycle. The CSS .jellyfish jelly-pulse keeps her
          // breathing during the still moment.
          x:       { delay: 3.3, duration: 32, repeat: Infinity, ease: 'easeInOut' },
          y:       { delay: 3.3, duration: 22, repeat: Infinity, ease: 'easeInOut' },
          rotate:  { delay: 3.3, duration: 14, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="hero-orb-glow" />
        <div className="jellyfish" ref={jellyRef}>
          <img src={JELLYFISH_SRC} className="jellyfish-svg jellyfish-img jelly-body" alt="" draggable="false" />
          <img src={JELLYFISH_SRC} className="jellyfish-svg jellyfish-img jelly-tentacles" alt="" aria-hidden="true" draggable="false" />
        </div>
        <div className="hero-orb-hint">drag me ✦</div>
      </motion.div>
    </motion.section>
  )
}
