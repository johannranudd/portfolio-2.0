import AnimationWrapper from "./AnimationWrapper";

export default function Home() {
  return (
    <AnimationWrapper>
      <div>
        <h1>Home Page</h1>
      </div>
    </AnimationWrapper>
  );
}

{
  /* <AnimatePresence>
          {isShowing && (
            <m.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="h-10 w-10 bg-[#b0b]"
            ></m.div>
          )}
        </AnimatePresence> */
}
