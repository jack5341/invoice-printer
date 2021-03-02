import { useState } from "react";
import Helmet from "react-helmet";

// Components
import Upmenu from "../components/upmenu/upmenu";
import Content from "../components/content/content";

export default function Homepage() {
  const [load, isLoad] = useState(null);
  const [list, setList] = useState(null);
  const [type, setType] = useState(null);

  return (
    <>
      <Helmet>
        <title>Invoice Parser 🧐</title>
      </Helmet>
      <Upmenu setType={setType} setList={setList} loadState={isLoad} />
      <Content type={type} list={list} loadState={load} />
    </>
  );
}
