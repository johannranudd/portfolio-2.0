"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import LineThroughComponent from "./components/Animations/LineThroughComponent";
import WordSphere from "./components/Animations/WordSphere";
import { arrayOfTechShort } from "./utils/generics";
import { motion as m, useAnimation } from "framer-motion";

export default function TechComponent() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, transition: { delay: 0.2 } });
    }
  }, [inView]);
  return (
    <m.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={animation}
      id="techSection"
      className="px-2 pb-16 sm:px-4 max-w-screen-lg mx-auto text-white  "
    >
      <div
        // id="scroll-to-me"
        className="sm:grid sm:gap-y-16 sm:gap-y-0 sm:grid-cols-2"
      >
        <div className="md:ml-sidebarWidth space-y-6 mlg:space-y-0 md:flex md:flex-col md:justify-between">
          <div className="relative py-16">
            <h2 className="absolute top-[50%] -translate-y-[50%] translate-x-[10%] text-3xl z-10 bg-primary">
              About me
            </h2>
            <LineThroughComponent />
          </div>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            esse consectetur iusto quia quas quo repellat explicabo at pariatur
            veritatis, voluptatem quae autem ipsam ex accusantium deleniti, odit
            molestias eum dicta voluptates illum nisi quod.
          </p>
          <ul className="grid grid-cols-2">
            {arrayOfTechShort.map((m, i) => {
              return (
                <li key={i} className="flex items-center space-x-1">
                  <div className="triangle"></div>
                  <p>{m}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="-z-50 h-[14rem] xxs:h-[18rem]  sm:h-[15rem] mlg:h-[20rem] self-center">
          <WordSphere />
        </div>
      </div>
    </m.section>
  );
}
