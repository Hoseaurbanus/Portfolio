import { motion } from 'motion/react'
import { fadeUp } from './Reveal'

interface SectionLabelProps {
  children: React.ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] uppercase text-accent mb-5"
    >
      <span className="w-5 h-px bg-accent" />
      {children}
    </motion.div>
  )
}
