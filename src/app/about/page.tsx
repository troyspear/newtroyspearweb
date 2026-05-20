import type { Metadata } from 'next'
import TeamGrid from '@/components/team/TeamGrid'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the Troy SPEAR team — the students behind our autonomous underwater vehicle.',
}

export default function AboutPage() {
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
              software, and business backgrounds — all building an autonomous
              underwater vehicle for RoboNation RoboSub.
            </p>
          </div>

          <div className="mt-14">
            <TeamGrid />
          </div>
        </div>
      </section>
    </div>
  )
}
