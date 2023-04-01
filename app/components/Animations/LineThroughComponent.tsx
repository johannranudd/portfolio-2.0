"use client";
import { motion as m, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function LineThroughComponent() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { ease: "easeOut", delay: 0.1, duration: 1.5 },
      });
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <m.div
        initial={{ x: "-100vw" }}
        animate={animation}
        className="absolute top-[52%] h-[1px] w-[100%] bg-secondary"
      ></m.div>
    </div>
  );
}
