import MenuIcon from "./MenuIcon";
import MobileMenu from "./MobileMenu";

export default function NavBar() {
  return (
    <header className="fixed w-full z-50 bg-[#01ff0a92]">
      <nav className="px-4 h-navbarWidth flex justify-between items-center">
        <div>&lt;/&gt;</div>
        <MenuIcon />
        <MobileMenu />
      </nav>
    </header>
  );
}
