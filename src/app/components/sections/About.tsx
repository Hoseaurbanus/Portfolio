import { motion } from 'motion/react'
import { MapPin } from 'lucide-react'
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionLabel } from '../shared/SectionLabel'
import AnimatedCounter from '../shared/AnimatedCounter'

const statCards = [
  { value: 2, suffix: '+', label: 'Projects Delivered' },
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 7, suffix: '+', label: 'Technologies Mastered' },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <RevealGroup className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <SectionLabel>About</SectionLabel>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-foreground mb-6 lg:mb-8 leading-[1.1]"
            >
              Engineered thinking.
              <br />
              Human purpose.
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-[1.75] text-base"
            >
              <p>
                I&apos;m a Physics graduate from Gombe State University (Best
                Graduating Student) who turned a passion for problem-solving
                into a career in software development and data analysis.
              </p>
              <p>
                As a Data Analyst &amp; QA Specialist, I build Python
                automation tools, maintain critical infrastructure, and
                perform statistical analysis using Pandas, NumPy, and
                Matplotlib. My freelance work as a Virtual Assistant has
                sharpened my ability to deliver under pressure.
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
            {statCards.map(({ value, suffix, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ scale: 1.03, y: -4 }}
                className="p-5 sm:p-6 border border-border rounded-xl bg-card hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group cursor-default"
              >
                <p className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  <AnimatedCounter value={value} suffix={suffix} />
                </p>
                <p className="text-[10px] sm:text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  {label}
                </p>
              </motion.div>
            ))}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.03, y: -4 }}
              className="p-5 sm:p-6 border border-accent/20 rounded-xl bg-accent/5 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group cursor-default"
            >
              <p className="font-serif text-3xl sm:text-4xl font-bold text-accent mb-2">
                B.Sc.
              </p>
              <p className="text-[10px] sm:text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Best Graduating Student
              </p>
            </motion.div>
          </div>
        </RevealGroup>
      </div>
    </section>
  )
}
