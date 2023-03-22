"use client";
import Image from "next/image";
import image1 from "../images/image-1.jpg";
import image2 from "../images/image-2.jpg";
import image3 from "../images/image-3.jpg";
import harold from "../images/harold.png";
import { motion as m, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

// const images = [
//   { id: 1, imageUrl: image1, alt: "alt text", position: 85 },
//   { id: 2, imageUrl: image2, alt: "alt text", position: 14 },
//   { id: 3, imageUrl: image3, alt: "alt text", position: 55 },
// ];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const sectionScroll = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const imageScroll1 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const imageScroll2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const imageScroll3 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const imageScroll4 = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  // useEffect(() => {
  //   console.log(scrollYProgress);
  // }, [scrollYProgress]);
  return (
    <div className="mt-navbarWidth overflow-hidden w-[95%] mx-auto mdlg:mt-0 mdlg:ml-sidebarWidth mdlg:w-fit">
      <m.section
        style={{ y: sectionScroll }}
        className="relative h-screen  -z-50 bg-[#c2f6ff] mdlg:p-2"
      >
        <Image
          src={harold}
          alt="image of project"
          fill={true}
          className="object-cover"
        />
        <div className="absolute">
          <p>hello my name is</p>
          <h1 className="text-2xl">Johann Ranudd</h1>
          <p>- Front-end developer</p>
        </div>
      </m.section>
      <section className="mb-16 z-50 bg-white">
        <h2 className="text-center py-8 text-2xl">projects</h2>
        <div className="grid grid-cols-2 items-center ">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              blanditiis, amet corporis debitis velit ipsam magnam quasi
              incidunt recusandae, odio numquam explicabo iure cum fugit nihil
              enim labore provident eos modi vitae quam quas dolor. Ea quis
              tempora voluptate quaerat?
            </p>
          </div>
          <div>
            {/* begins */}
            <m.div
              style={{ y: imageScroll1 }}
              className={`relative top-[300px] left-[20%] h-48 w-48 duration-500 `}
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
              style={{ y: imageScroll2 }}
              className={`relative -top-[100px] left-[30%] h-48 w-48 duration-500 `}
            >
              <Image
                src={image2}
                alt="image of project"
                fill={true}
                className="object-cover"
              />
            </m.div>
            <m.div
              style={{ y: imageScroll3 }}
              className={`relative -top-[70px] left-[15%] h-48 w-48 duration-500 `}
            >
              <Image
                src={image3}
                alt="image of project"
                fill={true}
                className="object-cover"
              />
            </m.div>
            <m.div
              style={{ y: imageScroll4 }}
              className={`relative -top-[80px] left-[50%] h-48 w-48 duration-500 `}
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

// {
//   images.map((i, index) => {
//     const { id, imageUrl, alt, position } = i;
//     return (
//       <div
//         className={`relative top-[${position}px] left-[${position}px] h-48 w-48`}
//       >
//         <Image
//           src={imageUrl}
//           alt="image of project"
//           fill={true}
//           className="object-cover"
//         />
//       </div>
//     );
//   });
// }
