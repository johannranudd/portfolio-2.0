"use client"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import LineThroughComponent from "./components/Animations/LineThroughComponent"
import WordSphere from "./components/Animations/WordSphere"
import { arrayOfTechShort } from "./utils/generics"
import { motion as m, useAnimation } from "framer-motion"

export default function TechComponent() {
  const { ref, inView } = useInView()
  const animation = useAnimation()
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4 },
      })
    }
  }, [inView])
  return (
    <m.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={animation}
      id="techSection"
      className="px-2 py-16 sm:px-4 max-w-screen-lg mx-auto"
    >
      <div className="space-y-10 sm:space-y-0 sm:grid sm:gap-y-16 sm:grid-cols-2">
        <div className="md:ml-sidebarWidth   md:flex md:flex-col md:justify-between">
          <div className="relative py-12">
            <h2 className="absolute top-[50%] -translate-y-[50%] translate-x-[10%] text-3xl z-10 bg-primary">About me</h2>
            <LineThroughComponent />
          </div>
          <p className="pb-6">
            Hi there, my name is Johann Ranudd and I am a passionate software developer based in Norway.
            <br /> I have a deep love for creating things, and software development provides me with the perfect opportunity to channel my
            creativity.
            <br /> Ever positive, never negative!
          </p>
          <h4 className="font-bold pb-4">Main Technologies</h4>
          <ul className="grid grid-cols-2">
            {arrayOfTechShort.map((m, i) => {
              return (
                <li key={i} className="flex items-center space-x-1">
                  <div className="triangle"></div>
                  <p>{m}</p>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="relative -z-50 h-[14rem] 3xs:h-[16rem] xxs:h-[18rem]  sm:h-[15rem] mlg:h-[20rem] self-center">
          <WordSphere />
          <div className="absolute w-full h-full"></div>
        </div>
      </div>
    </m.section>
  )
}
