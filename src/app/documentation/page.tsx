import type { Metadata } from 'next'
import Link from 'next/link'
import TdrSlider from '@/components/documentation/TdrSlider'
import BlogList from '@/components/documentation/BlogList'
import { Beaker, CheckCircle, AlertCircle, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Updates, build logs, test summaries, and formal technical design reports from Troy SPEAR.',
}

const testSummaries = [
  {
    date: 'May 2025',
    title: 'Pool Test #2: Autonomous Navigation',
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
    title: 'Pool Test #1: Initial Water Test',
    waterTime: '3 hours',
    objectives: ['Validate waterproof integrity', 'Test thruster control', 'Achieve depth hold at 3m', 'Check sensor readings'],
    results: { passed: 3, partial: 1, failed: 0 },
    slug: 'pool-test-march-2025',
  },
]

export default function DocumentationPage() {
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
              <BlogList />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
