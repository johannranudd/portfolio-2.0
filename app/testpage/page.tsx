import React from "react";
import ContactComponent from "../ContactComponent";
import HeroComponent from "../HeroComponent";
import ProjectsComponent from "../ProjectsComponent";
import TechComponent from "../TechComponent";
import TestComponent from "../TestComponent";

export default function TestPage() {
  return (
    <div>
      <TestComponent />
      {/* <HeroComponent /> */}
      <ProjectsComponent />
      <TechComponent />
      <ContactComponent />
    </div>
  );
}
