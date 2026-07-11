import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionLabel } from '../shared/SectionLabel'
import type { Testimonial } from '@/types'

const testimonials: Testimonial[] = [
  {
    quote:
      'Hosea delivered a complex analytics dashboard in record time. His code was clean, well-documented, and far exceeded expectations. He thinks like a senior engineer regardless of title.',
    author: 'Adaeze Nwosu',
    role: 'CTO, BuildRight Digital',
    initials: 'AN',
  },
  {
    quote:
      'Working with Hosea was a revelation. He identified architectural issues we had overlooked for months and proposed solutions that reduced our infrastructure costs by 30% in six weeks.',
    author: 'Emeka Okafor',
    role: 'Engineering Lead, TechVenture Labs',
    initials: 'EO',
  },
  {
    quote:
      "Hosea's physics background gives him a unique analytical edge. He doesn't just write code — he models problems. The work he delivered was precise, maintainable, and built to last.",
    author: 'Dr. Fatima Abubakar',
    role: 'Supervisor, University of Abuja',
    initials: 'FA',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = useCallback(() => {
    setDirection(1)
    setActive((a) => (a + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  }

  return (
    <section id="testimonials" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <RevealGroup>
          <SectionLabel>Testimonials</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-foreground mb-10 lg:mb-14 leading-[1.1]"
          >
            What colleagues say.
          </motion.h2>

          {/* Desktop: 3-col grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-4">
            {testimonials.map(({ quote, author, role, initials }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease }}
                className="flex flex-col p-7 lg:p-8 border border-border rounded-2xl bg-card hover:border-accent/25 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <MessageCircle size={18} className="text-accent/50 mb-5 lg:mb-6" />
                <p className="text-sm text-muted-foreground leading-[1.85] flex-1 mb-6 lg:mb-8 italic">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-9 h-9 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center text-[10px] font-mono font-bold text-accent shrink-0"
                  >
                    {initials}
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{author}</p>
                    <p className="text-[11px] text-muted-foreground font-mono">{role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden rounded-2xl border border-border bg-card min-h-[280px]">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={active}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="p-6"
                >
                  <MessageCircle size={18} className="text-accent/50 mb-5" />
                  <p className="text-sm text-muted-foreground leading-[1.85] mb-6 italic">
                    &ldquo;{testimonials[active].quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center text-[10px] font-mono font-bold text-accent shrink-0">
                      {testimonials[active].initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {testimonials[active].author}
                      </p>
                      <p className="text-[11px] text-muted-foreground font-mono">
                        {testimonials[active].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile controls */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="p-2 rounded-full border border-border hover:border-accent/30 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} className="text-muted-foreground" />
              </motion.button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > active ? 1 : -1); setActive(i) }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === active ? 'bg-accent w-6' : 'bg-muted-foreground/30'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="p-2 rounded-full border border-border hover:border-accent/30 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} className="text-muted-foreground" />
              </motion.button>
            </div>
          </div>
        </RevealGroup>
      </div>
    </section>
  )
}
