"use client";
import { useEffect, useRef } from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  adjustHeroText,
  ajustChevron,
  getHeroHeight,
  // getItem,
  // setItem,
} from "./utils/generics";
import Tourus from "./components/Animations/Torus";
import { BsChevronCompactDown } from "react-icons/bs";
import { useGlobalContext } from "@/context/context";

export default function HeroComponent() {
  const {
    heroTextRefNumber,
    setHeroTextRefNumber,
    windowWidth,
    setWindowWidth,
    windowHeight,
    setWindowHeight,
  } = useGlobalContext();
  const { scrollYProgress } = useScroll();
  const sectionScroll = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const chevronOpacity = useTransform(scrollYProgress, [0, 0.02], [1, 0]);
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<any>(null);

  useEffect(() => {

    if (heroRef.current) {
      console.log(heroRef.current.style.height);
      adjustHeroText(heroRef, heroTextRef, headingRef);
      const screenHeight = getHeroHeight(headingRef);
      if (screenHeight) setHeroTextRefNumber(screenHeight);
    }

  }, []);

  function handleResize() {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    console.log(windowWidth, " x ", windowHeight);
    if (heroRef.current) {
      heroRef.current.style.height = `${windowHeight}px`;
      heroRef.current.style.width = `${windowWidth}px`;
    }
  }

  useEffect(() => {
    if (heroRef.current) {
      adjustHeroText(heroRef, heroTextRef, headingRef);
      const screenHeight = getHeroHeight(headingRef);
      if (screenHeight) setHeroTextRefNumber(screenHeight);
    }
  }, [windowWidth]);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      // handleResize();
      // ajustChevron(chevronRef, heroRef);
      // adjustHeroText(heroRef, heroTextRef, headingRef);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        // handleResize();
        // ajustChevron(chevronRef, heroRef);
        // adjustHeroText(heroRef, heroTextRef, headingRef);
      });
    };
  }, [scrollYProgress]);

  return (
    <>
      <section
        ref={heroRef}
        id="heroSection"
        className="relative -z-50 bg-pink-500"
      >
        {heroRef && (
          <div
            // style={{ y: sectionScroll }}
            // style={windowWidth >= 640 ? { y: sectionScroll } : {}}
            className="bg-pink-200 opacity-30"
          >
            {/* <Canvas
              // style={{ width: `100vw`, height: "100vh" }}
              camera={{ position: [0, 0, 2] }}
            >
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.01} />
              <spotLight intensity={0.5} position={[7, 100, 50]} angle={0.3} />
              <Tourus />
            </Canvas> */}

            {/* <div
              // initial={{ opacity: 1 }}
              // animate={{ opacity: 0.5 }}
              // transition={{ delay: 0.5, duration: 1.5 }}
              className="absolute top-0 left-0 w-full bg-primary h-full opacity-50"
            ></div> */}
          </div>
        )}
        <div
          // translate-y-[-50%]
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ duration: 0.5 }}
          className="absolute top-[50%] translate-y-[-50%] left-0 w-full"
        >
          <div className="max-w-screen-lg mx-auto bg-[#413278]">
            <div
              // ref={heroTextRef}
              className="md:mx-sidebarWidth px-2 text-lg xxs:text-xl sm:px-4 bg-[#326e78]"
            >
              <p className="font-mono mb-4 text-thirdClr z-50">
                Hello my name is
              </p>
              <h1
                // ref={headingRef}
                className="text-4xl xxs:text-5xl sm:text-6xl"
              >
                Johann Ranudd
              </h1>
              <p className="mt-4 font-mono">- Front-end developer</p>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="flex justify-center">
        <a
          // onClick={() => scroll(0, heroTextRefNumber)}
          // ref={chevronRef}
          // href="#projectsSection"
          // style={{ opacity: chevronOpacity }}
          // initial={{ y: 100 }}
          // animate={{ y: 0 }}
          // transition={{ delay: 0.7, duration: 0.3, ease: "linear" }}
          className="fixed bottom-12 text-[3rem] cursor-pointer hover:text-thirdClr duration-300"
        >
          <BsChevronCompactDown />
        </a>
      </div> */}
    </>
  );
}
