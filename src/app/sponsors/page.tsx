import type { Metadata } from 'next'
import Image from 'next/image'
import { Mail, FileText, ExternalLink, Users, Trophy, Wrench, Calendar } from 'lucide-react'
import { sponsors, tierConfig } from '@/lib/data/sponsors'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Sponsors',
  description: 'Our sponsors make Troy SPEAR possible. Learn how to support our team.',
}

const stats = [
  { icon: Users, label: 'Active Members', value: '20+' },
  { icon: Trophy, label: 'Competition Years', value: '3' },
  { icon: Wrench, label: 'Vehicles Built', value: '4' },
  { icon: Calendar, label: 'Founded', value: '2022' },
]

export default function SponsorsPage() {
  const tiers = ['platinum', 'gold', 'silver', 'bronze'] as const

  return (
    <div className="pt-20 pb-16">
      <section className="px-5 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-light text-fg tracking-tight">
            Sponsors
          </h1>
          <p className="mt-3 text-sm sm:text-base text-fg-muted max-w-lg leading-relaxed">
            Thank you to every partner who has supported our team. Your contributions make it possible for us to design, build, and compete.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-lg sm:text-xl font-medium text-fg tracking-tight mb-8">
            Our Partners
          </h2>
          <div className="space-y-12">
            {tiers.map((tier) => {
              const tierSponsors = sponsors.filter((s) => s.tier === tier)
              if (tierSponsors.length === 0) return null
              const config = tierConfig[tier]

              return (
                <div key={tier}>
                  <h3 className={`text-sm uppercase tracking-widest mb-4 font-semibold ${config.textClass}`}>
                    {config.label} Partners
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {tierSponsors.map((sponsor) => (
                      <a
                        key={sponsor.name}
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center py-6 px-4 rounded-2xl border transition-all duration-300 ${config.cardClass}`}
                      >
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          width={160}
                          height={60}
                          className={`object-contain max-w-full transition-transform ${config.logoSize}`}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-glass border border-glass-border rounded-2xl p-8 sm:p-10">
            <h2 className="font-display text-lg sm:text-xl font-medium text-fg tracking-tight">
              Why sponsor Troy SPEAR?
            </h2>
            <p className="mt-4 text-sm text-fg-secondary leading-relaxed max-w-2xl">
              Your sponsorship directly funds the materials, sensors, and travel that make it possible for high school students to design, build, and program autonomous underwater vehicles — gaining hands-on engineering experience before they even reach college.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-page/50">
                  <stat.icon className="w-4 h-4 text-accent mx-auto mb-2" />
                  <p className="font-display text-xl font-semibold text-fg">{stat.value}</p>
                  <p className="text-[11px] text-fg-muted mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border-subtle">
              <h3 className="text-xs font-semibold text-fg-muted uppercase tracking-wide mb-3">
                Where your support goes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-fg-secondary">
                <p>Underwater sensors, cameras, and DVLs</p>
                <p>CNC machining and raw materials</p>
                <p>Competition travel and registration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 py-16 border-t border-border-subtle">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col justify-between h-full py-2">
            <div>
              <h3 className="font-display text-xl font-light text-fg">
                Become a partner
              </h3>
              <p className="mt-3 text-sm text-fg-muted max-w-md leading-relaxed">
                Join the organizations supporting the next generation of engineers. Every contribution — whether financial, in-kind, or mentorship — has a direct impact on what our students can achieve.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-sm text-accent hover:opacity-70 transition-opacity font-semibold"
              >
                <Mail className="w-4 h-4" />
                Get in touch with us
              </a>
              <a
                href="mailto:contact@troyspear.com"
                className="text-sm text-fg-muted hover:text-fg transition-colors"
              >
                contact@troyspear.com
              </a>
            </div>
          </div>

          <div className="bg-glass border border-glass-border p-6 rounded-2xl flex flex-col justify-between items-start gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3.5 bg-accent-subtle text-accent rounded-2xl border border-glass-border">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-base font-semibold text-fg">
                  Sponsorship Packet
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-fg-muted leading-relaxed">
                  Explore our budget allocations, full list of partner benefits, and team statistics.
                </p>
              </div>
            </div>
            <a
              href="/documents/sponsorship-packet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-accent rounded-xl hover:opacity-90 transition-opacity gap-1.5 w-full sm:w-auto shadow-sm"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View Packet (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
