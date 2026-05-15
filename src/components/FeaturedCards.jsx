import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function CinemaHero({ hero, onOpen }) {
  const [playing, setPlaying] = useState(false)
  const overlayClass =
    hero.overlay === 'blue' ? 'scrim-blue' :
    hero.overlay === 'warm' ? 'scrim-warm' :
    hero.overlay === 'dark' ? 'scrim-dark' : ''
  const ytMatch = hero.caseStudy?.youtubeUrl?.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/)
  const ytId = ytMatch?.[1]
  const ytStart = hero.caseStudy?.youtubeStart || 0
  const reelUrl = hero.caseStudy?.reelUrl
  const hasInlineVideo = ytId || reelUrl

  return (
    <div className="cinema-card">
      <div className="cinema-bg" style={hero.bgGradient ? { background: hero.bgGradient } : undefined}>
        {hero.bgImage && <img src={hero.bgImage} alt="" />}
      </div>
      {playing && ytId && (
        <iframe
          className="cinema-video"
          src={`https://www.youtube-nocookie.com/embed/${ytId}?start=${ytStart}&autoplay=1&modestbranding=1&rel=0&playsinline=1`}
          title={`${hero.title} reel`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
      {playing && !ytId && reelUrl && (
        <video
          className="cinema-video"
          src={reelUrl}
          autoPlay
          controls
          playsInline
        />
      )}
      <div className={`cinema-scrim ${overlayClass}${playing && hasInlineVideo ? ' hidden' : ''}`} />

      <AnimatePresence>
        {!playing && (
          <motion.div
            className="cinema-info"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25 }}
          >
            {hero.badges?.length > 0 && (
              <div className="cinema-tags">
                {hero.badges.map((b, i) => <span key={i} className="cinema-tag">{b}</span>)}
              </div>
            )}
            <h3 className="cinema-title">{hero.title}</h3>
            {hero.subtitle && <p className="cinema-sub">{hero.subtitle}</p>}
            {hero.description && <p className="cinema-desc">{hero.description}</p>}
            <div className="cinema-bottom">
              {!hero.hideCaseButton && (
                <button type="button" className="cinema-cta" onClick={onOpen}>
                  {hero.cta || 'View Case Study'} →
                </button>
              )}
              {hero.meta && <span className="cinema-meta">{hero.meta}</span>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className={`cinema-play${playing ? ' playing' : ''}`}
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? 'Pause' : 'Play'}
      >
        {playing ? '❚❚' : '▶'}
      </button>

      {!(playing && hasInlineVideo) && (
        <div className="cinema-progress">
          <span className="cinema-time">00:00</span>
          <div className="cinema-prog-bg">
            <motion.div
              className="cinema-prog-fill"
              initial={{ width: '12%' }}
              animate={{ width: playing ? '100%' : '12%' }}
              transition={{ duration: playing ? 120 : 0.4, ease: 'linear' }}
            />
          </div>
          <span className="cinema-time">{hero.duration || '00:00'}</span>
        </div>
      )}
    </div>
  )
}

function CollageHero({ hero, onOpen }) {
  const tagClass = (c) => `tag tag-${c}`
  return (
    <div className="featured-card featured-digital">
      <div className="featured-left">
        {hero.badge && <span className="featured-badge">{hero.badge}</span>}
        <h3 className="featured-title">{hero.title}</h3>
        {hero.client && <p className="featured-client">{hero.client}</p>}
        {hero.description?.length > 0 && (
          <div className="featured-desc">
            {hero.description.map((p, i) => (
              <p key={i}>{p}{i < hero.description.length - 1 ? <><br /><br /></> : null}</p>
            ))}
          </div>
        )}
        {hero.tags && (
          <div className="featured-tags">
            {hero.tags.map((t, i) => <span key={i} className={tagClass(t.color)}>{t.label}</span>)}
          </div>
        )}
        {!hero.hideCaseButton && (
          <button type="button" className="featured-cta" onClick={onOpen}>
            {hero.cta || 'View Case Study'} →
          </button>
        )}
        <div className="featured-divider" />
        {hero.metaTop && <p className="featured-meta">{hero.metaTop}</p>}
        {hero.metaSub && <p className="featured-meta-sub">{hero.metaSub}</p>}
      </div>
      <div className="featured-right">
        {hero.mockups?.map((m, i) => (
          <div key={i} className={`mockup ${m.class}${m.img ? ' has-img' : ''}`}>
            {m.img ? <img src={m.img} alt={m.label} /> : m.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function FeaturedHero({ hero, onOpen }) {
  if (!hero) return null
  return hero.layout === 'collage'
    ? <CollageHero hero={hero} onOpen={onOpen} />
    : <CinemaHero  hero={hero} onOpen={onOpen} />
}
