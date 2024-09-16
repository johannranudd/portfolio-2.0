"use client"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function Tourus() {
  const ref1 = useRef<THREE.Mesh>(null)
  const ref2 = useRef<THREE.Mesh>(null)
  const ref3 = useRef<THREE.Mesh>(null)
  const ref4 = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (ref1) {
      // Z
      ref1.current?.geometry.rotateX(-0.001)
      ref2.current?.geometry.rotateX(-0.0008)
      ref3.current?.geometry.rotateX(-0.0006)
      ref4.current?.geometry.rotateX(-0.0002)
      // Y
      ref1.current?.geometry.rotateY(-0.001)
      ref2.current?.geometry.rotateY(-0.0008)
      ref3.current?.geometry.rotateY(-0.0006)
      ref4.current?.geometry.rotateY(-0.0003)
      // Z
      ref1.current?.geometry.rotateZ(-0.001)
      ref2.current?.geometry.rotateZ(-0.0008)
      ref3.current?.geometry.rotateZ(-0.0006)
      ref4.current?.geometry.rotateZ(-0.0002)
    }
  })

  return (
    <group position={[1, 0, 0]}>
      <mesh>
        <sphereGeometry args={[0.2, 64, 32, 200]} />
        <meshPhysicalMaterial color="#19c2b9" metalness={1} />
      </mesh>
      <mesh rotation-x={0} rotation-y={2} rotation-z={1} ref={ref1}>
        <torusGeometry args={[0.5, 0.1, 30, 200]} />
        <meshPhysicalMaterial color="#19c2b9" metalness={1} />
      </mesh>
      <mesh rotation-x={0.4} rotation-y={0.6} rotation-z={3} ref={ref2}>
        <torusGeometry args={[0.8, 0.1, 30, 200]} />
        <meshPhysicalMaterial color="#19c2b9" metalness={1} />
      </mesh>
      <mesh rotation-x={-0.8} rotation-y={-0.8} rotation-z={0} ref={ref3}>
        <torusGeometry args={[1.1, 0.1, 30, 200]} />
        <meshPhysicalMaterial color="#19c2b9" metalness={1} />
      </mesh>
      <mesh rotation-x={1} rotation-y={1} rotation-z={4} ref={ref4}>
        <torusGeometry args={[1.4, 0.1, 30, 200]} />
        <meshPhysicalMaterial color="#19c2b9" metalness={1} />
      </mesh>
    </group>
  )
}
