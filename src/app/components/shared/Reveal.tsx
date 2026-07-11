import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const ease = [0.22, 1, 0.36, 1] as const

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease } },
}

export const staggerGroup = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

interface RevealProps {
  children: React.ReactNode
  className?: string
  variants?: typeof fadeUp
}

export function Reveal({ children, className = '', variants = fadeUp }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}
