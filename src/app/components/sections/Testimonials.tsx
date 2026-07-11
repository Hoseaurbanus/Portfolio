import { motion } from 'motion/react'
import { MessageCircle } from 'lucide-react'
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
  return (
    <section id="testimonials" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <RevealGroup>
          <SectionLabel>Testimonials</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl lg:text-[3.25rem] font-bold text-foreground mb-14 leading-[1.1]"
          >
            What colleagues say.
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map(({ quote, author, role, initials }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col p-8 border border-border rounded-2xl bg-card hover:border-accent/25 transition-colors duration-300"
              >
                <MessageCircle size={18} className="text-accent/50 mb-6" />
                <p className="text-sm text-muted-foreground leading-[1.85] flex-1 mb-8 italic">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center text-[10px] font-mono font-bold text-accent shrink-0">
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {author}
                    </p>
                    <p className="text-[11px] text-muted-foreground font-mono">
                      {role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealGroup>
      </div>
    </section>
  )
}
