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
      setTimeout(onComplete, 800)
    }, 3200)
    return () => clearTimeout(timer)
  }, [onComplete, shouldReduceMotion])

  if (shouldReduceMotion) return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          {/* Animated background grid */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            {/* Horizontal lines */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`h-${i}`}
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent"
                style={{ top: `${20 + i * 15}%` }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2, delay: 0.3 + i * 0.1, ease }}
              />
            ))}
            {/* Vertical lines */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`v-${i}`}
                className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/8 to-transparent"
                style={{ left: `${20 + i * 15}%` }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 2, delay: 0.4 + i * 0.1, ease }}
              />
            ))}
          </motion.div>

          {/* Corner brackets */}
          <motion.div
            className="absolute top-6 left-6 sm:top-10 sm:left-10 w-10 h-10 sm:w-14 sm:h-14"
            initial={{ opacity: 0, x: -10, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
          >
            <div className="absolute top-0 left-0 w-full h-[1.5px] bg-accent/30" />
            <div className="absolute top-0 left-0 w-[1.5px] h-full bg-accent/30" />
          </motion.div>
          <motion.div
            className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-10 h-10 sm:w-14 sm:h-14"
            initial={{ opacity: 0, x: 10, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease }}
          >
            <div className="absolute bottom-0 right-0 w-full h-[1.5px] bg-accent/30" />
            <div className="absolute bottom-0 right-0 w-[1.5px] h-full bg-accent/30" />
          </motion.div>

          {/* Main content */}
          <div className="relative z-10 text-center px-6 sm:px-8 max-w-2xl mx-auto">
            {/* Monogram */}
            <motion.div
              className="mb-6 sm:mb-10"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
            >
              <div className="relative inline-flex items-center justify-center">
                {/* Outer ring */}
                <motion.div
                  className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-accent/25"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1.2, delay: 0.3, ease }}
                />
                {/* Inner ring */}
                <motion.div
                  className="absolute w-18 h-18 sm:w-24 sm:h-24 rounded-full border border-accent/15"
                  initial={{ scale: 0, rotate: 90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease }}
                />
                {/* Core circle */}
                <motion.div
                  className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-accent/8 border border-accent/30 flex items-center justify-center backdrop-blur-sm"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.6, ease }}
                >
                  <span className="font-mono text-lg sm:text-2xl font-bold tracking-[0.15em] text-accent">
                    HUA
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Name reveal - word by word */}
            <div className="overflow-hidden mb-4 sm:mb-6">
              <motion.h1
                className="font-display text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease }}
              >
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9, ease }}
                >
                  Hosea
                </motion.span>
                <span className="inline-block w-2 sm:w-4" />
                <motion.span
                  className="inline-block text-accent"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1, ease }}
                >
                  Urbanus
                </motion.span>
                <span className="inline-block w-2 sm:w-4" />
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3, ease }}
                >
                  Audu
                </motion.span>
              </motion.h1>
            </div>

            {/* Animated divider */}
            <div className="flex justify-center mb-5 sm:mb-7">
              <motion.div
                className="flex items-center gap-2 sm:gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <motion.div
                  className="h-px bg-gradient-to-r from-transparent to-accent/50"
                  initial={{ width: 0 }}
                  animate={{ width: '3rem' }}
                  transition={{ duration: 0.8, delay: 1.5, ease }}
                />
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-accent"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.7, ease }}
                />
                <motion.div
                  className="h-px bg-gradient-to-l from-transparent to-accent/50"
                  initial={{ width: 0 }}
                  animate={{ width: '3rem' }}
                  transition={{ duration: 0.8, delay: 1.5, ease }}
                />
              </motion.div>
            </div>

            {/* Subtitle */}
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              <motion.p
                className="text-[10px] sm:text-xs md:text-sm font-mono tracking-[0.25em] sm:tracking-[0.35em] text-muted-foreground uppercase"
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.9, ease }}
              >
                Full Stack Developer & Data Analyst
              </motion.p>
            </motion.div>

            {/* Loading indicator */}
            <motion.div
              className="mt-8 sm:mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3 }}
            >
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                {/* Animated line */}
                <motion.div
                  className="h-px bg-accent/40"
                  initial={{ width: 0 }}
                  animate={{ width: '2.5rem' }}
                  transition={{ duration: 1.5, delay: 2.4, ease }}
                />
                {/* Pulsing dots */}
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent/70"
                      animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [0.7, 1.2, 0.7],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </div>
                <motion.div
                  className="h-px bg-accent/40"
                  initial={{ width: 0 }}
                  animate={{ width: '2.5rem' }}
                  transition={{ duration: 1.5, delay: 2.4, ease }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
