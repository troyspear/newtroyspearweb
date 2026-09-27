import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Crosshair, Eye, Hand, Target } from 'lucide-react'

const steps = [
  {
    icon: Eye,
    title: 'See',
    body: 'Two ZED 2i stereo cameras and a YOLO26 model find each task and measure how far away it is.',
  },
  {
    icon: Crosshair,
    title: 'Decide',
    body: 'A behavior tree on the Jetson Orin Nano picks the next action from the mission plan and what the cameras see.',
  },
  {
    icon: Hand,
    title: 'Act',
    body: 'A Pixhawk drives the thrusters, while a compliant claw, marker dropper, and electric torpedo handle the tasks.',
  },
]

const highlights = [
  { label: 'Computer', value: 'Jetson Orin Nano' },
  { label: 'Cameras', value: '2x ZED 2i stereo' },
  { label: 'Software', value: 'ROS 2 + YOLO26' },
  { label: 'Tools', value: 'Claw, dropper, torpedo' },
]

export default function CompetitionSection() {
  return (
    <section className="px-5 sm:px-8 py-20 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <p className="font-display text-xs font-semibold text-accent uppercase tracking-wider">
          RoboSub 2026
        </p>
        <h2 className="mt-2 font-display text-2xl sm:text-3xl font-light text-fg tracking-tight max-w-3xl">
          What we&apos;re doing in the competition
        </h2>
        <p className="mt-4 text-base text-fg-secondary leading-relaxed max-w-3xl">
          RoboSub, run by RoboNation, challenges student teams to build submarines that complete an
          underwater course with no human control. Once our vehicle is in the pool, it has to find
          gates, bins, and targets on its own, then pick up objects, drop markers, and fire torpedoes to
          score points. Our 2026 entry is <strong className="font-semibold text-fg">ORCA</strong>.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-elevated p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-subtle text-accent">
                <s.icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-medium text-fg">{s.title}</h3>
              <p className="mt-1.5 text-sm text-fg-secondary leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-elevated shadow-sm grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-64 lg:min-h-full">
            <Image
              src="/images/pool.jpeg"
              alt="ORCA underwater during a pool trial"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 576px"
            />
          </div>
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 text-accent">
              <Target className="w-4 h-4" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider">Our 2026 vehicle</span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-light text-fg">ORCA</h3>
            <p className="mt-2 text-sm text-fg-secondary leading-relaxed">
              Redesigned claw, dropper, and torpedo, a safer power system with a hard kill switch, and
              camera-based localization that replaced last year&apos;s DVL.
            </p>
            <dl className="mt-5 grid grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div key={h.label} className="rounded-lg bg-surface px-3 py-2.5">
                  <dt className="text-xs text-fg-muted">{h.label}</dt>
                  <dd className="text-sm font-medium text-fg">{h.value}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/vehicle"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-page hover:bg-accent/85 transition-colors"
            >
              Explore ORCA <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
