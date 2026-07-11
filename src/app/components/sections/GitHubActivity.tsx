import { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionLabel } from '../shared/SectionLabel'
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
    <section id="opensource" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <RevealGroup>
          <SectionLabel>Open Source & GitHub</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-foreground mb-4 leading-[1.1]"
          >
            Built in public.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-xl mb-8 lg:mb-10 leading-[1.75] text-base"
          >
            Consistent contribution to open source and personal tools.
            Every square represents a commit.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-3 gap-6 sm:gap-8 mb-8 lg:mb-10 pb-8 lg:pb-10 border-b border-border"
          >
            {statItems.map(({ value, suffix = '', label }) => (
              <div key={label}>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                  {loading ? (
                    '—'
                  ) : (
                    <AnimatedCounter value={value} suffix={suffix} duration={2} />
                  )}
                </p>
                <p className="text-[10px] sm:text-xs font-mono text-muted-foreground mt-0.5">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div ref={gridRef} className="flex gap-1 min-w-max">
              {weeks.map((week, wi) => (
                <motion.div
                  key={wi}
                  initial={{ opacity: 0, y: 10 }}
                  animate={gridVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.5 * (1 - Math.exp(-wi * 0.08)),
                  }}
                  className="flex flex-col gap-1"
                >
                  {week.map((day, di) => (
                    <div
                      key={di}
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[3px] ${levelClasses[day.level]} hover:ring-1 hover:ring-accent/40 transition-all cursor-default`}
                      title={day.date ? `${day.count} contribution${day.count !== 1 ? 's' : ''} on ${day.date}` : ''}
                    />
                  ))}
                </motion.div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-3 text-[10px] font-mono text-muted-foreground">
              <span>Less</span>
              {levelClasses.map((cls, i) => (
                <div key={i} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[3px] ${cls}`} />
              ))}
              <span>More</span>
            </div>
          </motion.div>
        </RevealGroup>
      </div>
    </section>
  )
}
