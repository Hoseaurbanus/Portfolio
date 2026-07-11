import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { ease } from '@/lib/constants'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) {
      setShow(false)
      onComplete()
      return
    }
    const timer = setTimeout(() => {
      setShow(false)
      setTimeout(onComplete, 700)
    }, 2800)
    return () => clearTimeout(timer)
  }, [onComplete, shouldReduceMotion])

  if (shouldReduceMotion) return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          {/* Background accent lines */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent -translate-y-1/2" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-accent/15 to-transparent -translate-x-1/2" />
          </motion.div>

          {/* Corner accents */}
          <motion.div
            className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-accent/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-accent/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease }}
          />

          {/* Main content */}
          <motion.div className="relative z-10 text-center px-4">
            {/* Initials monogram */}
            <motion.div
              className="mb-8 inline-flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
            >
              <div className="w-20 h-20 rounded-full border-2 border-accent/40 flex items-center justify-center bg-accent/5 backdrop-blur-sm">
                <span className="font-mono text-2xl font-bold tracking-wider text-accent">HUA</span>
              </div>
            </motion.div>

            {/* Name - letter by letter reveal */}
            <div className="overflow-hidden mb-3">
              <motion.h1
                className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground"
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease }}
              >
                {'Hosea'.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.06, ease }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block w-3" />
                {'Urbanus'.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.65 + i * 0.06, ease }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block w-3" />
                {'Audu'.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.0 + i * 0.06, ease }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            {/* Animated underline */}
            <div className="flex justify-center mb-5">
              <motion.div
                className="h-[2px] bg-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, delay: 1.3, ease }}
                style={{ maxWidth: '280px' }}
              />
            </div>

            {/* Subtitle with stagger */}
            <motion.div className="overflow-hidden">
              <motion.p
                className="text-xs sm:text-sm font-mono tracking-[0.3em] text-muted-foreground uppercase"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.8, ease }}
              >
                Full Stack Developer & Data Analyst
              </motion.p>
            </motion.div>

            {/* Loading dots */}
            <motion.div
              className="flex items-center justify-center gap-1.5 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-accent/60"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
