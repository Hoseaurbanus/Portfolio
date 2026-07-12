import { motion } from 'motion/react'
import { fadeUp } from './Reveal'

interface SectionLabelProps {
  children: React.ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="inline-flex items-center gap-3 mb-5"
    >
      <div className="w-8 h-px bg-accent" />
      <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase text-accent">
        {children}
      </span>
    </motion.div>
  )
}
