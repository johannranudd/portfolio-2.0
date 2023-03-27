"use client";
import Link from "next/link";
import { projectsArray } from "./utils/generics";
import { FaGithub, FaLink } from "react-icons/fa";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { useRef, useState, useEffect } from "react";
export default function FeaturedProject() {
  const liRef = useRef<HTMLLIElement>(null);

  return (
    <>
      {projectsArray.map((p, index) => {
        const { id, imageUrl, alt, tech } = p;
        let reversed = false;
        if (index % 2 == 0) {
          reversed = true;
        }
        return (
          <m.li
            ref={liRef}
            key={id}
            className={`relative w-full text-white md:text-black duration-300`}
          >
            <div
              className={`absolute h-full flex flex-col justify-center space-y-2 ${
                !reversed ? "md:items-end" : "md:items-start"
              } `}
            >
              <p className="text-md z-50">Featured project</p>
              <h4 className="text-xl z-50">project name</h4>
              <p className="p-4 bg-[#2445c9] rounded-md w-[60%] z-50">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                autem cupiditate accusamus voluptatem in. Eius iure ut ratione,
                aliquam dignissimos accusamus neque, tempore consequatur optio,
                sapiente cum quidem ad delectus.
              </p>
              <ul className="flex space-x-3 z-50">
                {tech.map((t, index) => {
                  return <li key={index}>{t}</li>;
                })}
              </ul>
              <div className="flex space-x-3 z-50">
                <Link href={`https://github.com/`}>
                  <FaGithub />
                </Link>
                <Link href={`https://github.com/`}>
                  <FaLink />
                </Link>
              </div>
            </div>
            <Link href={"https://twitter.com/"}>
              <div
                className={`relative h-96 w-full md:h-[30vw] md:max-h-[330px] md:w-[65%]  ${
                  !reversed ? "md:mr-auto" : "md:ml-auto"
                } `}
              >
                <div className="z-10 absolute w-full h-full  rounded-md bg-[#000000ba] md:bg-[#00000046] hover:bg-transparent duration-300"></div>
                <Image
                  src={imageUrl}
                  alt={alt}
                  fill={true}
                  className="object-cover object-top rounded-md"
                />
              </div>
            </Link>
          </m.li>
        );
      })}
    </>
  );
}
