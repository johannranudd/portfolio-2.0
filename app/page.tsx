"use client";
import Image from "next/image";
import blogImage from "../images/blog.png";
import coffeeShopImage from "../images/coffee-shop.png";
import museumImage from "../images/museum.png";
import todoImage from "../images/todo.png";
import harold from "../images/harold.png";
import { motion as m, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // const imageScroll1 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  // const imageScroll2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  // const imageScroll3 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  // const imageScroll4 = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <div className="mt-navbarWidth overflow-hidden 900:mt-0 900:ml-sidebarWidth 900:w-fit">
      <HeroComponent scrollYProgress={scrollYProgress} />
      <ProjectsComponent scrollYProgress={scrollYProgress} />
      <TechComponent />
    </div>
  );
}

function ProjectsComponent({ scrollYProgress }: any) {
  // const heroRef = useRef<HTMLDivElement>(null);
  const projects = [
    {
      id: 1,
      imageUrl: blogImage,
      alt: "alt text",
      x: -130,
      y: 30,
      z: "z-50",
      scrollRate: 1.5,
    },
    {
      id: 2,
      imageUrl: coffeeShopImage,
      alt: "alt text",
      x: 100,
      y: -20,
      z: "z-10",
      scrollRate: 2,
    },
    {
      id: 3,
      imageUrl: museumImage,
      alt: "alt text",
      x: -220,
      y: -150,
      z: "z-10",
      scrollRate: 3,
    },
    {
      id: 4,
      imageUrl: todoImage,
      alt: "alt text",
      x: 40,
      y: -210,
      z: "z-0",
      scrollRate: 4,
    },
  ];
  return (
    <section className="px-2 pb-[700px] mb-16 900:grid 900:flex 900:grid-cols-2 bg-white">
      <div>
        <h2 className="py-6 text-2xl">projects</h2>
        <p className="900:max-w-[370px]">
          Here are some of my most recent projects.
          <br /> Click the image to learn more about each application.
        </p>
      </div>
      <ul className="relative grid xs:grid-cols-auto-grid-220 xs:gap-x-3 900:block">
        {projects.map((p, index) => {
          const { id, imageUrl, alt, x, y, z, scrollRate } = p;
          const imageScroll = useTransform(
            scrollYProgress,
            [0, 1],
            ["0%", `-${scrollRate * 50}%`]
          );
          return (
            <m.li
              key={id}
              style={{
                top: y,
                left: x,
                y: imageScroll,
                // transition: `${index * 0.2}s`,
              }}
              className={`w-full 900:relative ${z}`}
            >
              <div
                // style={{ y: sectionScroll }}
                className="relative h-72 xs:h-56 w-full"
              >
                <Image
                  src={imageUrl}
                  alt={alt}
                  fill={true}
                  className="object-contain"
                />
              </div>
            </m.li>
          );
        })}
      </ul>
    </section>
  );
}

function HeroComponent({ scrollYProgress }: any) {
  const sectionScroll = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  function adjustHeroText() {
    const { bottom }: any = heroRef.current?.getBoundingClientRect();
    const { height }: any = heroTextRef.current?.getBoundingClientRect();
    if (typeof bottom === "number" && heroTextRef.current) {
      const bottomHalf = bottom / 2 - height;
      if (window.innerWidth < 900) {
        heroTextRef.current.style.bottom = `${bottomHalf + 15}px`;
      } else {
        heroTextRef.current.style.bottom = `${bottomHalf + 40}px`;
      }
    }
  }

  useEffect(() => {
    adjustHeroText();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", adjustHeroText);
    return () => {
      window.removeEventListener("scroll", adjustHeroText);
    };
  }, [scrollYProgress]);

  return (
    <>
      <div ref={heroRef} className="relative border border-red-500 -z-50">
        <m.section
          style={{ y: sectionScroll }}
          className="relative h-screen -z-50 bg-[#c2f6ff] 900:p-2"
        >
          <Image
            src={harold}
            alt="image of project"
            fill={true}
            className="object-cover"
          />
        </m.section>
        <div ref={heroTextRef} className="absolute -z-50 bg-red-500">
          <p>hello my name is</p>
          <h1 className="text-2xl">Johann Ranudd</h1>
          <p>- Front-end developer</p>
          <button className="cursor-pointer border hover:bg-blue-500">
            click
          </button>
        </div>
      </div>
    </>
  );
}

