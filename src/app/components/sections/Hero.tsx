import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  MapPin,
} from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const roles = [
  'Full Stack Software Developer',
  'Data Analyst',
  'Physics Graduate',
]

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setRoleIdx((i) => (i + 1) % roles.length),
      2800
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(99,102,241,0.07)_0%,transparent_65%),radial-gradient(ellipse_50%_50%_at_80%_20%,rgba(99,102,241,0.04)_0%,transparent_55%)]" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-sm text-xs font-mono text-muted-foreground mb-10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
              <span className="w-px h-3 bg-border" />
              <MapPin size={11} />
              Nigeria
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease }}
              className="font-serif font-bold leading-[0.92] tracking-tight text-foreground mb-8"
              style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}
            >
              HOSEA
              <br />
              <span className="text-accent">URBANUS</span>
              <br />
              AUDU
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="h-6 mb-6 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIdx}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35, ease }}
                  className="text-xs font-mono tracking-[0.22em] text-muted-foreground uppercase"
                >
                  {roles[roleIdx]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease }}
              className="text-base lg:text-lg text-muted-foreground max-w-[520px] leading-[1.75] mb-10"
            >
              I engineer software that scales. With a foundation in physics and
              a passion for data-driven systems, I build full-stack products
              that are fast, maintainable, and designed to last.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <button
                onClick={() => scrollTo('#projects')}
                className="group flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-medium rounded-md hover:bg-accent/90 active:scale-95 transition-all duration-200"
              >
                View My Work
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-md hover:bg-card hover:border-border/60 active:scale-95 transition-all duration-200"
              >
                Get in Touch
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.25 }}
              className="flex items-center gap-1"
            >
              {[
                { Icon: Github, label: 'GitHub', href: 'https://github.com/hoseaaudu' },
                { Icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/hoseaaudu' },
                { Icon: Twitter, label: 'Twitter', href: 'https://twitter.com/hoseaaudu' },
                { Icon: Mail, label: 'Email', href: 'mailto:hosea.audu@gmail.com' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-card rounded-lg transition-all duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
            className="hidden lg:block"
          >
            <div className="relative w-full aspect-[3/4]">
              <div className="absolute inset-0 rounded-2xl border border-border overflow-hidden bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&h=853&fit=crop&auto=format"
                  alt="Hosea Urbanus Audu — portrait"
                  fetchPriority="high"
                  className="w-full h-full object-cover opacity-55 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/8 to-transparent" />
              </div>

              <div className="absolute -left-8 bottom-14 bg-card/95 backdrop-blur-sm border border-border rounded-xl px-4 py-3 shadow-2xl">
                <p className="font-serif text-2xl font-bold text-foreground">3+</p>
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  Years Experience
                </p>
              </div>

              <div className="absolute -right-8 top-14 bg-card/95 backdrop-blur-sm border border-border rounded-xl px-4 py-3 shadow-2xl">
                <p className="font-serif text-2xl font-bold text-foreground">20+</p>
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  Projects Shipped
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-muted-foreground/60">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-muted-foreground/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
