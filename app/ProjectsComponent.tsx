import { BsChevronCompactDown } from "react-icons/bs";
import FeaturedProject from "./FeaturedProject";
import { projectsArray } from "./utils/generics";
import LineThroughComponent from "./components/Animations/LineThroughComponent";

export default function ProjectsComponent() {
  return (
    <section
      id="projectsSection"
      className="pb-32 bg-primary z-50 text-white shadow-#0"
    >
      <div className="max-w-screen-lg md:mx-auto">
        <div className=" px-2 sm:px-4 md:mx-sidebarWidth">
          <div className="relative py-16 sm:w-1/2">
            <h2 className="absolute top-[50%] -translate-y-[50%] translate-x-[10%] text-3xl z-10 bg-primary">
              Projects
            </h2>
            <LineThroughComponent />
          </div>

          <ul className="flex flex-col w-full space-y-20">
            {projectsArray.map((p: any, index: number) => {
              const all = { ...p, index };
              return <FeaturedProject {...all} key={index} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
