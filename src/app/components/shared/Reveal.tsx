import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { ease } from '@/lib/constants'

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } },
}

export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
}

export const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
}

export const staggerGroup = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

interface RevealProps {
  children: React.ReactNode
  className?: string
  variants?: typeof fadeUp
}

export function Reveal({ children, className = '', variants = fadeUp }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial={shouldReduceMotion ? false : 'hidden'}
      animate={inView ? 'visible' : shouldReduceMotion ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}
