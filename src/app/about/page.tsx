import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { getTeamYears, getMembersByYear } from '@/lib/data/team-members'

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

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {years.map((year) => {
              const members = getMembersByYear(year)
              return (
                <Link
                  key={year}
                  href={`/about/${year}`}
                  className="group flex items-center justify-between p-5 rounded-xl bg-surface border border-border-subtle hover:border-accent/40 transition-colors"
                >
                  <div>
                    <h2 className="font-display text-lg font-light text-fg tracking-tight">
                      {year}
                    </h2>
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
      </section>
    </div>
  )
}
