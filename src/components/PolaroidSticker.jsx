import { motion } from 'framer-motion'
import useStickerDrag from './useStickerDrag.js'

// Draggable sticker positioned around the polaroid. Snaps back to home unless
// dropped onto the polaroid (handled by useStickerDrag).
export default function PolaroidSticker({ children, className = '', initialRotate = 0 }) {
  const { ref, motionProps } = useStickerDrag()
  return (
    <motion.div
      ref={ref}
      className={`polaroid-sticker ${className}`}
      {...motionProps}
      style={{ ...motionProps.style, rotate: initialRotate }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
    >
      {children}
    </motion.div>
  )
}
