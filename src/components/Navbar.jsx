import { useEffect, useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setOpen(false)
    const target = document.querySelector(id)
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
    }
  }

  return (
    <nav>
      <a href="#" className="nav-logo" onClick={(e) => e.preventDefault()}>
        TANIA OLARTE<span>.</span>
        <span className="version-badge">v1.3.53</span>
      </a>

      <div className={`nav-links${open ? ' open' : ''}`}>
        <a href="#work" onClick={(e) => handleNavClick(e, '#work')}>Work</a>
        <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
        <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a>
        <a href="#contact" className="nav-cta" onClick={(e) => handleNavClick(e, '#contact')}>
          Let's Talk
        </a>
      </div>

      <button
        className={`nav-toggle${open ? ' open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
