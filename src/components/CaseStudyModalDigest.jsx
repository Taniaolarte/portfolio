import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── Mini wizard demo — the product's three steps, no API call ─────────────
function WizardDemo({ mode, m }) {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [stage, setStage] = useState(m.stages[1])
  const [chips1, setChips1] = useState([m.chips1[0]])
  const [chips2, setChips2] = useState([m.chips2[0], m.chips2[1]])
  const [tip, setTip] = useState(0)
  const timers = useRef([])

  useEffect(() => {
    setStep(1); setName(''); setDesc('')
    setStage(m.stages[1]); setChips1([m.chips1[0]]); setChips2([m.chips2[0], m.chips2[1]])
  }, [mode]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const toggle = (list, set, v) => set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v])

  const build = () => {
    setStep(4); setTip(0)
    timers.current.forEach(clearTimeout)
    timers.current = m.tips.map((_, i) => setTimeout(() => setTip(i), i * 650))
    timers.current.push(setTimeout(() => setStep(5), m.tips.length * 650 + 500))
  }

  const projectName = name || m.example.name

  return (
    <div className="csd-wiz">
      <div className="csd-wiz-bar">
        {[1, 2, 3].map((n) => (
          <button key={n} className={`csd-wiz-dot${step === n ? ' on' : ''}${step > n ? ' done' : ''}`}
            onClick={() => step < 4 && setStep(n)} disabled={step >= 4}>
            <span>{n}</span>{n === 1 ? m.step1 : n === 2 ? 'About you' : 'Themes & types'}
          </button>
        ))}
        <span className="csd-wiz-free">Replica · nothing is sent</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={step} className="csd-wiz-pane"
          initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -14 }}
          transition={{ duration: 0.2 }}>
          {step === 1 && (
            <>
              <h4>{m.step1}</h4>
              <label className="csd-field">
                <span>Project name</span>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder={m.example.name} />
              </label>
              <label className="csd-field">
                <span>One or two sentences</span>
                <textarea rows={3} value={desc} onChange={(e) => setDesc(e.target.value)} placeholder={m.example.desc} />
              </label>
              <div className="csd-wiz-actions">
                <button className="csd-ghost" onClick={() => { setName(m.example.name); setDesc(m.example.desc) }}>Fill with example</button>
                <button className="csd-primary" onClick={() => setStep(2)}>Next →</button>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <h4>About you</h4>
              <div className="csd-grid2">
                <label className="csd-field"><span>Name</span><input placeholder="Tania" readOnly /></label>
                <label className="csd-field"><span>Location · citizenship (for eligibility)</span><input placeholder="Melbourne, Australia · Colombian" readOnly /></label>
              </div>
              <div className="csd-field">
                <span>Career stage</span>
                <div className="csd-chips">
                  {m.stages.map((s) => (
                    <button key={s} className={`csd-chip${stage === s ? ' on' : ''}`} onClick={() => setStage(s)}>{s}</button>
                  ))}
                </div>
              </div>
              <div className="csd-field">
                <span>{m.chips1Label}</span>
                <div className="csd-chips">
                  {m.chips1.map((c) => (
                    <button key={c} className={`csd-chip${chips1.includes(c) ? ' on' : ''}`} onClick={() => toggle(chips1, setChips1, c)}>{c}</button>
                  ))}
                </div>
              </div>
              <div className="csd-wiz-actions">
                <button className="csd-ghost" onClick={() => setStep(1)}>← Back</button>
                <button className="csd-primary" onClick={() => setStep(3)}>Next →</button>
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <h4>Themes &amp; opportunity types</h4>
              <div className="csd-field">
                <span>{m.chips2Label}</span>
                <div className="csd-chips">
                  {m.chips2.map((c) => (
                    <button key={c} className={`csd-chip${chips2.includes(c) ? ' on' : ''}`} onClick={() => toggle(chips2, setChips2, c)}>{c}</button>
                  ))}
                </div>
              </div>
              <label className="csd-field">
                <span>Eligibility notes · sources you follow · exclusions <em>(optional)</em></span>
                <input placeholder="e.g. skip anything requiring travel to the US" readOnly />
              </label>
              <div className="csd-wiz-actions">
                <button className="csd-ghost" onClick={() => setStep(2)}>← Back</button>
                <button className="csd-primary" onClick={build}>Build my digest →</button>
              </div>
            </>
          )}
          {step === 4 && (
            <div className="csd-loader">
              <span className="csd-spinner" aria-hidden="true" />
              <h4>Building your digest…</h4>
              <p className="csd-tip">{m.tips[tip]}</p>
              <p className="csd-loader-note">The free tier matches against the curated catalog instantly. The recurring tiers take 60–120 seconds while Claude runs up to ten live searches.</p>
            </div>
          )}
          {step === 5 && (
            <div className="csd-result">
              <div className="csd-result-head">
                <span className="csd-sample">SAMPLE OUTPUT</span>
                <h4>{m.subject} — {projectName} ✦</h4>
                <div className="csd-result-actions">
                  <span>Copy (rich text)</span><span>Copy HTML</span><span>Copy plain text</span><span>Print / PDF</span>
                </div>
              </div>
              <ul className="csd-result-list">
                {m.result.map((r) => (
                  <li key={r.name}>
                    <span className="csd-rtag">{r.tag}</span>
                    <strong>{r.name}</strong>
                    <span className="csd-rmeta">{r.meta}</span>
                    <span className="csd-rwhy">{r.why}</span>
                  </li>
                ))}
              </ul>
              <div className="csd-wiz-actions">
                <button className="csd-ghost" onClick={() => setStep(1)}>Start over</button>
                <a className="csd-primary" href="https://dissemination.eggn.io/" target="_blank" rel="noopener noreferrer">Open the live tool ↗</a>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ── Modal ─────────────────────────────────────────────────────────────────
export default function CaseStudyModalDigest({ hero, onClose }) {
  const [mode, setMode] = useState('creative')
  const [openQ, setOpenQ] = useState(0)
  const [shot, setShot] = useState(0)

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
  const m = cs.modes[mode]
  const shots = cs.workspace?.shots || []

  return (
    <AnimatePresence>
      <motion.div
        className="csd-overlay"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <motion.article
          className="csd-modal"
          data-mode={mode}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <button className="csd-close" onClick={onClose} aria-label="Close">×</button>

          <header className="csd-topbar">
            <span className="csd-brand">
              {cs.logo && <img src={cs.logo} alt="" />}
              Dissemination Digest
              {cs.version && <span className="csd-ver">{cs.version}</span>}
            </span>
            <nav className="csd-nav">
              <a href="#csd-origin">ORIGIN</a>
              <a href="#csd-try">THE FORM</a>
              <a href="#csd-engines">ENGINES</a>
              <a href="#csd-workspace">WORKSPACE</a>
              <a href="#csd-build">BUILD</a>
              <a href="#csd-decisions">DECISIONS</a>
              <a className="csd-live" href={cs.liveUrl} target="_blank" rel="noopener noreferrer">Open live ↗</a>
            </nav>
          </header>

          {/* HERO with the product's mode toggle */}
          <section className="csd-hero">
            <div className="csd-toggle" role="tablist" aria-label="Mode">
              {Object.entries(cs.modes).map(([k, v]) => (
                <button key={k} role="tab" aria-selected={mode === k}
                  className={`csd-toggle-btn${mode === k ? ' on' : ''}`} onClick={() => setMode(k)}>
                  <span aria-hidden="true">{v.emoji}</span> {v.label}
                </button>
              ))}
              <span className="csd-toggle-thumb" aria-hidden="true" />
            </div>

            <h1 className="csd-h1">
              Find{' '}
              <AnimatePresence mode="wait">
                <motion.span key={mode} className="csd-hl"
                  initial={{ opacity: 0, rotate: 0, y: 6 }} animate={{ opacity: 1, rotate: -2.5, y: 0 }}
                  exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }}>
                  {m.phrase}
                </motion.span>
              </AnimatePresence>{' '}
              {m.suffix}
            </h1>
            <p className="csd-sub">{cs.overview}</p>

            <div className="csd-float">
              {m.cards.map((c, i) => (
                <motion.div key={`${mode}-${c.name}`} className="csd-fcard" style={{ '--i': i }}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 * i, duration: 0.3 }}>
                  <span className="csd-ftag">{c.tag}</span>
                  <strong>{c.name}</strong>
                  <span className="csd-fmeta">{c.meta}</span>
                </motion.div>
              ))}
            </div>
            <p className="csd-hero-note">
              The toggle above is the real one from the app: mode changes the palette, the vocabulary <em>and</em> the prompt. Flip it and the whole case study follows.
            </p>
          </section>

          {/* ORIGIN */}
          {cs.origin && (
            <section id="csd-origin" className="csd-section csd-problem">
              <div className="csd-inner csd-cols">
                <div>
                  <span className="csd-step">{cs.origin.eyebrow}</span>
                  <h2 className="csd-h2">{cs.origin.title}</h2>
                </div>
                <div className="csd-problem-list">
                  <p>{cs.origin.body}</p>
                  <ul>
                    {cs.origin.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* THE FORM — wizard replica */}
          <section id="csd-try" className="csd-section">
            <div className="csd-inner">
              <div className="csd-head">
                <span className="csd-step">THE FORM</span>
                <h2 className="csd-h2">Three short steps, then a digest</h2>
                <p className="csd-lede">A working replica of the wizard. The real one asks for the same things: what the work is, who you are and where you can apply from, and which formats you actually want.</p>
              </div>
              <WizardDemo mode={mode} m={m} />
            </div>
          </section>

          {/* ENGINES — free vs recurring */}
          {cs.tiers?.length > 0 && (
            <section id="csd-engines" className="csd-section csd-ws">
              <div className="csd-inner">
                <div className="csd-head">
                  <span className="csd-step">TWO ENGINES</span>
                  <h2 className="csd-h2">A curated database for the free snapshot. Claude with live search for the rest.</h2>
                </div>
                <div className="csd-tiers">
                  {cs.tiers.map((t) => (
                    <div className="csd-tier" key={t.tier}>
                      <span className="csd-tier-tag">{t.tier}</span>
                      <h3>{t.engine}</h3>
                      <p>{t.body}</p>
                      <ul>{t.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                    </div>
                  ))}
                </div>
                {cs.flow?.length > 0 && (
                  <ol className="csd-flow">
                    {cs.flow.map((f, i) => (
                      <li key={f.id}>
                        <div className="csd-flow-node">
                          <strong>{f.label}</strong>
                          <span>{f.sub}</span>
                        </div>
                        {i < cs.flow.length - 1 && <span className="csd-flow-arrow" aria-hidden="true">→</span>}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </section>
          )}

          {/* WORKSPACE */}
          {cs.workspace && (
            <section id="csd-workspace" className="csd-section">
              <div className="csd-inner">
                <div className="csd-head">
                  <span className="csd-step">{cs.workspace.eyebrow}</span>
                  <h2 className="csd-h2">{cs.workspace.title}</h2>
                  <p className="csd-lede">{cs.workspace.body}</p>
                </div>

                {shots.length > 0 && (
                  <div className="csd-shots">
                    <div className="csd-shots-tabs" role="tablist" aria-label="Workspace screens">
                      {shots.map((s, i) => (
                        <button key={s.src} role="tab" aria-selected={shot === i}
                          className={`csd-shots-tab${shot === i ? ' on' : ''}`} onClick={() => setShot(i)}>
                          {s.caption.split(' · ')[0]}
                        </button>
                      ))}
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.figure key={shots[shot].src} className="csd-shot"
                        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}>
                        <img src={shots[shot].src} alt={shots[shot].caption} loading="lazy" />
                        <figcaption>{shots[shot].caption}</figcaption>
                      </motion.figure>
                    </AnimatePresence>
                  </div>
                )}

                <div className="csd-features">
                  {cs.workspace.features.map((f) => (
                    <div className="csd-feature" key={f.label}>
                      <h4>{f.label}</h4>
                      <p>{f.body}</p>
                    </div>
                  ))}
                </div>
                <p className="csd-plan">{cs.workspace.plan}</p>
              </div>
            </section>
          )}

          {/* BUILD — timeline + stack */}
          {(cs.timeline?.length > 0 || cs.stack?.length > 0) && (
            <section id="csd-build" className="csd-section csd-ws">
              <div className="csd-inner">
                <div className="csd-head">
                  <span className="csd-step">HOW IT WAS BUILT</span>
                  <h2 className="csd-h2">No bundler, no framework, one file you can open in a browser</h2>
                </div>
                {cs.timeline?.length > 0 && (
                  <ol className="csd-timeline">
                    {cs.timeline.map((t) => (
                      <li key={t.title}>
                        <span className="csd-tl-date">{t.date}</span>
                        <div>
                          <h4>{t.title}</h4>
                          <p>{t.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                )}
                {cs.stack?.length > 0 && (
                  <div className="csd-stack">
                    {cs.stack.map((s) => (
                      <div className="csd-tool" key={s.name}>
                        <span className="csd-tool-group">{s.group}</span>
                        <h4>{s.name}</h4>
                        <p>{s.role}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* PRESENTED */}
          {cs.presented && (
            <section id="csd-presented" className="csd-section">
              <div className="csd-inner csd-cols">
                <div>
                  <span className="csd-step">{cs.presented.eyebrow}</span>
                  <h2 className="csd-h2">{cs.presented.title}</h2>
                </div>
                <div className="csd-problem-list">
                  <p>{cs.presented.body}</p>
                  <p><a className="csd-inline-link" href="/research">See the research page for the full output list →</a></p>
                </div>
              </div>
            </section>
          )}

          {/* DECISIONS */}
          {cs.decisions?.length > 0 && (
            <section id="csd-decisions" className="csd-section csd-ws">
              <div className="csd-inner">
                <div className="csd-head">
                  <span className="csd-step">DECISIONS LOG</span>
                  <h2 className="csd-h2">In case future-me forgets why</h2>
                </div>
                <ul className="csd-decisions">
                  {cs.decisions.map((d, i) => (
                    <li key={d.q} className={openQ === i ? 'open' : ''}>
                      <button onClick={() => setOpenQ(openQ === i ? -1 : i)} aria-expanded={openQ === i}>
                        <span className="csd-q">{d.q}</span>
                        <span className="csd-why" aria-hidden="true">{openQ === i ? '−' : 'why?'}</span>
                      </button>
                      <AnimatePresence initial={false}>
                        {openQ === i && (
                          <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }}>
                            {d.a}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* CREDITS */}
          <section className="csd-credits-section">
            <div className="csd-credits">
              {cs.credits?.map((c) => (
                <div className="csd-credit" key={c.label}>
                  <span className="csd-credit-lbl">{c.label}</span>
                  <span className="csd-credit-val">{c.value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="csd-closing">
            <h3 className="csd-closing-title">{cs.closing?.title}</h3>
            <p className="csd-closing-tag">{cs.closing?.tagline}</p>
            <div className="csd-closing-actions">
              <a className="csd-primary" href={cs.liveUrl} target="_blank" rel="noopener noreferrer">Open dissemination.eggn.io ↗</a>
              <button className="csd-back" onClick={onClose}>← Back to portfolio</button>
            </div>
          </section>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  )
}
