import {
  Box,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Link,
  useColorMode,
  useDisclosure
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

import Infos from "../components/info-section/infos";
import Upload from "../components/upload/upload";

import { getChangelog } from "../utils/getchangelog";
import content from "../content.json";

export async function getStaticProps() {
  const data = await getChangelog();
  return {
    props: {
      logs: data.content,
      version: process.env.VERSION,
      texts: content,
    },
  };
}

export default function Home({ logs, version, texts }) {
  // const { colorMode } = useColorMode();
  // const { isOpen, onClose } = useDisclosure()

  return (
    <>
      {/* <Modal size="xl" isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent borderTop="5px solid #107c41" borderRadius="0">
          <ModalHeader
            color={colorMode === "light" ? "#107c41" : "white"}
            fontSize="2xl"
            paddingBottom="0"
          >
            We'll use your cookies
          </ModalHeader>
          <ModalBody
            color={colorMode === "light" ? "#07381d" : "white"}
            fontSize="lg"
          >
            This website uses cookies in order to your company informations.
            Your informations will using for automatic information placing.
            Please allow to use your cookies for best experience.
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} colorScheme="green">
              Accept
            </Button>
            <Link _hover="none" href="https://google.com">
              <Button ml="2">Reject</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
      <Box height="8px" background="#107c41"></Box>
      <SimpleGrid className="grid-container" columns="2">
        <Infos texts={texts} version={version} logs={logs} />
        <Upload texts={texts} />
      </SimpleGrid>
    </>
  );
}
