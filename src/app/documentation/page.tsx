'use client'

import { useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import BlogCard from '@/components/documentation/BlogCard'
import CategoryFilter from '@/components/documentation/CategoryFilter'
import { blogPosts } from '@/lib/data/blog-posts'
import { FileText, Beaker, CheckCircle, AlertCircle, Clock, ChevronLeft, ChevronRight, FilePlus } from 'lucide-react'

const tdrs = [
  {
    year: '2025–2026',
    vehicle: 'Poseidon Mk. II',
    vehicleSlug: '/vehicle',
    description: '',
    pdfUrl: '',
    upcoming: true,
  },
  {
    year: '2024–2025',
    vehicle: 'Krabby Patty',
    vehicleSlug: '/vehicle/past/krabby-patty',
    description: 'Octagonal aluminum frame with custom CNC-milled components, dual ZED 2i stereo cameras, NVIDIA Jetson Orin Nano, double-jointed claw, and YOLOv8 with 3D spatial localization.',
    pdfUrl: '/documents/tdr-2025.pdf',
    upcoming: false,
  },
  {
    year: '2023–2024',
    vehicle: 'Aura',
    vehicleSlug: '/vehicle/past/aura',
    description: 'Newly built AUV integrating YOLOv8 vision, DVL for underwater positioning, upgraded claw and torpedo systems, and behavior tree mission planning on a BlueROV2 frame.',
    pdfUrl: '/documents/tdr-2024.pdf',
    upcoming: false,
  },
  {
    year: '2022–2023',
    vehicle: 'Sea++',
    vehicleSlug: '/vehicle/past/sea-plus-plus',
    description: 'Our inaugural AUV built by 10 students using a BlueROV2 R2 frame, YOLO v4 object detection, ROS with PID control, and an NVIDIA Jetson Nano.',
    pdfUrl: '/documents/tdr-2023.pdf',
    upcoming: false,
  },
]

const testSummaries = [
  {
    date: 'May 2025',
    title: 'Pool Test #2 — Autonomous Navigation',
    waterTime: '4 hours',
    objectives: ['Tune depth hold PID', 'First autonomous gate navigation', 'Test vision pipeline underwater', 'Measure battery runtime'],
    results: { passed: 4, partial: 1, failed: 0 },
    slug: 'pool-test-may-2025',
  },
  {
    date: 'Apr 2025',
    title: 'Simulation Validation Session',
    waterTime: '2 hours (+ 10 hours sim)',
    objectives: ['Compare sim vs. real maneuvers', 'Calibrate Gazebo drag model', 'Validate sensor noise models'],
    results: { passed: 2, partial: 1, failed: 0 },
    slug: 'simulation-validation',
  },
  {
    date: 'Mar 2025',
    title: 'Pool Test #1 — Initial Water Test',
    waterTime: '3 hours',
    objectives: ['Validate waterproof integrity', 'Test thruster control', 'Achieve depth hold at 3m', 'Check sensor readings'],
    results: { passed: 3, partial: 1, failed: 0 },
    slug: 'pool-test-march-2025',
  },
]

function TdrSlider() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }, [])

  const scroll = useCallback((direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.querySelector<HTMLElement>(':scope > *')?.offsetWidth ?? 320
    el.scrollBy({ left: direction === 'left' ? -cardWidth - 24 : cardWidth + 24, behavior: 'smooth' })
  }, [])

  return (
    <div className="relative group">
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-elevated border border-border-subtle shadow-md flex items-center justify-center text-fg-muted hover:text-fg transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-elevated border border-border-subtle shadow-md flex items-center justify-center text-fg-muted hover:text-fg transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      )}

      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 -mx-1 px-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {tdrs.map((tdr) => (
          <div
            key={tdr.year}
            className="snap-start shrink-0 w-[300px] sm:w-[340px] bg-glass border border-glass-border hover:border-accent/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            {tdr.upcoming ? (
              <>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-semibold text-accent bg-accent-subtle px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {tdr.year}
                    </span>
                    <Link
                      href={tdr.vehicleSlug}
                      className="text-xs text-fg-muted font-medium hover:text-accent transition-colors"
                    >
                      {tdr.vehicle}
                    </Link>
                  </div>
                  <h4 className="font-display text-base font-semibold text-fg">
                    RoboSub {tdr.year} Report
                  </h4>
                  <p className="mt-2.5 text-xs text-fg-muted leading-relaxed">
                    Technical design report for {tdr.vehicle} is currently in progress and will be published before the competition deadline.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border-subtle">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-fg-muted">
                    <FilePlus className="w-3.5 h-3.5" />
                    Coming soon
                  </span>
                </div>
              </>
            ) : (
              <>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-semibold text-accent bg-accent-subtle px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {tdr.year}
                    </span>
                    <Link
                      href={tdr.vehicleSlug}
                      className="text-xs text-fg-muted font-medium hover:text-accent transition-colors"
                    >
                      {tdr.vehicle}
                    </Link>
                  </div>
                  <h4 className="font-display text-base font-semibold text-fg">
                    RoboSub {tdr.year} Report
                  </h4>
                  <p className="mt-2.5 text-xs text-fg-muted leading-relaxed">
                    {tdr.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border-subtle">
                  <a
                    href={tdr.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:opacity-70 transition-opacity"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Read TDR (PDF)
                  </a>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function DocumentationPage() {
  const [category, setCategory] = useState<string | null>(null)

  const filtered = category
    ? blogPosts.filter((p) => p.category === category)
    : blogPosts

  return (
    <div className="pt-20 pb-16">
      <section className="px-5 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-2xl sm:text-3xl font-light text-fg tracking-tight">
            Documentation
          </h1>
          <p className="mt-3 text-sm text-fg-muted max-w-lg">
            Updates, build logs, test summaries, and formal technical design reports.
          </p>

          {/* Technical Design Reports */}
          <div className="mt-12">
            <h2 className="font-display text-xs font-semibold text-accent uppercase tracking-wider mb-6">
              Technical Design Reports
            </h2>
            <TdrSlider />
          </div>

          {/* Test Summaries */}
          <div className="mt-16">
            <h2 className="font-display text-xs font-semibold text-accent uppercase tracking-wider mb-6">
              Test Summaries
            </h2>
            <div className="space-y-4">
              {testSummaries.map((test) => (
                <Link
                  key={test.slug}
                  href={`/documentation/${test.slug}`}
                  className="block bg-glass border border-glass-border hover:border-accent/40 rounded-xl p-5 transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Beaker className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                        <h3 className="text-sm font-medium text-fg truncate group-hover:text-accent transition-colors">
                          {test.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-fg-muted">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" aria-hidden="true" />
                          {test.waterTime}
                        </span>
                        <span>{test.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs shrink-0">
                      <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
                        <CheckCircle className="w-3 h-3" aria-hidden="true" />
                        {test.results.passed} passed
                      </span>
                      {test.results.partial > 0 && (
                        <span className="flex items-center gap-1 text-yellow-600 dark:text-yellow-400">
                          <AlertCircle className="w-3 h-3" aria-hidden="true" />
                          {test.results.partial} partial
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {test.objectives.map((obj) => (
                      <span
                        key={obj}
                        className="text-[10px] text-fg-muted bg-surface px-2 py-0.5 rounded-full"
                      >
                        {obj}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Updates / Blog Posts */}
          <div className="mt-16">
            <h2 className="font-display text-xs font-semibold text-accent uppercase tracking-wider mb-6">
              Updates
            </h2>
            <div className="max-w-3xl">
              <CategoryFilter selected={category} onSelect={setCategory} />
              <div className="mt-6">
                {filtered.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
              {filtered.length === 0 && (
                <p className="text-xs text-fg-muted mt-8">No posts in this category.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
