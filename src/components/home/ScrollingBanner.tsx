'use client'

import Link from 'next/link'
import { updates } from '@/lib/data/updates'

const doubled = [...updates, ...updates]

export default function ScrollingBanner() {

  return (
    <div role="marquee" aria-label="Recent updates" className="fixed top-14 left-0 right-0 z-40 bg-page border-b border-accent/20 overflow-hidden">
      <div className="flex animate-scroll">
        {doubled.map((update, i) => (
          <Link
            key={`${update.id}-${i}`}
            href={`/documentation/${update.slug}`}
            className="shrink-0 flex items-center gap-2 px-6 py-1.5 text-xs text-fg hover:text-accent transition-colors whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            <span className="font-medium">{update.title}</span>
            <span className="text-fg-muted">
              {new Date(update.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
