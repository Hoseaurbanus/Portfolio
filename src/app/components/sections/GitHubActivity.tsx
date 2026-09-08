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
  const scrollRef = useRef<HTMLDivElement>(null)
  const [gridVisible, setGridVisible] = useState(false)

  useEffect(() => {
    async function load() {
      // Clear stale v1 cache that showed 0 stars
      try { localStorage.removeItem('github_activity_cache') } catch {}
      try {
        const [statsData, activityData] = await Promise.all([
          fetchGitHubStats(),
          fetchGitHubActivity(),
        ])
        setStats(statsData)
        setWeeks(activityData)
      } catch {
        // keep defaults but stop loading spinner
      } finally {
        setLoading(false)
      }
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
          // Auto-scroll to most recent weeks so latest activity is visible
          if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollRef.current.scrollWidth
          }
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Also scroll to end once weeks load
  useEffect(() => {
    if (!loading && weeks.length && scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth
    }
  }, [loading, weeks])

  const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'Hoseaurbanus'
  const [chartError, setChartError] = useState(false)
  const statItems: { value: number; label: string; suffix?: string }[] = [
    { value: stats.publicRepos, label: 'Public Repos' },
    { value: stats.totalStars, label: 'Stars Earned' },
    { value: stats.contributions, label: 'Total Commits' },
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
            Live data from GitHub — real contribution chart and commit counts. No mock data.
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

          <motion.div ref={scrollRef} variants={fadeUp} className="overflow-x-auto pb-2 -mx-5 px-5 sm:mx-0 sm:px-0 scrollbar-thin scroll-smooth">
            <div ref={gridRef} className="pr-4">
              {/* Single real GitHub chart — responsive, no duplicate */}
              {!chartError ? (
                <img
                  src={`https://ghchart.rshah.org/e8a838/${GITHUB_USERNAME}`}
                  alt={`GitHub contribution chart for ${GITHUB_USERNAME} — real commits from GitHub`}
                  loading="lazy"
                  decoding="async"
                  width={720}
                  height={112}
                  className="w-full min-w-[640px] sm:min-w-0 max-w-[760px] h-auto rounded-xl border border-border bg-card p-2 sm:p-3"
                  onError={() => setChartError(true)}
                />
              ) : (
                /* Fallback only if ghchart fails to load */
                <div
                  role="grid"
                  aria-label={`Activity for ${new Date().getFullYear()} — ${weeks.length} weeks`}
                  aria-busy={loading}
                  className="flex gap-1 min-w-max"
                >
                  {loading ? (
                    <div className="flex gap-1" aria-hidden="true">
                      {Array.from({ length: 20 }).map((_, wi) => (
                        <div key={wi} className="flex flex-col gap-1">
                          {Array.from({ length: 7 }).map((__, di) => (
                            <div key={di} className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[3px] bg-muted/20 animate-pulse" />
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    weeks.map((week, wi) => (
                      <motion.div
                        key={wi}
                        role="row"
                        aria-label={`Week ${wi + 1}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={gridVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                        transition={{
                          duration: 0.25,
                          delay: 0.4 * (1 - Math.exp(-wi * 0.08)),
                        }}
                        className="flex flex-col gap-1"
                      >
                        {week.map((day, di) => {
                          const label = day.date
                            ? `${day.count} contribution${day.count !== 1 ? 's' : ''} on ${day.date}`
                            : 'No date'
                          return (
                            <div
                              key={di}
                              role="gridcell"
                              tabIndex={day.date ? 0 : -1}
                              aria-label={label}
                              title={day.date ? `${day.count} event${day.count !== 1 ? 's' : ''} on ${day.date}` : ''}
                              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[3px] border border-transparent ${levelClasses[day.level]} hover:ring-1 hover:ring-accent/30 focus-visible:ring-1 focus-visible:ring-accent focus-visible:outline-none transition-all cursor-default`}
                            />
                          )
                        })}
                      </motion.div>
                    ))
                  )}
                </div>
              )}
            </div>
            {!chartError && (
              <div className="flex items-center gap-2 mt-3 text-[10px] font-mono text-muted-foreground">
                <span>Less</span>
                {levelClasses.map((cls, i) => (
                  <div key={i} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[3px] border border-transparent ${cls}`} />
                ))}
                <span>More</span>
                <span className="ml-2 text-muted-foreground/60 hidden sm:inline">chart: ghchart.rshah.org (amber) — scroll if needed</span>
              </div>
            )}
            <p className="text-[10px] font-mono text-muted-foreground/50 mt-2 leading-relaxed">
              {loading ? 'Loading GitHub data…' : `Live from GitHub API — ${stats.publicRepos} repos, ${stats.contributions} commits. `}
              <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">View profile →</a>
            </p>
          </motion.div>
        </RevealGroup>
      </div>
    </section>
  )
}
