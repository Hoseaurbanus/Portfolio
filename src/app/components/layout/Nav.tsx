import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import type { NavLink } from '@/types'

const ease = [0.22, 1, 0.36, 1] as const

const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    setTimeout(() => scrollTo(href), 100)
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border'
            : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-sm font-bold tracking-widest text-foreground hover:text-accent transition-colors duration-200"
          >
            HUA
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => handleNav(href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => handleNav('#contact')}
              className="px-4 py-2 text-sm font-medium bg-accent text-white rounded-md hover:bg-accent/90 active:scale-95 transition-all duration-200"
            >
              Hire Me
            </button>
          </div>

          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease }}
            className="fixed inset-0 z-40 bg-background flex flex-col px-8 pt-24 md:hidden"
          >
            <div className="flex flex-col gap-7 mt-6">
              {navLinks.map(({ label, href }) => (
                <button
                  key={label}
                  onClick={() => handleNav(href)}
                  className="text-left text-3xl font-serif font-bold text-foreground hover:text-accent transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              onClick={() => handleNav('#contact')}
              className="mt-12 px-6 py-3 bg-accent text-white text-base font-medium rounded-md"
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
