import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CaseStudyModal({ hero, onClose }) {
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
  const cover = cs.coverImage || hero.bgImage
  const fallbackGradient = hero.bgGradient || 'linear-gradient(135deg,#1a0f3d 0%,#5a4fcf 50%,#a855f7 100%)'
  const ytMatch = cs.youtubeUrl?.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/)
  const ytId = ytMatch?.[1]

  return (
    <AnimatePresence>
      <motion.div
        className="cs-overlay"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="cs-modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.97 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <button className="cs-close" onClick={onClose} aria-label="Close">×</button>

          <div className="cs-body">
            <header className="cs-header">
              {(hero.badges || hero.badge) && (
                <div className="cs-header-badges">
                  {(hero.badges || [hero.badge]).map((b, i) => <span key={i}>{b}</span>)}
                </div>
              )}
              <h2>{hero.title}</h2>
              {(hero.subtitle || hero.client) && <p className="cs-header-sub">{hero.subtitle || hero.client}</p>}
            </header>

            <div className="cs-meta">
              {cs.client && <div><span>Client</span>{cs.client}</div>}
              {cs.year && <div><span>Year</span>{cs.year}</div>}
              {cs.role && <div><span>Role</span>{cs.role}</div>}
              {cs.tools && <div><span>Tools</span>{cs.tools.join(' · ')}</div>}
            </div>

            {cs.liveUrl && (
              <a className="cs-live-link" href={cs.liveUrl} target="_blank" rel="noopener noreferrer">
                Visit Live Site ↗
              </a>
            )}

            {cs.tags && (
              <div className="cs-tags">
                {cs.tags.map((t, i) => <span key={i} className="cs-tag">{t}</span>)}
              </div>
            )}

            {cs.overview && (
              <section className="cs-section cs-overview">
                <h3>Overview</h3>
                <p>{cs.overview}</p>
              </section>
            )}

            {ytId && (
              <section className="cs-section cs-reel">
                <h3>Reel</h3>
                <div className="cs-reel-frame">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${ytId}?start=${cs.youtubeStart || 0}&modestbranding=1&rel=0&playsinline=1`}
                    title={`${hero.title} reel`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <a className="cs-reel-link" href={cs.youtubeUrl} target="_blank" rel="noopener noreferrer">
                  Watch on YouTube ↗
                </a>
              </section>
            )}

            {!ytId && cs.reelUrl && (
              <section className="cs-section cs-reel">
                <h3>Reel</h3>
                <video src={cs.reelUrl} controls playsInline preload="metadata" />
              </section>
            )}

            {cs.behanceProjectId && (
              <section className="cs-section cs-behance">
                <h3>Case Study on Behance</h3>
                <div className="cs-behance-frame">
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

            {cs.figmaEmbedUrl && (
              <section className="cs-section cs-figma">
                <h3>Interactive Prototype</h3>
                <div className="cs-figma-frame">
                  <iframe
                    src={cs.figmaEmbedUrl}
                    title={`${hero.title} Figma prototype`}
                    allowFullScreen
                  />
                </div>
              </section>
            )}

            {cs.gallery && cs.gallery.length > 0 && (
              <section className="cs-section cs-gallery">
                <h3>Gallery</h3>
                <div className="cs-gallery-grid">
                  {cs.gallery.map((src, i) => (
                    <img key={i} src={src} alt={`${hero.title} ${i + 1}`} loading="lazy" />
                  ))}
                </div>
              </section>
            )}

            {cs.sections?.map((s, i) => (
              <section className="cs-section" key={i}>
                <h3>{s.heading}</h3>
                <p>{s.body}</p>
              </section>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
