'use client'

import { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import type { Application } from '@splinetool/runtime'

const LIGHT_SCENE = '/models/light-scene.splinecode'
const DARK_SCENE = '/models/dark-scene.splinecode'

export default function SplineBackground({
  active,
  onReady,
}: {
  active: boolean
  onReady?: () => void
}) {
  const appRef = useRef<Application | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [initialScene] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
      ? DARK_SCENE
      : LIGHT_SCENE,
  )
  const currentSceneRef = useRef(initialScene)
  const pendingSceneRef = useRef<string | null>(null)
  const activeRef = useRef(active)

  useEffect(() => {
    activeRef.current = active
  }, [active])

  // Theme toggles swap the scene, but only while the background is actually
  // showing (home route). Toggling the theme on another page just records the
  // wanted scene; it loads when the user next lands on home.
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const app = appRef.current
      if (!app) return
      const isDark = document.documentElement.classList.contains('dark')
      const nextScene = isDark ? DARK_SCENE : LIGHT_SCENE
      if (nextScene === currentSceneRef.current) {
        pendingSceneRef.current = null
        return
      }
      if (activeRef.current) {
        currentSceneRef.current = nextScene
        app.load(nextScene).catch(() => {})
      } else {
        pendingSceneRef.current = nextScene
      }
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!active) return
    const app = appRef.current
    const pending = pendingSceneRef.current
    if (app && pending && pending !== currentSceneRef.current) {
      currentSceneRef.current = pending
      pendingSceneRef.current = null
      app.load(pending).catch(() => {})
    }
  }, [active])

  // Resume rendering only when this background is the active route (home),
  // in view, and the tab is visible - otherwise pause the render loop. The
  // component itself is never unmounted (it lives in the persistent shell),
  // so the WebGL context stays warm and returning home repaints instantly.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let inView = true
    let visible = !document.hidden

    const apply = () => {
      const app = appRef.current
      if (!app) return
      if (active && inView && visible) {
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

    apply()

    return () => {
      io?.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [loaded, active])

  return (
    <div
      ref={containerRef}
      className="spline-host absolute inset-0 z-0 overflow-hidden transition-opacity duration-200"
      style={{ opacity: loaded ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* The "Built with Spline" watermark is drawn inside the canvas at the
          bottom-right. Extending the canvas below the overflow-hidden container
          pushes the watermark out of view without an opaque cover patch. */}
      <Spline
        scene={initialScene}
        renderOnDemand
        style={{ width: '100%', height: 'calc(100% + 90px)' }}
        onLoad={(app) => {
          appRef.current = app
          // ponytail: cap render DPR at 1.5 - on a 2x display that's ~44%
          // fewer pixels shaded/frame for an abstract blurred bg nobody
          // inspects pixel-for-pixel. Reaches a private (_renderer) field not
          // in the public types, so guarded. Ceiling: breaks silently on a
          // @splinetool/runtime bump. Upgrade path: set pixelRatioDesktop in
          // the Spline editor export and delete this.
          try {
            const r = (app as unknown as {
              _renderer?: { setPixelRatio?: (n: number) => void }
            })._renderer
            r?.setPixelRatio?.(Math.min(window.devicePixelRatio || 1, 1.5))
          } catch {}
          setLoaded(true)
          onReady?.()
        }}
      />
    </div>
  )
}
