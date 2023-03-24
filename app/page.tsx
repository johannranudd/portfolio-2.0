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
      x: -150,
      y: 120,
      z: "z-50",
      scrollRate: 0,
    },
    {
      id: 2,
      imageUrl: image2,
      alt: "alt text",
      x: 150,
      y: 90,
      z: "z-10",
      scrollRate: 0,
    },
    {
      id: 3,
      imageUrl: image3,
      alt: "alt text",
      x: -180,
      y: 370,
      z: "z-10",
      scrollRate: 0,
    },
  ];

  return (
    <section className="px-2 bg-white">
      <div className="md:mx-sidebarWidth">
        <h2 className="py-6 text-2xl">projects</h2>
        <ul className="">
          {projects.map((p, index) => {
            const { id, imageUrl, alt, x, y, z, scrollRate } = p;
            return (
              <li key={id} className={`relative h-96 w-full text-white`}>
                <Image
                  src={imageUrl}
                  alt={alt}
                  fill={true}
                  className="object-cover"
                />
                <div className="absolute z-50 w-full h-full bg-[#00000093] hover:bg-transparent duration-300">
                  <h3>title</h3>
                  <div>
                    <p className="text-lg">featured project</p>
                    <p className="text-xl">project name</p>
                    <div>
                      <p>
                        Lorem ipsum, dolor siit amet consectetur adipisicing
                        elit. Eius voluptatibus modi, architecto fuga dolorem
                        magni perspiciatis dolore laudantium provident quis!
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
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
      <div ref={heroRef} className="relative border border-red-500 -z-50">
        <m.section
          // style={{ y: sectionScroll }}
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
