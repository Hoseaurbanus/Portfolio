import { motion } from 'motion/react'
import {
  Code2,
  Layers,
  Zap,
  Shield,
  Server,
  BookOpen,
} from 'lucide-react'
import { ease } from '@/lib/constants'
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionNumber } from '../shared/SectionNumber'

const principles = [
  {
    Icon: Code2,
    title: 'Understand First',
    body: 'I start by understanding the problem and the people who have it. Clear requirements prevent wasted work.',
  },
  {
    Icon: Layers,
    title: 'Keep It Maintainable',
    body: 'Clean separation, consistent naming, and small modules. Code should be easy for the next person to follow.',
  },
  {
    Icon: Zap,
    title: 'Performance Matters',
    body: 'Fast pages keep users. I measure, optimize images, and avoid shipping unnecessary code.',
  },
  {
    Icon: Shield,
    title: 'Build for Everyone',
    body: 'Keyboard navigation, readable contrast, and semantic markup — so more people can use what I build.',
  },
  {
    Icon: Server,
    title: 'Plan for Growth',
    body: 'I design data models and APIs that can grow without a full rewrite.',
  },
  {
    Icon: BookOpen,
    title: 'Keep Learning',
    body: 'Physics taught me to learn fundamentals deeply. I apply the same approach to new tools and frameworks.',
  },
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-16 sm:py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionNumber number="09" label="How I Work" />
        <RevealGroup>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-foreground mb-3 sm:mb-4 leading-[1.1] tracking-tight max-w-2xl"
          >
            How I approach building software.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-xl mb-8 sm:mb-10 lg:mb-12 leading-relaxed text-sm sm:text-base"
          >
            Simple principles I follow on real projects — from school ERPs to data dashboards.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-px sm:bg-border sm:rounded-2xl overflow-hidden">
            {principles.map(({ Icon, title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease }}
                className="group p-5 sm:p-6 lg:p-8 bg-card sm:bg-background hover:bg-card border border-border sm:border-0 rounded-xl sm:rounded-none transition-colors duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-accent/15 transition-colors duration-300">
                  <Icon size={16} className="text-accent" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {body}
                </p>
              </motion.div>
            ))}
          </div>
        </RevealGroup>
      </div>
    </section>
  )
}
