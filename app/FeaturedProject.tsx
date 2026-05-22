"use client"

import Link from "next/link"
import Image from "next/image"
import { motion as m } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Iproject } from "./utils/generics"

export default function FeaturedProject({
  id,
  imageUrl,
  alt,
  link,
  projectName,
  projectText,
  index,
}: Iproject) {
  const reversed = index !== undefined && index % 2 === 1 ? false : true

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "0px 0px -10% 0px",
  })

  return (
    <m.li
      ref={ref}
      initial={{ x: reversed ? -30 : 30 }}
      animate={inView ? { x: 0 } : { x: reversed ? -30 : 30 }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative w-full mb-24 md:mb-32 will-change-transform"
    >
      <div
        className={`absolute h-full flex flex-col justify-between space-y-2 p-4 xs:p-6 md:p-0 ${!reversed ? "md:items-end" : "md:items-start"
          }`}
      >
        <div className={`z-40 ${!reversed ? "md:text-right" : ""}`}>
          <p className="font-mono text-md text-thirdClr">Web application</p>
          <h4 className="text-xl capitalize">{projectName}</h4>
        </div>

        <p className="z-40 rounded-sm md:w-[60%] lg:w-[50%] md:p-4 md:bg-gray-600 md:bg-clip-padding md:backdrop-filter md:backdrop-blur-sm md:bg-opacity-50 md:border md:border-gray-100 shadow-lg">
          {projectText}
        </p>

        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="z-40 font-mono text-md text-thirdClr hover:opacity-50 duration-300"
        >
          Visit homepage
        </Link>
      </div>

      <CardImageAndBackdrop imageUrl={imageUrl} alt={alt} link={link} reversed={reversed} id={id} />
    </m.li>
  )
}

function CardImageAndBackdrop({
  imageUrl,
  alt,
  link,
  reversed,
  id,
}: {
  imageUrl: string
  alt: string
  link: string
  reversed: boolean
  id: number
}) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={`relative h-[28rem] 3xs:h-[24rem] xxs:h-[20rem] xs:h-[18.5rem] w-full md:h-[30vw] md:max-h-[330px] md:w-[65%] ${!reversed ? "md:mr-auto" : "md:ml-auto"
          }`}
      >
        <div className="z-10 absolute top-0 left-0 w-full h-full rounded-sm bg-[#000000ba] md:bg-[#00000046] md:hover:bg-transparent shadow-lg duration-300"></div>

        <Image
          src={imageUrl}
          alt={alt}
          className={`${id === 3 ? "py-10" : ""} h-full w-[300px] object-contain mx-auto`}
        />
      </div>
    </Link>
  )
}