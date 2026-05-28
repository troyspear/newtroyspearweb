'use client'

import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Anchor } from 'lucide-react'

const RESUME_AFTER_IDLE_MS = 4000

function PlaceholderSubmarine() {
  return (
    <group>
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.4, 2, 16, 32]} />
        <meshStandardMaterial color="#2C2C2C" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.3, 0.3, 0.6]} />
        <meshStandardMaterial color="#1A1A1A" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[1.4, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.1, 0.1, 16]} />
        <meshStandardMaterial color="#111111" metalness={0.7} roughness={0.2} />
      </mesh>
      {[[-0.8, -0.35, 0.4], [-0.8, -0.35, -0.4], [0.8, -0.35, 0.4], [0.8, -0.35, -0.4]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <cylinderGeometry args={[0.08, 0.08, 0.2, 8]} />
          <meshStandardMaterial color="#1C2B4A" metalness={0.3} roughness={0.5} emissive="#1C2B4A" emissiveIntensity={0.1} />
        </mesh>
      ))}
    </group>
  )
}

function ViewerFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-surface rounded-xl">
      <div className="text-center">
        <Anchor className="w-8 h-8 text-fg-muted mx-auto mb-2 animate-pulse" />
        <p className="text-fg-muted text-xs">Loading viewer...</p>
      </div>
    </div>
  )
}

export default function SubmarineViewer() {
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
  const frameloop: 'always' | 'demand' = autoRotating || userEngaged ? 'always' : 'demand'

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-xl overflow-hidden border border-border-subtle bg-surface"
      id="viewer"
    >
      {shouldMount ? (
        <Suspense fallback={<ViewerFallback />}>
          <Canvas
            camera={{ position: [3, 2, 3], fov: 45 }}
            dpr={dpr}
            gl={{ antialias: false, powerPreference: 'low-power' }}
            frameloop={rendering ? frameloop : 'demand'}
            performance={{ min: 0.5 }}
          >
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-3, 2, -3]} intensity={0.3} color="#1C2B4A" />
            <PlaceholderSubmarine />
            <OrbitControls
              enablePan={false}
              minDistance={2.5}
              maxDistance={8}
              autoRotate={autoRotating}
              autoRotateSpeed={0.8}
              onStart={handleStart}
              onEnd={handleEnd}
            />
            <Environment preset="night" />
          </Canvas>
        </Suspense>
      ) : (
        <ViewerFallback />
      )}
      <div className="absolute bottom-3 left-3 text-[11px] text-fg-muted pointer-events-none">
        Drag to rotate &middot; Scroll to zoom
      </div>
    </div>
  )
}
