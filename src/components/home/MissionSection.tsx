import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '3+', label: 'Years competing' },
  { value: '20', label: 'Team members' },
  { value: '3', label: 'Sub-teams' },
  { value: '4', label: 'Vehicles built' },
]

export default function MissionSection() {
  return (
    <section className="px-5 sm:px-8 py-20 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-display text-sm font-medium text-fg-muted uppercase tracking-wide mb-4">
              Our Mission
            </h2>
            <p className="text-2xl sm:text-3xl font-display font-light text-fg leading-snug">
              Engineering autonomous underwater vehicles from the ground up.
            </p>
            <p className="mt-6 text-fg-secondary text-[15px] leading-relaxed">
              SPEAR is Troy High School&apos;s NJROTC underwater robotics team. We design, build, and program fully autonomous submarines to compete in the annual RoboNation RoboSub competition, tackling challenges in mechanical engineering, computer vision, and control systems.
            </p>
            <div className="grid grid-cols-4 gap-4 mt-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="font-display text-2xl sm:text-3xl font-light text-accent">
                    {stat.value}
                  </span>
                  <p className="mt-1 text-[11px] text-fg-muted uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:opacity-70 transition-opacity"
              >
                Meet the team <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-3">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/images/gallery/24-25/24-25_comp1.jpg"
                  alt="Team working at competition"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/gallery/24-25/24-25_pool.jpg"
                  alt="Pool testing"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="space-y-3 pt-6">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/gallery/24-25/24-25_comp2.jpg"
                  alt="Team at competition"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/images/gallery/23-24/2023-4_build-hero.jpg"
                  alt="Building the vehicle"
                  width={960}
                  height={717}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
