import WordSphere from "./components/Animations/WordSphere";

export default function TechComponent() {
  return (
    <section className="relative ">
      <div
        // id="scroll-to-me"
        className="px-4 space-y-6 max-w-screen-lg mx-auto md:space-y-0"
      >
        <div className="md:mx-sidebarWidth">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            esse consectetur iusto quia quas quo repellat explicabo at pariatur
            veritatis, voluptatem quae autem ipsam ex accusantium deleniti, odit
            molestias eum dicta voluptates illum nisi quod.
          </p>
        </div>
        <div className="">
          <WordSphere />
        </div>
      </div>
    </section>
  );
}
