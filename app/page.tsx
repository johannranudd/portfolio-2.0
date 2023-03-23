"use client";
import Image from "next/image";
import image1 from "../images/image-1.jpg";
import image2 from "../images/image-2.jpg";
import image3 from "../images/image-3.jpg";
import harold from "../images/harold.png";
import { motion as m, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

// const images = [
//   { id: 1, imageUrl: image1, alt: "alt text", position: 85 },
//   { id: 2, imageUrl: image2, alt: "alt text", position: 14 },
//   { id: 3, imageUrl: image3, alt: "alt text", position: 55 },
// ];

export default function Home() {
  // const mainTextScroll = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   ["0px", "1000px"]
  // );
  // const imageScroll1 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  // const imageScroll2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  // const imageScroll3 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  // const imageScroll4 = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <div className="mt-navbarWidth overflow-hidden 900:mt-0 900:ml-sidebarWidth 900:w-fit">
      <HeroComponent
      // sectionScroll={sectionScroll}
      // mainTextScroll={mainTextScroll}
      />
      <ProjectsComponent />
      <TechComponent />
    </div>
  );
}

function HeroComponent() {
  // { sectionScroll, mainTextScroll }: any
  const { scrollYProgress } = useScroll();
  const sectionScroll = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const mainTextScroll = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  function adjustHeroText() {
    const { bottom }: any = heroRef.current?.getBoundingClientRect();
    const { height }: any = heroTextRef.current?.getBoundingClientRect();
    if (typeof bottom === "number" && heroTextRef.current) {
      const bottomHalf = bottom / 2 - height + 15;
      heroTextRef.current.style.bottom = `${bottomHalf}px`;
    }
  }

  useEffect(() => {
    adjustHeroText();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      adjustHeroText();
    });
    return () => {
      window.removeEventListener("scroll", () => {
        // console.log(sectionScroll);
      });
    };
  }, [scrollYProgress]);

  return (
    <>
      <div ref={heroRef} className="relative border border-red-500">
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
        <div
          ref={heroTextRef}
          //  top-[85%]
          // style={{ top: mainTextScroll }}
          className="absolute -z-50 bg-red-500"
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

function ProjectsComponent() {
  return (
    <section className="mb-16 z-50 bg-white">
      <h2 className="text-center py-8 text-2xl">projects</h2>
      <div className="">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            blanditiis, amet corporis debitis velit ipsam magnam quasi incidunt
            recusandae, odio numquam explicabo iure cum fugit nihil enim labore
            provident eos modi vitae quam quas dolor. Ea quis tempora voluptate
            quaerat?
          </p>
        </div>

        <div>
          {/* begins */}
          <m.div
            // style={{ y: imageScroll1 }}
            className={`relative h-48 w-48 `}
            // className={`relative top-[300px] left-[20%] h-48 w-48 duration-500 `}
          >
            <Image
              src={image1}
              alt="image of project"
              fill={true}
              className="object-cover"
            />
          </m.div>
          {/* fuel */}
          <m.div
            // style={{ y: imageScroll2 }}
            className={`relative h-48 w-48 `}
            // className={`relative -top-[100px] left-[30%] h-48 w-48 duration-500 `}
          >
            <Image
              src={image2}
              alt="image of project"
              fill={true}
              className="object-cover"
            />
          </m.div>
          <m.div
            // style={{ y: imageScroll3 }}
            className={`relative h-48 w-48 `}
            // className={`relative -top-[70px] left-[15%] h-48 w-48 duration-500 `}
          >
            <Image
              src={image3}
              alt="image of project"
              fill={true}
              className="object-cover"
            />
          </m.div>
          <m.div
            // style={{ y: imageScroll4 }}
            className={`relative h-48 w-48 `}
            // className={`relative -top-[80px] left-[50%] h-48 w-48 duration-500 `}
          >
            <Image
              src={image3}
              alt="image of project"
              fill={true}
              className="object-cover"
            />
          </m.div>
        </div>
      </div>
    </section>
  );
}

function TechComponent() {
  return (
    <>
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
    </>
  );
}
