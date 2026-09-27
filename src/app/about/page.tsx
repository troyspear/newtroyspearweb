import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getTeamYears, getMembersByYear } from '@/lib/data/team-members'
import TeamGrid from '@/components/team/TeamGrid'

const CURRENT_YEAR = '2025-2026'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the Troy SPEAR team, the students behind our autonomous underwater vehicle.',
}

export default function AboutPage() {
  const years = getTeamYears()
  const current = getMembersByYear(CURRENT_YEAR)
  const underclassmen = current.filter((m) => m.grade !== undefined && m.grade <= 10).length

  return (
    <div className="pt-20 pb-16">
      <section className="px-5 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-light text-fg tracking-tight">
            Our Team
          </h1>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2">
              <p className="text-base text-fg-secondary leading-relaxed">
                Troy SPEAR brings together students from mechanical, electrical,
                and software backgrounds, all building an autonomous
                underwater vehicle for RoboNation RoboSub. Mentored by Cdr.
                William Lauper and Lt. Roger Fronek of Troy High School NJROTC.
              </p>
              <div className="mt-6 rounded-2xl border border-border bg-elevated p-5 shadow-sm">
                <h2 className="font-display text-lg font-medium text-fg">
                  Building the next crew
                </h2>
                <p className="mt-2 text-sm text-fg-secondary leading-relaxed">
                  {underclassmen} of our {current.length} current members are
                  freshmen or sophomores. New members work on real subsystems
                  from their first season, so experience carries over as
                  upperclassmen graduate.
                </p>
                <Link
                  href="/join"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:opacity-70 transition-opacity"
                >
                  How to join <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <figure className="lg:col-span-3">
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/gallery/23-24/23-24_team2.jpg"
                  alt="Troy SPEAR team standing behind their AUV at RoboSub"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 690px"
                />
              </div>
              <figcaption className="mt-2 text-sm text-fg-muted">
                The team with our AUV at RoboSub 2024.
              </figcaption>
            </figure>
          </div>

          <h2 className="mt-14 font-display text-xl sm:text-2xl font-light text-fg tracking-tight mb-2">
            {CURRENT_YEAR} Team
          </h2>
          <p className="text-sm text-fg-secondary">
            {current.length} members
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
                      ? 'px-3.5 py-1.5 rounded-full text-sm font-medium bg-accent text-page'
                      : 'px-3.5 py-1.5 rounded-full text-sm font-medium bg-elevated border border-border text-fg-secondary hover:text-fg hover:border-accent/40 transition-colors'
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
