'use client'

import Link from 'next/link'

const highlights = [
  {
    title: 'Fixing Camera Latency: ONNX to TensorRT',
    description: 'Migrating our model runtime from ONNX to TensorRT on the Jetson Orin Nano.',
    date: 'May 2026',
    href: '/documentation/camera-latency-tensorrt',
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
