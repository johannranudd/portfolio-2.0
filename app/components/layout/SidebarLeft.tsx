"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion as m } from "framer-motion";

export default function SidebarLeft() {
  return (
    <m.nav
      initial={{ y: "100%" }}
      animate={{ y: 0, transition: { ease: "linear", delay: 0.5 } }}
      className="hidden md:flex fixed h-screen w-sidebarWidth flex flex-col justify-end text-lg"
    >
      <div className="flex flex-col items-center space-y-6 ">
        <a
          href="https://github.com/johannranudd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="cursor-pointer hover:text-thirdClr hover:translate-y-[-3px] duration-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/johann-ranudd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="cursor-pointer hover:text-thirdClr hover:translate-y-[-3px] duration-300" />
        </a>
        <div className="w-[2px] h-28 bg-secondary"></div>
      </div>
    </m.nav>
  );
}
