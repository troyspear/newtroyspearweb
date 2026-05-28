'use client'

import { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import type { Application } from '@splinetool/runtime'

const LIGHT_SCENE = '/models/light-scene.splinecode'
const DARK_SCENE = '/models/dark-scene.splinecode'

export default function SplineBackground() {
  const appRef = useRef<Application | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [initialScene] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
      ? DARK_SCENE
      : LIGHT_SCENE,
  )

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const app = appRef.current
      if (!app) return
      const isDark = document.documentElement.classList.contains('dark')
      const nextScene = isDark ? DARK_SCENE : LIGHT_SCENE
      app.load(nextScene).catch(() => {})
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let inView = true
    let visible = !document.hidden

    const apply = () => {
      const app = appRef.current
      if (!app) return
      if (inView && visible) {
        try { app.play?.() } catch {}
        try { app.requestRender?.() } catch {}
      } else {
        try { app.stop?.() } catch {}
      }
    }

    const io = typeof IntersectionObserver !== 'undefined'
      ? new IntersectionObserver(
          (entries) => {
            inView = entries[entries.length - 1]?.isIntersecting ?? true
            apply()
          },
          { rootMargin: '100px' },
        )
      : null
    io?.observe(el)

    const onVisibility = () => {
      visible = !document.hidden
      apply()
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      io?.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [loaded])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden transition-opacity duration-700"
      style={{ opacity: loaded ? 1 : 0 }}
      aria-hidden="true"
    >
      <Spline
        scene={initialScene}
        renderOnDemand
        style={{ width: '100%', height: '100%' }}
        onLoad={(app) => {
          appRef.current = app
          setLoaded(true)
        }}
      />
    </div>
  )
}
