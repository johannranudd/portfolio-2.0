import MenuIcon from "./MenuIcon";
import MobileMenu from "./MobileMenu";

export default function NavBar() {
  return (
    <header className="h-navbarWidth block fixed w-full flex bg-[#03bb006c] 900:hidden">
      <nav className="w-[95%] mx-auto flex justify-between items-center">
        <div>Logo</div>
        <MenuIcon />
        <MobileMenu />
      </nav>
    </header>
  );
}
