// Server entry used only at build time by scripts/prerender.mjs.
// Renders a Research route to static HTML so every /research page ships with
// its full text, headings and links already in the document.

import { renderToString } from 'react-dom/server'
import ResearchApp from './research/ResearchApp.jsx'
import { headFor, allResearchPaths } from './research/routes.js'

export { allResearchPaths, headFor }

export function renderPage(pathname) {
  return {
    html: renderToString(<ResearchApp pathname={pathname} />),
    head: headFor(pathname),
  }
}
