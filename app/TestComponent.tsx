import InputAnimationComponent from "./InputAnimationComponent";
import { use } from "react";
import ListComponent from "./ListComponent";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await res.json();
}

export default function TestComponent() {
  const data = use(getData());
  return (
    <>
      <InputAnimationComponent />
      <ListComponent data={data} />
    </>
  );
}
