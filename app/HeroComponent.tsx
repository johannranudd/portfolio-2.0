"use client";
import { useEffect, useRef } from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { adjustHeroText, ajustChevron } from "./utils/generics";
import Tourus from "./components/Animations/Torus";
import { BsChevronCompactDown } from "react-icons/bs";
import { useGlobalContext } from "@/context/context";

export default function HeroComponent() {
  const { heroTextRefNumber, setHeroTextRefNumber } = useGlobalContext();
  const { scrollYProgress } = useScroll();
  const sectionScroll = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    adjustHeroText(heroRef, heroTextRef);

    if (heroTextRef.current) {
      const rectHeroTextRef =
        heroTextRef.current?.getBoundingClientRect().height;
      const screenHeight = window.innerHeight - rectHeroTextRef;
      setHeroTextRefNumber(screenHeight);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // const current = scrollYProgress.get();
      ajustChevron(chevronRef, heroRef);
      adjustHeroText(heroRef, heroTextRef);
    });
    return () => {
      window.removeEventListener("scroll", () =>
        adjustHeroText(heroRef, heroTextRef)
      );
    };
  }, [scrollYProgress]);

  return (
    <>
      <div ref={heroRef} className="relative border border-red-500 -z-50">
        <m.section
          style={{ y: sectionScroll }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-screen  bg-[#290746]"
        >
          {/* <Canvas camera={{ position: [0, 0, 2] }}>
            <OrbitControls autoRotate autoRotateSpeed={0.1} />
            <ambientLight intensity={0.01} />
            <spotLight intensity={0.1} position={[7, 100, 50]} angle={0.3} />
            <Tourus />
          </Canvas> */}
        </m.section>

        <div
          ref={heroTextRef}
          className="absolute bg-red-500 md:mx-sidebarWidth"
        >
          <p>hello my name is</p>
          <h1 className="text-2xl">Johann Ranudd</h1>
          <p>- Front-end developer</p>
          <button className="cursor-pointer border hover:bg-blue-500">
            click
          </button>
        </div>
      </div>
      <button
        onClick={() => scroll(0, heroTextRefNumber)}
        ref={chevronRef}
        className="fixed bottom-12 left-1/2 -translate-x-1/2 text-[3rem] text-red-500 cursor-pointer"
      >
        <BsChevronCompactDown />
      </button>
    </>
  );
}
