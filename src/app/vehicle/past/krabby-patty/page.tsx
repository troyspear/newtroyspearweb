import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Krabby Patty | Past Vehicle',
  description: 'The Krabby Patty AUV, designed for RoboSub 2024-2025.',
}

export default function KrabbyPattyPage() {
  return (
    <div className="pt-20 pb-16">
      <section className="px-5 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/vehicle"
            className="flex items-center gap-1.5 text-xs font-medium text-fg-muted hover:text-fg transition-colors mb-8 w-fit"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Vehicle
          </Link>

          <span className="inline-block text-[10px] font-semibold text-accent bg-accent-subtle px-2.5 py-1 rounded-full uppercase tracking-wider">
            RoboSub 2024-2025
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-light text-fg tracking-tight mt-4">
            Krabby Patty
          </h1>
          <p className="mt-3 text-sm sm:text-base text-fg-muted max-w-lg leading-relaxed">
            Refined for reliability and strategic task execution. Features an octagonal aluminum frame with custom CNC-milled 6061-T6 components, dual ZED 2i stereo cameras, NVIDIA Jetson Orin Nano, a double-jointed servo-powered claw, and a YOLOv8 vision pipeline with 3D spatial localization.
          </p>

          <div className="mt-12 p-8 rounded-2xl border border-border-subtle bg-surface/30">
            <p className="text-sm text-fg-muted text-center">
              Detailed vehicle specs and design documentation coming soon.
            </p>
            <div className="mt-4 flex justify-center">
              <a
                href="/documents/tdr-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:opacity-70 transition-opacity"
              >
                <FileText className="w-3.5 h-3.5" />
                Read TDR 2024-2025 (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
