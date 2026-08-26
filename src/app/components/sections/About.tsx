import { motion } from 'motion/react'
import { MapPin } from 'lucide-react'
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionNumber } from '../shared/SectionNumber'
import AnimatedCounter from '../shared/AnimatedCounter'

const statCards = [
  { value: 5, suffix: '+', label: 'Projects Built' },
  { value: 3, suffix: '+', label: 'Years Working' },
  { value: 10, suffix: '+', label: 'Tools & Languages' },
]

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionNumber number="01" label="About" />
        <RevealGroup className="grid lg:grid-cols-[1.05fr_0.9fr] gap-8 sm:gap-12 lg:gap-16 items-start">
          <div>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[1.75rem] sm:text-4xl lg:text-[3.25rem] font-bold text-foreground mb-4 sm:mb-6 lg:mb-8 leading-[1.1] tracking-tight"
            >
              Building software that works.
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="space-y-4 sm:space-y-5 text-muted-foreground leading-relaxed text-[15px] sm:text-base"
            >
              <p>
                I&apos;m a Physics graduate from Gombe State University (Best
                Graduating Student) with a diploma in computer science.
                I build web applications and work with data.
              </p>
              <p>
                As a Data Analyst &amp; QA Specialist at Sterling One Foundation,
                I write Python scripts, build dashboards, and test internal
                tools. I also build school management systems on the side
                and do freelance virtual assistant work.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-center gap-2 text-xs text-muted-foreground font-mono"
            >
              <MapPin size={12} className="text-accent" />
              Nigeria — Open to Remote Worldwide
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            {statCards.map(({ value, suffix, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="p-4 sm:p-5 lg:p-6 border border-border rounded-xl bg-card hover:border-accent/25 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-300 group cursor-default"
              >
                <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-1.5 sm:mb-2 group-hover:text-accent transition-colors duration-300">
                  <AnimatedCounter value={value} suffix={suffix} />
                </p>
                <p className="text-[10px] sm:text-xs font-mono text-muted-foreground uppercase tracking-wider leading-tight">
                  {label}
                </p>
              </motion.div>
            ))}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="p-4 sm:p-5 lg:p-6 border border-accent/20 rounded-xl bg-accent/[0.06] hover:border-accent/30 hover:shadow-[0_8px_24px_rgba(232,168,56,0.08)] transition-all duration-300 group cursor-default"
            >
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-1.5 sm:mb-2">
                B.Sc.
              </p>
              <p className="text-[10px] sm:text-xs font-mono text-muted-foreground uppercase tracking-wider leading-tight">
                Best Graduating Student
              </p>
            </motion.div>
          </div>
        </RevealGroup>
      </div>
    </section>
  )
}
