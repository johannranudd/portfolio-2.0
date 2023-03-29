import WordSphere from "./components/Animations/WordSphere";

export default function TechComponent() {
  return (
    <section className="relative text-white">
      <div
        // id="scroll-to-me"
        className="px-4 space-y-6 max-w-screen-lg mx-auto md:grid md:grid-cols-2 md:space-y-0"
      >
        <div className="md:ml-sidebarWidth">
          <h2 className="text-xl">About me</h2>
          <p className="w-full">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            esse consectetur iusto quia quas quo repellat explicabo at pariatur
            veritatis, voluptatem quae autem ipsam ex accusantium deleniti, odit
            molestias eum dicta voluptates illum nisi quod.
          </p>
        </div>
        <div className="-z-50 h-[20rem] lg:h-[25rem]">
          <WordSphere />
        </div>
      </div>
    </section>
  );
}
