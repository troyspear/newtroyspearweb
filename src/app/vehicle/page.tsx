import type { Metadata } from 'next'
import SpecsTable from '@/components/vehicle/SpecsTable'
import SubmarineViewerLoader from '@/components/vehicle/SubmarineViewerLoader'
import { subsystems } from '@/lib/data/vehicle-specs'
import { Zap, Eye, Cpu, Box, FileText } from 'lucide-react'

const iconMap: Record<string, typeof Zap> = { zap: Zap, eye: Eye, cpu: Cpu, box: Box }

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Vehicle',
  description: 'Explore our autonomous underwater vehicle — interactive 3D viewer, specs, and subsystem documentation.',
}

const tdrs = [
  {
    year: '2025',
    vehicle: 'Poseidon Mk. I',
    description: 'Focused on hydrodynamic optimization, active yaw control, and transition to a modular aluminum/acrylic chassis.',
    pdfUrl: '/documents/tdr-2025.pdf',
    achievements: ['RoboSub Semifinalist', 'Best Mechanical Design Nominee']
  },
  {
    year: '2024',
    vehicle: 'Triton',
    description: 'Introduced deep learning based object detection using YOLO v8, customized PCB electronics enclosures, and a pneumatic actuator system.',
    pdfUrl: '/documents/tdr-2024.pdf',
    achievements: ['RoboSub Top 12', 'Best Technical Documentation Winner']
  },
  {
    year: '2023',
    vehicle: 'Nautilus',
    description: 'Our inaugural RoboSub vehicle, featuring a basic 6-thruster configuration, Arduino control architecture, and manual ballast calibration.',
    pdfUrl: '/documents/tdr-2023.pdf',
    achievements: ['RoboSub Rookie of the Year Winner']
  }
]

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

      <section className="px-5 sm:px-8 py-16 border-t border-border-subtle bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h3 className="font-display text-xs font-semibold text-accent uppercase tracking-wider mb-2">
              Documentation & History
            </h3>
            <h2 className="font-display text-xl sm:text-2xl font-light text-fg tracking-tight">
              Technical Design Reports (TDR)
            </h2>
            <p className="mt-2 text-sm text-fg-muted max-w-lg leading-relaxed">
              Our past engineering design documents detailing vehicle systems, software architecture, and testing results submitted to the RoboSub competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tdrs.map((tdr) => (
              <div 
                key={tdr.year}
                className="bg-glass border border-glass-border hover:border-accent/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-semibold text-accent bg-accent-subtle px-2.5 py-1 rounded-full uppercase tracking-wider">
                      TDR {tdr.year}
                    </span>
                    <span className="text-xs text-fg-muted font-medium">
                      {tdr.vehicle}
                    </span>
                  </div>
                  <h4 className="font-display text-base font-semibold text-fg">
                    RoboSub {tdr.year} Report
                  </h4>
                  <p className="mt-2.5 text-xs text-fg-muted leading-relaxed">
                    {tdr.description}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-1">
                    {tdr.achievements.map((ach) => (
                      <span key={ach} className="text-[10px] bg-fg-muted/5 text-fg-secondary font-medium px-2 py-0.5 rounded">
                        {ach}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle">
                  <a
                    href={tdr.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:opacity-70 transition-opacity"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Read TDR {tdr.year} (PDF)
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
