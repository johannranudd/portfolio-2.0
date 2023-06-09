"use client";
import { useEffect } from "react";
import { motion as m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ContactComponent() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4 },
      });
    }
  }, [inView]);
  return (
    <m.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={animation}
      id="contactSection"
      className="px-2 sm:px-4 max-w-[660px] mx-auto py-16 space-y-6 text-center"
    >
      <h2 className="text-3xl">Get In Touch</h2>
      <p>
        Don't hesitate to contact me if you have any questions or would like to
        reach out. My inbox is always open and I will try my best to respond in
        a timely manner.
      </p>
      <a
        href="mailto:johnrand380@gmail.com"
        className="inline-block text-xl text-thirdClr p-2 rounded-sm border border-thirdClr font-mono hover:bg-thirdClr-transparent duration-300"
      >
        Say Hello
      </a>
    </m.section>
  );
}
