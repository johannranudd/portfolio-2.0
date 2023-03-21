import Link from "next/link";

export default function NavBar() {
  return (
    <header className="fixed h-full flex flex-col justify-end bg-[#bb00bb6c]">
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
