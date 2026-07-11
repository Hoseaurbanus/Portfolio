import { useEffect } from 'react'
import Nav from './components/layout/Nav'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Philosophy from './components/sections/Philosophy'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Services from './components/sections/Services'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import GitHubActivity from './components/sections/GitHubActivity'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Philosophy />
        <Projects />
        <Skills />
        <Services />
        <Experience />
        <Education />
        <GitHubActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
