import { motion } from 'framer-motion'

export default function MagicWord({ children }) {
  return (
    <span className="magic-word">
      <motion.span
        className="magic-word-sparkle"
        aria-hidden="true"
        animate={{
          y: [0, -4, 0],
          rotate: [0, 18, -10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✦
      </motion.span>
      <span className="magic-word-text">{children}</span>
    </span>
  )
}
