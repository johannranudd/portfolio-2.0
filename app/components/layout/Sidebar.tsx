import Link from "next/link";

export default function Sidebar() {
  return (
    <header className="hidden md:block fixed h-full flex flex-col justify-end bg-[#bb00bb6c]">
      <nav className="py-2 max-w-screen-lg mx-auto">
        <Link href={`/`} scroll={false}>
          Homettt
        </Link>
        <Link href={`/about`} scroll={false}>
          Aboutttt
        </Link>
      </nav>
    </header>
  );
}
