import { Container, Box } from "@chakra-ui/react";
import { useMediaQuery } from 'react-responsive'

// Components
import Navbar from "../components/layout/navbar";

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 580px)' })

  return (
    <>
      <Box height="15px" background="#107c41"></Box>
      <Container padding={isMobile ? "0px" : "1rem"} paddingTop="0px" maxW="container.lg">
        <Navbar />
      </Container>
    </>
  );
}
