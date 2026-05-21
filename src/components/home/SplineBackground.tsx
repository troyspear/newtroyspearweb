'use client'

import Spline from '@splinetool/react-spline'

const LIGHT_SCENE = 'https://prod.spline.design/W5IhX-wbI3VOBau6/scene.splinecode'
const DARK_SCENE = 'https://prod.spline.design/uZEW89nK627-7QTa/scene.splinecode'

export default function SplineBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 dark:hidden">
        <Spline scene={LIGHT_SCENE} style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 hidden dark:block">
        <Spline scene={DARK_SCENE} style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-page/95 via-page/50 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
