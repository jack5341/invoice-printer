import Head from "next/head";
import IconList from "../components/shared-components/icon-list";
import LinkStack from "../components/shared-components/link-stack";

import { getLinkConstants } from "../utils/getConsts";
export async function getStaticProps() {
  return {
    props: {
      links: getLinkConstants(),
    },
  };
}

export default function Contact(props) {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="container">
        <div className="card-lg w-full md:w-1/2">
          <LinkStack />
          <p className="subject">Contact</p>
          <p className="description text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            ipsa.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Itaque, ipsa.
          </p>
          <div>
            <div className="flex flex-col md:flex-row">
              <input
                type="text"
                placeholder="Full Name:"
                className="input m-0 md:mr-1 mb-2"
              />
              <input
                type="email"
                placeholder="E-Mail:"
                className="input m-0 md:ml-1 mb-2"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject:"
                className="input mb-2"
              />
              <textarea
                type="text"
                style={{ resize: "none" }}
                placeholder="Message:"
                className="input"
              />
            </div>
            <button className="bg-gray-300 hover:bg-gray-200 w-full my-2 py-3 rounded">
              Submit
            </button>
          </div>
        </div>
        <IconList links={props.links} />
      </div>
    </>
  );
}
