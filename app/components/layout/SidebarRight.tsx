export default function SidebarRight() {
  return (
    <nav className="hidden md:flex z-0 fixed right-0 h-screen w-sidebarWidth flex-col justify-end bg-[#bb00bb8a]">
      <div className="relative h-72">
        <p className="absolute h-sidebarWidth top-1/2 -right-1/2 rotate-90 ">
          johnrand380@gmail.com
        </p>
      </div>
    </nav>
  );
}
