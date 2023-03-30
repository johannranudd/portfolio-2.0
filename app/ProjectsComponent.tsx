import { BsChevronCompactDown } from "react-icons/bs";
import FeaturedProject from "./FeaturedProject";
import { projectsArray } from "./utils/generics";

export default function ProjectsComponent() {
  return (
    <section id="projectsSection" className="pb-32 bg-primary z-50">
      <div className="max-w-screen-lg md:mx-auto">
        <div className="px-2 md:px-4 md:mx-sidebarWidth">
          <h2 className="py-16 text-2xl">projects</h2>
          <ul className="flex flex-col w-full  space-y-20">
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
