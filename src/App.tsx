import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Awards from './components/sections/Awards'
import Projects from './components/sections/Projects'
import Hackathons from './components/sections/Hackathons'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Skills from './components/sections/Skills'
import Writing from './components/sections/Writing'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-primary font-sans">
      <Navbar />
      <main>
        <Hero />
        <hr className="section-divider" />
        <Awards />
        <hr className="section-divider" />
        <Projects />
        <hr className="section-divider" />
        <Hackathons />
        <hr className="section-divider" />
        <Experience />
        <hr className="section-divider" />
        <Education />
        <hr className="section-divider" />
        <Skills />
        <hr className="section-divider" />
        <Writing />
        <hr className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
