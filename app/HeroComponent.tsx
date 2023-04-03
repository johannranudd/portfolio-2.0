"use client";
import { useEffect, useRef, useState } from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  adjustHeroText,
  ajustChevron,
  getHeroHeight,
  getItem,
  relaoadInitialToFitMobileScreen,
  setItem,
} from "./utils/generics";
import Tourus from "./components/Animations/Torus";
import { BsChevronCompactDown } from "react-icons/bs";
import { useGlobalContext } from "@/context/context";

export default function HeroComponent() {
  const { heroTextRefNumber, setHeroTextRefNumber, windowWidth, windowHeight } =
    useGlobalContext();
  const { scrollYProgress } = useScroll();
  const sectionScroll = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const chevronOpacity = useTransform(scrollYProgress, [0, 0.02], [1, 0]);
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLButtonElement>(null);

  async function adjustScroll() {
    adjustHeroText(heroRef, heroTextRef, headingRef);
    const screenHeight = getHeroHeight(headingRef);
    if (screenHeight) setHeroTextRefNumber(screenHeight);
  }

  useEffect(() => {
    adjustScroll();
    // relaoadInitialToFitMobileScreen(windowWidth)
  }, []);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     adjustScroll();
  //   });
  //   return () => {
  //     window.removeEventListener("resize", () => {
  //       adjustScroll();
  //     });
  //   };
  // }, [windowWidth, windowHeight]);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     ajustChevron(chevronRef, heroRef);
  //     adjustHeroText(heroRef, heroTextRef, headingRef);
  //   });
  //   return () => {
  //     window.removeEventListener("scroll", () => {
  //       ajustChevron(chevronRef, heroRef);
  //       adjustHeroText(heroRef, heroTextRef, headingRef);
  //     });
  //   };
  // }, [scrollYProgress]);

  return (
    <>
      <section ref={heroRef} id="heroSection" className="relative -z-50">
        <m.div
          // style={{ y: sectionScroll }}
          className="h-full bg-pink-500"
        ></m.div>
      </section>
    </>
  );
}
// !working
// "use client";
// import { useEffect, useRef, useState } from "react";
// import { motion as m, useScroll, useTransform } from "framer-motion";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import {
//   adjustHeroText,
//   ajustChevron,
//   getHeroHeight,
//   getItem,
//   relaoadInitialToFitMobileScreen,
//   setItem,
// } from "./utils/generics";
// import Tourus from "./components/Animations/Torus";
// import { BsChevronCompactDown } from "react-icons/bs";
// import { useGlobalContext } from "@/context/context";

// export default function HeroComponent() {
//   const { heroTextRefNumber, setHeroTextRefNumber, windowWidth } =
//     useGlobalContext();
//   const { scrollYProgress } = useScroll();
//   const sectionScroll = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
//   const chevronOpacity = useTransform(scrollYProgress, [0, 0.02], [1, 0]);
//   const heroRef = useRef<HTMLDivElement>(null);
//   const headingRef = useRef<HTMLHeadingElement>(null);
//   const heroTextRef = useRef<HTMLDivElement>(null);
//   const chevronRef = useRef<HTMLButtonElement>(null);

//   useEffect(() => {
//     // relaoadInitialToFitMobileScreen(windowWidth);
//     adjustHeroText(heroRef, heroTextRef, headingRef);
//     const screenHeight = getHeroHeight(headingRef);
//     if (screenHeight) setHeroTextRefNumber(screenHeight);
//   }, []);

//   useEffect(() => {
//     adjustHeroText(heroRef, heroTextRef, headingRef);
//     const screenHeight = getHeroHeight(headingRef);
//     if (screenHeight) setHeroTextRefNumber(screenHeight);
//   }, [windowWidth]);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       ajustChevron(chevronRef, heroRef);
//       adjustHeroText(heroRef, heroTextRef, headingRef);
//     });
//     return () => {
//       window.removeEventListener("scroll", () => {
//         ajustChevron(chevronRef, heroRef);
//         adjustHeroText(heroRef, heroTextRef, headingRef);
//       });
//     };
//   }, [scrollYProgress]);

//   return (
//     <>
//       <section ref={heroRef} id="heroSection" className="relative -z-50">
//         <m.div style={{ y: sectionScroll }} className="h-full">
//           <Canvas camera={{ position: [0, 0, 2] }}>
//             <OrbitControls enableZoom={false} />
//             <ambientLight intensity={0.01} />
//             <spotLight intensity={0.5} position={[7, 100, 50]} angle={0.3} />
//             <Tourus />
//           </Canvas>
//           <m.div
//             initial={{ opacity: 1 }}
//             animate={{ opacity: 0.5 }}
//             transition={{ delay: 0.5, duration: 1.5 }}
//             className="absolute top-0 left-0 w-full bg-primary h-full opacity-50"
//           ></m.div>
//         </m.div>
//         <m.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-screen-lg mx-auto text-lg xxs:text-xl"
//         >
//           <div className="px-2 sm:px-4 md:mx-sidebarWidth">
//             <div
//               ref={heroTextRef}
//               className="absolute bottom-[50%] translate-y-[50%] sm:translate-y-[0%]"
//             >
//               <p className="font-mono mb-4 text-thirdClr">Hello my name is</p>
//               <h1
//                 ref={headingRef}
//                 className="text-4xl xxs:text-5xl sm:text-6xl"
//               >
//                 Johann Ranudd
//               </h1>
//               <p className="mt-4 font-mono">- Front-end developer</p>
//             </div>
//           </div>
//         </m.div>
//       </section>
//       <div className="w-full flex justify-center">
//         <m.button
//           onClick={() => scroll(0, heroTextRefNumber)}
//           ref={chevronRef}
//           style={{ opacity: chevronOpacity }}
//           initial={{ y: 100 }}
//           animate={{ y: 0 }}
//           transition={{ delay: 0.7, duration: 0.3, ease: "linear" }}
//           className="fixed bottom-12  text-[3rem] cursor-pointer hover:text-thirdClr duration-300"
//         >
//           <BsChevronCompactDown />
//         </m.button>
//       </div>
//     </>
//   );
// }
