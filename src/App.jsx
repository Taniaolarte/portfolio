import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Clients from './components/Clients.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'
import Stickers from './components/Stickers.jsx'

// Hidden inline SVG defs — filters referenced from CSS via filter:url(#id).
// Roughens sticker/decoration edges for a hand-drawn, grainy feel.
function GlobalSvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <filter id="sticker-grain" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="1.8" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.6" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  )
}

export default function App() {
  return (
    <div className="app-root">
      <GlobalSvgDefs />
      <Stickers />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Clients />
      <Work />
      <Contact />
    </div>
  )
}
