import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Lightbox({ card, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!card) return null
  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-overlay"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <button className="lightbox-close" onClick={onClose} aria-label="Close">×</button>

        <motion.figure
          className="lightbox-figure"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="lightbox-media">
            {card.youtubeId ? (
              <div className="lightbox-yt">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${card.youtubeId}?autoplay=1&modestbranding=1&rel=0&playsinline=1`}
                  title={card.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : card.video ? (
              <video src={card.video} poster={card.poster} controls autoPlay playsInline loop />
            ) : card.img ? (
              <img src={card.img} alt={card.name} />
            ) : (
              <div className="lightbox-media-fallback" style={{ background: card.bg }} />
            )}
          </div>
          <figcaption className="lightbox-caption">
            <span
              className="lightbox-tag"
              style={{ background: card.tagColor, ...(card.tagText && { color: card.tagText }) }}
            >
              {card.tag}
            </span>
            <h3>{card.name}</h3>
            {card.itchUrl && (
              <a
                className="lightbox-itch"
                href={card.itchUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Play on itch.io →
              </a>
            )}
            {card.liveUrl && (
              <a
                className="lightbox-itch"
                href={card.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Live Site ↗
              </a>
            )}
          </figcaption>
        </motion.figure>
      </motion.div>
    </AnimatePresence>
  )
}
