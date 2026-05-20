import type { Metadata } from 'next'
import Image from 'next/image'
import { Mail, FileText, Download } from 'lucide-react'
import { sponsors, tierConfig } from '@/lib/data/sponsors'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Sponsors',
  description: 'Our sponsors make Troy SPEAR possible. Learn how to support our team.',
}

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
            The organizations and partners who make our autonomous underwater robotics research possible.
          </p>

          <div className="mt-14 space-y-12">
            {tiers.map((tier) => {
              const tierSponsors = sponsors.filter((s) => s.tier === tier)
              if (tierSponsors.length === 0) return null
              const config = tierConfig[tier]

              return (
                <div key={tier}>
                  <h3 className={`text-xs uppercase tracking-widest mb-4 font-semibold ${config.textClass}`}>
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

          <div className="mt-20 pt-10 border-t border-border-subtle grid md:grid-cols-2 gap-8 items-stretch">
            <div className="flex flex-col justify-between h-full py-2">
              <div>
                <h3 className="font-display text-xl font-light text-fg">
                  Become a partner
                </h3>
                <p className="mt-3 text-sm text-fg-muted max-w-md leading-relaxed">
                  Your support directly funds underwater robotics materials, sensors, cameras, travel expenses, and competition entry registration.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 mt-6 text-sm text-accent hover:opacity-70 transition-opacity font-semibold w-fit"
              >
                <Mail className="w-4 h-4" />
                Get in touch with us
              </a>
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
                <Download className="w-3.5 h-3.5" />
                Download Packet (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
