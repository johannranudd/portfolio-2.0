"use client";
import { motion as m } from "framer-motion";

export default function SidebarRight() {
  return (
    <m.nav
      initial={{ y: "100%" }}
      animate={{ y: 0, transition: { ease: "linear", delay: 0.5 } }}
      className="hidden md:flex z-0 fixed right-0 h-screen w-sidebarWidth flex-col justify-end text-white "
    >
      <div className="relative h-72">
        <p className="absolute h-sidebarWidth top-1/2 -right-1/2 rotate-90 ">
          johnrand380@gmail.com
        </p>
      </div>
    </m.nav>
  );
}
