import { Box, SimpleGrid } from "@chakra-ui/react";

import Infos from "../components/info-section/infos";
import Upload from "../components/upload/upload";

import { getChangelog } from "../utils/getchangelog";
import content from "../content.json"

export async function getStaticProps() {
  const data = await getChangelog();
  return {
    props: {
      logs: data.content,
      version: process.env.VERSION,
      texts: content
    },
  };
}

export default function Home({ logs, version, texts }) {

  return (
    <>
      <Box height="8px" background="#107c41"></Box>
      <SimpleGrid className="grid-container" columns="2">
        <Infos texts={texts} version={version} logs={logs} />
        <Upload texts={texts} />
      </SimpleGrid>
    </>
  );
}
