export async function animationSequel(
  { controls, modalControls, router, setIsShown }: any,
  type: string = "enter"
) {
  if (type === "enter") {
    await controls.start({ opacity: 1 });
    await modalControls.start({ y: 0 });
  } else if (type === "exit") {
    await modalControls.start({ rotate: 180, background: "#b0b" });
    await modalControls.start({ y: -800 });
    await controls.start({ opacity: 0 });
    setIsShown(false);
    router.push("/about");
  }
}
