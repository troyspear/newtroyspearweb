import type { Metadata } from 'next'
import SpecsTable from '@/components/vehicle/SpecsTable'
import SubmarineViewerLoader from '@/components/vehicle/SubmarineViewerLoader'
import { subsystems } from '@/lib/data/vehicle-specs'
import { Zap, Eye, Cpu, Box, Play } from 'lucide-react'

const iconMap: Record<string, typeof Zap> = { zap: Zap, eye: Eye, cpu: Cpu, box: Box }

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
            Poseidon Mk. II
          </h1>
          <p className="mt-3 text-sm sm:text-base text-fg-muted max-w-lg">
            8 thrusters, dual-camera vision, modular frame.
            Fully student-designed for RoboSub 2026.
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
          {/* Replace the placeholder below with a YouTube/Vimeo embed URL */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-surface border border-border-subtle">
            {/* <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Poseidon Mk. II: Vehicle Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            /> */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-fg-muted">
              <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Play className="w-6 h-6 text-accent" />
              </div>
              <p className="text-xs">Vehicle overview video coming soon</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 py-16 border-t border-border-subtle">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <SpecsTable />

          <div>
            <h3 className="font-display text-sm font-medium text-fg-muted uppercase tracking-wide mb-6" id="propulsion">
              Subsystems
            </h3>
            <div className="space-y-5">
              {subsystems.map((sys) => {
                const Icon = iconMap[sys.icon] || Box
                return (
                  <div key={sys.name} className="flex gap-3" id={sys.name.toLowerCase()}>
                    <Icon className="w-4 h-4 text-fg-muted mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-fg">{sys.name}</h4>
                      <p className="text-xs text-fg-muted mt-0.5 leading-relaxed">{sys.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
