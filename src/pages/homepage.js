import { useState } from "react";

// Components
import Upmenu from "../components/upmenu/upmenu";
import Content from "../components/content/content";

export default function Homepage() {
  const [load, isLoad] = useState(null);
  const [list, setList] = useState(null);
  const [type, setType] = useState(null);

  return (
    <>
      <Upmenu setType={setType} setList={setList} loadState={isLoad} />
      <Content type={type} list={list} loadState={load} />
    </>
  );
}
