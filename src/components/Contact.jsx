import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { socialIcons, MailIcon } from './Icons.jsx'
import MagicWord from './MagicWord.jsx'

export default function Contact() {
  // 'idle' | 'sending' | 'sent' | 'error'
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    const form = e.target
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message || 'submit failed')
      setStatus('sent')
      form.reset()
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const sent = status === 'sent'
  const sending = status === 'sending'
  const errored = status === 'error'

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
          <Reveal as="a" className="contact-email-link" href="mailto:taniaolarteavila@gmail.com" delay={0.15}>
            <MailIcon />
            taniaolarteavila@gmail.com
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
          {/* Web3Forms — routes the submission to your email. The access_key is
              a public routing ID (NOT a secret), safe to commit. Get one at
              https://web3forms.com → enter your email → instant key in your inbox. */}
          <input type="hidden" name="access_key" value="ce297b1d-0b01-440a-a60c-f9cfcc008ebc" />
          <input type="hidden" name="from_name" value="Tania Olarte Portfolio" />
          {/* Honeypot bot trap — invisible to humans. */}
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} />

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input className="form-input" type="text" name="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" type="email" name="email" placeholder="your@email.com" required />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Subject</label>
            <input className="form-input" type="text" name="subject" placeholder="What's this about?" />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-textarea" name="message" placeholder="Tell me about your project…" required />
          </div>
          <button
            type="submit"
            className={`form-submit${sent ? ' sent' : ''}${errored ? ' error' : ''}`}
            disabled={sending}
          >
            {sending && 'Sending…'}
            {sent && '✓ Message sent!'}
            {errored && '✗ Failed — email me instead'}
            {status === 'idle' && 'Send Message →'}
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
