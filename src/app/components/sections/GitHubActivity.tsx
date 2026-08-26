import { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionNumber } from '../shared/SectionNumber'
import { fetchGitHubStats, fetchGitHubActivity } from '@/lib/github'
import AnimatedCounter from '../shared/AnimatedCounter'
import type { GitHubStats, GitHubDay } from '@/types'

const levelClasses = [
  'bg-muted/50',
  'bg-accent/20',
  'bg-accent/40',
  'bg-accent/70',
  'bg-accent',
]

export default function GitHubActivity() {
  const [stats, setStats] = useState<GitHubStats>({
    publicRepos: 0,
    totalStars: 0,
    contributions: 0,
    pullRequestsMerged: 0,
  })
  const [weeks, setWeeks] = useState<GitHubDay[][]>([])
  const [loading, setLoading] = useState(true)
  const gridRef = useRef<HTMLDivElement>(null)
  const [gridVisible, setGridVisible] = useState(false)

  useEffect(() => {
    async function load() {
      const [statsData, activityData] = await Promise.all([
        fetchGitHubStats(),
        fetchGitHubActivity(),
      ])
      setStats(statsData)
      setWeeks(activityData)
      setLoading(false)
    }
    load()
  }, [])

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGridVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const statItems = [
    { value: stats.publicRepos, label: 'Public Repos' },
    { value: stats.contributions, label: `Contributions (${new Date().getFullYear()})` },
    { value: stats.pullRequestsMerged, suffix: '+', label: 'Pull Requests Merged' },
  ]

  return (
    <section id="opensource" className="relative py-16 sm:py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionNumber number="07" label="Open Source & GitHub" />
        <RevealGroup>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[1.75rem] sm:text-4xl lg:text-[3.25rem] font-bold text-foreground mb-3 sm:mb-4 leading-[1.1] tracking-tight"
          >
            Built in public.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed text-[15px] sm:text-base"
          >
            Live data from GitHub. Activity reflects recent public events — not a full contribution graph.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-10 pb-6 sm:pb-8 lg:pb-10 border-b border-border"
          >
            {statItems.map(({ value, suffix = '', label }) => (
              <div key={label} className="min-w-0">
                <p className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground truncate">
                  {loading ? (
                    '—'
                  ) : (
                    <AnimatedCounter value={value} suffix={suffix} duration={1.2} />
                  )}
                </p>
                <p className="text-[10px] sm:text-xs font-mono text-muted-foreground mt-1 leading-tight">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="overflow-x-auto pb-2 -mx-5 px-5 sm:mx-0 sm:px-0 scrollbar-thin">
            <div ref={gridRef} className="flex gap-1 min-w-max pr-4">
              {weeks.map((week, wi) => (
                <motion.div
                  key={wi}
                  initial={{ opacity: 0, y: 8 }}
                  animate={gridVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{
                    duration: 0.25,
                    delay: 0.4 * (1 - Math.exp(-wi * 0.08)),
                  }}
                  className="flex flex-col gap-1"
                >
                  {week.map((day, di) => (
                    <div
                      key={di}
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[3px] border border-transparent ${levelClasses[day.level]} hover:ring-1 hover:ring-accent/30 transition-all cursor-default`}
                      title={day.date ? `${day.count} event${day.count !== 1 ? 's' : ''} on ${day.date}` : ''}
                    />
                  ))}
                </motion.div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-3 text-[10px] font-mono text-muted-foreground">
              <span>Less</span>
              {levelClasses.map((cls, i) => (
                <div key={i} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[3px] border border-transparent ${cls}`} />
              ))}
              <span>More</span>
              <span className="ml-2 hidden sm:inline text-muted-foreground/60">Scroll to see full year →</span>
            </div>
            <p className="text-[10px] font-mono text-muted-foreground/50 mt-2 leading-relaxed">
              Based on last 100 public events via GitHub API. For full history, visit <a href="https://github.com/Hoseaurbanus" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">github.com/Hoseaurbanus</a>.
            </p>
          </motion.div>
        </RevealGroup>
      </div>
    </section>
  )
}
