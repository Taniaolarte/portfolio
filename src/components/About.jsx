import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useTransform, useScroll, animate } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { socialIcons, FileIcon } from './Icons.jsx'
import MagicWord from './MagicWord.jsx'
import CVModal from './CVModal.jsx'
import FairyTrail from './FairyTrail.jsx'
import PolaroidSticker from './PolaroidSticker.jsx'

const skills = [
  { name: 'After Effects', pct: 92 },
  { name: 'Illustrator / Figma', pct: 88 },
  { name: 'Premiere Pro', pct: 85 },
  { name: 'Cinema 4D', pct: 78 },
  { name: 'DaVinci Resolve', pct: 72 },
]

const stats = [
  { num: 5,   label: <>Years<br />Experience</> },
  { num: 150, label: 'Projects' },
  { num: 50,  label: <>Happy<br />Clients</> },
  { num: 10,  label: 'Awards' },
]

// Number that animates from 0 → target when first scrolled into view.
function CountUp({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const unsub = rounded.on('change', (v) => setDisplay(v))
    return unsub
  }, [rounded])

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, value, { duration: 1.6, ease: 'easeOut' })
    return controls.stop
  }, [inView, value])

  return <span ref={ref}>{display}</span>
}

// Hand-drawn decoration helpers — stroke-only SVGs we sprinkle around the polaroid.
const stroke = (c) => ({ fill: 'none', stroke: c, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' })

const SwirlRing = ({ color = '#c084fc' }) => (
  <svg viewBox="0 0 320 320" width="100%" height="100%">
    <path
      d="M 60 160 C 60 80, 240 80, 260 160 C 280 240, 80 260, 60 200"
      {...stroke(color)}
      strokeWidth="2.5"
      opacity="0.85"
    />
  </svg>
)

const FlameDoodle = ({ color = '#ffd166' }) => (
  <svg viewBox="0 0 40 50" width="38" height="48">
    <path
      d="M 20 4 Q 14 14, 18 22 Q 10 22, 12 32 Q 10 40, 20 46 Q 30 40, 28 32 Q 30 22, 22 22 Q 26 14, 20 4 Z"
      {...stroke(color)}
    />
    <path d="M 17 22 Q 20 28, 23 22" {...stroke(color)} />
  </svg>
)

const HeartEye = ({ color = '#ff5470' }) => (
  <svg viewBox="0 0 56 56" width="50" height="50">
    <path
      d="M 28 50 C 8 36, 4 22, 12 14 C 18 8, 26 12, 28 18 C 30 12, 38 8, 44 14 C 52 22, 48 36, 28 50 Z"
      {...stroke(color)}
    />
    <ellipse cx="28" cy="28" rx="8" ry="5" {...stroke(color)} strokeWidth="1.6" />
    <circle cx="28" cy="28" r="2.2" fill={color} />
  </svg>
)

const SparkPlus = ({ color = '#22d3ee', size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}>
    <g {...stroke(color)} strokeWidth="2.4">
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="3"  y1="12" x2="21" y2="12" />
    </g>
  </svg>
)

const ScribbleArrow = ({ color = '#a3e635' }) => (
  <svg viewBox="0 0 80 60" width="74" height="56">
    <path d="M 6 36 Q 24 8, 50 18 T 74 28" {...stroke(color)} />
    <path d="M 64 22 L 74 28 L 64 34" {...stroke(color)} />
  </svg>
)

export default function About() {
  const [cvOpen, setCvOpen] = useState(false)
  const aboutRef = useRef(null)
  const stickerBoundsRef = useRef(null)
  // Track scroll progress through the About section and translate the shader
  // a bit slower than the page → subtle parallax that keeps it within the section
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ['start end', 'end start'],
  })
  // Larger displacement so the parallax is actually perceptible
  const shaderY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])
  const noiseY  = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section id="about" ref={aboutRef}>
      {/* Local backdrop shader — only present in About, with subtle parallax */}
      <motion.div className="about-shader" aria-hidden="true" style={{ y: shaderY }} />
      <motion.div className="about-noise" aria-hidden="true" style={{ y: noiseY }} />

      <div className="about-grid">
        <div className="about-photo-col" ref={stickerBoundsRef}>
          <span className="sticker-hint">↓ drag the stickers to decorate me</span>
          <Reveal className="photo-wrap">
            {/* Decorative ring stays in place */}
            <div className="photo-ring"><SwirlRing color="#c084fc" /></div>

            {/* Draggable stickers — users can rearrange them on/around the polaroid */}
            <PolaroidSticker className="sticker-flame" initialRotate={-14}>
              <FlameDoodle color="#ffd166" />
            </PolaroidSticker>
            <PolaroidSticker className="sticker-heart" initialRotate={-18}>
              <HeartEye color="#ff5470" />
            </PolaroidSticker>
            <PolaroidSticker className="sticker-spark" initialRotate={0}>
              <SparkPlus color="#22d3ee" size={30} />
            </PolaroidSticker>
            <PolaroidSticker className="sticker-star" initialRotate={-25}>
              <img src="/portfolio/assets/images/star-vector.svg" alt="" draggable="false" style={{ width: 56, height: 56, opacity: 0.85, pointerEvents: 'none' }} />
            </PolaroidSticker>
            <PolaroidSticker className="sticker-plus" initialRotate={12}>
              <SparkPlus color="#f0abfc" size={22} />
            </PolaroidSticker>

            <div className="polaroid" data-polaroid-target>
              <div className="polaroid-photo">
                <img src="/portfolio/assets/images/profile.png" alt="Tania Olarte" />
              </div>
              <div className="polaroid-strip">
                <span className="polaroid-me">Me! ✨</span>
                <span className="polaroid-year">2026</span>
              </div>
              <div className="photo-badge">
                <img src="/portfolio/assets/images/badge-star.svg" alt="" />
              </div>
            </div>
            <div className="about-stats">
              {stats.map((s, i) => (
                <div className="stat-card" key={i}>
                  <span className="stat-number">
                    <CountUp value={s.num} />+
                  </span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="about-content">
          <Reveal as="h2">About <FairyTrail color="#c084fc">Me</FairyTrail></Reveal>
          <Reveal as="p" className="about-bio" delay={0.1}>
            Hi, I'm <strong>Tania Olarte</strong>, a multimedia specialist and <MagicWord>interactive</MagicWord> designer working across UI/UX, interactive media, and creative technology.
          </Reveal>
          <Reveal as="p" className="about-bio last" delay={0.2}>
            I'm particularly interested in how interactive design can support learning, emotional awareness, and socially impactful experiences, combining <MagicWord>creativity</MagicWord>, technology, and user experience to create work that is both <MagicWord>engaging</MagicWord> and meaningful.
          </Reveal>

          <Reveal className="social-links" delay={0.2}>
            {socialIcons.map(({ Icon, label, href }) => {
              const isExternal = href.startsWith('http')
              return (
                <a
                  key={label}
                  href={href}
                  className="social-link"
                  aria-label={label}
                  {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  <Icon />
                </a>
              )
            })}
          </Reveal>

          <div id="skills-anchor">
            <Reveal as="p" className="skills-heading" delay={0.3}>Software Proficiency</Reveal>
            {skills.map((s, i) => (
              <Reveal className="skill-row" delay={0.3 + i * 0.05} key={s.name}>
                <div className="skill-meta">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-pct">{s.pct}%</span>
                </div>
                <div className="skill-bar-bg">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.pct}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.3 + i * 0.05 }}
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal as="button" className="btn-cv" delay={0.4} type="button" onClick={() => setCvOpen(true)}>
            <FileIcon />
            View Full CV
          </Reveal>
        </div>
      </div>
      <CVModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </section>
  )
}
