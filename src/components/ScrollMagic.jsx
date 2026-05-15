import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Hidden interaction: as the user scrolls, tiny sparkles materialise at random
// positions and drift in the scroll direction before fading. Throttled so it
// stays magical (not noisy) and only triggers on meaningful scroll velocity.

const SPARKLE_LIFETIME = 1500 // ms
const MIN_VELOCITY = 0.25     // px/ms — quiet scrolls don't spawn
const MAX_VELOCITY = 6        // very fast scroll doesn't either
const MIN_INTERVAL = 80       // ms between spawns

const colors = ['#c084fc', '#22d3ee', '#ff5470', '#ffd166', '#a3e635']
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]

export default function ScrollMagic() {
  const [sparkles, setSparkles] = useState([])
  const lastScroll = useRef(typeof window !== 'undefined' ? window.scrollY : 0)
  const lastTime = useRef(Date.now())
  const lastSpawn = useRef(0)
  const counter = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const now = Date.now()
      const dt = now - lastTime.current || 1
      const ds = window.scrollY - lastScroll.current
      const velocity = Math.abs(ds) / dt

      lastTime.current = now
      lastScroll.current = window.scrollY

      if (velocity < MIN_VELOCITY || velocity > MAX_VELOCITY) return
      if (now - lastSpawn.current < MIN_INTERVAL) return
      lastSpawn.current = now

      const id = counter.current++
      const sparkle = {
        id,
        x: 6 + Math.random() * 88,                  // % across viewport
        y: 10 + Math.random() * 70,                 // % down viewport
        size: 8 + Math.random() * 10,
        color: pick(colors),
        drift: ds > 0 ? 24 + Math.random() * 18     // drift direction with scroll
                      : -(24 + Math.random() * 18),
        spin: Math.random() * 90 - 45,
      }
      setSparkles((prev) => [...prev, sparkle])
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id))
      }, SPARKLE_LIFETIME)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="scroll-magic" aria-hidden="true">
      <AnimatePresence>
        {sparkles.map((s) => (
          <motion.span
            key={s.id}
            className="scroll-sparkle"
            style={{
              left: `${s.x}vw`,
              top: `${s.y}vh`,
              fontSize: `${s.size}px`,
              color: s.color,
              textShadow: `0 0 8px ${s.color}, 0 0 18px ${s.color}80`,
            }}
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: s.spin }}
            exit={{ opacity: 0, scale: 0.4, y: s.drift, rotate: s.spin * 2 }}
            transition={{ duration: SPARKLE_LIFETIME / 1000, ease: 'easeOut' }}
          >
            ✦
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}
