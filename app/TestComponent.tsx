"use client";
import { useEffect, useRef } from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { adjustHeroText, ajustChevron, getHeroHeight } from "./utils/generics";
import Tourus from "./components/Animations/Torus";
import { BsChevronCompactDown } from "react-icons/bs";
import { useGlobalContext } from "@/context/context";

export default function TestComponent() {
  return (
    <>
      <section id="heroSection" className="relative h-screen w-screen">
        <div className="w-full h-full bg-[#5c3d1f]"></div>
        <div className="absolute top-[50%] translate-y-[-50%] bg-[#1f5c29]">
          <div className="md:mx-sidebarWidth px-2 text-lg xxs:text-xl sm:px-4 bg-[#326e78]">
            <p className="font-mono mb-4 text-thirdClr z-50">
              Hello my name is
            </p>
            <h1 className="text-4xl xxs:text-5xl sm:text-6xl">Johann Ranudd</h1>
            <p className="mt-4 font-mono">- Front-end developer</p>
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
