import { motion } from 'motion/react'
import { GraduationCap } from 'lucide-react'
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionLabel } from '../shared/SectionLabel'

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <RevealGroup>
          <SectionLabel>Education</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-foreground mb-8 lg:mb-10 leading-[1.1]"
          >
            Academic background.
          </motion.h2>

          <div className="space-y-4">
            <motion.div
              variants={fadeUp}
              whileHover={{ borderColor: 'rgba(99, 102, 241, 0.2)' }}
              className="p-5 sm:p-6 lg:p-8 border border-border rounded-xl bg-card transition-colors duration-300"
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
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground">
                    B.Sc. Physics
                  </h3>
                  <p className="text-accent font-mono text-sm mt-0.5">
                    Gombe State University
                  </p>
                  <p className="text-[11px] font-mono text-muted-foreground mt-1 mb-3">
                    2020 — 2024 · Best Graduating Student
                  </p>
                  <p className="text-sm text-muted-foreground leading-[1.75]">
                    Graduated with First Class Honours. Awarded Best Graduating
                    Physics Student for outstanding academic performance and
                    research contributions.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ borderColor: 'rgba(99, 102, 241, 0.2)' }}
              className="p-5 sm:p-6 lg:p-8 border border-border rounded-xl bg-card transition-colors duration-300"
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
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground">
                    Diploma in Computer Science
                  </h3>
                  <p className="text-accent font-mono text-sm mt-0.5">
                    Dynamic Computer Centre
                  </p>
                  <p className="text-[11px] font-mono text-muted-foreground mt-1 mb-3">
                    2008
                  </p>
                  <p className="text-sm text-muted-foreground leading-[1.75]">
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
