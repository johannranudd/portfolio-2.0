import image1 from "../../images/fxc.svg"
import image2 from "../../images/bg-logo.webp"
import image3 from "../../images/ekko.png"

export const arrayOfTechShort = ["Next.js / React", "Nuxt.js / Vue", "SvelteKit", "Node", "TypeScript", "Tailwind", "Prisma", "Supabase"]

export const arrayOfTech = [
  "Elementor",
  "WordPress",
  "CSS",
  "Sass",
  "JS",
  "Framer",
  "Git",
  "Three.js",

  "Next.js",
  "React",
  "Nuxt.js",
  "Vue",
  "SvelteKit",
  "Node",
  "TypeScript",
  "Tailwind",
  "Prisma",
  "Supabase",
  "Express",
  "Fastify",
  "Adobe XD",
  "Figma",
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
  // githubLink: string
  tech: Array<string>
  projectText: string
  index?: number
}

export const projectsArray: Array<Iproject> = [
  {
    id: 1,
    projectName: "Martin Bruusgaard & Co",
    imageUrl: image2,
    alt: "bruusgaard logo",
    link: "https://bruusgaard.no/",
    tech: ["SvelteKit", "Supabase", "TypeScript", "Tailwind"],
    projectText:
      "Martin Bruusgaard & Co is a company specializing in standardized gas detection solutions, focusing on safety and cost-efficiency. Products detect hazardous gases, with calibration, maintenance services, and fast access to essential spare parts.",
  },
  {
    id: 2,
    projectName: "FutureXchange",
    imageUrl: image1,
    alt: "FutureXchange logo",
    link: "https://www.fxc.no/",
    tech: ["Nuxt.js / Vue", "Node.js", "Fastify", "Sequelize"],
    projectText:
      "FXC is a high-quality financial platform for serious investors and high-potential companies in the private market. It offers a groundbreaking solution to make the private aftermarket liquid while protecting the vital interests of companies.",
  },

  {
    id: 3,
    projectName: "Ekko media",
    imageUrl: image3,
    alt: "Ekko media logo",
    link: "https://www.ekkomedia.no/",
    tech: ["Next.js / React", "TypeScript", "Tailwind", "Vercel"],
    projectText:
      "Norway's first digital marketing agency for real estate, Ekko Media offers innovative solutions for marketing properties, helping companies increase visibility and attract the right buyers through data-driven strategies and advanced tools.",
  },
]
