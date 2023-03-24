import Link from "next/link";
import { pageStructure } from "./pageStructure";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import BtnColorMode from "../ui/BtnColorMode";

export default function SidebarLeft() {
  return (
    <nav className="hidden md:flex z-0 fixed  h-screen w-sidebarWidth flex flex-col justify-end bg-[#bb00bb8a]">
      <div className="flex flex-col items-center">
        <BtnColorMode />
        <FaGithub />
        <FaLinkedin />
        <div className="w-[2px] h-28 bg-black"></div>
      </div>
    </nav>
  );
}
