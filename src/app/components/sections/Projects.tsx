import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ExternalLink, ChevronRight } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionLabel } from '../shared/SectionLabel'
import type { Project } from '@/types'

const projects: Project[] = [
  {
    id: 1,
    index: '01',
    name: 'SMUG Flex Multi-School',
    tagline: 'Multi-school management platform for SMUGFlex Venture',
    overview:
      'A full-stack multi-school management system serving educational institutions in Lagos, Nigeria. Built with role-based access control for administrators, teachers, and students.',
    problem:
      'Schools in Nigeria needed a centralized platform to manage multiple institutions, student records, and administrative workflows efficiently.',
    solution:
      'Developed a scalable multi-school management platform with role-based dashboards (Admin, Teacher, Student), real-time notifications, and comprehensive reporting capabilities.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    outcome:
      'Live production system managing multiple schools in Lagos, Nigeria. Trusted by SMUGFlex Venture for their multi-school operations.',
    image: '/smugflex.jpg',
    github: 'https://github.com/Hoseaurbanus',
    demo: 'https://smug-flex-multi-school-o3to.vercel.app/',
  },
  {
    id: 2,
    index: '02',
    name: 'Graceland Royal Academy',
    tagline: 'School website and management portal',
    overview:
      'A complete web presence and management system for Graceland Royal Academy, providing an online portal for students and parents alongside administrative tools.',
    problem:
      'The academy needed a professional online presence and a digital system to manage school operations, communications, and student data.',
    solution:
      'Built a responsive school website with integrated management features, including parent/student portals, news updates, and administrative dashboards.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    outcome:
      'Live at gracelandroyalacademy.com.ng — serving the academy with a professional web presence and operational management tools.',
    image: '/graceland.jpg',
    github: 'https://github.com/Hoseaurbanus',
    demo: 'https://gracelandroyalacademy.com.ng/',
  },
]

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <RevealGroup>
          <SectionLabel>Featured Projects</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-foreground mb-4 leading-[1.1]"
          >
            Work that speaks.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-xl mb-10 lg:mb-14 leading-[1.75] text-base"
          >
            Real-world projects built and deployed to production — from the
            problem statement to the measurable outcome.
          </motion.p>

          <div className="space-y-6">
            {projects.map((p) => (
              <motion.article
                key={p.id}
                variants={fadeUp}
                whileHover={{ borderColor: 'rgba(99, 102, 241, 0.2)' }}
                className="group rounded-2xl border border-border bg-card overflow-hidden cursor-pointer"
                onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                role="button"
                aria-expanded={expanded === p.id}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setExpanded(expanded === p.id ? null : p.id) } }}
              >
                <div className="grid sm:grid-cols-[1fr] lg:grid-cols-[380px_1fr] gap-0">
                  <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden bg-muted shrink-0">
                    <motion.img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.5, ease }}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card hidden sm:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent sm:hidden" />
                  </div>

                  <div className="p-5 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-accent">
                          Project {p.index}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mt-1">
                          {p.name}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: expanded === p.id ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight size={18} className="text-muted-foreground mt-1.5 shrink-0" />
                      </motion.div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-[1.7] mb-4 lg:mb-5">
                      {p.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[11px] font-mono bg-background border border-border text-muted-foreground rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expanded === p.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden border-t border-border"
                    >
                      <div className="p-5 sm:p-8 lg:p-10 grid md:grid-cols-3 gap-6 lg:gap-12">
                        <div>
                          <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.18em] mb-3">
                            Overview
                          </p>
                          <p className="text-sm text-muted-foreground leading-[1.75]">
                            {p.overview}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.18em] mb-3">
                            Problem &rarr; Solution
                          </p>
                          <p className="text-sm text-muted-foreground leading-[1.75] mb-3">
                            {p.problem}
                          </p>
                          <p className="text-sm text-foreground leading-[1.75]">
                            {p.solution}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.18em] mb-3">
                            Outcome
                          </p>
                          <p className="text-sm text-foreground font-medium leading-[1.75] mb-6">
                            {p.outcome}
                          </p>
                          <div className="flex gap-3">
                            <motion.a
                              href={p.github}
                              onClick={(e) => e.stopPropagation()}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.04 }}
                              whileTap={{ scale: 0.96 }}
                              className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-md text-xs hover:bg-accent/90 transition-all min-h-[44px]"
                            >
                              Code
                            </motion.a>
                            <motion.a
                              href={p.demo}
                              onClick={(e) => e.stopPropagation()}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.04 }}
                              whileTap={{ scale: 0.96 }}
                              className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-xs text-muted-foreground hover:text-foreground hover:border-border/80 transition-all min-h-[44px]"
                            >
                              <ExternalLink size={13} /> Live Demo
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </div>
        </RevealGroup>
      </div>
    </section>
  )
}
