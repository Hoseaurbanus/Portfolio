import { motion } from 'motion/react'
import { GraduationCap } from 'lucide-react'
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionNumber } from '../shared/SectionNumber'

export default function Education() {
  return (
    <section id="education" className="relative py-16 sm:py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionNumber number="06" label="Education" />
        <RevealGroup>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[1.75rem] sm:text-4xl lg:text-[3.25rem] font-bold text-foreground mb-6 sm:mb-8 lg:mb-10 leading-[1.1] tracking-tight"
          >
            Academic background.
          </motion.h2>

          <div className="space-y-3 sm:space-y-4">
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -2 }}
              className="p-4 sm:p-6 lg:p-7 border border-border rounded-xl bg-card transition-all duration-300 hover:border-accent/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="p-2 sm:p-2.5 rounded-lg bg-accent/10 border border-accent/20 shrink-0">
                  <GraduationCap size={18} className="text-accent sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base sm:text-lg lg:text-xl font-bold text-foreground leading-tight">
                    B.Sc. Physics
                  </h3>
                  <p className="text-accent font-mono text-xs sm:text-sm mt-1">
                    Gombe State University
                  </p>
                  <p className="text-[11px] font-mono text-muted-foreground mt-1 mb-2.5 inline-flex items-center gap-2">
                    <span className="px-1.5 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded text-[10px] text-amber-500/90">Best Graduating Student</span>
                    <span>2020 — 2024</span>
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    First Class Honours. Focus on analytical problem-solving and research — skills I apply to software and data work.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -2 }}
              className="p-4 sm:p-6 lg:p-7 border border-border rounded-xl bg-card transition-all duration-300 hover:border-accent/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="p-2 sm:p-2.5 rounded-lg bg-muted border border-border shrink-0">
                  <GraduationCap size={18} className="text-muted-foreground sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base sm:text-lg lg:text-xl font-bold text-foreground leading-tight">
                    Diploma in Computer Science
                  </h3>
                  <p className="text-muted-foreground font-mono text-xs sm:text-sm mt-1">
                    Dynamic Computer Centre
                  </p>
                  <p className="text-[11px] font-mono text-muted-foreground/70 mt-1 mb-2.5">
                    2008
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Foundation in programming fundamentals and software applications.
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
