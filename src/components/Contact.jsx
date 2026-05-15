import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { socialIcons, MailIcon } from './Icons.jsx'
import MagicWord from './MagicWord.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      e.target.reset()
    }, 3000)
  }

  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="contact-left">
          <Reveal as="p" className="contact-lbl">Get In Touch</Reveal>
          <Reveal as="h2" className="contact-title" delay={0.05}>
            Let's Work<br /><MagicWord>Together</MagicWord>
          </Reveal>
          <Reveal as="p" className="contact-desc" delay={0.1}>
            Open to freelance projects, collaborations, and full-time opportunities in animation, interactive design, and <MagicWord>creative technology</MagicWord>.
          </Reveal>
          <Reveal as="a" className="contact-email-link" href="mailto:taniaolarte@yahoo.com" delay={0.15}>
            <MailIcon />
            taniaolarte@yahoo.com
          </Reveal>
          <Reveal className="contact-social-row" delay={0.2}>
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
        </div>

        <Reveal as="form" className="contact-form" onSubmit={handleSubmit} delay={0.1}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input className="form-input" type="text" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" type="email" placeholder="your@email.com" required />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Subject</label>
            <input className="form-input" type="text" placeholder="What's this about?" />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-textarea" placeholder="Tell me about your project…" required />
          </div>
          <button type="submit" className={`form-submit${sent ? ' sent' : ''}`}>
            {sent ? '✓ Message sent!' : 'Send Message →'}
          </button>
        </Reveal>
      </div>

      <div className="footer-divider" />
      <div className="footer-bottom">
        <span className="footer-logo">TANIA OLARTE<span>.</span></span>
        <span className="footer-copy">© 2026 Tania Olarte. All rights reserved.</span>
        <div className="footer-social">
          {socialIcons.map(({ Icon, label, href }) => {
            const isExternal = href.startsWith('http')
            return (
              <a
                key={label}
                href={href}
                title={label}
                aria-label={label}
                {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                <Icon width={14} height={14} />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
