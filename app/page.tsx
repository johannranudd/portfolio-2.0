"use client";
import Image from "next/image";
import image1 from "../images/auction.png";
import image2 from "../images/ecommerce.png";
import image3 from "../images/socialmedia.png";
import { motion as m, useScroll } from "framer-motion";

import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";

import HeroComponent from "./HeroComponent";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <HeroComponent scrollYProgress={scrollYProgress} />
      <ProjectsComponent scrollYProgress={scrollYProgress} />
      <TechComponent />
    </>
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
    <section className="bg-white mb-20">
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

// function PlaneComponent() {
//   const [usePlaneRef]: any = usePlane(() => ({
//     position: [0, -2, 0],
//     rotation: [-Math.PI / 2, 0, 0],
//   }));

//   return (
//     <mesh
//       ref={usePlaneRef}
//       position={[0, -2, 0]}
//       rotation={[-Math.PI / 2, 0, 0]}
//     >
//       <planeGeometry args={[100, 100]} />
//       <meshStandardMaterial color="blue" />
//     </mesh>
//   );
// }

// function Terrain() {
//   const textures = useTexture({
//     map: rockTextureDiff.src,
//     displacementMap: rockTextureDisp.src,
//   });

//   return (
//     <>
//       <Sphere args={[10, 10]} rotation-x={-Math.PI / 2}>
//         <meshStandardMaterial {...textures} />
//       </Sphere>
//       <Sphere
//         args={[10, 10, 160, 160]}
//         rotation-x={-Math.PI / 2}
//         position-y={0.1}
//       >
//         <meshStandardMaterial
//           {...textures}
//           wireframe
//           color={"white"}
//           map={null}
//         />
//       </Sphere>
//     </>
//   );
// }

// function SphereComponent() {
//   const meshRef = useRef<any>(null);
//   const [state, setState] = useState(100);
//   const textures = useTexture({
//     map: rockTextureDiff.src,
//     displacementMap: rockTextureDisp.src,
//     aoMap: rockTextureArm.src,
//     roughnessMap: rockTextureArm.src,
//     metalnessMap: rockTextureArm.src,
//   });
//   useFrame(() => {
//     if (meshRef) {
//       // meshRef.current.rotation.x = meshRef.current.rotation.x += 0.001;
//       // meshRef.current.rotation.y = meshRef.current.rotation.y += 0.01;
//     }
//   });

//   return (
//     <mesh ref={meshRef} position={[0, 2, 0]}>
//       {/* <boxGeometry /> */}
//       <sphereGeometry args={[10, 64]} />
//       {/* <MeshWobbleMaterial color="hotpink" speed={1} factor={0.6} /> */}
//       <meshStandardMaterial {...textures} />
//     </mesh>
//   );
// }

// function Blob() {
//   const meshRef: any = useRef();
//   const hover = useRef(false);
//   const uniforms: any = useMemo(() => {
//     return {
//       u_time: { value: 0 },
//       u_intensity: { value: 0.3 },
//     };
//   }, []);

//   useFrame((state) => {
//     const { clock } = state;
//     if (meshRef.current) {
//       meshRef.current.material.uniforms.u_time.value =
//         0.4 * clock.getElapsedTime();

//       meshRef.current.material.uniforms.u_intensity.value = MathUtils.lerp(
//         meshRef.current.material.uniforms.u_intensity.value,
//         hover.current ? 1 : 0.15,
//         0.02
//       );
//     }
//   });
//   return (
//     <mesh
//       ref={meshRef}
//       scale={1.5}
//       position={[0, 0, 0]}
//       onPointerOver={() => (hover.current = true)}
//       onPointerOut={() => (hover.current = false)}
//     >
//       <icosahedronBufferGeometry args={[2, 20]} />
//       {/* <meshStandardMaterial color="hotpink" /> */}
//       <shaderMaterial
//         vertexShader={vertexShader}
//         fragmentShader={fragmentShader}
//         uniforms={uniforms}
//       />
//     </mesh>
//   );
// }

// function Box() {
//   const [useBoxRef]: any = useBox(() => ({ mass: 1, position: [0, 2, 0] }));

//   return (
//     <mesh ref={useBoxRef} position={[0, 2, 0]}>
//       <boxGeometry />
//       <meshStandardMaterial color="hotpink" />
//     </mesh>
//   );
// }

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
