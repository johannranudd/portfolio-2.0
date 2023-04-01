"use client";
import { useGlobalContext } from "@/context/context";
import { motion as m } from "framer-motion";
export default function MenuIcon() {
  const { menuIsOpen, setMenuIsOpen } = useGlobalContext();

  function handleClick() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <m.div
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="relative w-[30px] h-full cursor-pointer group md:hidden"
    >
      <m.div
        initial={{ rotate: 60 }}
        animate={menuIsOpen ? { rotate: 225, x: "-6px" } : { rotate: 60, x: 0 }}
        transition={{ duration: 0.1, ease: "linear" }}
        className={`absolute top-1/2 left-[5.8px] w-6 h-[2.5px]  duration-[400ms] rounded-md bg-secondary group-hover:bg-thirdClr`}
      ></m.div>
      <m.div
        initial={{ rotate: -60 }}
        animate={menuIsOpen ? { rotate: 135, x: "6px" } : { rotate: -60, x: 0 }}
        transition={{ duration: 0.1, ease: "linear" }}
        className={`absolute top-1/2 left-[-5.8px] w-6 h-[2.5px]  duration-[400ms] rounded-md bg-secondary group-hover:bg-thirdClr`}
      ></m.div>
      <div
        className={`absolute top-[calc(50%+10px)]  w-6 h-[2.5px]  duration-[100ms] rounded-md bg-secondary group-hover:bg-thirdClr 
        ${menuIsOpen && "opacity-0"}
        `}
      ></div>
    </m.div>
  );
}
