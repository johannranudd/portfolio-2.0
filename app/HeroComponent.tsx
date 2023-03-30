"use client";
import { useEffect, useRef } from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import { adjustHeroText } from "./utils/generics";
import { adjustHeroText, ajustChevron, getHeroHeight } from "./utils/generics";
import Tourus from "./components/Animations/Torus";
import { BsChevronCompactDown } from "react-icons/bs";
import { useGlobalContext } from "@/context/context";

export default function HeroComponent() {
  const { heroTextRefNumber, setHeroTextRefNumber, windowWidth } =
    useGlobalContext();
  const { scrollYProgress } = useScroll();
  const sectionScroll = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const chevronOpacity = useTransform(scrollYProgress, [0, 0.02], [1, 0]);
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    adjustHeroText(heroRef, heroTextRef, headingRef);
    const screenHeight = getHeroHeight(headingRef);
    if (screenHeight) setHeroTextRefNumber(screenHeight);
  }, [windowWidth]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      ajustChevron(chevronRef, heroRef);
      adjustHeroText(heroRef, heroTextRef, headingRef);
    });
    return () => {
      window.removeEventListener("scroll", () =>
        adjustHeroText(heroRef, heroTextRef, headingRef)
      );
    };
  }, [scrollYProgress]);

  return (
    <>
      <div ref={heroRef} id="heroSection" className="relative -z-50 text-white">
        <m.section
          style={{ y: sectionScroll }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-screen"
        >
          <Canvas camera={{ position: [0, 0, 2] }}>
            <OrbitControls
            //  autoRotate autoRotateSpeed={0.1}
            />
            <ambientLight intensity={0.01} />
            <spotLight intensity={0.1} position={[7, 100, 50]} angle={0.3} />
            <Tourus />
          </Canvas>
        </m.section>
        <div className="max-w-screen-lg mx-auto text-lg xxs:text-xl  ">
          <div className="px-2 md:px-4 md:mx-sidebarWidth">
            <div ref={heroTextRef} className="absolute">
              <p className="mb-4 text-thirdClr">Hello my name is</p>
              <h1
                ref={headingRef}
                className="text-4xl xxs:text-5xl sm:text-6xl"
              >
                Johann Ranudd
              </h1>
              <p className="mt-4">- Front-end developer</p>
            </div>
          </div>
        </div>
      </div>
      <m.button
        onClick={() => scroll(0, heroTextRefNumber)}
        ref={chevronRef}
        style={{ opacity: chevronOpacity }}
        className="fixed bottom-12 left-1/2 -translate-x-1/2 text-[3rem] text-white cursor-pointer"
      >
        <BsChevronCompactDown />
      </m.button>
    </>
  );
}
