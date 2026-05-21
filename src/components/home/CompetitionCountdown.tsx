'use client'

import { useState, useEffect } from 'react'

const COMPETITION_DATE = new Date('2026-07-11T08:00:00-07:00')
const COMPETITION_NAME = 'RoboSub 2026'

function getTimeLeft() {
  const diff = COMPETITION_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function CompetitionCountdown() {
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null)

  useEffect(() => {
    setTimeLeft(getTimeLeft())
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="px-5 sm:px-8 py-16 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-display text-sm font-medium text-fg-muted uppercase tracking-wide mb-6">
          Countdown to {COMPETITION_NAME}
        </h2>
        <div className="flex justify-center gap-4 sm:gap-8">
          {[
            { value: timeLeft?.days ?? 0, label: 'Days' },
            { value: timeLeft?.hours ?? 0, label: 'Hours' },
            { value: timeLeft?.minutes ?? 0, label: 'Min' },
            { value: timeLeft?.seconds ?? 0, label: 'Sec' },
          ].map((unit) => (
            <div key={unit.label} className="flex flex-col items-center">
              <span className="font-display text-3xl sm:text-5xl font-light text-fg tabular-nums">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="mt-1 text-[10px] sm:text-xs text-fg-muted uppercase tracking-wider">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
