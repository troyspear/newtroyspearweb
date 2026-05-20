'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Anchor } from 'lucide-react'

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
  return (
    <div className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-xl overflow-hidden border border-border-subtle bg-surface" id="viewer">
      <Suspense fallback={<ViewerFallback />}>
        <Canvas
          camera={{ position: [3, 2, 3], fov: 45 }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <pointLight position={[-3, 2, -3]} intensity={0.3} color="#1C2B4A" />
          <PlaceholderSubmarine />
          <OrbitControls
            enablePan={false}
            minDistance={2.5}
            maxDistance={8}
            autoRotate
            autoRotateSpeed={0.8}
          />
          <Environment preset="night" />
        </Canvas>
      </Suspense>
      <div className="absolute bottom-3 left-3 text-[11px] text-fg-muted pointer-events-none">
        Drag to rotate &middot; Scroll to zoom
      </div>
    </div>
  )
}
