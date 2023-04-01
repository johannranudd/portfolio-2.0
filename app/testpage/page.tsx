import React from "react";
import ContactComponent from "../ContactComponent";
import HeroComponent from "../HeroComponent";
import ProjectsComponent from "../ProjectsComponent";
import TechComponent from "../TechComponent";

export default function TestPage() {
  return (
    <div>
      <div className="h-screen flex items-center justify-center">
        <h1>test</h1>
      </div>
      {/* <HeroComponent /> */}
      <ProjectsComponent />
      <TechComponent />
      <ContactComponent />
    </div>
  );
}
