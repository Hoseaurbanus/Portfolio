import { motion, useReducedMotion } from 'motion/react'
import { ease } from '@/lib/constants'

interface SectionNumberProps {
  number: string
  label: string
}

export function SectionNumber({ number, label }: SectionNumberProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="relative mb-6 sm:mb-8">
      <motion.span
        initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease }}
        className="block font-display text-[5rem] sm:text-[7rem] lg:text-[9rem] font-bold leading-none text-foreground/[0.03] select-none pointer-events-none -mb-16 sm:-mb-24 lg:-mb-32"
      >
        {number}
      </motion.span>
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: 0.15, ease }}
        className="flex items-center gap-3 relative z-10"
      >
        <div className="w-8 h-px bg-accent" />
        <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase text-accent">
          {label}
        </span>
      </motion.div>
    </div>
  )
}
