import Head from "next/head";
import { Container, Box } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

// Components
import Navbar from "../components/navbar/navbar";
import Howto from "../components/howto/howto";
import Form from "../components/form/form"
import Alert from "../components/alert/alert"

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
      <Box height="8px" background="#107c41"></Box>
      {/* <Alert /> */}
      <Container
        padding={isTablet ? "0px" : "1rem"}
        paddingTop="0px"
        paddingBottom="0px"
        maxW="container.lg"
      >
        <Navbar logs={logs} />
        <Howto />
        {/* <Form /> */}
      </Container>
    </>
  );
}
