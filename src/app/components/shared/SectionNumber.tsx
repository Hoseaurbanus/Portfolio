import { motion, useReducedMotion } from 'motion/react'
import { ease } from '@/lib/constants'

interface SectionNumberProps {
  number: string
  label: string
}

export function SectionNumber({ number, label }: SectionNumberProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="relative mb-5 sm:mb-6 overflow-hidden">
      <motion.span
        initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease }}
        className="block font-display text-[3.5rem] sm:text-[5.5rem] lg:text-[7.5rem] font-bold leading-none text-foreground/[0.035] select-none pointer-events-none -mb-10 sm:-mb-16 lg:-mb-20"
        aria-hidden="true"
      >
        {number}
      </motion.span>
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: 0.15, ease }}
        className="flex items-center gap-2.5 sm:gap-3 relative z-10"
      >
        <div className="w-6 sm:w-8 h-px bg-accent" />
        <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] sm:tracking-[0.25em] uppercase text-accent">
          {label}
        </span>
      </motion.div>
    </div>
  )
}
