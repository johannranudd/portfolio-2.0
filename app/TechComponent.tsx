import WordSphere from "./components/Animations/WordSphere";
import { arrayOfTechShort } from "./utils/generics";

export default function TechComponent() {
  return (
    <section className="px-2 md:px-4 max-w-screen-lg mx-auto text-white ">
      <div
        // id="scroll-to-me"
        className="grid gap-y-6 sm:grid-cols-2"
      >
        <div className="md:ml-sidebarWidth space-y-6 mlg:space-y-0 md:flex md:flex-col md:justify-between">
          <h2 className="text-xl mlg:mt-10">About me</h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            esse consectetur iusto quia quas quo repellat explicabo at pariatur
            veritatis, voluptatem quae autem ipsam ex accusantium deleniti, odit
            molestias eum dicta voluptates illum nisi quod.
          </p>
          <ul className="grid grid-cols-2">
            {arrayOfTechShort.map((m, i) => {
              return (
                <li key={i} className="flex items-center space-x-1">
                  <div className="triangle"></div>
                  <p>{m}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="-z-50 h-[14rem] xxs:h-[18rem]  sm:h-[15rem] mlg:h-[20rem] self-center">
          <WordSphere />
        </div>
      </div>
    </section>
  );
}
