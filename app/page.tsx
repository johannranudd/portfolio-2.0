import ContactComponent from "./ContactComponent";
import HeroComponent from "./HeroComponent";
import ProjectsComponent from "./ProjectsComponent";
import TechComponent from "./TechComponent";

export default function Home() {
  return (
    <div>
      <div className="relative h-screen w-screen -z-50 bg-pink-500">
        <HeroComponent />
      </div>
      <ProjectsComponent />
      <TechComponent />
      <ContactComponent />
    </div>
  );
}
