'use client'

import Link from 'next/link'

const highlights = [
  {
    title: 'Hull Design v2 Complete',
    description: '30% drag reduction with new streamlined torpedo hull.',
    date: 'Sep 2025',
    href: '/documentation/hull-design-v2',
  },
  {
    title: 'First Pool Test Success',
    description: 'Validated waterproof integrity and thruster control at 3m.',
    date: 'Aug 2025',
    href: '/documentation/pool-test-march-2025',
  },
  {
    title: 'Computer Vision Pipeline',
    description: 'YOLOv8 at 30 FPS on NVIDIA Jetson.',
    date: 'Jun 2025',
    href: '/documentation/software-autonomy-stack',
  },
]

export default function HighlightsCarousel() {
  return (
    <section className="px-5 sm:px-8 py-20 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-sm font-medium text-fg-muted uppercase tracking-wide mb-8">
          Recent updates
        </h2>

        <div className="space-y-6">
          {highlights.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex items-baseline justify-between gap-4 py-3 border-b border-border-subtle last:border-0 hover:opacity-70 transition-opacity"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-fg truncate">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-xs text-fg-muted truncate">
                  {item.description}
                </p>
              </div>
              <span className="text-[11px] text-fg-muted shrink-0">
                {item.date}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
