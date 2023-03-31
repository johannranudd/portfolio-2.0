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
      className="relative w-[50px] h-full cursor-pointer"
    >
      <div
        className={`absolute top-1/2 left-[5.8px] w-6 h-[2.5px] rotate-[60deg] duration-[400ms] rounded-md bg-white 
        ${menuIsOpen && "rotate-[-225deg] translate-x-[-6px]"}
        `}
      ></div>
      <div
        className={`absolute top-1/2 left-[-5.8px] w-6 h-[2.5px] rotate-[-60deg] duration-[400ms] rounded-md bg-white 
        ${menuIsOpen && "rotate-[-135deg] translate-x-[6px]"}
        `}
      ></div>
      <div
        className={`absolute top-[calc(50%+10px)]  w-6 h-[2.5px]  duration-[100ms] rounded-md bg-white 
        ${menuIsOpen && "opacity-0"}
        `}
      ></div>
    </m.div>
  );
}
