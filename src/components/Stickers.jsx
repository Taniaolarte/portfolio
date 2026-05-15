import { motion } from 'framer-motion'
import useStickerDrag from './useStickerDrag.js'

// Hand-drawn marker doodle stickers — sketchbook annotation vibe.
// All purely decorative — pointer-events:none.

// ── Hand-drawn SVG pieces ────────────────────────────────────

const stroke = (color) => ({
  fill: 'none',
  stroke: color,
  strokeWidth: 2.2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
})

const ScribbleStar = ({ size = 32, color = '#c084fc' }) => (
  <svg viewBox="0 0 40 40" width={size} height={size}>
    <path
      d="M20 4 C 21 12, 24 14, 32 17 C 24 18, 22 21, 21 32 C 19 22, 16 19, 8 18 C 17 16, 18 13, 20 4 Z"
      {...stroke(color)}
      style={{ filter: `drop-shadow(0 0 6px ${color}66)` }}
    />
  </svg>
)

const TinyAsterisk = ({ size = 18, color = '#ffd166' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}>
    <g {...stroke(color)} strokeWidth={2.6}>
      <line x1="12" y1="3"  x2="12" y2="21" />
      <line x1="3"  y1="12" x2="21" y2="12" />
      <line x1="5.5" y1="5.5" x2="18.5" y2="18.5" />
      <line x1="18.5" y1="5.5" x2="5.5" y2="18.5" />
    </g>
  </svg>
)

const Heart = ({ size = 26, color = '#ff5470' }) => (
  <svg viewBox="0 0 32 32" width={size} height={size}>
    <path
      d="M16 27 C 6 20, 3 13, 8 8 C 12 4, 16 8, 16 12 C 16 8, 20 4, 24 8 C 29 13, 26 20, 16 27 Z"
      {...stroke(color)}
      style={{ filter: `drop-shadow(0 0 5px ${color}66)` }}
    />
  </svg>
)

