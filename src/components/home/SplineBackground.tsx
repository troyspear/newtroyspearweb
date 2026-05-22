'use client'

import { useState, useEffect } from 'react'
import Spline from '@splinetool/react-spline'

const LIGHT_SCENE = 'https://prod.spline.design/5Msated5udqyzEIg/scene.splinecode'
const DARK_SCENE = 'https://prod.spline.design/k4H6sfDMY1-R5B52/scene.splinecode'

export default function SplineBackground() {
  const [isDark, setIsDark] = useState(false)
  const [deferredReady, setDeferredReady] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(() => setDeferredReady(true), { timeout: 3000 })
      return () => cancelIdleCallback(id)
    }
    const id = setTimeout(() => setDeferredReady(true), 2000)
    return () => clearTimeout(id)
  }, [])

  const lightActive = !isDark
  const darkActive = isDark
  const showLight = lightActive || deferredReady
  const showDark = darkActive || deferredReady

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {showLight && (
        <div className="absolute inset-0" style={{ visibility: lightActive ? 'visible' : 'hidden' }}>
          <Spline scene={LIGHT_SCENE} style={{ width: '100%', height: '100%' }} />
        </div>
      )}
      {showDark && (
        <div className="absolute inset-0" style={{ visibility: darkActive ? 'visible' : 'hidden' }}>
          <Spline scene={DARK_SCENE} style={{ width: '100%', height: '100%' }} />
        </div>
      )}
    </div>
  )
}
