import type { Metadata } from 'next'
import SubmarineViewerLoader from '@/components/vehicle/SubmarineViewerLoader'

export const metadata: Metadata = {
  title: 'Vehicle',
  description: 'Explore our autonomous underwater vehicle: interactive 3D viewer, specs, and subsystem documentation.',
}

export default function VehiclePage() {
  return (
    <div className="pt-20 pb-16">
      <section className="px-5 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-light text-fg tracking-tight">
            ORCA
          </h1>
          <p className="mt-3 text-sm sm:text-base text-fg-muted max-w-lg">
            Coming soon.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-8 pb-16">
        <div className="max-w-5xl mx-auto">
          <SubmarineViewerLoader />
        </div>
      </section>

      <section className="px-5 sm:px-8 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-sm font-medium text-fg-muted uppercase tracking-wide mb-4">
            Vehicle Overview
          </h2>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-surface border border-border-subtle">
            <iframe
              src="https://www.youtube.com/embed/KP6zZ--u0qI"
              title="ORCA: Vehicle Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

    </div>
  )
}
