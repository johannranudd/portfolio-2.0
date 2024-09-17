import image1 from "../../images/fxc.svg"
import image2 from "../../images/bg-logo.webp"
import image3 from "../../images/ekko.png"

export const arrayOfTechShort = ["Next.js", "TypeScript", "Tailwind", "React", "Node", "Prisma"]

export const arrayOfTech = [
  "HTML",
  "CSS",
  "Sass",
  "JSON",
  "npm",
  "Bootstrap",
  "JS",
  "REST API",
  "React",
  "Next.js",
  "Framer",
  "Git",
  "Node",
  "Vue.js",
  "Express",
  "TypeScript",
  "Prisma",
  "Adobe XD",
  "Figma",
  "Tailwind",
  "Three.js",
  "WordPress",
  "Elementor",
]

export function ajustChevron(chevronRef: React.RefObject<HTMLButtonElement>, heroRef: React.RefObject<HTMLDivElement>) {
  if (chevronRef.current) {
    const chevronTop: number | undefined = chevronRef.current?.getBoundingClientRect().top
    const heroBottom: number | undefined = heroRef.current?.getBoundingClientRect().bottom
    if (heroBottom && heroBottom < chevronTop) {
      chevronRef.current.style.visibility = "hidden"
    } else {
      chevronRef.current.style.visibility = "visible"
    }
  }
}

export function getHeroHeight(headingRef: React.RefObject<HTMLDivElement>) {
  if (headingRef.current) {
    const headingHeight: number = headingRef.current?.getBoundingClientRect().height

    if (window.innerWidth >= 768) {
      const newHeight = headingHeight * 1.9
      const screenHeight = window.innerHeight - newHeight
      return screenHeight
    } else if (window.innerWidth > 640) {
      const newHeight = headingHeight / 2.1
      const screenHeight = window.innerHeight - newHeight
      return screenHeight
    } else {
      const screenHeight = window.innerHeight - headingHeight
      return screenHeight
    }
  }
}

export function adjustHeroText(
  heroRef: React.RefObject<HTMLDivElement>,
  heroTextRef: React.RefObject<HTMLDivElement>,
  headingRef: React.RefObject<HTMLHeadingElement>
) {
  if (typeof window !== "undefined") {
    if (heroRef.current) {
      const bottom: number | undefined = heroRef.current?.getBoundingClientRect().bottom
      const height: number | undefined = headingRef.current?.getBoundingClientRect().height
      if (heroTextRef.current && height && bottom) {
        const bottomHalf = bottom / 2 - height
        if (window.innerWidth >= 768) {
          const newHeight = height / 1.3
          heroTextRef.current.style.bottom = `${bottomHalf - newHeight}px`
        } else if (window.innerWidth < 768) {
          heroTextRef.current.style.bottom = `50%`
          heroTextRef.current.style.transform = `translateY(50%)`
          // const newHeight = height * 2.1;
          // heroTextRef.current.style.bottom = `${bottomHalf - newHeight}px`;
        }
      }
    }
  }
}

export interface Iproject {
  id: number
  projectName: string
  imageUrl: string
  alt: string
  link: string
  githubLink: string
  tech: Array<string>
  projectText: string
  index?: number
}

export const projectsArray: Array<Iproject> = [
  {
    id: 1,
    projectName: "Bruusgaard",
    imageUrl: image2,
    alt: "bruusgaard",
    link: "https://next13-ts-ca-jr.vercel.app/",
    githubLink: "https://github.com/johannranudd/next13-ts-ca-jr",
    tech: ["Next.JS", "TypeScript", "Tailwind", "Rest API"],
    projectText:
      "An eCommerce store built with Next.js, Typescript, Tailwind and REST API that uses React Context, useReducer and local storage to manage and persist state. Next-themes to handle color mode",
  },
  {
    id: 2,
    projectName: "Auction house website",
    imageUrl: image1,
    alt: "Auction house website",
    link: "https://semester-project-2-jr.netlify.app/",
    githubLink: "https://github.com/johannranudd/semester-project-2-jr",
    tech: ["JavaScript", "Tailwind", "Rest API", "HTML"],
    projectText:
      "Auction house built with JavaScript, Tailwind, HTML, and REST API that enables users to list items for sale and participate in auction rounds. Features a responsive design and intuitive user interface.",
  },

  {
    id: 3,
    projectName: "social media platform",
    imageUrl: image3,
    alt: "social media platform",
    link: "https://js2-ca-jr.netlify.app/",
    githubLink: "https://github.com/johannranudd/js2_CA_jr",
    tech: ["JavaScript", "SASS", "Rest API", "HTML"],
    projectText:
      "A social media app built with JavaScript, HTML, SASS and REST API that enables users to create, update, and delete posts, comment and like posts, manage their profile, add contacts, and connect with other users.",
  },
]
