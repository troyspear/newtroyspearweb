import { FileText } from 'lucide-react'
import type { PastVehicle } from '@/lib/data/past-vehicles'
import { SectionTitle, SpecGrid } from './VehicleBlocks'

export default function PastVehicleDetails({ vehicle }: { vehicle: PastVehicle }) {
  return (
    <>
      <div className="mt-16">
        <SectionTitle eyebrow="At a glance" title="Specifications" />
        <SpecGrid specs={vehicle.specs} />
      </div>

      <div className="mt-16">
        <SectionTitle eyebrow="Design" title="Highlights" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {vehicle.highlights.map((h) => (
            <div key={h.title} className="rounded-2xl border border-border bg-elevated p-6 shadow-sm">
              <h3 className="font-display text-lg font-medium text-fg">{h.title}</h3>
              <p className="mt-2 text-sm text-fg-secondary leading-relaxed">{h.body}</p>
            </div>
          ))}
        </div>
        <a
          href={vehicle.tdr.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:opacity-70 transition-opacity"
        >
          <FileText className="w-4 h-4" />
          {vehicle.tdr.label}
        </a>
      </div>
    </>
  )
}
