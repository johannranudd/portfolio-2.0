"use client";
import Image from "next/image";
import blogImage from "../images/blog.png";
import coffeeShopImage from "../images/coffee-shop.png";
import museumImage from "../images/museum.png";
import todoImage from "../images/todo.png";
import harold from "../images/hero5.jpg";
import image1 from "../images/auction.png";
import image2 from "../images/ecommerce.png";
import image3 from "../images/socialmedia.png";
import { motion as m, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "@/context/context";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <HeroComponent scrollYProgress={scrollYProgress} />
      <ProjectsComponent scrollYProgress={scrollYProgress} />
      <TechComponent />
    </div>
  );
}

function ProjectsComponent({ scrollYProgress }: any) {
  const projects = [
    {
      id: 1,
      imageUrl: image1,
      alt: "alt text",
      tech: ["JavaScript", "Tailwind", "Rest API", "HTML"],
    },
    {
      id: 2,
      imageUrl: image2,
      alt: "alt text",
      tech: ["Next.JS", "TypeScript", "Tailwind", "Rest API"],
    },
    {
      id: 3,
      imageUrl: image3,
      alt: "alt text",
      tech: ["JavaScript", "SASS", "Rest API", "HTML"],
    },
  ];

  return (
    <section className=" bg-white mb-20">
      <div className="max-w-screen-lg md:mx-auto">
        <div className="px-4  md:mx-sidebarWidth">
          <h2 className="py-16 text-2xl">projects</h2>
          <ul className="flex flex-col w-full space-y-20">
            {projects.map((p, index) => {
              const { id, imageUrl, alt, tech } = p;
              let reversed = false;
              if (index % 2 == 0) {
                reversed = true;
              }
              return (
                <>
                  <li
                    key={id}
                    className={`relative w-full text-white md:text-black`}
                  >
                    <div
                      className={`absolute h-full flex flex-col justify-center space-y-2 ${
                        !reversed ? "md:items-end" : "md:items-start"
                      } `}
                    >
                      <p className="text-md z-50">Featured project</p>
                      <h4 className="text-xl z-50">project name</h4>
                      <p className="p-4 bg-[#2445c9] rounded-md w-[60%] z-50">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Harum autem cupiditate accusamus voluptatem in.
                        Eius iure ut ratione, aliquam dignissimos accusamus
                        neque, tempore consequatur optio, sapiente cum quidem ad
                        delectus.
                      </p>
                      <ul className="flex space-x-3 z-50">
                        {tech.map((t, index) => {
                          return <li key={index}>{t}</li>;
                        })}
                      </ul>
                      <div className="flex space-x-3 z-50">
                        <Link href={`https://github.com/`}>
                          <FaGithub />
                        </Link>
                        <Link href={`https://github.com/`}>
                          <FaLink />
                        </Link>
                      </div>
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
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
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
      if (window.innerWidth < 1024) {
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
      <div ref={heroRef} className="relative border border-red-500 -z-50 ">
        <m.section
          style={{ y: sectionScroll }}
          className="relative h-screen -z-50 bg-[#c2f6ff]"
        >
          <Image
            src={harold}
            alt="image of project"
            fill={true}
            className="object-cover"
          />
        </m.section>
        <div
          ref={heroTextRef}
          className="absolute -z-50 bg-red-500 md:mx-sidebarWidth"
        >
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
    <div id="scroll-to-me" className="bg-white">
      <div className="px-2 md:mx-sidebarWidth">
        <section>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe odit
            esse excepturi fugiat, dolorem soluta adipisci ipsa dicta
            voluptatibus rerum amet laudantium, qui, perspiciatis illo
            consequuntur placeat accusantium suscipit numquam nisi
            reprehenderit! Velit aliquam molestiae doloribus amet aperiam
            voluptas at hic saepe. Nemo cum assumenda officia quisquam eveniet
            repellendus dignissimos aliquam porro sapiente libero adipisci
            laboriosam, ab quasi autem laudantium, delectus unde, at odio
            doloribus magni doloremque fugit eaque voluptas. Eveniet neque
            blanditiis perferendis voluptatibus mollitia quia alias beatae.
            Dolore alias distinctio dicta doloremque exercitationem praesentium
            optio sit iusto ipsum libero! Obcaecati rerum unde non porro
            cupiditate voluptatem sapiente. Consectetur.
          </p>
        </section>
        <section>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe odit
            esse excepturi fugiat, dolorem soluta adipisci ipsa dicta
            voluptatibus rerum amet laudantium, qui, perspiciatis illo
            consequuntur placeat accusantium suscipit numquam nisi
            reprehenderit! Velit aliquam molestiae doloribus amet aperiam
            voluptas at hic saepe. Nemo cum assumenda officia quisquam eveniet
            repellendus dignissimos aliquam porro sapiente libero adipisci
            laboriosam, ab quasi autem laudantium, delectus unde, at odio
            doloribus magni doloremque fugit eaque voluptas. Eveniet neque
            blanditiis perferendis voluptatibus mollitia quia alias beatae.
            Dolore alias distinctio dicta doloremque exercitationem praesentium
            optio sit iusto ipsum libero! Obcaecati rerum unde non porro
            cupiditate voluptatem sapiente. Consectetur.
          </p>
        </section>
        <section>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe odit
            esse excepturi fugiat, dolorem soluta adipisci ipsa dicta
            voluptatibus rerum amet laudantium, qui, perspiciatis illo
            consequuntur placeat accusantium suscipit numquam nisi
            reprehenderit! Velit aliquam molestiae doloribus amet aperiam
            voluptas at hic saepe. Nemo cum assumenda officia quisquam eveniet
            repellendus dignissimos aliquam porro sapiente libero adipisci
            laboriosam, ab quasi autem laudantium, delectus unde, at odio
            doloribus magni doloremque fugit eaque voluptas. Eveniet neque
            blanditiis perferendis voluptatibus mollitia quia alias beatae.
            Dolore alias distinctio dicta doloremque exercitationem praesentium
            optio sit iusto ipsum libero! Obcaecati rerum unde non porro
            cupiditate voluptatem sapiente. Consectetur.
          </p>
        </section>
        <section>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe odit
            esse excepturi fugiat, dolorem soluta adipisci ipsa dicta
            voluptatibus rerum amet laudantium, qui, perspiciatis illo
            consequuntur placeat accusantium suscipit numquam nisi
            reprehenderit! Velit aliquam molestiae doloribus amet aperiam
            voluptas at hic saepe. Nemo cum assumenda officia quisquam eveniet
            repellendus dignissimos aliquam porro sapiente libero adipisci
            laboriosam, ab quasi autem laudantium, delectus unde, at odio
            doloribus magni doloremque fugit eaque voluptas. Eveniet neque
            blanditiis perferendis voluptatibus mollitia quia alias beatae.
            Dolore alias distinctio dicta doloremque exercitationem praesentium
            optio sit iusto ipsum libero! Obcaecati rerum unde non porro
            cupiditate voluptatem sapiente. Consectetur.
          </p>
        </section>
        <section>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe odit
            esse excepturi fugiat, dolorem soluta adipisci ipsa dicta
            voluptatibus rerum amet laudantium, qui, perspiciatis illo
            consequuntur placeat accusantium suscipit numquam nisi
            reprehenderit! Velit aliquam molestiae doloribus amet aperiam
            voluptas at hic saepe. Nemo cum assumenda officia quisquam eveniet
            repellendus dignissimos aliquam porro sapiente libero adipisci
            laboriosam, ab quasi autem laudantium, delectus unde, at odio
            doloribus magni doloremque fugit eaque voluptas. Eveniet neque
            blanditiis perferendis voluptatibus mollitia quia alias beatae.
            Dolore alias distinctio dicta doloremque exercitationem praesentium
            optio sit iusto ipsum libero! Obcaecati rerum unde non porro
            cupiditate voluptatem sapiente. Consectetur.
          </p>
        </section>
        <section>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe odit
            esse excepturi fugiat, dolorem soluta adipisci ipsa dicta
            voluptatibus rerum amet laudantium, qui, perspiciatis illo
            consequuntur placeat accusantium suscipit numquam nisi
            reprehenderit! Velit aliquam molestiae doloribus amet aperiam
            voluptas at hic saepe. Nemo cum assumenda officia quisquam eveniet
            repellendus dignissimos aliquam porro sapiente libero adipisci
            laboriosam, ab quasi autem laudantium, delectus unde, at odio
            doloribus magni doloremque fugit eaque voluptas. Eveniet neque
            blanditiis perferendis voluptatibus mollitia quia alias beatae.
            Dolore alias distinctio dicta doloremque exercitationem praesentium
            optio sit iusto ipsum libero! Obcaecati rerum unde non porro
            cupiditate voluptatem sapiente. Consectetur.
          </p>
        </section>
      </div>
    </div>
  );
}

// * relative
// imageScroll = useTransform(
//   scrollYProgress,
//   [0, 1],
//   ["0%", `-${scrollRate * 50}%`]
// );
// * scroll settings
//  const projects = [
//    {
//      id: 1,
//      imageUrl: blogImage,
//      alt: "alt text",
//      x: -150,
//      y: 90,
//      z: "z-50",
//      scrollRate: 1.5,
//    },
//    {
//      id: 2,
//      imageUrl: coffeeShopImage,
//      alt: "alt text",
//      x: 100,
//      y: 70,
//      z: "z-10",
//      scrollRate: 2,
//    },
//    {
//      id: 3,
//      imageUrl: museumImage,
//      alt: "alt text",
//      x: -400,
//      y: -30,
//      z: "z-10",
//      scrollRate: 3,
//    },
//    {
//      id: 4,
//      imageUrl: todoImage,
//      alt: "alt text",
//      x: -70,
//      y: -60,
//      z: "z-0",
//      scrollRate: 4,
//    },
//  ];
