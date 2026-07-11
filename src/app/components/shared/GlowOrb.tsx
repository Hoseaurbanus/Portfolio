import { useRef, useEffect, useState } from 'react'

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
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const frameRef = useRef<number>(0)
  const startTime = useRef(Date.now())

  useEffect(() => {
    const animate = () => {
      const t = (Date.now() - startTime.current) * speed
      setPos({
        x: Math.sin(t * 0.7) * 30 + Math.cos(t * 0.3) * 15,
        y: Math.cos(t * 0.5) * 25 + Math.sin(t * 0.8) * 10,
      })
      frameRef.current = requestAnimationFrame(animate)
    }
    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [speed])

  return (
    <div
      ref={ref}
      className={`absolute pointer-events-none blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        willChange: 'transform',
      }}
    />
  )
}
