"use client";
import { useGlobalContext } from "@/context/context";
import { useEffect, useState } from "react";
import { pageStructure } from "./pageStructure";
import Link from "next/link";
import BtnColorMode from "../ui/BtnColorMode";

// import {handleScroll}from "../../utils/generics"

export default function MobileMenu() {
  const {
    menuIsOpen,
    setMenuIsOpen,
    windowWidth,
    setWindowWidth,
    heroTextRefNumber,
  } = useGlobalContext();

  function handleResize() {
    setWindowWidth(window.innerWidth);
    if (windowWidth >= 768) {
      setMenuIsOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  function closeMenuAndNavigate() {
    setMenuIsOpen(false);
    scroll(0, heroTextRefNumber);
  }
  // bg-[#00000082]
  return (
    <>
      {menuIsOpen && (
        <div
          onClick={() => setMenuIsOpen(false)}
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-screen bg-[#00000082] mt-navbarWidth cursor-pointer"
        ></div>
      )}
      <ul
        className={`absolute top-0 mt-navbarWidth z-50 ${
          menuIsOpen ? "left-0" : "-left-[1200px]"
        } w-full xxs:w-[300px] h-screen flex flex-col justify-evenly items-center bg-primary text-2xl duration-300`}
      >
        {pageStructure.map((m) => {
          const { id, page, link } = m;

          return (
            <li key={id} className="w-full">
              {page === "project" ? (
                <button
                  onClick={closeMenuAndNavigate}
                  className="py-2 w-full capitalize hover:text-thirdClr hover:translate-y-[-3px] duration-300"
                >
                  {page}
                </button>
              ) : (
                <a
                  href={link}
                  onClick={() => setMenuIsOpen(false)}
                  className="inline-block text-center py-2 w-full capitalize hover:text-thirdClr hover:translate-y-[-3px] duration-300"
                >
                  {page}
                </a>
              )}
            </li>
          );
        })}
        <BtnColorMode />
      </ul>
    </>
  );
}
