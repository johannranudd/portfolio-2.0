"use client";
import { useGlobalContext } from "@/context/context";
import { useEffect, useState } from "react";
import { pageStructure } from "./pageStructure";
import Link from "next/link";
import BtnColorMode from "../ui/BtnColorMode";

export default function MobileMenu() {
  const { menuIsOpen, setMenuIsOpen, windowWidth, setWindowWidth } =
    useGlobalContext();

  function handleResize() {
    setWindowWidth(window.innerWidth);
    if (windowWidth > 1024) {
      setMenuIsOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <>
      {menuIsOpen && (
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-screen bg-[#00000082] mt-navbarWidth"></div>
      )}
      <ul
        className={`absolute top-0 mt-navbarWidth ${
          menuIsOpen ? "left-0" : "-left-[1200px]"
        } w-full xxs:w-[300px] h-screen flex flex-col justify-evenly items-center bg-pink-500 text-2xl duration-300`}
      >
        {pageStructure.map((m) => {
          const { id, page, link } = m;
          return (
            <li key={id} className="">
              <Link href={link} scroll={false} className="capitalize">
                {page}
              </Link>
            </li>
          );
        })}
        <BtnColorMode />
      </ul>
    </>
  );
}
