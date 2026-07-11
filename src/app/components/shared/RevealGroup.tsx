import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { staggerGroup } from './Reveal'

interface RevealGroupProps {
  children: React.ReactNode
  className?: string
}

export function RevealGroup({ children, className = '' }: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })
  return (
    <motion.div
      ref={ref}
      variants={staggerGroup}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}
