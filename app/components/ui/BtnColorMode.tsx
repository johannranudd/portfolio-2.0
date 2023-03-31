"use client";
import React, { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
// import CartIconBtn from "./CartIconBtn";

const BtnColorMode = () => {
  const [mounted, setMounted] = useState(false);
  //   const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  //   const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex justify-evenly items-center cursor-pointer hover:text-thirdClr hover:translate-y-[-3px] duration-300">
      <div className="text-xl">
        {/* {currentTheme === "dark" ? (
          <button
            onClick={() => setTheme("light")}
            className="flex justify-center alight-center"
          >
            <BsFillSunFill />
          </button>
        ) : (
          <button
            onClick={() => setTheme("dark")}
            className="flex justify-center alight-center"
          >
            <BsFillMoonFill />
          </button>
        )} */}
        <BsFillSunFill />
      </div>
    </div>
  );
};

export default BtnColorMode;
