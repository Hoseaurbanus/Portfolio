import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ExternalLink, ChevronRight } from 'lucide-react'
import { ease } from '@/lib/constants'
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
    tagline: 'Full-stack school management ERP with CBT and payment processing',
    overview:
      'Comprehensive school management system serving 5 user roles (Admin, Teacher, Accountant, Parent, Student). Features include student lifecycle management, academic scoring with PDF report cards, fee processing via Paystack, CBT exam engine, and real-time SSE notifications.',
    problem:
      'The academy needed a centralized digital platform to replace manual operations across enrollment, grading, fee collection, attendance, and parent communication for a K-12 institution in Gombe State, Nigeria.',
    solution:
      'Built a custom PHP MVC backend with JWT auth, MySQL database (65 tables), and a React/TypeScript frontend with Radix UI. Implemented auto-migration, SSE real-time updates, Paystack payments, jsPDF report cards with QR codes, and an anti-cheating CBT exam engine.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'PHP', 'MySQL', 'Paystack'],
    outcome:
      'Live at gracelandroyalacademy.com.ng — managing all school operations including enrollment, grading, payments, exams, and parent portal.',
    image: '/graceland.jpg',
    github: 'https://github.com/Hoseaurbanus/updated-GRA',
    demo: 'https://gracelandroyalacademy.com.ng/',
  },
  {
    id: 3,
    index: '03',
    name: 'PAJUMA School Portal',
    tagline: 'Full-stack school management ERP for ECWA PAJUMA Christian Academy',
    overview:
      'Comprehensive ERP-style platform managing student enrollment, academic scoring, fee payments, CBT exams, attendance, and parent communication for a K-12 school in Gombe State, Nigeria.',
    problem:
      'The school needed a centralized digital system to replace manual record-keeping across 65 database tables, serving 5 user roles (Admin, Teacher, Accountant, Parent, Student).',
    solution:
      'Built a custom PHP MVC backend with JWT auth and a React/TypeScript frontend. Features include auto-migration, SSE real-time notifications, Paystack payments, PDF report cards with QR codes, and an anti-cheating CBT exam engine.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'PHP', 'MySQL', 'Vite'],
    outcome:
      'Live production system managing all school operations — enrollment, grading, payments, exams, and parent portal — for ECWA PAJUMA Christian Academy.',
    image: '/PAJUMA.jpg',
    github: 'https://github.com/Hoseaurbanus/PAJUMA',
    demo: 'https://pajuma-m6gj.vercel.app/',
  },
  {
    id: 4,
    index: '04',
    name: 'CampusFund',
    tagline: 'Campus fundraising and donation management system',
    overview:
      'A full-stack platform connecting students in financial hardship with donors. Manages the entire lifecycle from assistance request submission, through administrative approval, to donor-funded disbursement.',
    problem:
      'Students at Graceland Royal Academy needed a structured, transparent digital platform to request financial assistance, while donors needed a reliable way to contribute and track their impact.',
    solution:
      'Built a custom PHP micro-framework backend with JWT auth and a React/TypeScript frontend. Features include Paystack payments, manual bank transfer verification, in-app notifications, analytics dashboards, and role-based access for Students, Donors, and Admins.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'PHP', 'MySQL', 'Paystack'],
    outcome:
      'Live production system at anns.com.gracelandroyalacademy.com.ng, enabling transparent fundraising and disbursement for students in need.',
    image: '/FUND.jpg',
    github: 'https://github.com/Hoseaurbanus/FUND-RAISING',
    demo: 'https://anns.com.gracelandroyalacademy.com.ng',
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
            Real-world projects built and deployed to production - from the
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
                  <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden bg-[#0f172a] shrink-0">
                    {p.image ? (
                      <motion.img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.5, ease }}
                        className="w-full h-full object-cover opacity-75 group-hover:opacity-90 transition-opacity duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-accent/10 via-accent/5 to-muted flex items-center justify-center">
                        <span className="text-3xl font-serif font-bold text-accent/20">{p.index}</span>
                      </div>
                    )}
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
                          <motion.a
                            href={p.demo}
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-accent text-white rounded-md text-xs hover:bg-accent/90 transition-all min-h-[44px]"
                          >
                            <ExternalLink size={13} /> Live Demo
                          </motion.a>
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
