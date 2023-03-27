"use client";
import { useState, useEffect, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";

export default function Tourus() {
  const ref0 = useRef<THREE.Mesh>(null);
  const ref1 = useRef<THREE.Mesh>(null);
  const ref2 = useRef<THREE.Mesh>(null);
  const ref3 = useRef<THREE.Mesh>(null);
  const ref4 = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ref1) {
      // Z
      ref1.current?.geometry.rotateX(0.0006);
      ref2.current?.geometry.rotateX(-0.001);
      ref3.current?.geometry.rotateX(0.0008);
      ref4.current?.geometry.rotateX(-0.0004);
      // Y
      ref1.current?.geometry.rotateY(0.0006);
      ref2.current?.geometry.rotateY(-0.001);
      ref3.current?.geometry.rotateY(0.0008);
      ref4.current?.geometry.rotateY(-0.0004);
      // Z
      ref1.current?.geometry.rotateZ(0.0006);
      ref2.current?.geometry.rotateZ(-0.001);
      ref3.current?.geometry.rotateZ(0.0008);
      ref4.current?.geometry.rotateZ(-0.0004);
    }
  });

  return (
    <group position={[1, 0, 0]}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.2, 64, 32, 200, 7]} />
        <meshLambertMaterial color="#19c2b9" />
      </mesh>
      <mesh rotation-z={1} ref={ref1} position={[0, 0, 0]}>
        <torusGeometry args={[0.5, 0.1, 30, 200]} />
        <meshLambertMaterial color="#19c2b9" />
      </mesh>
      <mesh rotation-z={3} ref={ref2} position={[0, 0, 0]}>
        <torusGeometry args={[0.8, 0.1, 30, 200]} />
        <meshLambertMaterial color="#19c2b9" />
      </mesh>
      <mesh rotation-z={0} ref={ref3} position={[0, 0, 0]}>
        <torusGeometry args={[1.1, 0.1, 30, 200]} />
        <meshLambertMaterial color="#19c2b9" />
      </mesh>
      <mesh rotation-z={4} ref={ref4} position={[0, 0, 0]}>
        <torusGeometry args={[1.4, 0.1, 30, 200]} />
        <meshLambertMaterial color="#19c2b9" />
      </mesh>
    </group>
  );
}
