import Link from "next/link";
import { pageStructure } from "./pageStructure";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import BtnColorMode from "../ui/BtnColorMode";

export default function Sidebar() {
  return (
    <header className="hidden 900:block fixed h-full w-sidebarWidth bg-[#bb00bb60]">
      <nav className="h-full flex flex-col justify-between items-center">
        <div className="mb-20">&lt;/&gt;</div>
        <div className="flex flex-col space-y-3">
          {pageStructure.map((m) => {
            const { id, page, link } = m;
            return (
              <Link key={id} href={link} scroll={false} className="capitalize">
                {page}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col items-center space-y-3 text-2xl">
          <BtnColorMode />
          <FaGithub />
          <FaLinkedin />
          <div className="w-[2px] h-28 bg-black"></div>
        </div>
      </nav>
    </header>
  );
}
