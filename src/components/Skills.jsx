import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const VideoIcon = () => (
  <svg viewBox="0 0 24 24" width={28} height={28} {...stroke}>
    <rect x="2" y="6" width="14" height="12" rx="2" />
    <path d="m22 8-6 4 6 4z" />
  </svg>
)
const CubeIcon = () => (
  <svg viewBox="0 0 24 24" width={28} height={28} {...stroke}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
)
const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" width={28} height={28} {...stroke}>
    <path d="M12 3 13.5 9 19.5 10.5 13.5 12 12 18 10.5 12 4.5 10.5 10.5 9 Z" />
    <path d="M19 4 L19.8 6.2 22 7 L19.8 7.8 19 10 L18.2 7.8 16 7 L18.2 6.2 Z" />
    <path d="M5 17 L5.6 18.6 7.3 19.2 L5.6 19.8 5 21.5 L4.4 19.8 2.7 19.2 L4.4 18.6 Z" />
  </svg>
)
const PaletteIcon = () => (
  <svg viewBox="0 0 24 24" width={28} height={28} {...stroke}>
    <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
    <circle cx="8.5"  cy="7.5"  r="0.5" fill="currentColor" />
    <circle cx="6.5"  cy="12.5" r="0.5" fill="currentColor" />
    <path d="M12 22a10 10 0 1 1 0-20c5.523 0 10 4.477 10 10 0 2.21-1.79 4-4 4h-1.667c-.92 0-1.667.747-1.667 1.667 0 .362.123.717.348 1 .226.283.349.638.349 1 0 .92-.748 1.333-1.667 1.333H12z" />
  </svg>
)
const CursorIcon = () => (
  <svg viewBox="0 0 24 24" width={28} height={28} {...stroke}>
    <path d="M14 4l-2 5h6l-9 11 2-7H5z" />
  </svg>
)
const BulbIcon = () => (
  <svg viewBox="0 0 24 24" width={28} height={28} {...stroke}>
    <path d="M9 18h6" />
    <path d="M10 21h4" />
    <path d="M12 3a6 6 0 0 0-4 10.5c.59.7 1 1.6 1 2.5v1h6v-1c0-.9.41-1.8 1-2.5A6 6 0 0 0 12 3z" />
  </svg>
)

const services = [
  {
    icon: <VideoIcon />,
    title: 'Motion Graphics',
    desc: 'Dynamic animations and kinetic typography for digital and broadcast media.',
  },
  {
    icon: <CubeIcon />,
    title: '3D Animation',
    desc: 'Character animation, product visualization, and immersive 3D experiences.',
  },
  {
    icon: <SparkleIcon />,
    title: 'Visual Effects',
    desc: 'Compositing, particle systems, and photo-realistic VFX integration.',
  },
  {
    icon: <PaletteIcon />,
    title: 'Brand Design',
    desc: 'Logo animation, brand guidelines, and visual identity systems.',
  },
  {
    icon: <CursorIcon />,
    title: 'UI/UX Animation',
    desc: 'Micro-interactions, transitions, and interface animation design.',
  },
  {
    icon: <BulbIcon />,
    title: 'Creative Direction',
    desc: 'Concept development, storyboarding, and art direction.',
  },
]

// Unicolor (accent purple) badges — clean & unified.
const tools = [
  { name: 'After Effects', abbr: 'Ae'  },
  { name: 'Cinema 4D',     abbr: 'C4D' },
  { name: 'Blender',       abbr: 'Bl'  },
  { name: 'Premiere Pro',  abbr: 'Pr'  },
  { name: 'Photoshop',     abbr: 'Ps'  },
  { name: 'Illustrator',   abbr: 'Ai'  },
  { name: 'Figma',         abbr: 'F'   },
  { name: 'Unity',         abbr: 'U'   },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="skills-inner">
        <Reveal className="skills-header" delay={0}>
          <span className="skills-kicker">What I do</span>
          <h2 className="skills-title">Skills <span className="amp">&amp;</span> Services</h2>
          <p className="skills-sub">Bringing ideas to life through movement and interaction.</p>
        </Reveal>

        <div className="skills-grid">
          {services.map((s, i) => (
            <Reveal className="skill-card" delay={0.05 + i * 0.05} key={s.title}>
              <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 280, damping: 22 }}>
                <span className="skill-card-icon">{s.icon}</span>
                <h3 className="skill-card-title">{s.title}</h3>
                <p className="skill-card-desc">{s.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal className="tools-block" delay={0.1}>
          <h3 className="tools-heading">Tools <span className="amp">&amp;</span> Software</h3>
          <div className="tools-row">
            {tools.map((t) => (
              <div className="tool-pill" key={t.name}>
                <span className="tool-badge">{t.abbr}</span>
                <span className="tool-name">{t.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
