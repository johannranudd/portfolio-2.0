"use client";
import Link from "next/link";
import { projectsArray } from "./utils/generics";
import { FaGithub, FaLink } from "react-icons/fa";
import Image from "next/image";
import { motion as m, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function FeaturedProject({
  id,
  imageUrl,
  alt,
  tech,
  index,
}: any) {
  //   const liRef = useRef<HTMLLIElement>(null);
  const { ref, inView } = useInView();
  const animation = useAnimation();
  let reversed = false;
  if (index % 2 == 0) {
    reversed = true;
  }
  // const childAnimation = useAnimation();

  const cardVariants = {
    hiddenState: () => ({ x: reversed ? "-30px" : "30px", opacity: 0 }),
    animateState: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        ease: "easeIn",
        when: "beforeChildren",
        duration: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const featuredVariant = {
    hiddenState: { x: 0, opacity: 0 },
    animateState: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.3,
      },
    },
  };

  const projectInfoVariant = {
    hiddenState: () => ({ x: reversed ? "-30px" : "30px", opacity: 0 }),
    animateState: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  useEffect(() => {
    if (!inView) {
      animation.start("hiddenState");
    } else {
      animation.start("animateState");
    }
  }, [inView]);

  return (
    <m.li
      ref={ref}
      key={id}
      variants={cardVariants}
      animate={animation}
      className={`relative w-full text-white md:text-black duration-300`}
    >
      <div
        className={`absolute h-full flex flex-col justify-center space-y-2 ${
          !reversed ? "md:items-end" : "md:items-start"
        } `}
      >
        <m.div variants={featuredVariant}>
          <p className="text-md z-40">Featured project</p>
          <h4 className="text-xl z-40">project name</h4>
        </m.div>
        <m.p
          variants={projectInfoVariant}
          className="p-4 bg-[#2445c9] rounded-md w-[60%] z-40"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum autem
          cupiditate accusamus voluptatem in. Eius iure ut ratione, aliquam
          dignissimos accusamus neque, tempore consequatur optio, sapiente cum
          quidem ad delectus.
        </m.p>
        <ul className="flex space-x-3 z-40">
          {tech.map((t: any, indexy: number) => {
            return (
              <m.li variants={projectInfoVariant} key={indexy}>
                {t}
              </m.li>
            );
          })}
        </ul>
        <m.div variants={featuredVariant} className="flex space-x-3 z-40">
          <Link href={`https://github.com/`}>
            <FaGithub />
          </Link>
          <Link href={`https://github.com/`}>
            <FaLink />
          </Link>
        </m.div>
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
}
