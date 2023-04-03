import image1 from "../../images/auction.png";
import image2 from "../../images/ecommerce.png";
import image3 from "../../images/socialmedia.png";

export const arrayOfTechShort = [
  "Next.js",
  "TypeScript",
  "JS",
  "React",
  "Node",
  "Prisma",
];

export const arrayOfTech = [
  "HTML",
  "CSS",
  "Sass",
  "Bootstrap",
  "JS",
  "REST API",
  "React",
  "Next.js",
  "Framer",
  "Git",
  "Node",
  "Express",
  "TypeScript",
  "Prisma",
  "Adobe XD",
  "Figma",
  "Tailwind",
  "Styled Components",
  "Three.js",
  "WordPress",
  "Elementor",
];

export function ajustChevron(
  chevronRef: React.RefObject<HTMLButtonElement>,
  heroRef: React.RefObject<HTMLDivElement>
) {
  if (chevronRef.current) {
    const chevronTop: number | undefined =
      chevronRef.current?.getBoundingClientRect().top;
    const heroBottom: number | undefined =
      heroRef.current?.getBoundingClientRect().bottom;
    if (heroBottom && heroBottom < chevronTop) {
      chevronRef.current.style.visibility = "hidden";
    } else {
      chevronRef.current.style.visibility = "visible";
    }
  }
}

export function getHeroHeight(headingRef: React.RefObject<HTMLDivElement>) {
  if (headingRef.current) {
    const headingHeight: number =
      headingRef.current?.getBoundingClientRect().height;

    if (window.innerWidth >= 640) {
      const newHeight = headingHeight * 1.9;
      const screenHeight = window.innerHeight - newHeight;
      return screenHeight;
    } else {
      const screenHeight = window.innerHeight - headingHeight;
      return screenHeight;
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
      const bottom: number | undefined =
        heroRef.current?.getBoundingClientRect().bottom;
      const height: number | undefined =
        headingRef.current?.getBoundingClientRect().height;
      if (height && bottom) {
        const bottomHalf = bottom / 2 - height;
        if (
          heroTextRef.current &&
          height &&
          bottom &&
          window.innerWidth >= 640
        ) {
          const newHeight = height / 1.3;
          heroTextRef.current.style.bottom = `${bottomHalf - newHeight}px`;
        } else if (
          heroTextRef.current &&
          height &&
          bottom &&
          window.innerWidth < 640
        ) {
          const newHeight = height * 2.1;
          heroTextRef.current.style.bottom = `${bottomHalf - newHeight}px`;
        }
      }
    }
  }
}

export interface Iproject {
  id: number;
  projectName: string;
  imageUrl: string;
  alt: string;
  link: string;
  githubLink: string;
  tech: Array<string>;
}

export const projectsArray: Array<Iproject> = [
  {
    id: 1,
    projectName: "web store",
    imageUrl: image2,
    alt: "web store",
    link: "https://next13-ts-ca-jr.vercel.app/",
    githubLink: "https://github.com/johannranudd/next13-ts-ca-jr",
    tech: ["Next.JS", "TypeScript", "Tailwind", "Rest API"],
  },
  {
    id: 2,
    projectName: "Auction house website",
    imageUrl: image1,
    alt: "Auction house website",
    link: "https://semester-project-2-jr.netlify.app/",
    githubLink: "https://github.com/johannranudd/semester-project-2-jr",
    tech: ["JavaScript", "Tailwind", "Rest API", "HTML"],
  },

  {
    id: 3,
    projectName: "social media platform",
    imageUrl: image3,
    alt: "social media platform",
    link: "https://js2-ca-jr.netlify.app/",
    githubLink: "https://github.com/johannranudd/js2_CA_jr",
    tech: ["JavaScript", "SASS", "Rest API", "HTML"],
  },
];
