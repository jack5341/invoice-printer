import { useState } from "react";
import Head from "next/head";

import IconList from "../components/shared-components/icon-list";
import LinkStack from "../components/shared-components/link-stack";
import Cards from "../components/shared-components/result-cards"

import { getLinkConstants } from "../utils/getConsts";
export async function getStaticProps() {
  return {
    props: {
      links: getLinkConstants(),
    },
  };
}

export default function Home(props) {
  const [isUploaded, setIsUploaded] = useState(null);

  const firstSide = () => {
    return (
      <div className="card-lg">
        {isUploaded == false ? (
          <button
            onClick={() => setIsUploaded(true)}
            className="steps-btn"
            style={{ right: 0, top: 0, margin: "1rem" }}
          >
            Next Step
          </button>
        ) : null}
        <LinkStack />
        <p className="subject">Invoice Printer</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ipsa.
        </p>
        <div
          onClick={() => document.getElementById("file-input").click()}
          className={`input-box`}
        >
          Upload your file
        </div>
        <input
          type="file"
          accept=".xlsx, .csv, .xls"
          // onChange={(e) => parseData(e.target.files[0])}
          onChange={(e) => setIsUploaded(true)}
          id="file-input"
          className="hidden"
        ></input>
      </div>
    );
  };

  const secondSide = () => {
    return (
      <div className="card-lg w-full md:w-1/2">
        <button
          onClick={() => setIsUploaded(false)}
          className="steps-btn"
          style={{ left: 0, top: 0, margin: "1rem" }}
        >
          Previous Step
        </button>
        <div className="container justify-items-start max-h-96 overflow-auto">
          <div className="grid grid-cols-3 gap-4 w-full">
            <Cards/>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>{!isUploaded ? "Invoice Printer" : "Items List"}</title>
      </Head>
      <div className="container h-screen justify-center items-center backdrop-opacity-80">
        {!isUploaded ? firstSide() : secondSide()}
        <IconList links={props.links} />
      </div>
    </>
  );
}
