"use client";
import { useEffect, useRef } from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import { adjustHeroText } from "./utils/generics";
import { adjustHeroText, ajustChevron } from "./utils/generics";
import Tourus from "./components/Animations/Torus";
import { BsChevronCompactDown } from "react-icons/bs";
import { useGlobalContext } from "@/context/context";

export default function HeroComponent() {
  const { heroTextRefNumber, setHeroTextRefNumber } = useGlobalContext();
  const { scrollYProgress } = useScroll();
  const sectionScroll = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const chevronOpacity = useTransform(scrollYProgress, [0, 0.03], [1, 0]);
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
            <div ref={heroTextRef} className="absolute space-y-6">
              <p className="text-thirdClr">Hello my name is</p>
              <h1 className="text-4xl xxs:text-5xl sm:text-6xl">
                Johann Ranudd
              </h1>
              <p>- Front-end developer</p>
              <button className="cursor-pointer border hover:bg-blue-500">
                click
              </button>
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
