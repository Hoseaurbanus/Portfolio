import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Github, ExternalLink, ChevronRight } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionLabel } from '../shared/SectionLabel'
import type { Project } from '@/types'

const projects: Project[] = [
  {
    id: 1,
    index: '01',
    name: 'Sentinel Analytics',
    tagline: 'Real-time business intelligence at scale',
    overview:
      'A full-stack analytics platform that transforms raw data streams into actionable insights for enterprise teams — updating live as events arrive.',
    problem:
      'Business teams waited 8+ hours for overnight batch reports, causing slow decisions and missed opportunities.',
    solution:
      'Built a streaming pipeline with WebSocket-powered dashboards that update in real time as events arrive, eliminating batch latency entirely.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Redis', 'WebSockets', 'Docker'],
    outcome:
      'Reduced average reporting latency from 8 hours to under 30 seconds for 50+ enterprise clients. 60% reduction in infrastructure cost through query optimisation.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=880&h=520&fit=crop&auto=format',
    github: 'https://github.com/hoseaaudu',
    demo: 'https://example.com',
  },
  {
    id: 2,
    index: '02',
    name: 'PhysicsEngine.js',
    tagline: 'Open-source 2D physics simulation for the browser',
    overview:
      'A TypeScript physics simulation library blending computational physics with real-time WebGL rendering. Built for accuracy, not just performance.',
    problem:
      'Existing browser physics libraries sacrificed simulation accuracy for speed, producing unrealistic results that were unusable for education.',
    solution:
      'Developed a custom constraint solver using Verlet integration and spatial hashing for broad-phase collision detection. Runs at 60fps in the browser.',
    tech: ['TypeScript', 'WebGL', 'Canvas API', 'Vite', 'Jest'],
    outcome:
      '800+ GitHub stars. Adopted by 12 university physics education platforms across 4 countries.',
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=880&h=520&fit=crop&auto=format',
    github: 'https://github.com/hoseaaudu',
    demo: 'https://example.com',
  },
  {
    id: 3,
    index: '03',
    name: 'TaskFlow',
    tagline: 'Collaborative project management, redesigned',
    overview:
      'A modern team collaboration tool with real-time sync, task dependencies, and integrated time tracking — all in a keyboard-first interface.',
    problem:
      'Teams context-switched between 4+ tools for tasks, communication, planning, and time tracking — losing hours of productive time weekly.',
    solution:
      'Unified all workflows into one keyboard-first interface with real-time collaboration powered by Pusher. Zero context-switching.',
    tech: ['Next.js', 'tRPC', 'Prisma', 'PostgreSQL', 'Pusher', 'Tailwind'],
    outcome:
      'Adopted by 500+ teams. 92% weekly active user retention at 90 days — significantly above industry average.',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=880&h=520&fit=crop&auto=format',
    github: 'https://github.com/hoseaaudu',
    demo: 'https://example.com',
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
            className="text-muted-foreground max-w-xl mb-10 lg:mb-14 leading-[1.75] text-[0.95rem]"
          >
            Selected projects presented as product case studies — from the
            problem statement to the measurable outcome.
          </motion.p>

          <div className="space-y-4">
            {projects.map((p) => (
              <motion.article
                key={p.id}
                variants={fadeUp}
                whileHover={{ borderColor: 'rgba(99, 102, 241, 0.2)' }}
                className="group rounded-2xl border border-border bg-card overflow-hidden cursor-pointer"
                onClick={() => setExpanded(expanded === p.id ? null : p.id)}
              >
                <div className="grid sm:grid-cols-[280px_1fr] lg:grid-cols-[380px_1fr] gap-0">
                  <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden bg-muted shrink-0">
                    <motion.img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.6, ease }}
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
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden border-t border-border"
                    >
                      <div className="p-5 sm:p-8 lg:p-10 grid sm:grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
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
                            Problem → Solution
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
                              className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-xs text-muted-foreground hover:text-foreground hover:border-border/80 transition-all"
                            >
                              <Github size={13} /> Code
                            </motion.a>
                            <motion.a
                              href={p.demo}
                              onClick={(e) => e.stopPropagation()}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.04 }}
                              whileTap={{ scale: 0.96 }}
                              className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-md text-xs hover:bg-accent/90 transition-all"
                            >
                              <ExternalLink size={13} /> Demo
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
