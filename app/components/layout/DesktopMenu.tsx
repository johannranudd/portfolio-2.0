"use client";
import { pageStructure } from "./pageStructure";
import { useGlobalContext } from "@/context/context";
export function DesktopMenu() {
  const { heroTextRefNumber } = useGlobalContext();
  return (
    <ul className="hidden md:flex md:items-center md:space-x-6">
      {pageStructure.map((m) => {
        const { id, page, link } = m;
        if (page === "home") return;
        if (page === "project") {
          return (
            <li key={id} className="hover:text-thirdClr duration-300">
              <button
                onClick={() => scroll(0, heroTextRefNumber)}
                className="capitalize"
              >
                {page}
              </button>
            </li>
          );
        }
        return (
          <li key={id} className="hover:text-thirdClr duration-300">
            <a href={link} className="capitalize">
              {page}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