function TechComponent() {
  return (
    <div className="bg-white">
      <section>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe odit
          esse excepturi fugiat, dolorem soluta adipisci ipsa dicta voluptatibus
          rerum amet laudantium, qui, perspiciatis illo consequuntur placeat
          accusantium suscipit numquam nisi reprehenderit! Velit aliquam
          molestiae doloribus amet aperiam voluptas at hic saepe. Nemo cum
          assumenda officia quisquam eveniet repellendus dignissimos aliquam
          porro sapiente libero adipisci laboriosam, ab quasi autem laudantium,
          delectus unde, at odio doloribus magni doloremque fugit eaque
          voluptas. Eveniet neque blanditiis perferendis voluptatibus mollitia
          quia alias beatae. Dolore alias distinctio dicta doloremque
          exercitationem praesentium optio sit iusto ipsum libero! Obcaecati
          rerum unde non porro cupiditate voluptatem sapiente. Consectetur.
        </p>
      </section>
      <section>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe odit
          esse excepturi fugiat, dolorem soluta adipisci ipsa dicta voluptatibus
          rerum amet laudantium, qui, perspiciatis illo consequuntur placeat
          accusantium suscipit numquam nisi reprehenderit! Velit aliquam
          molestiae doloribus amet aperiam voluptas at hic saepe. Nemo cum
          assumenda officia quisquam eveniet repellendus dignissimos aliquam
          porro sapiente libero adipisci laboriosam, ab quasi autem laudantium,
          delectus unde, at odio doloribus magni doloremque fugit eaque
          voluptas. Eveniet neque blanditiis perferendis voluptatibus mollitia
          quia alias beatae. Dolore alias distinctio dicta doloremque
          exercitationem praesentium optio sit iusto ipsum libero! Obcaecati
          rerum unde non porro cupiditate voluptatem sapiente. Consectetur.
        </p>
      </section>
      <section>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe odit
          esse excepturi fugiat, dolorem soluta adipisci ipsa dicta voluptatibus
          rerum amet laudantium, qui, perspiciatis illo consequuntur placeat
          accusantium suscipit numquam nisi reprehenderit! Velit aliquam
          molestiae doloribus amet aperiam voluptas at hic saepe. Nemo cum
          assumenda officia quisquam eveniet repellendus dignissimos aliquam
          porro sapiente libero adipisci laboriosam, ab quasi autem laudantium,
          delectus unde, at odio doloribus magni doloremque fugit eaque
          voluptas. Eveniet neque blanditiis perferendis voluptatibus mollitia
          quia alias beatae. Dolore alias distinctio dicta doloremque
          exercitationem praesentium optio sit iusto ipsum libero! Obcaecati
          rerum unde non porro cupiditate voluptatem sapiente. Consectetur.
        </p>
      </section>
      <section>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe odit
          esse excepturi fugiat, dolorem soluta adipisci ipsa dicta voluptatibus
          rerum amet laudantium, qui, perspiciatis illo consequuntur placeat
          accusantium suscipit numquam nisi reprehenderit! Velit aliquam
          molestiae doloribus amet aperiam voluptas at hic saepe. Nemo cum
          assumenda officia quisquam eveniet repellendus dignissimos aliquam
          porro sapiente libero adipisci laboriosam, ab quasi autem laudantium,
          delectus unde, at odio doloribus magni doloremque fugit eaque
          voluptas. Eveniet neque blanditiis perferendis voluptatibus mollitia
          quia alias beatae. Dolore alias distinctio dicta doloremque
          exercitationem praesentium optio sit iusto ipsum libero! Obcaecati
          rerum unde non porro cupiditate voluptatem sapiente. Consectetur.
        </p>
      </section>
    </div>
  );
}
