import { forwardRef, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { categories, types, work, caseStudyIndex } from '../data/work.js'
import HeroCarousel from './HeroCarousel.jsx'
import CaseStudyModal from './CaseStudyModal.jsx'
import CaseStudyModalLight from './CaseStudyModalLight.jsx'
import Lightbox from './Lightbox.jsx'
import FairyTrail from './FairyTrail.jsx'

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.05 },
  },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.2 } },
}

const ProjectCard = forwardRef(function ProjectCard({ card, short, onOpenCase, onOpenLightbox }, ref) {
  const caseHero = card.caseStudyId ? caseStudyIndex[card.caseStudyId] : null
  const isCase = !!caseHero
  const [hovered, setHovered] = useState(false)

  const handleClick = () => {
    if (isCase) onOpenCase(caseHero)
    else onOpenLightbox(card)
  }

  return (
    <motion.div
      ref={ref}
      layout
      className={`project-card${short ? ' short' : ''}${isCase ? ' is-case' : ''}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleClick()
        }
      }}
    >
      {card.video ? (
        <video
          className="card-video-thumb"
          src={card.video}
          poster={card.poster}
          autoPlay muted loop playsInline
        />
      ) : card.img ? (
        <img src={card.img} alt={card.name} style={card.hoverVideo && hovered ? { opacity: 0 } : undefined} />
      ) : (
        <div className="card-bg" style={{ height: '100%', background: card.bg }} />
      )}
      {card.hoverVideo && hovered && !card.video && (
        <video
          className="card-hover-video"
          src={card.hoverVideo}
          autoPlay muted loop playsInline
        />
      )}
      <div className="card-grad" />
      {isCase && <span className="case-star" aria-label="Case study">✦</span>}
      <span
        className="card-tag"
        style={{ background: card.tagColor, ...(card.tagText && { color: card.tagText }) }}
      >
        {card.tag}
      </span>
      <span className="card-name">{card.name}</span>
      {card.itchUrl && (
        <a
          className="card-itch"
          href={card.itchUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          Play on itch.io →
        </a>
      )}
    </motion.div>
  )
})

const GRID_COLS = 3

const CategorySection = forwardRef(function CategorySection({ id, typeFilter, onOpenCase, onOpenLightbox }, ref) {
  const data = work[id]
  const [expanded, setExpanded] = useState(false)
  const visibleHeroes = data.heroes.filter((h) => typeFilter === 'all' || h.kind === typeFilter)
  const allCards = data.gallery.filter((c) => typeFilter === 'all' || c.kind === typeFilter)

  // Always show the first 3 (one row at GRID_COLS=3). Anything beyond hides
  // behind the "See more" toggle.
  const initialCount = Math.min(allCards.length, GRID_COLS)
  const visibleCards = expanded ? allCards : allCards.slice(0, initialCount)
  const hasMore = allCards.length > initialCount

  if (visibleHeroes.length === 0 && allCards.length === 0) return null

  return (
    <motion.div
      ref={ref}
      id={id}
      className="work-category"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
    >
      <div className="work-category-header">
        <span className="work-cat-label">{data.header.label}</span>
        <h3 className="work-cat-title">{data.header.title}</h3>
        <div className="work-cat-line" />
      </div>

      <div className="work-category-body">
        {visibleHeroes.length > 0 && (
          <HeroCarousel heroes={visibleHeroes} onOpenCase={onOpenCase} />
        )}

        {visibleCards.length > 0 && (
          <motion.div className="project-grid" layout>
            <AnimatePresence mode="popLayout">
              {visibleCards.map((c, i) => (
                <ProjectCard
                  key={`${id}-${c.name}-${i}`}
                  card={c}
                  short={data.shortCards}
                  onOpenCase={onOpenCase}
                  onOpenLightbox={onOpenLightbox}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {hasMore && (
          <button
            type="button"
            className="see-more"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded
              ? `Show less ↑`
              : `See more (${allCards.length - initialCount}) →`}
          </button>
        )}
      </div>
    </motion.div>
  )
})

export default function Work() {
  const [type, setType] = useState('all')
  const [activeCat, setActiveCat] = useState('all')
  const [openCase, setOpenCase] = useState(null)
  const [openLightbox, setOpenLightbox] = useState(null)

  const visibleCategories = useMemo(
    () => (activeCat === 'all' ? categories : categories.filter((c) => c.id === activeCat)),
    [activeCat]
  )

  return (
    <section id="work">
      <div className="work-header">
        <h2 className="section-title">Selected <FairyTrail color="#f4d4a4">Work</FairyTrail><span className="dot">.</span></h2>

        <div className="work-type-filter">
          {types.map((t) => (
            <button
              key={t.id}
              className={`work-type-btn${type === t.id ? ' active' : ''}`}
              onClick={() => setType(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="work-cat-pills">
        <button
          className={`work-cat-pill${activeCat === 'all' ? ' active' : ''}`}
          onClick={() => setActiveCat('all')}
        >
          ALL CATEGORIES
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            className={`work-cat-pill${activeCat === c.id ? ' active' : ''}`}
            onClick={() => setActiveCat(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="work-body">
        <AnimatePresence mode="popLayout">
          {visibleCategories.map((c) => (
            <CategorySection
              key={c.id}
              id={c.id}
              typeFilter={type}
              onOpenCase={setOpenCase}
              onOpenLightbox={setOpenLightbox}
            />
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {openCase && (openCase.theme === 'light'
          ? <CaseStudyModalLight hero={openCase} onClose={() => setOpenCase(null)} />
          : <CaseStudyModal hero={openCase} onClose={() => setOpenCase(null)} />)}
      </AnimatePresence>

      <AnimatePresence>
        {openLightbox && <Lightbox card={openLightbox} onClose={() => setOpenLightbox(null)} />}
      </AnimatePresence>
    </section>
  )
}
