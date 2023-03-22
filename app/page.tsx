"use client";
import Image from "next/image";
import image1 from "../images/image-1.jpg";
import image2 from "../images/image-2.jpg";
import image3 from "../images/image-3.jpg";
import harold from "../images/harold.png";
import { motion as m, useScroll } from "framer-motion";
import { useEffect } from "react";

// const images = [
//   { id: 1, imageUrl: image1, alt: "alt text", position: 85 },
//   { id: 2, imageUrl: image2, alt: "alt text", position: 14 },
//   { id: 3, imageUrl: image3, alt: "alt text", position: 55 },
// ];

export default function Home() {
  const { scrollYProgress } = useScroll();

  // useEffect(() => {
  //   console.log(scrollYProgress);
  // }, [scrollYProgress]);
  return (
    <div className="mt-navbarWidth w-[95%] mx-auto mdlg:mt-0 mdlg:ml-sidebarWidth mdlg:w-fit">
      <section className="relative h-screen bg-[#c2f6ff] mdlg:p-2">
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
      </section>
      <m.section>
        <h2 className="text-center py-16 text-2xl">projects</h2>
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
            <div className={`relative left-0 h-48 w-48`}>
              <Image
                src={image1}
                alt="image of project"
                fill={true}
                className="object-cover"
              />
            </div>
            <div className={`relative -top-[70px] left-[200px] h-48 w-48`}>
              <Image
                src={image2}
                alt="image of project"
                fill={true}
                className="object-cover"
              />
            </div>
            <div className={`relative -top-[85px] left-[40px] h-48 w-48`}>
              <Image
                src={image3}
                alt="image of project"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </m.section>
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
