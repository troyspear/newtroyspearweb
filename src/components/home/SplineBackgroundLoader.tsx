'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { cn } from '@/lib/utils'

const importSpline = () => import('./SplineBackground')

const SplineBackground = dynamic(importSpline, {
  ssr: false,
})

const DESKTOP_BREAKPOINT = 768

function GradientFallback({ paused = false }: { paused?: boolean }) {
  // ponytail: kill the per-frame blur animation while Spline inits so its
  // shader compile + first frames don't fight these layers for the GPU. Still
  // shows as a static backdrop. Upgrade path: none needed.
  const anim = paused ? '' : 'animate-gradient-shift'
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className={`absolute inset-0 ${anim} bg-[length:200%_200%] bg-gradient-to-br from-[#2C6E4959] via-[#4C956C1F] to-[#14452F47] dark:from-accent/25 dark:via-accent/8 dark:to-accent/10`} />
      <div className={`absolute top-[10%] left-[15%] w-48 h-48 rounded-full bg-[#2C6E4933] dark:bg-accent/15 blur-3xl ${anim}`} />
      <div className={`absolute bottom-[20%] right-[10%] w-64 h-64 rounded-full bg-[#14452F29] dark:bg-accent/12 blur-3xl ${anim} [animation-delay:3s]`} />
      <div className="absolute inset-0 bg-gradient-to-t from-page via-transparent to-page/80" />
    </div>
  )
}

function shouldUseSpline() {
  if (typeof window === 'undefined') return false
  if (window.innerWidth < DESKTOP_BREAKPOINT) return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection
  if (conn?.saveData) return false
  if (conn?.effectiveType && /(^|-)2g$/.test(conn.effectiveType)) return false
  return true
}

// Warm the Spline chunk during client-bundle evaluation instead of waiting for
// hydration + the first effect. The @splinetool runtime download then overlaps
// hydration, and by the time we render the component the module is already in
// webpack's cache, so mounting is synchronous. Gated on the home route so other
// pages never pay for a background they don't show; the scene bytes themselves
// are already preloaded by the inline script in layout.tsx.
if (typeof window !== 'undefined' && window.location.pathname === '/' && shouldUseSpline()) {
  void importSpline()
}

export default function SplineBackgroundLoader({ active }: { active: boolean }) {
  // Lazy initializer, not an effect: the decision is available on the very
  // first client render, saving a render + commit round trip before the
  // canvas mounts. SSR renders false and the dynamic component's fallback is
  // null, so the hydrated DOM still matches.
  const [useSpline, setUseSpline] = useState(shouldUseSpline)
  const [splineReady, setSplineReady] = useState(false)
  const [hideFallback, setHideFallback] = useState(false)

  // Once the Spline canvas has faded in (200ms transition), the gradient
  // fallback is fully covered - stop rendering it so its blur layers don't
  // keep animating on the GPU behind an opaque canvas.
  const handleSplineReady = () => {
    setSplineReady(true)
    setTimeout(() => setHideFallback(true), 250)
  }

  // Freeze the gradient's blur animation while Spline is loading - the heavy
  // init window - so it isn't compositing every frame behind the canvas while
  // shaders compile. Resumes nothing: Spline covers it on ready.
  const initing = useSpline && !splineReady

  // Resize only: the initial value comes from the lazy initializer above.
  useEffect(() => {
    const check = () => setUseSpline(shouldUseSpline())
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <div
      className={cn(
        // Absolute (not fixed) so the background scrolls away with the hero
        // instead of staying put while the lower sections scroll over it.
        'absolute top-0 left-0 right-0 h-screen -z-10 pointer-events-none',
        active ? 'opacity-100' : 'opacity-0',
      )}
      aria-hidden="true"
    >
      {/* Only render the animated fallback on the home route - at opacity-0 on
          other routes its blur layers would still composite and animate. */}
      {active && !(hideFallback && useSpline) && <GradientFallback paused={initing} />}
      {useSpline && (
        <SplineBackground active={active} onReady={handleSplineReady} />
      )}
    </div>
  )
}
