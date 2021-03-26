import Head from "next/head"
import { Box, SimpleGrid } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

import Infos from "../components/info-section/infos";
import Upload from "../components/upload/upload";

import { getChangelog } from "../utils/changelog";

export async function getStaticProps() {
  const data = await getChangelog();
  return {
    props: {
      logs: data.content,
      version: process.env.VERSION,
    },
  };
}

export default function Home({ logs, version }) {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <>
      <Box height="8px" background="#107c41"></Box>
      <SimpleGrid columns={isTablet ? 1 : 2}>
        <Infos version={version} logs={logs} />
        <Upload />
      </SimpleGrid>
    </>
  );
}
