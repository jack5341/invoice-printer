import Head from "next/head";
import { Container, Box } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

// Components
import Navbar from "../components/navbar/navbar";
import Howto from "../components/howto/howto";
import Content from "../components/content/content";

// Utils
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
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <Head>
        <title>Invoice Printer</title>
      </Head>
      <Box height="8px" background="#107c41"></Box>
      <Container
        padding={isTablet ? "0px" : "1rem"}
        paddingTop="0px"
        paddingBottom="0px"
        maxW={isTablet ? "container.sm" : "container.xl"}
      >
        <Navbar version={version} logs={logs} />
        <Howto />
        <Content />
      </Container>
    </>
  );
}
