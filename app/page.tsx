import ContactComponent from "./ContactComponent";
import HeroComponent from "./HeroComponent";
import ProjectsComponent from "./ProjectsComponent";
import TechComponent from "./TechComponent";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <ProjectsComponent />
      <TechComponent />
      <ContactComponent />
    </div>
  );
}

{
  /* <ProjectsComponent />
      <TechComponent />
      <ContactComponent /> */
}

// !cool idea
// "use client";
// import { BsChevronCompactDown } from "react-icons/bs";
// import ContactComponent from "./ContactComponent";
// import HeroComponent from "./HeroComponent";
// import ProjectsComponent from "./ProjectsComponent";
// import TechComponent from "./TechComponent";
// import { useState } from "react";
// import { pageStructure } from "./components/layout/pageStructure";

// export default function Home() {
//   const [scrolly, setScrolly] = useState(false);

//   function handleScroll() {
//     // scroll(0, heroTextRefNumber);
//     setScrolly(true);
//     // scrollIntoView(`#projectsSection`);
//   }

//   return (
//     <div id="page">
//       <HeroComponent />
//       <div className="w-full flex justify-center">
//         <a
//           // onClick={() => scroll(0, heroTextRefNumber)}
//           // href={`#projectsSection`}
//           onClick={() => setScrolly(true)}
//           // ref={chevronRef}
//           // style={{ opacity: chevronOpacity }}
//           // initial={{ y: 100 }}
//           // animate={{ y: 0 }}
//           // transition={{ delay: 0.7, duration: 0.3, ease: "linear" }}
//           className="fixed bottom-12  text-[3rem] cursor-pointer hover:text-thirdClr duration-300"
//         >
//           <BsChevronCompactDown />
//         </a>
//       </div>
//       {scrolly && <ProjectsComponent />}
//       {scrolly && <TechComponent />}
//       {scrolly && <ContactComponent />}
//     </div>
//   );
// }
