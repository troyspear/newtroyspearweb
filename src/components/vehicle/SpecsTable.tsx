import { vehicleSpecs } from '@/lib/data/vehicle-specs'

export default function SpecsTable() {
  return (
    <div id="specs">
      <h3 className="font-display text-sm font-medium text-fg-muted uppercase tracking-wide mb-4">
        Specifications
      </h3>
      <div className="space-y-0">
        {vehicleSpecs.map((spec) => (
          <div
            key={spec.label}
            className="flex justify-between items-center py-2.5 border-b border-border-subtle last:border-0"
          >
            <span className="text-xs text-fg-muted">{spec.label}</span>
            <span className="text-xs text-fg font-medium">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
