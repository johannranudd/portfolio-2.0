import WordSphere from "./components/Animations/WordSphere";
import { arrayOfTechShort } from "./utils/generics";

export default function TechComponent() {
  return (
    <section className="relative px-2 md:px-4 space-y-6 max-w-screen-lg mx-auto text-white md:ml-sidebarWidth">
      <h2 className="text-xl ">About me</h2>
      <div
        // id="scroll-to-me"
        className="grid gap-y-6 sm:gap-y-0 sm:gap-x-6 sm:grid-cols-2"
      >
        <div className="space-y-3">
          <p className="w-full">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            esse consectetur iusto quia quas quo repellat explicabo at pariatur
            veritatis, voluptatem quae autem ipsam ex accusantium deleniti, odit
            molestias eum dicta voluptates illum nisi quod.
          </p>
          <ul className="grid grid-cols-2">
            {arrayOfTechShort.map((m, i) => {
              return (
                <div key={i}>
                  <li className="flex items-center space-x-1">
                    <div className="triangle"></div>
                    <p>{m}</p>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="-z-50 h-[14rem] xxs:h-[18rem]  sm:h-[20] md:h-[23]">
          <WordSphere />
        </div>
      </div>
    </section>
  );
}
