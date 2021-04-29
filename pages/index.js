import Hero from "../components/layout-components/hero"

import { getLinkConstants } from "../utils/getConsts"
export async function getStaticProps() {
  return {
    props: {
      links: getLinkConstants()
    }, 
  }
}

export default function Home(props) {
  return (
    <>
      <Hero links={props.links} />
    </>
  )
}
