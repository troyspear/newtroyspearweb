'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const SplineBackground = dynamic(() => import('./SplineBackground'), {
  ssr: false,
})

const DESKTOP_BREAKPOINT = 768

function GradientFallback() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 animate-gradient-shift bg-[length:200%_200%] bg-gradient-to-br from-accent/20 via-accent/5 to-accent/15 dark:from-accent/25 dark:via-accent/8 dark:to-accent/10" />
      <div className="absolute top-[10%] left-[15%] w-48 h-48 rounded-full bg-accent/10 dark:bg-accent/15 blur-3xl animate-gradient-shift" />
      <div className="absolute bottom-[20%] right-[10%] w-64 h-64 rounded-full bg-accent/8 dark:bg-accent/12 blur-3xl animate-gradient-shift [animation-delay:3s]" />
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

export default function SplineBackgroundLoader() {
  const [useSpline, setUseSpline] = useState(false)
  const [shouldMountSpline, setShouldMountSpline] = useState(false)

  useEffect(() => {
    const check = () => setUseSpline(shouldUseSpline())
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (!useSpline) return

    let cancelled = false
    let idleHandle: number | undefined
    let timeoutHandle: ReturnType<typeof setTimeout> | undefined

    const schedule = () => {
      if (cancelled) return
      const ric = (window as Window & {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
      }).requestIdleCallback
      if (ric) {
        idleHandle = ric(() => {
          if (!cancelled) setShouldMountSpline(true)
        }, { timeout: 1500 })
      } else {
        timeoutHandle = setTimeout(() => {
          if (!cancelled) setShouldMountSpline(true)
        }, 400)
      }
    }

    if (document.readyState === 'complete') {
      schedule()
    } else {
      window.addEventListener('load', schedule, { once: true })
    }

    return () => {
      cancelled = true
      window.removeEventListener('load', schedule)
      if (idleHandle !== undefined) {
        const cic = (window as Window & {
          cancelIdleCallback?: (handle: number) => void
        }).cancelIdleCallback
        cic?.(idleHandle)
      }
      if (timeoutHandle) clearTimeout(timeoutHandle)
    }
  }, [useSpline])

  if (!useSpline || !shouldMountSpline) {
    return <GradientFallback />
  }

  return (
    <>
      <GradientFallback />
      <SplineBackground />
    </>
  )
}
