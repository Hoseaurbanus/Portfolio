import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react'
import {
  Github,
  Twitter,
  Mail,
  ArrowRight,
  MapPin,
  MessageCircle,
} from 'lucide-react'
import GlowOrb from '../shared/GlowOrb'

const ease = [0.22, 1, 0.36, 1] as const

const roles = [
  'Full Stack Software Developer',
  'Data Analyst',
  'Physics Graduate',
]

const nameWords = ['HOSEA', 'URBANUS', 'AUDU']

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const id = setInterval(
      () => setRoleIdx((i) => (i + 1) % roles.length),
      2800
    )
    return () => clearInterval(id)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / 30
    const y = (e.clientY - rect.top - rect.height / 2) / 30
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(99,102,241,0.07)_0%,transparent_65%),radial-gradient(ellipse_50%_50%_at_80%_20%,rgba(99,102,241,0.04)_0%,transparent_55%)]" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <GlowOrb
        className="top-1/4 left-[10%]"
        color="rgba(99, 102, 241, 0.1)"
        size={500}
        speed={0.0003}
      />
      <GlowOrb
        className="bottom-1/4 right-[5%]"
        color="rgba(99, 102, 241, 0.06)"
        size={400}
        speed={0.0005}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-sm text-xs font-mono text-muted-foreground mb-8 lg:mb-10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
              <span className="w-px h-3 bg-border hidden sm:block" />
              <span className="hidden sm:inline-flex items-center gap-1">
                <MapPin size={11} />
                Nigeria
              </span>
            </motion.div>

            <h1
              className="font-serif font-bold leading-[0.92] tracking-tight text-foreground mb-6 lg:mb-8"
              style={{ fontSize: 'clamp(2.5rem, 9vw, 7.5rem)' }}
            >
              {nameWords.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 40, rotateX: -40 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + i * 0.15,
                    ease,
                  }}
                  className={`inline-block mr-[0.25em] ${
                    word === 'URBANUS' ? 'text-accent' : ''
                  }`}
                  style={{ transformOrigin: 'bottom' }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="h-6 mb-5 lg:mb-6 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIdx}
                  initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -18, filter: 'blur(4px)' }}
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
              transition={{ duration: 0.7, delay: 1.0, ease }}
              className="text-base lg:text-lg text-muted-foreground max-w-[520px] leading-[1.75] mb-8 lg:mb-10"
            >
              Physics graduate turned software engineer. I build full-stack
              applications with clean architecture, scalable infrastructure,
              and data-driven insights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.15, ease }}
              className="flex flex-wrap gap-3 mb-10 lg:mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#projects')}
                className="group flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-medium rounded-md hover:bg-accent/90 transition-all duration-200"
              >
                View My Work
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/2349030031278"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white text-sm font-medium rounded-md hover:bg-emerald-700 transition-all duration-200"
              >
                <MessageCircle size={15} />
                WhatsApp
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.35 }}
              className="flex items-center gap-1"
            >
              {[
                { Icon: Github, label: 'GitHub', href: 'https://github.com/Hoseaurbanus' },
                { Icon: Twitter, label: 'Twitter', href: 'https://twitter.com/AuduHosea38095' },
                { Icon: Mail, label: 'Email', href: 'mailto:hoseaurbanusaudu1@gmail.com' },
              ].map(({ Icon, label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.4 + i * 0.08 }}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-card rounded-lg transition-colors duration-200"
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease }}
            className="hidden lg:block"
          >
            <motion.div
              className="relative w-full aspect-[3/4]"
              style={{ x: springX, y: springY }}
            >
              <div className="absolute inset-0 rounded-2xl border border-border overflow-hidden bg-muted">
                <img
                  src="/photo.jpg"
                  alt="Hosea Urbanus Audu — portrait"
                  fetchPriority="high"
                  className="w-full h-full object-cover opacity-55 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/8 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.0, ease }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="absolute -left-8 bottom-14 bg-card/95 backdrop-blur-sm border border-border rounded-xl px-4 py-3 shadow-2xl"
              >
                <p className="font-serif text-2xl font-bold text-foreground">B.Sc.</p>
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  Best Graduating Student
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.2, ease }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="absolute -right-8 top-14 bg-card/95 backdrop-blur-sm border border-border rounded-xl px-4 py-3 shadow-2xl"
              >
                <p className="font-serif text-2xl font-bold text-foreground">2+</p>
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  Projects Shipped
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="lg:hidden flex justify-center -mt-4"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl border border-border overflow-hidden bg-muted">
              <img
                src="/photo.jpg"
                alt="Hosea Urbanus Audu — portrait"
                fetchPriority="high"
                className="w-full h-full object-cover opacity-55 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease }}
          className="lg:hidden flex gap-4 justify-center mt-8"
        >
          {[
            { value: '2+', label: 'Projects' },
            { value: '3+', label: 'Years Exp.' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="px-4 py-2 bg-card/95 backdrop-blur-sm border border-border rounded-xl text-center"
            >
              <p className="font-serif text-lg font-bold text-foreground">{value}</p>
              <p className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
