import Link from "next/link";

export default function NavBar() {
  return (
    <header className="block fixed  w-full flex bg-[#03bb006c] md:hidden">
      <nav className="py-2 max-w-screen-lg mx-auto">
        <Link href={`/`} scroll={false}>
          Home
        </Link>
        <Link href={`/about`} scroll={false}>
          About
        </Link>
      </nav>
    </header>
  );
}
