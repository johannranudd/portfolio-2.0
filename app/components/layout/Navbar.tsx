import MenuIcon from "./MenuIcon";
import MobileMenu from "./MobileMenu";
import Logo from "../ui/Logo";
import { DesktopMenu } from "./DesktopMenu";

export default function NavBar() {
  return (
    <header className="fixed w-full z-50 bg-clip-padding backdrop-filter backdrop-blur-md shadow-#1">
      <nav className="px-4 h-navbarWidth flex justify-between items-center">
        <Logo />
        <MenuIcon />
        <MobileMenu />
        <DesktopMenu />
      </nav>
    </header>
  );
}
