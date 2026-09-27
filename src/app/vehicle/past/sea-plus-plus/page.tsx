import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import GltfViewerLoader from '@/components/vehicle/GltfViewerLoader'
import PastVehicleDetails from '@/components/vehicle/PastVehicleDetails'
import { seaPlusPlus } from '@/lib/data/past-vehicles'

export const metadata: Metadata = {
  title: 'Sea++ | Past Vehicle',
  description: 'The Sea++ AUV, designed for RoboSub 2022-2023.',
}

export default function SeaPlusPlusPage() {
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
            RoboSub 2022-2023
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-light text-fg tracking-tight mt-4">
            Sea++
          </h1>
          <p className="mt-3 text-base sm:text-lg text-fg-secondary max-w-3xl leading-relaxed">
            Our inaugural AUV, built by a first-year team of 10 students. Used a BlueROV2 R2 frame with off-the-shelf components, YOLO v4 object detection, ROS with PID control, dual lowlight cameras, and an NVIDIA Jetson Nano. Designed as a reliable foundation for future years.
          </p>

          <div className="mt-12">
            <GltfViewerLoader url="/models/sea-plus-plus.glb" />
          </div>

          <div className="mt-12">
            <h2 className="font-display text-xs font-semibold text-accent uppercase tracking-wider mb-4">
              Competition Video
            </h2>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-surface border border-border-subtle">
              <iframe
                src="https://www.youtube.com/embed/4pNlbWc7bsQ"
                title="Sea++: RoboSub 2022-2023"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          <PastVehicleDetails vehicle={seaPlusPlus} />
        </div>
      </section>
    </div>
  )
}
