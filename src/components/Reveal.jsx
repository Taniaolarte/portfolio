import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 24, as = 'div', ...rest }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
