import { useRef, useCallback } from 'react'
import { useMotionValue, animate } from 'framer-motion'

// Shared drag-snap-back behavior for stickers. Each sticker is draggable
// anywhere on the page. On drop:
//   - If the sticker's bounding rect overlaps the polaroid
//     (`[data-polaroid-target]`), the sticker stays where dropped.
//   - Otherwise, it springs back to its home position.
export default function useStickerDrag() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const ref = useRef(null)

  const onDragEnd = useCallback(() => {
    const target = document.querySelector('[data-polaroid-target]')
    const sticker = ref.current
    if (!target || !sticker) {
      animate(x, 0, { type: 'spring', stiffness: 220, damping: 22 })
      animate(y, 0, { type: 'spring', stiffness: 220, damping: 22 })
      return
    }
    const t = target.getBoundingClientRect()
    const s = sticker.getBoundingClientRect()
    // AABB overlap test — any visual intersection counts as "stuck".
    const overlaps = !(s.right < t.left || s.left > t.right || s.bottom < t.top || s.top > t.bottom)
    if (!overlaps) {
      animate(x, 0, { type: 'spring', stiffness: 220, damping: 22 })
      animate(y, 0, { type: 'spring', stiffness: 220, damping: 22 })
    }
  }, [x, y])

  return {
    ref,
    motionProps: {
      style: { x, y },
      drag: true,
      dragMomentum: false,
      whileHover: { scale: 1.12 },
      whileDrag: { scale: 1.2, zIndex: 1000 },
      onDragEnd,
    },
  }
}
