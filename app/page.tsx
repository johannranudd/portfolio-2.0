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
