"use client";
import { motion as m } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Logo() {
  const ref = useRef<HTMLAnchorElement>(null);

  function clickRef() {
    if (ref !== undefined || ref !== null) {
      ref.current?.click();
      console.log("clicked");
    }
  }

  useEffect(() => {
    // window.addEventListener("DOMContentLoaded", () => {

    // });
    if (ref !== undefined || ref !== null) {
      ref.current?.click();
      console.log("clicked");
    }
    // clickRef();

    // return () => {
    //   window.removeEventListener("DOMContentLoaded", () => clickRef());
    // };
  }, []);
  return (
    <m.a
      ref={ref}
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
