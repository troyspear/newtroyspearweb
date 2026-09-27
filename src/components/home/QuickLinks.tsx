'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const links = [
  {
    href: '/vehicle',
    title: 'ORCA',
    description: 'Our 2026 vehicle: 3D model, specs, subsystem design, and test results',
  },
  {
    href: '/documentation',
    title: 'Documentation',
    description: 'Build logs, pool trials, and technical design reports',
  },
  {
    href: '/gallery',
    title: 'Gallery',
    description: 'Competitions, pool tests, build sessions',
  },
  {
    href: '/about',
    title: 'Team',
    description: '20 members across 3 sub-teams',
  },
]

export default function QuickLinks() {
  return (
    <section id="explore" className="px-5 sm:px-8 py-20 bg-accent-subtle scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="group flex flex-col rounded-2xl border border-border bg-elevated p-6 shadow-sm hover:border-accent/50 hover:-translate-y-0.5 transition-all">
              <h3 className="font-display text-lg font-medium text-fg">
                {link.title}
              </h3>
              <p className="mt-1.5 text-sm text-fg-secondary leading-relaxed">
                {link.description}
              </p>
              <span className="inline-flex items-center gap-1.5 mt-auto pt-4 text-sm font-semibold text-accent group-hover:opacity-70 transition-opacity">
                Explore <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
