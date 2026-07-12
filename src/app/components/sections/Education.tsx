import { motion } from 'motion/react'
import { GraduationCap } from 'lucide-react'
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionNumber } from '../shared/SectionNumber'

export default function Education() {
  return (
    <section id="education" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionNumber number="06" label="Education" />
        <RevealGroup>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-foreground mb-8 lg:mb-10 leading-[1.1] tracking-tight"
          >
            Academic background.
          </motion.h2>

          <div className="space-y-4">
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.01 }}
              className="p-5 sm:p-6 lg:p-8 border border-border rounded-xl bg-card transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="p-2.5 rounded-lg bg-accent/10 border border-accent/20 shrink-0"
                >
                  <GraduationCap size={20} className="text-accent" />
                </motion.div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                    B.Sc. Physics
                  </h3>
                  <p className="text-accent font-mono text-sm mt-0.5">
                    Gombe State University
                  </p>
                  <p className="text-[11px] font-mono text-muted-foreground mt-1 mb-3">
                    2020 — 2024 · Best Graduating Student
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Graduated with First Class Honours. Awarded Best Graduating
                    Physics Student for outstanding academic performance and
                    research contributions.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.01 }}
              className="p-5 sm:p-6 lg:p-8 border border-border rounded-xl bg-card transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="p-2.5 rounded-lg bg-accent/10 border border-accent/20 shrink-0"
                >
                  <GraduationCap size={20} className="text-accent" />
                </motion.div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                    Diploma in Computer Science
                  </h3>
                  <p className="text-accent font-mono text-sm mt-0.5">
                    Dynamic Computer Centre
                  </p>
                  <p className="text-[11px] font-mono text-muted-foreground mt-1 mb-3">
                    2008
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Foundation in computer science principles, programming
                    fundamentals, and software applications.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </RevealGroup>
      </div>
    </section>
  )
}
