"use client";
import { useGlobalContext } from "@/context/context";
import { useEffect } from "react";
import { pageStructure } from "./pageStructure";

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
  return (
    <>
      {menuIsOpen && (
        <div
          onClick={() => setMenuIsOpen(false)}
          className="absolute top-0 left-0 right-0 bottom-0 -z-20 w-full h-screen bg-[#00000082] mt-navbarWidth cursor-pointer"
        ></div>
      )}
      <ul
        style={menuIsOpen ? { left: 0 } : { left: "-100vw" }}
        id="mobileMenu"
        className={`absolute top-0 -z-10  w-full xxs:w-[300px] h-screen flex flex-col justify-evenly items-center bg-primary text-2xl duration-300`}
      >
        {pageStructure.map((m) => {
          const { id, page, link } = m;

          return (
            <li key={id} className="h-full w-full">
              {page === "projects" && windowWidth >= 640 ? (
                <a
                  onClick={closeMenuAndNavigate}
                  className="h-full w-full capitalize hover:text-thirdClr hover:translate-y-[-3px] duration-300"
                >
                  {page}
                </a>
              ) : (
                <a
                  href={link}
                  onClick={() => setMenuIsOpen(false)}
                  className="inline-block flex justify-center items-center h-full w-full py-2 w-full capitalize hover:text-thirdClr hover:translate-y-[-3px] duration-300"
                >
                  {page}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
