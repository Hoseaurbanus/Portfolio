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
      setTimeout(onComplete, 600)
    }, 2200)
    return () => clearTimeout(timer)
  }, [onComplete, shouldReduceMotion])

  if (shouldReduceMotion) return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease }}
          >
            <motion.h1
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
            >
              Hosea Urbanus Audu
            </motion.h1>

            <motion.div
              className="mt-4 h-[2px] w-0 mx-auto rounded-full bg-accent"
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, delay: 0.5, ease }}
            />

            <motion.p
              className="mt-4 text-sm sm:text-base text-muted-foreground tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0, ease }}
            >
              Full Stack Developer & Data Analyst
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
