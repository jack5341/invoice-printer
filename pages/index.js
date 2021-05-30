import { useState } from "react"
import Head from "next/head";
import Hero from "../components/layout-components/hero";
import Result from "../components/shared-components/result";

import { FileStore } from "../contexts/fileStore";

import { getLinkConstants } from "../utils/getConsts";
export async function getStaticProps() {
  return {
    props: {
      links: getLinkConstants(),
    },
  };
}

export default function Home(props) {
  const [result,setresult] = useState(null)
  return (
    <>
      <FileStore.Provider value={{result,setresult}} >
        <Head>
          <title>Invoice Printer</title>
        </Head>
        <Hero links={props.links} />
        {/* <Result /> */}
      </FileStore.Provider>
    </>
  );
}
