"use client";
import { motion as m } from "framer-motion";

export default function Logo() {
  return (
    <m.a
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      href="#heroSection"
      className="text-lg text-thirdClr"
    >
      &lt;/&gt;
    </m.a>
  );
}
