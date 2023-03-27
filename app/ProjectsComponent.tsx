import FeaturedProject from "./FeaturedProject";

export default function ProjectsComponent() {
  return (
    <section className="bg-white mb-20">
      <div className="max-w-screen-lg md:mx-auto">
        <div className="px-4  md:mx-sidebarWidth">
          <h2 className="py-16 text-2xl">projects</h2>
          <ul className="flex flex-col w-full space-y-20">
            <FeaturedProject />
          </ul>
        </div>
      </div>
    </section>
  );
}
