"use client";
import { useGlobalContext } from "@/context/context";
export default function MenuIcon() {
  const { menuIsOpen, setMenuIsOpen } = useGlobalContext();

  function handleClick() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer space-y-1.5 mdlg:hidden"
    >
      <div
        className={`w-8 h-[3px] duration-300 rounded-md bg-black  ${
          menuIsOpen && "rotate-45 translate-y-[9px]"
        }`}
      ></div>
      <div
        className={`w-8 h-[3px] duration-300 rounded-md bg-black ${
          menuIsOpen && "bg-transparent"
        }`}
      ></div>
      <div
        className={`w-8 h-[3px] duration-300 rounded-md bg-black ${
          menuIsOpen && "-rotate-45 translate-y-[-9px]"
        }`}
      ></div>
    </div>
  );
}

//  return (
//    <div
//      onClick={handleClick}
//      className="ml-auto cursor-pointer pr-2 space-y-1.5 md:hidden"
//    >
//      <div
//        className={`w-8 h-[3px] duration-300 rounded-md bg-secondary dark:bg-primary ${
//          menuIsOpen && "rotate-45 translate-y-[9px]"
//        }`}
//      ></div>
//      <div
//        className={`w-8 h-[3px] duration-300 rounded-md bg-secondary ${
//          menuIsOpen ? "bg-transparent" : "dark:bg-primary"
//        }`}
//      ></div>
//      <div
//        className={`w-8 h-[3px] duration-300 rounded-md bg-secondary dark:bg-primary ${
//          menuIsOpen && "-rotate-45 translate-y-[-9px]"
//        }`}
//      ></div>
//    </div>
//  );
