import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useTransform, animate, motion, useReducedMotion } from 'motion/react'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const shouldReduceMotion = useReducedMotion()
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (shouldReduceMotion) {
      count.set(value)
      return
    }
    if (inView) {
      const controls = animate(count, value, {
        duration,
        ease: [0.22, 1, 0.36, 1],
      })
      return controls.stop
    }
  }, [inView, value, duration, count, shouldReduceMotion])

  return <motion.span ref={ref} className={className} style={{}} children={rounded} />
}
