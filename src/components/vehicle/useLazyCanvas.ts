'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

const RESUME_AFTER_IDLE_MS = 4000

/**
 * Shared orchestration for lazily-mounted, performance-conscious R3F canvases.
 *
 * Handles:
 *  - mounting the canvas only once it scrolls near the viewport
 *  - pausing auto-rotation / rendering when off-screen or the tab is hidden
 *  - suspending auto-rotation while the user is interacting, resuming after idle
 *  - a device-appropriate DPR cap
 *  - the derived R3F `frameloop` value ('always' vs 'demand')
 */
export function useLazyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldMount, setShouldMount] = useState(false)
  const [active, setActive] = useState(false)
  const [pageVisible, setPageVisible] = useState(true)
  const [userEngaged, setUserEngaged] = useState(false)
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldMount(true)
            setActive(true)
          } else {
            setActive(false)
          }
        }
      },
      { rootMargin: '200px 0px', threshold: 0.01 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const onVis = () => setPageVisible(!document.hidden)
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  useEffect(() => {
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    }
  }, [])

  const dpr = useMemo<[number, number]>(() => {
    if (typeof window === 'undefined') return [1, 1.5]
    const isMobile = window.innerWidth < 768
    return isMobile ? [1, 1.25] : [1, 1.5]
  }, [])

  const handleStart = () => {
    setUserEngaged(true)
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current)
      idleTimerRef.current = null
    }
  }

  const handleEnd = () => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    idleTimerRef.current = setTimeout(() => {
      setUserEngaged(false)
      idleTimerRef.current = null
    }, RESUME_AFTER_IDLE_MS)
  }

  const autoRotating = active && pageVisible && !userEngaged
  const rendering = active && pageVisible
  const frameloop: 'always' | 'demand' =
    rendering && (autoRotating || userEngaged) ? 'always' : 'demand'

  return {
    containerRef,
    shouldMount,
    autoRotating,
    rendering,
    frameloop,
    dpr,
    handleStart,
    handleEnd,
  }
}
