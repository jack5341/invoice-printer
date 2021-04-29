import Hero from "../components/layout-components/hero";
// import Result from "../components/shared-components/result";

import { getLinkConstants } from "../utils/getConsts";
export async function getStaticProps() {
  return {
    props: {
      links: getLinkConstants(),
    },
  };
}

export default function Home(props) {
  return (
    <>
      <Hero links={props.links} />
      <div className="flex flex-col justify-center items-center">
        {/* <Result /> */}
      </div>
    </>
  );
}