const DoodleCircle = ({ size = 70, color = '#22d3ee' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    {/* Two overlapping rough circles for that hand-drawn feel */}
    <path
      d="M 40 8 C 60 8, 72 22, 70 42 C 68 60, 52 72, 36 70 C 18 68, 8 52, 12 34 C 16 18, 28 8, 42 8"
      {...stroke(color)}
    />
    <path
      d="M 42 10 C 62 12, 70 26, 68 44 C 66 60, 50 70, 36 68"
      {...stroke(color)}
      strokeWidth={1.2}
      opacity={0.6}
    />
  </svg>
)

const Squiggle = ({ color = '#c084fc', width = 96, height = 26 }) => (
  <svg viewBox="0 0 96 26" width={width} height={height}>
    <path
      d="M 2 13 Q 12 2, 22 13 T 42 13 T 62 13 T 82 13 T 94 13"
      {...stroke(color)}
      strokeWidth={2.6}
      style={{ filter: `drop-shadow(0 0 4px ${color}55)` }}
    />
  </svg>
)

const CurvedArrow = ({ color = '#ffd166', size = 96, flip = false }) => (
  <svg
    viewBox="0 0 120 80"
    width={size}
    height={size * 0.67}
    style={{ transform: flip ? 'scaleX(-1)' : undefined }}
  >
    <path
      d="M 8 14 Q 40 4, 70 18 T 102 50"
      {...stroke(color)}
      strokeWidth={2.6}
    />
    {/* Arrowhead */}
    <path
      d="M 92 38 L 102 50 L 90 56"
      {...stroke(color)}
      strokeWidth={2.6}
    />
  </svg>
)

const Underline = ({ color = '#ad46ff', width = 110 }) => (
  <svg viewBox="0 0 120 14" width={width} height={14}>
    <path d="M 4 8 Q 30 4, 60 7 T 116 6" {...stroke(color)} strokeWidth={2.4} />
    <path
      d="M 8 11 Q 38 8, 70 10 T 112 10"
      {...stroke(color)}
      strokeWidth={1.6}
      opacity={0.55}
    />
  </svg>
)

const InkSplat = ({ size = 36, color = '#c084fc' }) => (
  <svg viewBox="0 0 40 40" width={size} height={size}>
    <g fill={color} opacity={0.7}>
      <circle cx="20" cy="20" r="6" />
      <circle cx="9"  cy="14" r="1.6" />
      <circle cx="29" cy="12" r="2.2" />
      <circle cx="32" cy="26" r="1.4" />
      <circle cx="14" cy="30" r="1.9" />
      <circle cx="6"  cy="24" r="1" />
    </g>
  </svg>
)

const ArrowLabel = ({ text, color = '#e9d5ff', arrowDir = 'right', rotate = 0 }) => {
  const arrowSize = { w: 70, h: 28 }
  const downArrow = (
    <svg viewBox="0 0 40 60" width={26} height={40} style={{ display: 'block' }}>
      <path d="M 20 4 Q 6 18, 14 36 T 22 56" {...stroke(color)} />
      <path d="M 14 46 L 22 56 L 30 48" {...stroke(color)} />
    </svg>
  )
  const leftArrow = (
    <svg viewBox="0 0 80 40" width={arrowSize.w} height={arrowSize.h} style={{ marginRight: 4 }}>
      <path d="M 76 26 Q 50 8, 24 18 T 4 24" {...stroke(color)} />
      <path d="M 12 18 L 4 24 L 14 30" {...stroke(color)} />
    </svg>
  )
  const rightArrow = (
    <svg viewBox="0 0 80 40" width={arrowSize.w} height={arrowSize.h} style={{ marginLeft: 4 }}>
      <path d="M 4 14 Q 30 32, 56 22 T 76 16" {...stroke(color)} />
      <path d="M 68 10 L 76 16 L 66 22" {...stroke(color)} />
    </svg>
  )
  const isVertical = arrowDir === 'down'
  return (
    <div
      className="sticker-arrow-label"
      style={{
        color,
        transform: `rotate(${rotate}deg)`,
        flexDirection: isVertical ? 'column' : 'row',
        alignItems: isVertical ? 'flex-start' : 'center',
        gap: isVertical ? 2 : 2,
      }}
    >
      {arrowDir === 'left' && leftArrow}
      <span className="sticker-arrow-text">{text}</span>
      {arrowDir === 'right' && rightArrow}
      {arrowDir === 'down'  && downArrow}
    </div>
  )
}

// ── Animation presets ────────────────────────────────────────

const drift = {
  animate: { y: [0, -8, 0], rotate: [0, 3, 0] },
  transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
}

const wobble = {
  animate: { rotate: [-5, 5, -5], scale: [1, 1.04, 1] },
  transition: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
}

const spinSlow = {
  animate: { rotate: [0, 360] },
  transition: { duration: 28, repeat: Infinity, ease: 'linear' },
}

const twinkle = {
  animate: { scale: [1, 1.2, 1], opacity: [0.65, 1, 0.65] },
  transition: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
}

const sway = {
  animate: { rotate: [-3, 3, -3], y: [0, -4, 0] },
  transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
}

// ── Sticker layout ──────────────────────────────────────────

const stickers = [
  // Around hero (0–900px)
  { id: 'hero-circle', top: 130, right: '6%', anim: spinSlow, node: <DoodleCircle size={130} color="#ad46ff" />, opacity: 0.55, hideOnMobile: true },
  { id: 'hero-star-1', top: 220, left: '7%',  anim: twinkle,  node: <ScribbleStar size={34} color="#c084fc" />, rotate: -10 },
  { id: 'hero-aster',  top: 290, right: '22%', anim: twinkle, node: <TinyAsterisk size={20} color="#ffd166" />, hideOnMobile: true },
  { id: 'hero-heart',  top: 720, left: '8%',  anim: sway,     node: <Heart size={28} color="#ff5470" />, rotate: -8 },
  { id: 'hero-aster2', top: 760, right: '12%', anim: twinkle, node: <TinyAsterisk size={18} color="#22d3ee" />, hideOnMobile: true },

  // Around About (900–1953) — pointing at polaroid + skills
  { id: 'about-thats-me', top: 990,  left: '11%', anim: sway,    node: <ArrowLabel text="that's me!" arrowDir="down" rotate={-6} color="#ffd166" />, hideOnMobile: true },
  { id: 'about-squig',    top: 1280, left: '46%', anim: wobble,  node: <Squiggle color="#c084fc" width={100} />, rotate: -8, hideOnMobile: true },
  { id: 'about-aster',    top: 1500, right: '4%', anim: twinkle, node: <TinyAsterisk size={20} color="#22d3ee" /> },
  { id: 'about-circle',   top: 1700, right: '3%', anim: spinSlow, node: <DoodleCircle size={90} color="#a3e635" />, opacity: 0.45, hideOnMobile: true },
  { id: 'about-splat',    top: 1880, left: '4%',  anim: twinkle, node: <InkSplat size={32} color="#ffd166" /> },

  // Around Skills (1953–2998) — light touch
  { id: 'skills-aster', top: 2200, right: '4%', anim: twinkle, node: <TinyAsterisk size={18} color="#ffd166" />, hideOnMobile: true },
  { id: 'skills-star',  top: 2650, left: '4%',  anim: twinkle, node: <ScribbleStar size={24} color="#a3e635" />, rotate: -10, hideOnMobile: true },

  // Around Work (3208–7555) — pointing at case studies
  { id: 'work-label',  top: 3720, right: '6%', anim: sway,    node: <ArrowLabel text="case studies ↓" arrowDir="down" rotate={3} color="#22d3ee" />, hideOnMobile: true },
  { id: 'work-star-1', top: 4400, left: '4%',  anim: twinkle, node: <ScribbleStar size={28} color="#ffd166" />, rotate: 18 },
  { id: 'work-aster',  top: 5100, right: '6%', anim: twinkle, node: <TinyAsterisk size={18} color="#ff5470" /> },
  { id: 'work-under',  top: 5500, left: '3%',  anim: wobble,  node: <Underline color="#22d3ee" width={110} />, rotate: -6, hideOnMobile: true },
  { id: 'work-star-2', top: 6300, right: '6%', anim: twinkle, node: <ScribbleStar size={26} color="#c084fc" />, rotate: 18 },
  { id: 'work-splat',  top: 7050, left: '4%',  anim: twinkle, node: <InkSplat size={38} color="#ad46ff" />, opacity: 0.7, hideOnMobile: true },

  // Around Contact / Footer — pointing at the email field
  { id: 'contact-label', bottom: 565, left: '63%', anim: sway,    node: <ArrowLabel text="say hi!" arrowDir="right" rotate={4} color="#c084fc" />, hideOnMobile: true },
  { id: 'contact-heart', bottom: 220, right: '6%', anim: sway,    node: <Heart size={24} color="#ff5470" />, rotate: 8 },
  { id: 'contact-aster', bottom: 100, right: '3%', anim: twinkle, node: <TinyAsterisk size={16} color="#ffd166" /> },
  { id: 'contact-star',  bottom: 340, left: '4%',  anim: twinkle, node: <ScribbleStar size={26} color="#22d3ee" />, rotate: -8, hideOnMobile: true },
  { id: 'contact-squig', bottom: 130, left: '8%',  anim: wobble,  node: <Squiggle color="#ff5470" width={70} />, rotate: 12, hideOnMobile: true },
]

function DraggableSticker({ s }) {
  const px = (v) => (typeof v === 'number' ? `${v}px` : v)
  const { ref, motionProps } = useStickerDrag()
  return (
    <motion.div
      ref={ref}
      className={`sticker${s.hideOnMobile ? ' sticker-hide-mobile' : ''}`}
      style={{
        top: px(s.top),
        left: px(s.left),
        right: px(s.right),
        bottom: px(s.bottom),
        opacity: s.opacity,
        ...motionProps.style,
      }}
      drag={motionProps.drag}
      dragMomentum={motionProps.dragMomentum}
      whileHover={motionProps.whileHover}
      whileDrag={motionProps.whileDrag}
      onDragEnd={motionProps.onDragEnd}
    >
      <motion.div
        style={{
          transform: `rotate(${s.rotate || 0}deg) scale(${s.scale || 1})`,
          transformOrigin: 'center',
        }}
        animate={s.anim.animate}
        transition={s.anim.transition}
      >
        {s.node}
      </motion.div>
    </motion.div>
  )
}

export default function Stickers() {
  return (
    <div className="stickers">
      {stickers.map((s) => <DraggableSticker key={s.id} s={s} />)}
    </div>
  )
}
