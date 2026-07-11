import { motion } from 'motion/react'
import { GraduationCap, Award } from 'lucide-react'
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionLabel } from '../shared/SectionLabel'
import type { Certification } from '@/types'

const certifications: Certification[] = [
  {
    name: 'AWS Certified Developer — Associate',
    issuer: 'Amazon Web Services',
    year: '2023',
  },
  {
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google / Coursera',
    year: '2022',
  },
  {
    name: 'Meta Front-End Developer Certificate',
    issuer: 'Meta / Coursera',
    year: '2022',
  },
  {
    name: 'freeCodeCamp Full Stack Certification',
    issuer: 'freeCodeCamp',
    year: '2021',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <RevealGroup>
            <SectionLabel>Education</SectionLabel>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-10 leading-[1.1]"
            >
              Academic background.
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="p-6 lg:p-8 border border-border rounded-xl bg-card"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/20 shrink-0">
                  <GraduationCap size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    B.Sc. Physics
                  </h3>
                  <p className="text-accent font-mono text-sm mt-0.5">
                    University of Abuja
                  </p>
                  <p className="text-[11px] font-mono text-muted-foreground mt-1 mb-4">
                    2015 — 2019 · Honours
                  </p>
                  <p className="text-sm text-muted-foreground leading-[1.75]">
                    Final year project: Computational modelling of
                    electromagnetic field distributions in irregular geometries
                    using finite element methods.
                  </p>
                </div>
              </div>
            </motion.div>
          </RevealGroup>

          <RevealGroup>
            <SectionLabel>Certifications</SectionLabel>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-10 leading-[1.1]"
            >
              Professional credentials.
            </motion.h2>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-4 p-4 border border-border rounded-xl bg-card hover:border-accent/30 transition-colors duration-200"
                >
                  <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 shrink-0">
                    <Award size={15} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {cert.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground font-mono">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground shrink-0">
                    {cert.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
