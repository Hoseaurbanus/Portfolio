import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Download } from 'lucide-react'
import { ease } from '@/lib/constants'
import { scrollTo } from '@/lib/utils'
import type { NavLink } from '@/types'

const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'GitHub', href: '#opensource' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleNav = useCallback((href: string) => {
    setOpen(false)
    setTimeout(() => scrollTo(href), 350)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/85 backdrop-blur-2xl border-b border-border shadow-lg shadow-black/10'
            : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-14 sm:h-16 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-base font-bold tracking-tight text-foreground hover:text-accent transition-colors duration-200"
          >
            H<span className="text-accent">U</span>A
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const isActive = activeSection === href.replace('#', '')
              return (
                <button
                  key={label}
                  onClick={() => handleNav(href)}
                  className={`relative px-3 py-2 text-[13px] font-medium transition-colors duration-200 rounded-md ${
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-accent/10 border border-accent/20 rounded-md"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          <div className="hidden md:flex items-center gap-2.5">
            <motion.a
              href="/Hosea_Urbanus_Audu_CV.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-medium border border-border text-foreground rounded-lg hover:bg-card hover:border-border/80 transition-all duration-200 min-h-[44px]"
            >
              <Download size={13} />
              CV
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNav('#contact')}
              className="px-4 py-2 text-[13px] font-medium bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-200 min-h-[44px]"
            >
              Hire Me
            </motion.button>
          </div>

          <button
            className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.35, ease }}
              className="fixed inset-y-0 right-0 z-40 w-[75%] max-w-sm bg-background/95 backdrop-blur-2xl border-l border-border flex flex-col px-8 pt-20 md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map(({ label, href }, i) => {
                  const isActive = activeSection === href.replace('#', '')
                  return (
                    <motion.button
                      key={label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
                      onClick={() => handleNav(href)}
                      className={`text-left text-2xl sm:text-3xl font-display font-bold transition-colors py-3 min-h-[44px] flex items-center ${
                        isActive ? 'text-accent' : 'text-foreground hover:text-accent'
                      }`}
                    >
                      {label}
                    </motion.button>
                  )
                })}
              </div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.45 }}
                onClick={() => handleNav('#contact')}
                className="mt-8 px-6 py-3 bg-accent text-accent-foreground text-base font-medium rounded-lg w-full min-h-[44px]"
              >
                Hire Me
              </motion.button>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.52 }}
                href="/Hosea_Urbanus_Audu_CV.pdf"
                download
                className="mt-3 px-6 py-3 border border-border text-foreground text-base font-medium rounded-lg w-full min-h-[44px] flex items-center justify-center gap-2 hover:bg-card transition-all duration-200"
              >
                <Download size={15} />
                Download CV
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
