import { motion } from 'framer-motion'

// Decorative magic-wand trail that draws above a word and sprinkles sparkles.
// Wraps the word so the SVG sits absolutely above it without affecting layout.
export default function FairyTrail({ children, color = '#f4d4a4', stroke = 2.4 }) {
  return (
    <span className="fairy-word">
      <motion.svg
        className="fairy-trail"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
      >
        <motion.path
          d="M 6 44 C 30 8, 60 60, 96 30 S 160 6, 194 38"
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: [0, 1, 1, 0],
              opacity:    [0, 1, 1, 0],
              transition: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.45, 0.85, 1] },
            },
          }}
        />
        {[
          { cx: 24,  cy: 22, r: 1.6, delay: 0.2 },
          { cx: 68,  cy: 46, r: 1.2, delay: 0.7 },
          { cx: 108, cy: 18, r: 1.8, delay: 1.1 },
          { cx: 152, cy: 36, r: 1.3, delay: 1.5 },
          { cx: 184, cy: 22, r: 1.6, delay: 1.9 },
        ].map((s, i) => (
          <motion.circle
            key={i}
            cx={s.cx}
            cy={s.cy}
            r={s.r}
            fill={color}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.4, 0] }}
            transition={{ duration: 1.4, delay: s.delay, repeat: Infinity, repeatDelay: 3.1, ease: 'easeOut' }}
          />
        ))}
      </motion.svg>
      <span className="fairy-word-text">{children}</span>
    </span>
  )
}
