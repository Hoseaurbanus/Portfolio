import { useRef, useEffect } from 'react'

interface GlowOrbProps {
  className?: string
  color?: string
  size?: number
  speed?: number
}

export default function GlowOrb({
  className = '',
  color = 'rgba(99, 102, 241, 0.12)',
  size = 400,
  speed = 0.0005,
}: GlowOrbProps) {
  const ref = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number>(0)
  const startTime = useRef(Date.now())
  const isVisible = useRef(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible.current
        isVisible.current = entry.isIntersecting
        if (!wasVisible && entry.isIntersecting) {
          startTime.current = Date.now() - startTime.current
          frameRef.current = requestAnimationFrame(animate)
        }
      },
      { threshold: 0 }
    )
    observer.observe(el)

    const animate = () => {
      if (isVisible.current) {
        const t = (Date.now() - startTime.current) * speed
        const x = Math.sin(t * 0.7) * 30 + Math.cos(t * 0.3) * 15
        const y = Math.cos(t * 0.5) * 25 + Math.sin(t * 0.8) * 10
        el.style.transform = `translate(${x}px, ${y}px)`
        frameRef.current = requestAnimationFrame(animate)
      }
    }
    frameRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frameRef.current)
      observer.disconnect()
    }
  }, [speed])

  return (
    <div
      ref={ref}
      className={`absolute pointer-events-none blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        willChange: 'transform',
      }}
    />
  )
}
