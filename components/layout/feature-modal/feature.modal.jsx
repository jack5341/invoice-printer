import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  Button,
  UnorderedList,
  ListItem,
  Badge,
  Link
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons"

export default function FeatureModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent
        background={props.colorMode === "light" ? "white" : "#107c41"}
      >
        <ModalHeader color={props.colorMode === "light" ? "#107c41" : "white"}>
          Changelog
        </ModalHeader>
        <ModalCloseButton _hover="none" _active="none" _focus="none" />
        <ModalBody
          color={props.colorMode === "light" ? "#094223" : "white"}
          pb={6}
        >
          <UnorderedList>
            <ListItem>v0.5</ListItem>
            <UnorderedList>
              <ListItem>First version</ListItem>
            </UnorderedList>
            <ListItem>v0.6</ListItem>
            <UnorderedList>
              <ListItem>Added feature panel</ListItem>
              <ListItem>New Responsive design for edit page</ListItem>
            </UnorderedList>
            <ListItem>v0.7</ListItem>
            <UnorderedList>
              <ListItem>Added refresh button for clean cache</ListItem>
              <ListItem>Colored XLSX and CSV texts in description</ListItem>
              <ListItem>Some optimization processes</ListItem>
            </UnorderedList>
            <ListItem>v0.8</ListItem>
            <UnorderedList>
              <ListItem>Invoice Printer is serverless now ! 🎉🎉</ListItem>
            </UnorderedList>
            <ListItem>v0.9</ListItem>
            <UnorderedList>
              <ListItem>Added Logo Input</ListItem>
              <ListItem>Edited mobile designed</ListItem>
              <ListItem>Removed minimize button</ListItem>
            </UnorderedList>
            <ListItem>v1.0</ListItem>
            <UnorderedList>
              <ListItem>
                Added how many item parsed indicator to export result
              </ListItem>
              <ListItem>Deleted Stupidly Lines</ListItem>
              <ListItem>Added to export result lenght</ListItem>
              <ListItem>
                Styled again Dark mode button and refresh button
              </ListItem>
              <ListItem>Added basic how should be image</ListItem>
              <ListItem>
                Added Configuration Modal for company informations
              </ListItem>
              <ListItem>2 new input for bill to company</ListItem>
              <ListItem>Designed new smartly and basic edit page</ListItem>
            </UnorderedList>
            <ListItem>
              <Badge variant="subtle" colorScheme="green">
                New
              </Badge>{" "}
              v1.1
            </ListItem>
            <UnorderedList>
              <ListItem>
                Designed again by Next.js
              </ListItem>
            </UnorderedList>
          </UnorderedList>
        </ModalBody>
        <ModalFooter>
          <Link href="https://github.com/jack5341/invoice-printer" target="_blank">
            <Button
              _focus="none"
              background="none"
              rightIcon={<ExternalLinkIcon/>}
              color={props.colorMode === "light" ? "#107c41" : "white"}
            >
              Github Repository
            </Button>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
