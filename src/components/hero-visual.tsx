import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'
import { useRef } from 'react'
import type { Mesh } from 'three'

function DistortedSphere() {
  const ref = useRef<Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * 0.12
    ref.current.rotation.y = state.clock.elapsedTime * 0.18
  })

  return (
    <Float speed={1.5} rotationIntensity={0.35} floatIntensity={1.4}>
      <Sphere ref={ref} args={[1.35, 64, 64]} scale={1.05}>
        <MeshDistortMaterial
          color="#fafafa"
          attach="material"
          distort={0.28}
          speed={1.8}
          roughness={0.25}
          metalness={0.85}
          emissive="#ffffff"
          emissiveIntensity={0.08}
        />
      </Sphere>
    </Float>
  )
}

function OrbitRing() {
  const ref = useRef<Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.z = state.clock.elapsedTime * 0.25
  })
  return (
    <mesh ref={ref} rotation={[Math.PI / 2.8, 0, 0]}>
      <torusGeometry args={[2.1, 0.015, 16, 120]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.18} />
    </mesh>
  )
}

export function HeroVisual() {
  return (
    <div className="relative h-[min(520px,70vh)] w-full">
      <div className="absolute inset-0 rounded-[2rem] border border-border bg-card/20 shadow-[0_0_120px_-30px_rgba(255,255,255,0.25)] backdrop-blur-xl" />
      <Canvas camera={{ position: [0, 0, 4.5], fov: 42 }} className="rounded-[2rem]">
        <ambientLight intensity={0.25} />
        <directionalLight position={[4, 4, 2]} intensity={1.1} />
        <pointLight position={[-3, -2, 2]} intensity={0.35} color="#a1a1aa" />
        <DistortedSphere />
        <OrbitRing />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 rounded-b-[2rem] bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
