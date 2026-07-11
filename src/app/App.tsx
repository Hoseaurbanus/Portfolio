import { useEffect, useState, useCallback, Component, type ReactNode } from 'react'
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
import BackToTop from './components/shared/BackToTop'
import Preloader from './components/shared/Preloader'

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-8">
          <div className="text-center max-w-md">
            <h2 className="font-serif text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="text-muted-foreground text-sm mb-6">
              An unexpected error occurred. Please refresh the page or try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-accent text-white text-sm font-medium rounded-md hover:bg-accent/90 transition-all"
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const handleComplete = useCallback(() => setLoaded(true), [])

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <ErrorBoundary>
      <Preloader onComplete={handleComplete} />
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
        <BackToTop />
      </div>
    </ErrorBoundary>
  )
}
