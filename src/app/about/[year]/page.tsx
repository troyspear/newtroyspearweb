import type { Metadata } from 'next'
import Link from 'next/link'
import { getTeamYears, getMembersByYear } from '@/lib/data/team-members'
import TeamGrid from '@/components/team/TeamGrid'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return getTeamYears().map((year) => ({ year }))
}

export function generateMetadata({ params }: { params: Promise<{ year: string }> }): Promise<Metadata> {
  return params.then(({ year }) => ({
    title: `${year} Team`,
    description: `Meet the ${year} Troy SPEAR team.`,
  }))
}

export default async function TeamYearPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params
  const members = getMembersByYear(year)
  if (members.length === 0) notFound()

  return (
    <div className="pt-20 pb-16">
      <section className="px-5 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-2xl sm:text-3xl font-light text-fg tracking-tight">
            {year} Team
          </h1>
          <p className="mt-3 text-sm text-fg-secondary">
            {members.length} members
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {getTeamYears().map((y) => {
              const isActive = y === year
              return (
                <Link
                  key={y}
                  href={`/about/${y}`}
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
            <TeamGrid year={year} />
          </div>
        </div>
      </section>
    </div>
  )
}
