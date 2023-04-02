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
  "PostgreSQL",
  "Adobe XD",
  "Figma",
  "Tailwind",
  "Styled Components",
  "Three.js",
  "WordPress",
  "Elementor",
];

export function ajustChevron(chevronRef: any, heroRef: any) {
  if (chevronRef.current) {
    const chevronTop: any = chevronRef.current?.getBoundingClientRect().top;
    const heroBottom: any = heroRef.current?.getBoundingClientRect().bottom;
    if (heroBottom < chevronTop) {
      chevronRef.current.style.visibility = "hidden";
    } else {
      chevronRef.current.style.visibility = "visible";
    }
  }
}

export async function relaoadInitialToFitMobileScreen(windowWidth: any) {
  const initialRender = getItem("initial");
  if (!initialRender && windowWidth < 640) {
    setItem("initial", true);
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
}

export function getItem(key: string) {
  if (typeof window !== "undefined") {
    const locStor = sessionStorage.getItem(key)
      ? JSON.parse(sessionStorage.getItem(key) || "")
      : "";
    if (locStor !== null || locStor !== undefined) {
      return locStor;
    }
  }
}

export function setItem(key: string, value: boolean) {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
}

export function getHeroHeight(headingRef: any) {
  if (headingRef.current) {
    const headingHeight: any =
      headingRef.current?.getBoundingClientRect().height;

    if (window.innerWidth >= 640) {
      const newHeight = headingHeight * 1.9;
      const screenHeight = window.innerHeight - newHeight;
      return screenHeight;
    } else {
      // const newHeight = headingHeight * 3.5;
      const screenHeight = window.innerHeight - headingHeight;
      return screenHeight;
    }
    // else if (window.innerWidth < 400) {
    //   const screenHeight = window.innerHeight - headingHeight;
    //   return screenHeight;
    // }
  }
}

export function adjustHeroText(
  heroRef: any,
  heroTextRef: any,
  headingRef: any
) {
  if (heroRef.current && heroTextRef.current && headingRef.current) {
    if (typeof window !== "undefined") {
      // change values here to trigger mobile browser behaviour
      heroRef.current.style.height = `100svh`;
      setTimeout(() => {
        heroRef.current.style.height = `50svh`;
      }, 1000);
      setTimeout(() => {
        heroRef.current.style.height = `100svh`;
      }, 1500);
      setTimeout(() => {
        heroRef.current.style.height = `50svh`;
      }, 2000);
      setTimeout(() => {
        heroRef.current.style.height = `100svh`;
      }, 2500);
      // setTimeout(() => {

      // }, 1000);
      // relative h-screen -z-50
      // heroTextRef.current.style.position = "absolute";

      const { bottom }: any = heroRef.current?.getBoundingClientRect();
      const { height }: any = headingRef.current?.getBoundingClientRect();
      const bottomHalf = bottom / 2 - height;
      if (height && bottom && window.innerWidth >= 640) {
        const newHeight = height / 1.3;
        heroTextRef.current.style.bottom = `${bottomHalf - newHeight}px`;
      }
      // else if (height && bottom && window.innerWidth < 640) {
      //   const newHeight = height * 2.1;
      //   heroTextRef.current.style.bottom = `${bottomHalf - newHeight}px`;
      // }
      // *not used
      //  else {
      //   heroTextRef.current.style.bottom = `${bottomHalf - height}px`;
      // }
    }
  }
}

export const projectsArray = [
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
