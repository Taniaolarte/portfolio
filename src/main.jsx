import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ResearchApp from './research/ResearchApp.jsx'
import { isResearchPath } from './research/routes.js'
import './styles.css'
import './research/research.css'

const container = document.getElementById('root')
const pathname = window.location.pathname

// Two roots on one bundle: the portfolio at /, the research section at
// /research and /research/<slug>.
const tree = (
  <React.StrictMode>
    {isResearchPath(pathname) ? <ResearchApp pathname={pathname} /> : <App />}
  </React.StrictMode>
)

// Research pages ship as prerendered HTML (see scripts/prerender.mjs), so they
// hydrate rather than re-render — the text is already on screen and readable
// before this script runs, or if it never runs at all.
if (container.hasChildNodes() && isResearchPath(pathname)) {
  ReactDOM.hydrateRoot(container, tree)
} else {
  ReactDOM.createRoot(container).render(tree)
}
