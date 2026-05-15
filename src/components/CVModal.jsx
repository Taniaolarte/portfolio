import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CVModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="cv-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="cv-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="cv-modal-head">
              <span className="cv-modal-title">Tania Olarte — CV</span>
              <div className="cv-modal-actions">
                <a className="cv-modal-btn" href="/Tania_Olarte_CV.pdf" download>Download PDF</a>
                <button className="cv-modal-close" onClick={onClose} aria-label="Close">×</button>
              </div>
            </div>
            <iframe
              src="/Tania_Olarte_CV.pdf#toolbar=0&navpanes=0"
              title="Tania Olarte CV"
              className="cv-modal-frame"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
