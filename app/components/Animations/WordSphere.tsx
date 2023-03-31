"use client";
import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, TrackballControls } from "@react-three/drei";
import { arrayOfTech } from "../../utils/generics";

export default function WordSphere() {
  return (
    <div className="h-full w-full bg-transparent">
      <Canvas
        dpr={[1, 2]}
        camera={{
          position: [0, 0, 30],
          fov: 90,
        }}
      >
        <fog attach="fog" args={["#202025", 0, 80]} />
        <Cloud count={arrayOfTech.length} radius={20} />
        <OrbitControls autoRotate autoRotateSpeed={2.5} enableZoom={false} />
      </Canvas>
    </div>
  );
}

function Word({ children, ...props }: any) {
  const color = new THREE.Color();
  const fontProps = {
    // todo: get fonts and color here
    // font: "/Inter-Bold.woff",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef<any>(null);
  const [hovered, setHovered] = useState(false);
  const over = (e: any) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);

  useFrame(({ camera }) => {
    if (ref.current) {
      ref.current.quaternion.copy(camera.quaternion);
      // Animate font color
      const material = ref.current.material as THREE.MeshBasicMaterial;
      material.color.lerp(color.set(hovered ? "#fa2720" : "#5aa0aa"), 0.1);
    }
  });

  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

function Cloud({ count, radius }: { count: number; radius: number }) {
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      spherical.set(radius, phi, theta);
      temp.push([
        new THREE.Vector3().setFromSpherical(spherical),
        arrayOfTech[i % arrayOfTech.length],
      ]);
    }
    return temp;
  }, [count, radius]);

  return (
    <group>
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos} children={word} />
      ))}
    </group>
  );
}
