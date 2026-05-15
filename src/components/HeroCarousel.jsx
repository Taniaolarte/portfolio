import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeaturedHero from './FeaturedCards.jsx'

export default function HeroCarousel({ heroes, onOpenCase }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  if (!heroes?.length) return null

  const go = (delta) => {
    setDirection(delta)
    setIndex((i) => (i + delta + heroes.length) % heroes.length)
  }

  const current = heroes[index]

  return (
    <div className="hero-carousel">
      {heroes.length > 1 && (
        <>
          <button
            type="button"
            className="hero-arrow hero-arrow-prev"
            onClick={() => go(-1)}
            aria-label="Previous case study"
          >
            ‹
          </button>
          <button
            type="button"
            className="hero-arrow hero-arrow-next"
            onClick={() => go(1)}
            aria-label="Next case study"
          >
            ›
          </button>
        </>
      )}

      <div className="hero-slide-wrap">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.id}
            className="hero-slide"
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <FeaturedHero hero={current} onOpen={() => onOpenCase(current)} />
          </motion.div>
        </AnimatePresence>
      </div>

      {heroes.length > 1 && (
        <div className="hero-dots">
          {heroes.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`hero-dot${i === index ? ' active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
