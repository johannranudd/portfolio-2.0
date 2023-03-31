"use client";
import { useEffect } from "react";
import { motion as m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ContactComponent() {
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
      className="px-2 md:px-4 max-w-[660px] mx-auto pb-20 space-y-6 text-center text-white"
    >
      <h2 className="text-3xl">Get In Touch</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio tenetur,
        nesciunt beatae sed voluptate commodi.
      </p>
      <a
        href="mailto:johnrand380@gmail.com"
        className="inline-block border text-xl p-2 rounded-sm hover:border-thirdClr hover:bg-thirdClr-transparent duration-300"
      >
        Say Hello
      </a>
    </m.section>
  );
}
