import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { staggerGroup } from './Reveal'

interface RevealGroupProps {
  children: React.ReactNode
  className?: string
}

export function RevealGroup({ children, className = '' }: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      variants={staggerGroup}
      initial={shouldReduceMotion ? false : 'hidden'}
      animate={inView ? 'visible' : shouldReduceMotion ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}
