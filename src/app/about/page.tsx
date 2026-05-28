import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { getTeamYears, getMembersByYear } from '@/lib/data/team-members'
import TeamGrid from '@/components/team/TeamGrid'

const CURRENT_YEAR = '2025-2026'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the Troy SPEAR team, the students behind our autonomous underwater vehicle.',
}

export default function AboutPage() {
  const years = getTeamYears()
  const pastYears = years.filter((y) => y !== CURRENT_YEAR)

  return (
    <div className="pt-20 pb-16">
      <section className="px-5 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-2xl sm:text-3xl font-light text-fg tracking-tight">
            Our Team
          </h1>
          <div className="mt-6 max-w-xl">
            <p className="text-sm text-fg-secondary leading-relaxed">
              Troy SPEAR brings together students from mechanical, electrical,
              and software backgrounds, all building an autonomous
              underwater vehicle for RoboNation RoboSub.
            </p>
          </div>

          <div className="mt-14">
            <h2 className="font-display text-xl sm:text-2xl font-light text-fg tracking-tight mb-2">
              {CURRENT_YEAR} Team
            </h2>
            <p className="text-xs text-fg-muted mb-8">
              {getMembersByYear(CURRENT_YEAR).length} members
            </p>
            <TeamGrid year={CURRENT_YEAR} />
          </div>

          <div className="mt-20">
            <h2 className="font-display text-sm font-medium text-fg-muted uppercase tracking-wide mb-4">
              Past Teams
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pastYears.map((year) => {
                const members = getMembersByYear(year)
                return (
                  <Link
                    key={year}
                    href={`/about/${year}`}
                    className="group flex items-center justify-between p-5 rounded-xl bg-surface border border-border-subtle hover:border-accent/40 transition-colors"
                  >
                    <div>
                      <h3 className="font-display text-lg font-light text-fg tracking-tight">
                        {year}
                      </h3>
                      <p className="text-xs text-fg-muted mt-1">
                        {members.length} members
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-fg-muted group-hover:text-accent transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
