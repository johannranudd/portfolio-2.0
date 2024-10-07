import FeaturedProject from "./FeaturedProject"
import { Iproject, projectsArray } from "./utils/generics"
import LineThroughComponent from "./components/Animations/LineThroughComponent"
import Link from "next/link"

export default function ProjectsComponent() {
  return (
    <section id="projectsSection" className=" bg-primary z-50 shadow-bsOne">
      <div className="max-w-screen-lg md:mx-auto">
        <div className="px-2 sm:px-4 md:mx-sidebarWidth">
          <div className="relative py-16 sm:w-1/2">
            <h2 className="absolute top-[50%] -translate-y-[50%] translate-x-[10%] text-3xl z-10 bg-primary">Projects</h2>
            <LineThroughComponent />
          </div>

          <p className="pb-16 -translate-y-[20%] max-w-[550px]">
            Here are some companies I worked with as a developer at Apidari between January 2023 and October 2024
            <br />
            <Link
              href="https://www.apidari.no/"
              target="_blank"
              rel="noopener noreferrer"
              className={`z-40 font-mono text-md text-thirdClr hover:opacity-50 duration-300`}
            >
              Visit Apidari homepage
            </Link>
          </p>
          <ul className="flex flex-col w-full">
            {projectsArray.map((p: Iproject, index: number) => {
              const all = { ...p, index }
              return <FeaturedProject {...all} key={index} />
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
