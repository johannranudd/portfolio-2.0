"use client";
import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, TrackballControls } from "@react-three/drei";

const arrayOfWOrds = [
  "JS",
  "TypeScript",
  "HTML",
  "CSS",
  "REST API",
  "React",
  "Next.js",
  "Framer",
  "Figma",
  "Git",
  "Node",
  "express",
  "prisma",
  "Adobe XD",
  "Sass",
  "Tailwind",
  "Styled Components",
  "Three.js",
  "Three.js",
  "Three.js",
];

export default function TechComponent() {
  return (
    <div id="scroll-to-me">
      <div className="px-2 md:mx-sidebarWidth">
        <WordSphere
        // height={screenWidth < 768 ? "50vh" : "60vh"}
        // width={screenWidth > 768 ? screenWidth / 2 : screenWidth - 50}
        // cameraZoom={screenWidth > 768 ? 40 : 60}
        />
      </div>
    </div>
  );
}

// !KINDA WORKS
// !KINDA WORKS
// !KINDA WORKS
// !KINDA WORKS
// !KINDA WORKS
// !KINDA WORKS

function WordSphere() {
  return (
    <div className="h-[40rem] w-full bg-[#092643]">
      <Canvas
        // style={{ height: "100%", width: "100%" }}
        dpr={[1, 2]}
        camera={{
          position: [0, 0, 35],
          fov: 90,
          // aspect: window.innerWidth / window.innerHeight,
        }}
      >
        <fog attach="fog" args={["#202025", 0, 80]} />
        {/* <Cloud count={8} radius={20} /> */}
        <>
          <Cloud count={19} radius={20} />
        </>
        <TrackballControls />
      </Canvas>
    </div>
  );
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;

    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i * i, thetaSpan * i)
          ),
          arrayOfWOrds[i],
        ]);
    return temp;
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

function Word({ children, ...props }: any) {
  const color = new THREE.Color();
  const fontProps = {
    font: "/Inter-Bold.woff",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef<any>(null);
  // const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const over = (e: any) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  // useEffect(() => {
  //   if (hovered) document.body.style.cursor = "pointer";
  //   return () => (document.body.style.cursor = "auto");
  // }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera

    if (ref) {
      ref.current.quaternion.copy(camera.quaternion);
      // Animate font color
      ref.current.material.color.lerp(
        color.set(hovered ? "#fa2720" : "white"),
        0.1
      );
    }
  });
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      onClick={() => console.log("clicked")}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}
