import Head from "next/head";
import { Container, Box } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

// Components
import Navbar from "../components/navbar/navbar";
import Howto from "../components/howto/howto";

// Utils
import { getChangelog } from "../utils/changelog";

export async function getStaticProps() {
  const data = await getChangelog();
  return {
    props: {
      logs: data.content,
    },
  };
}

export default function Home({ logs }) {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <Head>
        <title>Invoice Printer</title>
      </Head>
      <Box height="15px" background="#107c41"></Box>
      <Container
        padding={isTablet ? "0px" : "1rem"}
        paddingTop="0px"
        maxW="container.lg"
      >
        <Navbar logs={logs} />
        <Howto />
      </Container>
    </>
  );
}
