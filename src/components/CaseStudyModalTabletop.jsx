import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Retro / vintage case-study layout — custom for the Tabletop Game Animation
// project ("What On Earth!"). Replicates the Figma Make design at
// figma.com/make/lowqIM77h5j0VLIrj6ntN7 — scoped under .cst-* so it doesn't
// affect the rest of the site's chrome.
export default function CaseStudyModalTabletop({ hero, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!hero) return null
  const cs = hero.caseStudy
  const ytMatch = cs.youtubeUrl?.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/)
  const ytId = ytMatch?.[1]
  const ytStart = cs.youtubeStart || 0

  return (
    <AnimatePresence>
      <motion.div
        className="cst-overlay"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.article
          className="cst-modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <button className="cst-close" onClick={onClose} aria-label="Close">×</button>

          {/* Vintage CRT scanlines + vignette */}
          <div className="cst-scanlines" aria-hidden="true" />
          <div className="cst-vignette" aria-hidden="true" />

          {/* HERO */}
          <section className="cst-hero">
            <div className="cst-stars" aria-hidden="true">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className={`cst-star cst-star-${i % 4}`} style={{ animationDelay: `${(i * 0.27) % 2}s` }} />
              ))}
            </div>
            <div className="cst-hero-inner">
              <span className="cst-pill">Retro Animation Case Study</span>
              <h1 className="cst-display">WHAT ON EARTH!</h1>
              <p className="cst-tagline">
                An interactive board game instructions animation — vintage TV, Cuphead-style rubber-hose,
                and atomic-age charm rolled into one.
              </p>
            </div>
          </section>

          {/* THE MISSION */}
          <section className="cst-section cst-section-cream">
            <div className="cst-dots" aria-hidden="true" />
            <div className="cst-mission">
              <span className="cst-corner cst-corner-tl" />
              <span className="cst-corner cst-corner-tr" />
              <span className="cst-corner cst-corner-bl" />
              <span className="cst-corner cst-corner-br" />
              <h2 className="cst-h2" style={{ ['--shadow']: '#7DCAC5' }}>THE MISSION</h2>
              <div className="cst-meta-row">
                <div><span className="cst-meta-lbl">The Setup</span><span className="cst-meta-val">Client provided script &amp; basic assets</span></div>
                <div><span className="cst-meta-lbl">The Role</span><span className="cst-meta-val">Lead Animator &amp; Asset Re-designer</span></div>
                <div><span className="cst-meta-lbl">The Format</span><span className="cst-meta-val">QR Code Board Game Instructions</span></div>
              </div>
              <p className="cst-p">
                "What On Earth!" isn't just a standard animation — it serves as the dynamic, interactive
                instruction manual for a physical board game. Players scan a QR code on the game board,
                which brings up this animated guide to teach them how to play.
              </p>
              <p className="cst-p">
                My core task was to take the client's script and base assets, completely recreate them as
                stylised game cards and tokens, and animate them in a vibrant, bouncy style. We merged
                classic 1930s rubber-hose animation (Cuphead), atomic-age 1950s instructional videos
                (Fallout), and the colourful exuberance of vintage Saturday-morning cartoons.
              </p>
            </div>
          </section>

          {/* BY THE NUMBERS */}
          <section className="cst-section cst-section-navy">
            <h2 className="cst-h2 cst-h2-light">BY THE NUMBERS</h2>
            <div className="cst-stats">
              <div className="cst-stat cst-stat-teal"><div className="cst-stat-n">120+</div><div className="cst-stat-l">Assets<br/>Redesigned</div></div>
              <div className="cst-stat cst-stat-coral cst-stat-down"><div className="cst-stat-n cst-stat-n-light">24</div><div className="cst-stat-l cst-stat-l-light">Unique Animated<br/>Sequences</div></div>
              <div className="cst-stat cst-stat-gold"><div className="cst-stat-n">3</div><div className="cst-stat-l">Board Mechanics<br/>Explained</div></div>
              <div className="cst-stat cst-stat-purple cst-stat-down"><div className="cst-stat-n cst-stat-n-light">1</div><div className="cst-stat-l cst-stat-l-light">Seamless QR<br/>Experience</div></div>
            </div>
          </section>

          {/* RETRO INSPIRATIONS */}
          <section className="cst-section cst-section-cream cst-section-stars">
            <h2 className="cst-h2" style={{ ['--shadow']: '#7DCAC5' }}>RETRO INSPIRATIONS</h2>
            <div className="cst-insp">
              <div className="cst-insp-card cst-insp-1">
                <h3>CUPHEAD CHARM</h3>
                <p>Rubber-hose limbs, bouncy idles, exaggerated physics. Every card and token tap-dances right off the board.</p>
              </div>
              <div className="cst-insp-card cst-insp-2">
                <h3>ATOMIC AGE</h3>
                <p>Cues from Fallout's PIP-boy: educational "instructional film" vibe of the 1950s blended with playful messaging.</p>
              </div>
              <div className="cst-insp-card cst-insp-3">
                <h3>CLASSIC TV</h3>
                <p>Halftone dots, slight print misalignments, starbursts, and limited but vibrant palettes — Saturday-morning magic.</p>
              </div>
            </div>
          </section>

          {/* STORYBOARDING */}
          <section className="cst-section cst-section-navy cst-section-teal-bord">
            <h2 className="cst-h2 cst-h2-gold" style={{ ['--shadow']: '#E8744F' }}>STORYBOARDING THE ACTION</h2>
            <div className="cst-filmstrip">
              <div className="cst-filmholes cst-filmholes-top" aria-hidden="true">
                {Array.from({ length: 15 }).map((_, i) => <span key={`t${i}`} />)}
              </div>
              <div className="cst-filmframe">
                <img src="/portfolio/assets/case-studies/escape-room-anim/poster.jpg" alt="Storyboard scene" />
              </div>
              <div className="cst-filmholes cst-filmholes-bot" aria-hidden="true">
                {Array.from({ length: 15 }).map((_, i) => <span key={`b${i}`} />)}
              </div>
            </div>
            <p className="cst-board-note">
              Before animating, everything was mapped out to align perfectly with the client's script. Every
              transition — card flip to token movement — carried that exaggerated, snappy retro animation weight.
            </p>
          </section>

          {/* SCRIPT TO SCREEN */}
          <section className="cst-section cst-section-teal">
            <div className="cst-script-grid">
              <div className="cst-script-left">
                <h2 className="cst-h2 cst-h2-gold" style={{ ['--shadow']: '#E8744F', textAlign: 'left' }}>SCRIPT TO SCREEN</h2>
                <p>The client provided a detailed table script outlining Voice Over vs. Visuals. My job was to translate those words into dynamic, retro-styled actions.</p>
                <span className="cst-pill cst-pill-coral">VOICE OVER MATCHING</span>
              </div>
              <div className="cst-script-right">
                <span className="cst-tape" aria-hidden="true" />
                <h3 className="cst-script-title">Production Script — Scene 01</h3>
                <table className="cst-script-table">
                  <thead><tr><th>AUDIO / V.O.</th><th>VISUAL ACTION</th></tr></thead>
                  <tbody>
                    <tr><td>"Welcome to WHAT ON EARTH!"</td><td>Title drops down like a heavy anvil, dust particles fly up. Retro starburst spins.</td></tr>
                    <tr><td>"First, place your Resource Cards here."</td><td>Cards hop out of the deck with rubber-hose legs and march onto the board slots.</td></tr>
                    <tr><td>"Watch out for the Pollution tokens!"</td><td>Token snarls at camera (Fallout-style warning popup). Sirens flash in two-tone.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* MEET THE PIECES */}
          <section className="cst-section cst-section-cream">
            <header className="cst-pieces-head">
              <h2 className="cst-h2" style={{ ['--shadow']: '#F4D03F' }}>MEET THE PIECES</h2>
              <p>Giving inanimate board game tokens a big personality.</p>
            </header>
            <div className="cst-pieces">
              <div className="cst-piece cst-piece-1">
                <div className="cst-piece-disc cst-piece-disc-teal">🌍</div>
                <h3>The Planet</h3>
                <p>The lovable mascot of the game board. Bounces to the beat and cheers when resources are gathered.</p>
              </div>
              <div className="cst-piece cst-piece-2">
                <div className="cst-piece-disc cst-piece-disc-coral">🛢️</div>
                <h3>Pollution Tokens</h3>
                <p>Sneaky hazards with grimacing faces that jitter and shake when placed on the board.</p>
              </div>
              <div className="cst-piece cst-piece-3">
                <div className="cst-piece-disc cst-piece-disc-gold">🃏</div>
                <h3>Action Cards</h3>
                <p>Endowed with rubber-hose arms — they physically pull elements across the screen.</p>
              </div>
            </div>
          </section>

          {/* ASSET RECREATION */}
          <section className="cst-section cst-section-navy">
            <header className="cst-pieces-head">
              <h2 className="cst-h2 cst-h2-light" style={{ ['--shadow']: '#E8744F' }}>ASSET RECREATION</h2>
              <p className="cst-pieces-head-sub">From basic client sketches to fully stylized game pieces.</p>
            </header>
            <div className="cst-assets">
              <figure className="cst-asset cst-asset-1">
                <img src="/portfolio/assets/case-studies/escape-room-anim/box-01.jpg" alt="Game box" />
                <figcaption>
                  <strong style={{ color: '#E8744F' }}>BRANDING &amp; BOX</strong>
                  <span>Thick-lined, bouncy aesthetic for the box art and physical product.</span>
                </figcaption>
              </figure>
              <figure className="cst-asset cst-asset-2">
                <img src="/portfolio/assets/case-studies/escape-room-anim/card-01.jpg" alt="Game cards" />
                <figcaption>
                  <strong style={{ color: '#7DCAC5' }}>GAME CARDS</strong>
                  <span>Reformatted text and visuals to match a 1950s TV game show interface.</span>
                </figcaption>
              </figure>
              <figure className="cst-asset cst-asset-3">
                <img src="/portfolio/assets/case-studies/escape-room-anim/poster.jpg" alt="Game board scene" />
                <figcaption>
                  <strong style={{ color: '#F4D03F' }}>THE GAME BOARD</strong>
                  <span>Isometric layouts animated to show players exactly where pieces go.</span>
                </figcaption>
              </figure>
            </div>
          </section>

          {/* COLOR PALETTE */}
          <section className="cst-section cst-section-navy cst-section-teal-top">
            <h2 className="cst-h2 cst-h2-light" style={{ ['--shadow']: '#E8744F' }}>THE RETRO PALETTE</h2>
            <div className="cst-swatches">
              {[
                { name: 'NAVY INK',           hex: '#2F3E6C' },
                { name: 'ATOMIC TEAL',        hex: '#7DCAC5' },
                { name: 'GOLDEN AGE',         hex: '#F4D03F' },
                { name: 'RADIOACTIVE CORAL',  hex: '#E8744F' },
                { name: 'TUBE TV PURPLE',     hex: '#6B5B95' },
              ].map((c) => (
                <div className="cst-swatch" key={c.hex}>
                  <div className="cst-swatch-disc" style={{ background: c.hex }} />
                  <span className="cst-swatch-tag">{c.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FINAL BROADCAST */}
          <section className="cst-section cst-section-cream cst-section-gold-top">
            <h2 className="cst-h2 cst-h2-massive" style={{ ['--shadow']: '#7DCAC5' }}>THE FINAL BROADCAST</h2>
            <p className="cst-broadcast-lead">Grab some popcorn and tune in — here's the final animated instruction manual.</p>
            <div className="cst-tv">
              <span className="cst-tv-antenna cst-tv-antenna-center" />
              <span className="cst-tv-antenna cst-tv-antenna-left" />
              <span className="cst-tv-antenna cst-tv-antenna-right" />
              <div className="cst-tv-bezel">
                <div className="cst-tv-screen">
                  {ytId && (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${ytId}?start=${ytStart}&modestbranding=1&rel=0`}
                      title={`${hero.title} reel`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                  <div className="cst-tv-glare" aria-hidden="true" />
                </div>
                <div className="cst-tv-dials" aria-hidden="true">
                  <div className="cst-tv-speaker">
                    {Array.from({ length: 6 }).map((_, i) => <span key={i} />)}
                  </div>
                  <div className="cst-tv-dial"><span /></div>
                  <div className="cst-tv-dial"><span style={{ transform: 'rotate(-12deg)' }} /></div>
                </div>
              </div>
              <span className="cst-tv-badge">Edu-Vision 2000</span>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="cst-foot">
            <div className="cst-foot-rays" aria-hidden="true" />
            <h3 className="cst-foot-title">READY TO PLAY?</h3>
            <p className="cst-foot-note">
              "What On Earth!" proves that instructions don't have to be boring. Vintage animation charm
              turned a rulebook into a Saturday-morning cartoon.
            </p>
            <button className="cst-foot-cta" onClick={onClose}>← Back to portfolio</button>
            <p className="cst-foot-copy">© 2026 Tania Olarte · Animated Case Study</p>
          </footer>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  )
}
