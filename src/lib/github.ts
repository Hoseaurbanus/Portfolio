import type { GitHubStats, GitHubDay } from '@/types'

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'Hoseaurbanus'
const CACHE_KEY = 'github_activity_cache'
const CACHE_DURATION = 30 * 60 * 1000

interface CachedData {
  stats: GitHubStats
  activity: GitHubDay[][]
  timestamp: number
}

function getCachedData(): CachedData | null {
  try {
    const cached = localStorage.getItem(CACHE_KEY)
    if (!cached) return null
    const data: CachedData = JSON.parse(cached)
    if (Date.now() - data.timestamp > CACHE_DURATION) {
      localStorage.removeItem(CACHE_KEY)
      return null
    }
    return data
  } catch {
    return null
  }
}

function setCachedData(stats: GitHubStats, activity: GitHubDay[][]) {
  try {
    const data: CachedData = { stats, activity, timestamp: Date.now() }
    localStorage.setItem(CACHE_KEY, JSON.stringify(data))
  } catch {}
}

export async function fetchGitHubStats(): Promise<GitHubStats> {
  const cached = getCachedData()
  if (cached) return cached.stats

  try {
    const [reposRes, eventsRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}?per_page=100`),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=100`),
    ])

    if (!reposRes.ok) throw new Error('GitHub API error')

    const userData = await reposRes.json()
    const events = eventsRes.ok ? await eventsRes.json() : []

    const currentYear = new Date().getFullYear()
    const yearEvents = events.filter((e: { created_at: string }) =>
      new Date(e.created_at).getFullYear() === currentYear
    )
    const contributions = yearEvents.length

    const prEvents = events.filter(
      (e: { type: string }) => e.type === 'PullRequestEvent'
    )

    const stats: GitHubStats = {
      publicRepos: userData.public_repos || 0,
      totalStars: 0,
      contributions: contributions || 0,
      pullRequestsMerged: prEvents.length || 0,
    }

    const activity = await fetchGitHubActivity()
    setCachedData(stats, activity)

    return stats
  } catch {
    return {
      publicRepos: 0,
      totalStars: 0,
      contributions: 0,
      pullRequestsMerged: 0,
    }
  }
}

export async function fetchGitHubActivity(): Promise<GitHubDay[][]> {
  const cached = getCachedData()
  if (cached) return cached.activity

  try {
    const currentYear = new Date().getFullYear()
    const startOfYear = new Date(currentYear, 0, 1)
    const today = new Date()
    const totalDays = Math.floor(
      (today.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)
    )

    const weeks: GitHubDay[][] = []
    let currentWeek: GitHubDay[] = []

    for (let i = 0; i <= totalDays; i++) {
      const date = new Date(startOfYear)
      date.setDate(date.getDate() + i)

      const dayOfWeek = date.getDay()
      if (dayOfWeek === 0 && currentWeek.length > 0) {
        weeks.push(currentWeek)
        currentWeek = []
      }

      currentWeek.push({
        level: 0,
        date: date.toISOString().split('T')[0],
        count: 0,
      })
    }

    if (currentWeek.length > 0) {
      weeks.push(currentWeek)
    }

    try {
      const eventsRes = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=100`
      )
      if (eventsRes.ok) {
        const events = await eventsRes.json()
        const eventDates = events.map(
          (e: { created_at: string }) =>
            new Date(e.created_at).toISOString().split('T')[0]
        )

        const dateCounts: Record<string, number> = {}
        eventDates.forEach((d: string) => {
          dateCounts[d] = (dateCounts[d] || 0) + 1
        })

        for (const week of weeks) {
          for (const day of week) {
            const count = dateCounts[day.date] || 0
            day.count = count
            if (count === 0) day.level = 0
            else if (count <= 2) day.level = 1
            else if (count <= 5) day.level = 2
            else if (count <= 10) day.level = 3
            else day.level = 4
          }
        }
      }
    } catch {
      // Leave at level 0 — no fabricated data
    }

    return weeks
  } catch {
    const weeks: GitHubDay[][] = []
    for (let w = 0; w < 52; w++) {
      const week: GitHubDay[] = []
      for (let d = 0; d < 7; d++) {
        week.push({ level: 0, date: '', count: 0 })
      }
      weeks.push(week)
    }
    return weeks
  }
}
