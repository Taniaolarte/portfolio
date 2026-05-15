import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// White-background long-form case study — editorial layout inspired by
// cargo.site / wixsite portfolio pages. Order follows user spec:
//   Description → Video → Achievements → Body text → GIF/image grids → Process stages
export default function CaseStudyModalLight({ hero, onClose }) {
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
        className="csl-overlay"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.article
          className="csl-modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <button className="csl-close" onClick={onClose} aria-label="Close">×</button>

          {/* 1 — DESCRIPTION */}
          <header className="csl-header">
            <p className="csl-eyebrow">{cs.client || hero.subtitle}</p>
            <h1 className="csl-title">{hero.title}</h1>
            {cs.overview && <p className="csl-lede">{cs.overview}</p>}
            {cs.credits && (
              <div className="csl-credits">
                {cs.credits.map((row, i) => (
                  <div key={i} className="csl-credit-row">
                    <span className="csl-credit-label">{row.label}</span>
                    <span className="csl-credit-value">{row.value}</span>
                  </div>
                ))}
              </div>
            )}
          </header>

          {/* 2 — VIDEO */}
          {(ytId || cs.reelUrl) && (
            <section className="csl-media-hero">
              {ytId ? (
                <div className="csl-video-frame">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${ytId}?start=${ytStart}&modestbranding=1&rel=0&playsinline=1`}
                    title={`${hero.title} reel`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <video src={cs.reelUrl} controls playsInline preload="metadata" poster={cs.coverImage} />
              )}
            </section>
          )}

          {/* 3 — SUCCESS / RECOGNITION */}
          {cs.awards?.length > 0 && (
            <section className="csl-awards">
              <h2 className="csl-section-title">Recognition</h2>
              <div className="csl-awards-grid">
                {cs.awards.map((a, i) => (
                  <div key={i} className="csl-award">
                    <span className="csl-award-name">{a.name}</span>
                    {a.year && <span className="csl-award-year">{a.year}</span>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 4 — BODY TEXT */}
          {cs.body && (
            <section className="csl-chapter">
              <p className="csl-body">{cs.body}</p>
            </section>
          )}

          {/* 5 — GIF / IMAGE GRID */}
          {cs.gallery?.length > 0 && (
            <section className="csl-gallery">
              {cs.gallery.map((src, i) => (
                <img key={i} src={src} alt={`${hero.title} ${i + 1}`} loading="lazy" />
              ))}
            </section>
          )}

          {/* 6 — PROCESS STAGES */}
          {cs.chapters?.map((ch, i) => (
            <section key={i} className="csl-chapter">
              {ch.eyebrow && <p className="csl-eyebrow">{ch.eyebrow}</p>}
              <h2 className="csl-section-title">{ch.title}</h2>
              {ch.body && <p className="csl-body">{ch.body}</p>}
              {ch.media?.length > 0 && (
                <div className={`csl-media-grid csl-media-grid--${Math.min(ch.media.length, 4)}`}>
                  {ch.media.map((m, j) => (
                    <figure key={j} className="csl-media-item">
                      <img src={m.src} alt={m.alt || ''} />
                      {m.caption && <figcaption>{m.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              )}
            </section>
          ))}

          {cs.behanceProjectId && (
            <section className="csl-chapter csl-behance">
              <h2 className="csl-section-title">Full Case Study on Behance</h2>
              <div className="csl-behance-frame">
                <iframe
                  src={`https://www.behance.net/embed/project/${cs.behanceProjectId}?ilo0=1`}
                  title={`${hero.title} on Behance`}
                  allowFullScreen
                  allow="clipboard-write"
                  referrerPolicy="strict-origin-when-cross-origin"
                  frameBorder="0"
                />
              </div>
            </section>
          )}

          <footer className="csl-footer">
            {cs.liveUrl && (
              <a className="csl-cta" href={cs.liveUrl} target="_blank" rel="noopener noreferrer">
                Visit Live Site ↗
              </a>
            )}
            <button className="csl-back" onClick={onClose}>← Back to portfolio</button>
          </footer>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  )
}
