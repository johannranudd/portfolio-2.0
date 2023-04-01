"use client";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";
import Image from "next/image";
import { motion as m, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function FeaturedProject({
  id,
  imageUrl,
  alt,
  link,
  githubLink,
  projectName,
  tech,
  index,
}: any) {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  let reversed = false;
  if (index % 2 == 0) {
    reversed = true;
  }

  const cardVariants = {
    hiddenState: () => ({ x: reversed ? "-30px" : "30px", opacity: 0 }),
    animateState: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        ease: "easeIn",
        when: "beforeChildren",
        duration: 0.05,
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
        delay: 0.3,
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
    if (inView) {
      animation.start("animateState");
    }
  }, [inView]);

  return (
    <m.li
      ref={ref}
      key={id}
      variants={cardVariants}
      initial="hiddenState"
      animate={animation}
      className={`relative w-full duration-300`}
    >
      <div
        className={`absolute h-full flex flex-col justify-between space-y-2 p-4  xs:p-6 md:p-0 ${
          !reversed ? "md:items-end" : "md:items-start"
        } `}
      >
        <m.div className="z-40" variants={featuredVariant}>
          <p
            className={`font-mono text-md text-thirdClr ${
              !reversed && "text-right"
            }`}
          >
            Featured project
          </p>
          <h4 className="text-xl capitalize">{projectName}</h4>
        </m.div>
        <m.p
          variants={projectInfoVariant}
          className="z-40 rounded-sm md:w-[60%] md:p-4 md:bg-gray-600 md:bg-clip-padding md:backdrop-filter md:backdrop-blur-sm md:bg-opacity-50 md:border md:border-gray-100 shadow-lg"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam velit
          labore ut quas illum, odio ex eveniet pariatur fugit, exercitationem
          minima veritatis quidem at, accusamus vitae porro reprehenderit ipsa
          sapiente. Sapiente quo perspiciatis ullam et!
        </m.p>
        <ul className="flex flex-wrap z-40">
          {tech.map((t: any, indexy: number) => {
            return (
              <m.li
                variants={projectInfoVariant}
                key={indexy}
                className={`mr-4 ${reversed ? "md:mr-4" : "md:mr-0 md:ml-4"}`}
              >
                {t}
              </m.li>
            );
          })}
        </ul>
        <m.div variants={featuredVariant} className="flex space-x-3 z-40">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-thirdClr hover:translate-y-[-3px] duration-300"
          >
            <FaGithub />
          </a>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-thirdClr hover:translate-y-[-3px] duration-300"
          >
            <FaLink />
          </a>
        </m.div>
      </div>
      <CardImageAndBackdrop
        imageUrl={imageUrl}
        alt={alt}
        link={link}
        reversed={reversed}
      />
    </m.li>
  );
}
function CardImageAndBackdrop({
  imageUrl,
  alt,
  link,
  reversed,
}: {
  imageUrl: any;
  alt: any;
  link: string;
  reversed: boolean;
}) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={`relative h-[30rem] 3xs:h-96 xxs:h-[20rem] xs:h-[18rem] w-full md:h-[30vw] md:max-h-[330px] md:w-[65%]  ${
          !reversed ? "md:mr-auto" : "md:ml-auto"
        } `}
      >
        <div className="z-10 absolute w-full h-full  rounded-sm bg-[#000000ba] md:bg-[#00000046] md:hover:bg-transparent shadow-lg duration-300"></div>
        <Image
          src={imageUrl}
          alt={alt}
          fill={true}
          className="object-cover object-top rounded-sm"
        />
      </div>
    </Link>
  );
}
