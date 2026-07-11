import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionLabel } from '../shared/SectionLabel'
import { fetchGitHubStats, fetchGitHubActivity } from '@/lib/github'
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
    publicRepos: 24,
    totalStars: 1200,
    contributions: 847,
    pullRequestsMerged: 120,
  })
  const [weeks, setWeeks] = useState<GitHubDay[][]>([])
  const [loading, setLoading] = useState(true)

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

  return (
    <section id="opensource" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <RevealGroup>
          <SectionLabel>Open Source & GitHub</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl lg:text-[3.25rem] font-bold text-foreground mb-4 leading-[1.1]"
          >
            Built in public.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-xl mb-10 leading-[1.75] text-[0.95rem]"
          >
            Consistent contribution to open source and personal tools.
            Every square represents a commit.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-8 mb-10 pb-10 border-b border-border"
          >
            {[
              { value: stats.publicRepos.toString(), label: 'Public Repos' },
              { value: stats.totalStars >= 1000 ? `${(stats.totalStars / 1000).toFixed(1)}k` : stats.totalStars.toString(), label: 'Total Stars' },
              { value: stats.contributions.toString(), label: `Contributions (${new Date().getFullYear()})` },
              { value: `${stats.pullRequestsMerged}+`, label: 'Pull Requests Merged' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-serif text-3xl font-bold text-foreground">
                  {loading ? '—' : value}
                </p>
                <p className="text-xs font-mono text-muted-foreground mt-0.5">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="overflow-x-auto pb-2">
            <div className="flex gap-1 min-w-max">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-1">
                  {week.map((day, di) => (
                    <div
                      key={di}
                      className={`w-3 h-3 rounded-[3px] ${levelClasses[day.level]} hover:ring-1 hover:ring-accent/40 transition-all cursor-default`}
                      title={day.date ? `${day.count} contribution${day.count !== 1 ? 's' : ''} on ${day.date}` : ''}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-3 text-[10px] font-mono text-muted-foreground">
              <span>Less</span>
              {levelClasses.map((cls, i) => (
                <div key={i} className={`w-3 h-3 rounded-[3px] ${cls}`} />
              ))}
              <span>More</span>
            </div>
          </motion.div>
        </RevealGroup>
      </div>
    </section>
  )
}
