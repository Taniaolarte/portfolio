import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Clients from './components/Clients.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'
import Stickers from './components/Stickers.jsx'

export default function App() {
  return (
    <div className="app-root">
      <Stickers />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Clients />
      <Work />
      <Contact />
    </div>
  )
}
