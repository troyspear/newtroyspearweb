import type { Metadata } from 'next'
import Link from 'next/link'
import { getTeamYears, getMembersByYear } from '@/lib/data/team-members'
import TeamGrid from '@/components/team/TeamGrid'

const CURRENT_YEAR = '2025-2026'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the Troy SPEAR team, the students behind our autonomous underwater vehicle.',
}

export default function AboutPage() {
  const years = getTeamYears()

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

          <h2 className="mt-14 font-display text-xl sm:text-2xl font-light text-fg tracking-tight mb-2">
            {CURRENT_YEAR} Team
          </h2>
          <p className="text-xs text-fg-muted">
            {getMembersByYear(CURRENT_YEAR).length} members
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {years.map((y) => {
              const isActive = y === CURRENT_YEAR
              return (
                <Link
                  key={y}
                  href={isActive ? '/about' : `/about/${y}`}
                  className={
                    isActive
                      ? 'px-3 py-1.5 rounded-full text-xs font-medium bg-accent text-page'
                      : 'px-3 py-1.5 rounded-full text-xs font-medium bg-surface border border-border-subtle text-fg-muted hover:text-fg hover:border-accent/40 transition-colors'
                  }
                >
                  {y}
                </Link>
              )
            })}
          </div>

          <div className="mt-10">
            <TeamGrid year={CURRENT_YEAR} />
          </div>
        </div>
      </section>
    </div>
  )
}
