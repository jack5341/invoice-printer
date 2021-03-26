import { ExternalLinkIcon } from "@chakra-ui/icons";
import ReactMarkdown from "react-markdown";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  Divider,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

export default function FeatureModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobileXL = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <>
      <Button
        letterSpacing="2px"
        _hover="none"
        _active="none"
        _focus="none"
        onClick={onOpen}
        background="none"
        color={props.colorMode === "light" ? "#107c41" : "white"}
        size="md"
      >
        {props.version}
      </Button>
      <Modal scrollBehavior="inside" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          padding="1.5rem"
          paddingBottom="0rem"
          paddingTop="0rem"
          background={props.colorMode === "light" ? "white" : "#15151f"}
        >
          <ModalHeader
            fontSize={isMobileXL ? "xl" : "2xl"}
            paddingBottom="0rem"
            color={props.colorMode === "light" ? "#107c41" : "#27d476"}
          >
            Changelog
          </ModalHeader>
          <Divider />
          <ModalCloseButton _hover="none" _active="none" _focus="none" />
          <ModalBody
            fontWeight="600"
            fontSize={isMobileXL ? "sm" : null}
            className="modal-body"
            color={props.colorMode === "light" ? "#094223" : "whitesmoke"}
          >
            <ReactMarkdown>{props.logs}</ReactMarkdown>
          </ModalBody>
          <Divider />
          <ModalFooter>
            <Link
              href="https://github.com/jack5341/invoice-printer"
              target="_blank"
            >
              <Button
                _focus="none"
                background="none"
                size={isMobileXL ? "sm" : null}
                rightIcon={<ExternalLinkIcon />}
                color={props.colorMode === "light" ? "#107c41" : "white"}
              >
                Github Repository
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
