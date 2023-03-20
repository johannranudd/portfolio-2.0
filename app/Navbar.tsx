import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="p-2 bg-pink-400">
      <Link href={`/`} scroll={false}>
        Home
      </Link>
      <Link href={`/about`} scroll={false}>
        About
      </Link>
    </nav>
  );
}
