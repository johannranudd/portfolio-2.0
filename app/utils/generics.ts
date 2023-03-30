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

// export function handleScroll(heroTextRef: any) {
//   if (heroTextRef.current) {
//     const rectHeroTextRef = heroTextRef.current?.getBoundingClientRect().height;
//     const screenHeight = window.innerHeight - rectHeroTextRef;
//     console.log(screenHeight);
//     scroll(0, screenHeight);
//   }
// }

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

export function getHeroHeight(headingRef: any) {
  if (headingRef.current) {
    const headingHeight: any =
      headingRef.current?.getBoundingClientRect().height;

    if (window.innerWidth >= 640) {
      const newHeight = headingHeight * 1.8;
      const screenHeight = window.innerHeight - newHeight;
      return screenHeight;
    } else if (window.innerWidth >= 400) {
      const newHeight = headingHeight * 3.26;
      const screenHeight = window.innerHeight - newHeight;
      return screenHeight;
    } else if (window.innerWidth < 400) {
      const newHeight = headingHeight * 3;
      const screenHeight = window.innerHeight - newHeight;
      return screenHeight;
    }
  }
}

export function adjustHeroText(
  heroRef: any,
  heroTextRef: any,
  headingRef: any
) {
  if (heroRef.current && heroTextRef.current && headingRef.current) {
    const { bottom }: any = heroRef.current?.getBoundingClientRect();
    const { height }: any = headingRef.current?.getBoundingClientRect();
    const bottomHalf = bottom / 2 - height;
    if (height && bottom && window.innerWidth >= 640) {
      const newHeight = height / 1.5;
      heroTextRef.current.style.bottom = `${bottomHalf - newHeight}px`;
    } else if (height && bottom && window.innerWidth < 640) {
      const newHeight = height * 1.9;
      // console.log(Math.floor(bottomHalf - newHeight));
      heroTextRef.current.style.bottom = `${bottomHalf - newHeight}px`;
    }
  }
}

export const projectsArray = [
  {
    id: 1,
    imageUrl: image2,
    alt: "alt text",
    tech: ["Next.JS", "TypeScript", "Tailwind", "Rest API"],
  },
  {
    id: 2,
    imageUrl: image1,
    alt: "alt text",
    tech: ["JavaScript", "Tailwind", "Rest API", "HTML"],
  },

  {
    id: 3,
    imageUrl: image3,
    alt: "alt text",
    tech: ["JavaScript", "SASS", "Rest API", "HTML"],
  },
];
