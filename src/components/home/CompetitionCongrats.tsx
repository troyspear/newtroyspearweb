'use client'

import { useCallback, useEffect, useRef } from 'react'

const COMPETITION_NAME = 'RoboSub 2026'
const COLORS = ['#38bdf8', '#0ea5e9', '#f59e0b', '#f43f5e', '#a3e635', '#8b5cf6']
const PIECE_COUNT = 120
const BURST_COUNT = 70
const MAX_PIECES = 600 // hard cap so mashing the box can't unbounded-grow the array
const GRAVITY = 90 // px/s^2 - gentle: the band is only a few hundred px tall

type Piece = {
  x: number
  y: number
  vx: number
  vy: number
  w: number
  h: number
  rot: number
  vrot: number
  color: string
}

function piece(x: number, y: number, vx: number, vy: number): Piece {
  return {
    x,
    y,
    vx,
    vy,
    w: 5 + Math.random() * 5,
    h: 8 + Math.random() * 8,
    rot: Math.random() * Math.PI,
    vrot: (Math.random() - 0.5) * 6,
    color: COLORS[(Math.random() * COLORS.length) | 0],
  }
}

/** Initial rain: seeded above the band so pieces drift in from the top. */
function spawnRain(width: number, height: number): Piece[] {
  return Array.from({ length: PIECE_COUNT }, () =>
    piece(
      Math.random() * width,
      -Math.random() * height * 4 - 20,
      (Math.random() - 0.5) * 90,
      20 + Math.random() * 50,
    ),
  )
}

/** Click burst: radial pop out of the pointer, biased upward so it arcs. */
function spawnBurst(x: number, y: number): Piece[] {
  return Array.from({ length: BURST_COUNT }, () => {
    const angle = Math.random() * Math.PI * 2
    const speed = 60 + Math.random() * 200
    return piece(x, y, Math.cos(angle) * speed, Math.sin(angle) * speed - 90)
  })
}

/**
 * Self-contained confetti - one canvas, one rAF loop, no dependency. The loop
 * only runs while the section is on screen and the tab is visible, and idles
 * once every piece has fallen past the bottom. Clicking the section calls
 * `burstRef.current(x, y)` to inject a new burst and wake the loop back up.
 */
function Confetti({
  burstRef,
}: {
  burstRef: React.RefObject<((x: number, y: number) => void) | null>
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0
    let pieces: Piece[] = []
    let seeded = false
    let raf: number | undefined
    let last = 0
    let onScreen = false

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (!seeded) {
        pieces = spawnRain(width, height)
        seeded = true
      }
    }

    const frame = (now: number) => {
      raf = undefined
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now

      ctx.clearRect(0, 0, width, height)
      // Compact in place: dead pieces are dropped from the array instead of
      // just being skipped, so repeated bursts don't accumulate dead entries.
      let alive = 0
      for (const p of pieces) {
        p.vy += GRAVITY * dt
        p.x += p.vx * dt
        p.y += p.vy * dt
        p.rot += p.vrot * dt
        if (p.y - p.h > height) continue
        pieces[alive++] = p
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.rot)))
        ctx.restore()
      }
      pieces.length = alive

      if (!alive) return // idle until the next burst
      raf = requestAnimationFrame(frame)
    }

    const play = () => {
      if (raf !== undefined || !pieces.length || !onScreen || document.hidden) return
      last = performance.now()
      raf = requestAnimationFrame(frame)
    }
    const pause = () => {
      if (raf !== undefined) cancelAnimationFrame(raf)
      raf = undefined
    }

    resize()

    burstRef.current = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect()
      const fresh = spawnBurst(clientX - rect.left, clientY - rect.top)
      pieces = pieces.concat(fresh).slice(-MAX_PIECES)
      play()
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting
        if (onScreen) play()
        else pause()
      },
      { threshold: 0.1 },
    )
    io.observe(canvas)

    const onVisibility = () => (document.hidden ? pause() : play())
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('resize', resize)

    return () => {
      pause()
      burstRef.current = null
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('resize', resize)
    }
  }, [burstRef])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}

export default function CompetitionCongrats() {
  const burstRef = useRef<((x: number, y: number) => void) | null>(null)

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLElement>) => {
    burstRef.current?.(e.clientX, e.clientY)
  }, [])

  // Keyboard path fires from the middle of the box, since there's no pointer.
  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key !== 'Enter' && e.key !== ' ') return
    e.preventDefault()
    const rect = e.currentTarget.getBoundingClientRect()
    burstRef.current?.(rect.left + rect.width / 2, rect.top + rect.height / 2)
  }, [])

  return (
    <section
      className="relative overflow-hidden px-5 sm:px-8 py-16 border-t border-border-subtle cursor-pointer select-none"
      onPointerDown={onPointerDown}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
      aria-label="Celebrate - release more confetti"
    >
      <Confetti burstRef={burstRef} />
      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="font-display text-sm font-medium text-fg-muted uppercase tracking-wide mb-6">
          {COMPETITION_NAME}
        </h2>
        <p className="font-display text-3xl sm:text-5xl font-light text-fg">
          Congrats Team!
        </p>
      </div>
    </section>
  )
}
