import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sea++ — Past Vehicle',
  description: 'The Sea++ AUV, designed for RoboSub 2022–2023.',
}

export default function SeaPlusPlusPage() {
  return (
    <div className="pt-20 pb-16">
      <section className="px-5 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/vehicle"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-fg-muted hover:text-fg transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Vehicle
          </Link>

          <span className="text-[10px] font-semibold text-accent bg-accent-subtle px-2.5 py-1 rounded-full uppercase tracking-wider">
            RoboSub 2022–2023
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-light text-fg tracking-tight mt-4">
            Sea++
          </h1>
          <p className="mt-3 text-sm sm:text-base text-fg-muted max-w-lg leading-relaxed">
            Our inaugural AUV, built by a first-year team of 10 students. Used a BlueROV2 R2 frame with off-the-shelf components, YOLO v4 object detection, ROS with PID control, dual lowlight cameras, and an NVIDIA Jetson Nano — designed as a reliable foundation for future years.
          </p>

          <div className="mt-12 p-8 rounded-2xl border border-border-subtle bg-surface/30">
            <p className="text-sm text-fg-muted text-center">
              Detailed vehicle specs and design documentation coming soon.
            </p>
            <div className="mt-4 flex justify-center">
              <a
                href="/documents/tdr-2023.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:opacity-70 transition-opacity"
              >
                <FileText className="w-3.5 h-3.5" />
                Read TDR 2022–2023 (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
