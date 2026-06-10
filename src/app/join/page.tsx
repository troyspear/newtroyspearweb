import type { Metadata } from 'next'
import { Wrench, CircuitBoard, Code2, MapPin, CalendarDays, ArrowRight, Mail } from 'lucide-react'

// TODO: replace with the real Google Form URL when the application form is ready
const JOIN_FORM_URL = 'https://forms.gle/REPLACE_ME'

export const metadata: Metadata = {
  title: 'Join',
  description: 'Join Troy SPEAR underwater robotics. No experience required. Learn mechanical design, electronics, and software by building a real autonomous submarine.',
}

const subTeams = [
  {
    name: 'Mechanical',
    icon: Wrench,
    description:
      'Designs and builds the physical vehicle: frame, enclosures, claw, and torpedo systems.',
    beginners:
      'New members learn CAD in Onshape, help machine and assemble components, and run waterproofing tests.',
  },
  {
    name: 'Electrical',
    icon: CircuitBoard,
    description:
      'Handles power distribution, sensor integration, and the wiring that keeps everything running underwater.',
    beginners:
      'New members learn soldering, build wiring harnesses, and help integrate thrusters, cameras, and sensors.',
  },
  {
    name: 'Software',
    icon: Code2,
    description:
      'Writes the autonomy stack: computer vision, mission planning, and control systems on ROS.',
    beginners:
      'New members learn Python, train vision models on competition footage, and test code in simulation before pool tests.',
  },
]

const steps = [
  {
    title: 'Show up',
    description: 'Come to a weekly after-school meeting in Room 401 and see what we build.',
  },
  {
    title: 'Pick a sub-team',
    description: 'Try mechanical, electrical, or software. Switch later if your interests change.',
  },
  {
    title: 'Start building',
    description: 'Work on real hardware and code that competes at RoboSub in Irvine.',
  },
]

export default function JoinPage() {
  return (
    <div className="pt-20 pb-16">
      <section className="px-5 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-2xl sm:text-3xl font-light text-fg tracking-tight">
            Join Troy SPEAR
          </h1>
          <p className="mt-3 text-sm text-fg-muted max-w-lg leading-relaxed">
            We build autonomous submarines and compete at RoboSub. No prior experience required.
            We look for commitment and a willingness to learn. Open to all Troy High School students.
          </p>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-display text-sm font-medium text-fg-muted uppercase tracking-wide mb-6">
                Sub-Teams
              </h2>
              <div className="space-y-8">
                {subTeams.map((team) => (
                  <div key={team.name} className="flex gap-3">
                    <team.icon className="w-4 h-4 text-fg-muted mt-0.5 shrink-0" />
                    <div>
                      <h3 className="text-sm font-medium text-fg">{team.name}</h3>
                      <p className="text-xs text-fg-muted mt-0.5 leading-relaxed">
                        {team.description}
                      </p>
                      <p className="mt-2 text-xs text-fg-muted leading-relaxed">
                        <span className="font-medium text-fg">As a new member:</span>{' '}
                        {team.beginners}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-sm font-medium text-fg-muted uppercase tracking-wide mb-6">
                How It Works
              </h2>
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div key={step.title} className="flex gap-4">
                    <span className="font-display text-xl font-light text-accent w-5 shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-medium text-fg">{step.title}</h3>
                      <p className="mt-1 text-xs text-fg-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-border-subtle space-y-3 text-sm text-fg-muted">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 shrink-0" />
                  <span>Weekly after-school meetings</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Room 401 (NJROTC), Troy High School</span>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href={JOIN_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-page bg-accent hover:bg-accent/85 px-5 py-2.5 rounded-lg transition-all"
                >
                  Apply via Google Form
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <p className="mt-4 text-xs text-fg-muted">
                  Questions?{' '}
                  <a
                    href="mailto:contact@troyspear.org?subject=Joining%20Troy%20SPEAR"
                    className="inline-flex items-center gap-1 text-fg hover:text-accent transition-colors"
                  >
                    <Mail className="w-3 h-3" />
                    contact@troyspear.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
