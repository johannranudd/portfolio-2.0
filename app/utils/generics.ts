import image1 from "../../images/auction.png";
import image2 from "../../images/ecommerce.png";
import image3 from "../../images/socialmedia.png";

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

export function adjustHeroText(heroRef: any, heroTextRef: any) {
  if (heroRef.current && heroTextRef.current) {
    const { bottom }: any = heroRef.current?.getBoundingClientRect();
    const { height }: any = heroTextRef.current?.getBoundingClientRect();
    if (typeof bottom === "number" && heroTextRef.current) {
      const bottomHalf = bottom / 2 - height;
      if (window.innerWidth < 1024) {
        heroTextRef.current.style.bottom = `${bottomHalf + 15}px`;
      } else {
        heroTextRef.current.style.bottom = `${bottomHalf + 40}px`;
      }
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
