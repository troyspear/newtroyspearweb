'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const links = [
  {
    href: '/vehicle',
    title: 'Vehicle',
    description: 'Interactive 3D viewer, specs, subsystem breakdown',
  },
  {
    href: '/documentation',
    title: 'Documentation',
    description: 'Build logs, test results, design decisions',
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="group block">
              <h3 className="font-display text-lg font-medium text-fg">
                {link.title}
              </h3>
              <p className="mt-1 text-sm text-fg-muted leading-relaxed">
                {link.description}
              </p>
              <span className="inline-flex items-center gap-1.5 mt-3 text-xs text-accent group-hover:opacity-70 transition-opacity">
                Explore <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
