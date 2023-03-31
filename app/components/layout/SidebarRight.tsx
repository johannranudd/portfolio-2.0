"use client";
import { motion as m } from "framer-motion";

export default function SidebarRight() {
  return (
    <m.nav
      initial={{ y: "100%" }}
      animate={{ y: 0, transition: { ease: "linear", delay: 0.5 } }}
      className="hidden md:flex z-0 fixed right-0 h-screen w-sidebarWidth flex-col justify-end text-white "
    >
      <div className="flex flex-col items-center justify-between h-[9rem]">
        <a
          href="mailto:johnrand380@gmail.com"
          className="rotate-90 pb-[2px] text-[.9rem] hover:text-thirdClr hover:translate-y-[-3px] duration-300"
        >
          johnrand380@gmail.com
        </a>
        <div className="w-[2px] h-12 bg-white"></div>
      </div>
    </m.nav>
  );
}
