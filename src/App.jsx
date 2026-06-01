import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Clients from './components/Clients.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'
import Stickers from './components/Stickers.jsx'
import HiddenAwards from './components/HiddenAwards.jsx'

// Secrets to unlock the hidden Honours & Research page. Three ways in:
//   1. Type "naibu" anywhere (desktop) — her thesis game, on the hidden self.
//   2. Tap/click the hero jellyfish 5× quickly (works on mobile — see Hero.jsx).
//   3. Open #/honours directly (shareable / bookmarkable on any device).
// Change the word/hash here freely.
const SECRET_WORD = 'naibu'
const SECRET_HASH = '#/honours'

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
  const [vaultOpen, setVaultOpen] = useState(
    () => typeof window !== 'undefined' && window.location.hash === SECRET_HASH
  )
  const buffer = useRef('')
  const timer = useRef(null)

  // Magic word: accumulate typed letters and open when the secret is spelled out.
  useEffect(() => {
    const onKey = (e) => {
      const tag = e.target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target?.isContentEditable) return
      if (e.key.length !== 1 || !/[a-z]/i.test(e.key)) return
      buffer.current = (buffer.current + e.key.toLowerCase()).slice(-SECRET_WORD.length)
      if (buffer.current === SECRET_WORD) {
        setVaultOpen(true)
        buffer.current = ''
      }
      clearTimeout(timer.current)
      timer.current = setTimeout(() => { buffer.current = '' }, 2000)
    }
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('keydown', onKey); clearTimeout(timer.current) }
  }, [])

  // Shareable backup: open via the secret hash, and react to back/forward.
  useEffect(() => {
    const onHash = () => setVaultOpen(window.location.hash === SECRET_HASH)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const closeVault = () => {
    setVaultOpen(false)
    if (window.location.hash === SECRET_HASH) {
      history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }

  return (
    <div className="app-root">
      <GlobalSvgDefs />
      <Stickers />
      <Navbar />
      <Hero onSecret={() => setVaultOpen(true)} />
      <About />
      <Skills />
      <Clients />
      <Work />
      <Contact />
      <HiddenAwards open={vaultOpen} onClose={closeVault} />
    </div>
  )
}
