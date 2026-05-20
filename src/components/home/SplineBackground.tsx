'use client'

import Spline from '@splinetool/react-spline'

export default function SplineBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <Spline
        scene="https://prod.spline.design/uZEW89nK627-7QTa/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      {/* 
        Set pointer-events-none on overlay so clicks pass through to Spline.
        Use lower opacity (bg-page/40) in light mode and much lower opacity (dark:bg-page/15)
        in dark mode to ensure high visibility of the 3D elements in both themes.
      */}
      <div className="absolute inset-0 bg-gradient-to-r from-page/90 via-page/40 to-transparent dark:from-page/95 dark:via-page/50 dark:to-transparent pointer-events-none" />
    </div>
  )
}
