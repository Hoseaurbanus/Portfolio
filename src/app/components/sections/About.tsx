import { motion } from 'motion/react'
import { MapPin } from 'lucide-react'
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionLabel } from '../shared/SectionLabel'

const statCards = [
  { value: '3+', label: 'Years of Experience' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '7+', label: 'Technologies Mastered' },
  { value: 'B.Sc.', label: 'Physics — Honours' },
]

export default function About() {
  return (
    <section id="about" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <RevealGroup className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <SectionLabel>About</SectionLabel>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl lg:text-[3.25rem] font-bold text-foreground mb-8 leading-[1.1]"
            >
              Engineered thinking.
              <br />
              Human purpose.
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-[1.8] text-[0.95rem]"
            >
              <p>
                My path into software began with physics — a discipline that
                rewards rigorous thinking, precise modelling, and comfort with
                ambiguity. That foundation shapes everything I build today.
              </p>
              <p>
                I approach software development as an engineering discipline.
                Every architectural decision has consequences. Every abstraction
                carries a cost. I write code that respects future engineers as
                much as present requirements.
              </p>
              <p>
                Beyond the technical, I care deeply about user experience,
                accessibility, and the measurable human impact of the systems I
                build. Good software solves real problems without creating new ones.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-center gap-2 text-xs text-muted-foreground font-mono"
            >
              <MapPin size={12} />
              Nigeria — Open to Remote Worldwide
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {statCards.map(({ value, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="p-6 border border-border rounded-xl bg-card hover:border-accent/30 transition-colors duration-300 group"
              >
                <p className="font-serif text-4xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {value}
                </p>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </RevealGroup>
      </div>
    </section>
  )
}
