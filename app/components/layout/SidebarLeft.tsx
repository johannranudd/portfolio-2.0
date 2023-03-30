import Link from "next/link";
import { pageStructure } from "./pageStructure";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import BtnColorMode from "../ui/BtnColorMode";

export default function SidebarLeft() {
  return (
    <nav className="hidden md:flex fixed h-screen w-sidebarWidth flex flex-col justify-end text-white text-lg">
      <div className="flex flex-col items-center space-y-3 ">
        <BtnColorMode />
        <FaGithub />
        <FaLinkedin />
        <div className="w-[2px] h-28 bg-white"></div>
      </div>
    </nav>
  );
}
