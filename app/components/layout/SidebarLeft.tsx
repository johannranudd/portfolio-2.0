"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import BtnColorMode from "../ui/BtnColorMode";
import { motion as m } from "framer-motion";

export default function SidebarLeft() {
  return (
    <m.nav
      initial={{ y: "100%" }}
      animate={{ y: 0, transition: { ease: "linear", delay: 0.5 } }}
      className="hidden md:flex fixed h-screen w-sidebarWidth flex flex-col justify-end text-white text-lg"
    >
      <div className="flex flex-col items-center space-y-3 ">
        <BtnColorMode />
        <FaGithub />
        <FaLinkedin />
        <div className="w-[2px] h-28 bg-white"></div>
      </div>
    </m.nav>
  );
}
