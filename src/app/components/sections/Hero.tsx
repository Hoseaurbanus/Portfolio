import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useReducedMotion } from 'motion/react'
import { Github, Twitter, Mail, ArrowRight, MapPin, Download } from 'lucide-react'
import { ease } from '@/lib/constants'
import { scrollTo } from '@/lib/utils'

const roles = [
  'Full Stack Software Developer',
  'Data Analyst',
  'Physicist',
]

const nameWords = ['HOSEA', 'URBANUS', 'AUDU']

function isTouchDevice() {
  if (typeof window === 'undefined') return false
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [isTouch, setIsTouch] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    setIsTouch(isTouchDevice())
  }, [])

  useEffect(() => {
    if (shouldReduceMotion) return
    let intervalId: ReturnType<typeof setInterval>
    const timer = setTimeout(() => {
      intervalId = setInterval(
        () => setRoleIdx((i) => (i + 1) % roles.length),
        2800
      )
    }, 2000)
    return () => {
      clearTimeout(timer)
      if (intervalId !== undefined) clearInterval(intervalId)
    }
  }, [shouldReduceMotion])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouch || shouldReduceMotion || !containerRef.current) return
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
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #e8a838 0.5px, transparent 0.5px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-[15%] w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 sm:pt-28 pb-16 sm:pb-20 w-full">
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 sm:gap-12 lg:gap-16 items-center">
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
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

            {/* Name - clamp handles mobile elegantly */}
            <h1
              className="font-display font-bold leading-[0.85] sm:leading-[0.9] tracking-tight text-foreground mb-5 sm:mb-6 lg:mb-8"
              style={{ fontSize: 'clamp(2.2rem, 10vw, 6.5rem)' }}
            >
              {nameWords.map((word, i) => (
                <motion.span
                  key={word}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 50, rotateX: -30 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + i * 0.15,
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

            {/* Role rotation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="h-6 mb-5 lg:mb-6 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIdx}
                  initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -14, filter: 'blur(4px)' }}
                  transition={{ duration: 0.3, ease }}
                  className="text-xs font-mono tracking-[0.22em] text-muted-foreground uppercase"
                >
                  {roles[roleIdx]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Bio - honest, no exaggeration */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease }}
              className="text-[15px] sm:text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed mb-7 sm:mb-8 lg:mb-10"
            >
              Physicist turned software developer. I build practical
              web applications for schools and businesses using
              React, PHP, and Python — focused on reliability over hype.
            </motion.p>

            {/* CTA buttons - full width on tiny screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease }}
              className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-10 lg:mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo('#projects')}
                className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-accent-foreground text-sm font-medium rounded-xl hover:bg-accent/90 transition-all duration-200 min-h-[48px] sm:w-auto w-full"
              >
                View My Work
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/Hosea_Urbanus_Audu_CV.pdf"
                download
                className="flex items-center justify-center gap-2 px-6 py-3.5 border border-border bg-card/50 backdrop-blur-sm text-foreground text-sm font-medium rounded-xl hover:bg-card hover:border-accent/20 transition-all duration-200 min-h-[48px] sm:w-auto w-full"
              >
                <Download size={15} />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
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
                  transition={{ duration: 0.4, delay: 1.15 + i * 0.08 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-colors duration-200"
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Desktop photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease }}
            className="hidden lg:block"
          >
            <motion.div
              className="relative w-full aspect-[3/4]"
              style={!isTouch && !shouldReduceMotion ? { x: springX, y: springY } : undefined}
            >
              <div className="absolute inset-0 rounded-2xl border border-border/60 overflow-hidden bg-card shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                <picture>
                  <source type="image/webp" srcSet="/photo-720.webp 720w, /photo.webp 360w" sizes="360px" />
                  <img
                    src="/photo.jpg"
                    alt="Hosea Urbanus Audu — portrait"
                    fetchPriority="high"
                    decoding="async"
                    width={360}
                    height={480}
                    className="w-full h-full object-cover object-top"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.9, ease }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="absolute -left-8 bottom-14 bg-card/95 backdrop-blur-sm border border-border rounded-xl px-4 py-3 shadow-2xl"
              >
                <p className="font-display text-2xl font-bold text-foreground">B.Sc.</p>
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  Best Graduating Student
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Mobile photo - centered, balanced, not after CTA wall */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="lg:hidden flex justify-center mt-2"
          >
            <div className="relative w-[168px] min-[380px]:w-44 sm:w-48 aspect-[3/4] rounded-2xl border border-border/60 overflow-hidden bg-card shadow-lg">
              <picture>
                <source type="image/webp" srcSet="/photo-384.webp 384w, /photo.webp 192w" sizes="192px" />
                <img
                  src="/photo.jpg"
                  alt="Hosea Urbanus Audu — portrait"
                  loading="lazy"
                  decoding="async"
                  width={192}
                  height={256}
                  className="w-full h-full object-cover object-top"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 bg-card/90 backdrop-blur-md border border-border rounded-lg px-2.5 py-2 text-center">
                <p className="font-display text-xs font-bold text-foreground leading-none">B.Sc. Physics</p>
                <p className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">Best Graduating Student</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile trust strip - more honest than just B.Sc./3+ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9, ease }}
          className="lg:hidden flex gap-2 justify-center mt-6 flex-wrap px-2"
        >
          {[
            { value: '6', label: 'Projects Live' },
            { value: 'B.Sc.', label: 'Physics' },
            { value: 'Remote', label: 'Worldwide' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="flex-1 min-w-[84px] max-w-[110px] px-3 py-2.5 bg-card/80 backdrop-blur-sm border border-border rounded-xl text-center"
            >
              <p className="font-display text-sm font-bold text-foreground leading-none">{value}</p>
              <p className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider mt-1">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on short viewports to avoid clash */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="hidden sm:flex absolute bottom-5 lg:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-muted-foreground/50">
          Scroll
        </span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-6 bg-gradient-to-b from-accent/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}
