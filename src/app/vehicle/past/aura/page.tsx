import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import GltfViewerLoader from '@/components/vehicle/GltfViewerLoader'
import PastVehicleDetails from '@/components/vehicle/PastVehicleDetails'
import { aura } from '@/lib/data/past-vehicles'

export const metadata: Metadata = {
  title: 'Aura | Past Vehicle',
  description: 'The Aura AUV, designed for RoboSub 2023-2024.',
}

export default function AuraPage() {
  return (
    <div className="pt-20 pb-16">
      <section className="px-5 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/vehicle"
            className="flex items-center gap-1.5 text-sm font-medium text-fg-muted hover:text-fg transition-colors mb-8 w-fit"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to ORCA
          </Link>

          <span className="inline-block text-xs font-semibold text-accent bg-accent-subtle px-2.5 py-1 rounded-full uppercase tracking-wider">
            RoboSub 2023-2024
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-light text-fg tracking-tight mt-4">
            Aura
          </h1>
          <p className="mt-3 text-base sm:text-lg text-fg-secondary max-w-3xl leading-relaxed">
            Newly built AUV designed for autonomous movement and modularity. Integrated YOLOv8 for vision, a Doppler Velocity Log for underwater positioning, upgraded claw and torpedo systems, and behavior tree mission planning on a BlueROV2 frame with an NVIDIA Jetson Nano.
          </p>

          <div className="mt-12">
            <GltfViewerLoader url="/models/aura.glb" />
          </div>

          <div className="mt-12">
            <h2 className="font-display text-xs font-semibold text-accent uppercase tracking-wider mb-4">
              Competition Video
            </h2>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-surface border border-border-subtle">
              <iframe
                src="https://www.youtube.com/embed/_dAirzbanHQ"
                title="Aura: RoboSub 2023-2024"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          <PastVehicleDetails vehicle={aura} />
        </div>
      </section>
    </div>
  )
}
