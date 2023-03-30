import Link from "next/link";
import MenuIcon from "./MenuIcon";
import MobileMenu from "./MobileMenu";

export default function NavBar() {
  return (
    <header className="fixed w-full z-50 bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 shadow-#1">
      <nav className="px-4 h-navbarWidth flex justify-between items-center">
        <a href="#heroSection">&lt;/&gt;</a>
        <MenuIcon />
        <MobileMenu />
      </nav>
    </header>
  );
}
