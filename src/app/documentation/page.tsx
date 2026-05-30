import type { Metadata } from 'next'
import TdrSlider from '@/components/documentation/TdrSlider'
import BlogList from '@/components/documentation/BlogList'

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Updates, build logs, test summaries, and formal technical design reports from Troy SPEAR.',
}

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
