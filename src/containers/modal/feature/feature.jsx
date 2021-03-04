import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    UnorderedList,
    ListItem,
    useDisclosure,
    Button,
    Text,
    Link,
    useColorMode
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const version = "v1.0"

export default function Feature() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode } = useColorMode();

    return (
        <>
            <Button
                className="version-btn"
                color={colorMode === "light" ? "#1941b3" : "white"} onClick={onOpen}>
                {version}
            </Button>
            {/* Modal */}
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Features</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontWeight="bold" mb="1rem">
                            <UnorderedList>
                                <ListItem>v0.5</ListItem>
                                    <UnorderedList>
                                        <ListItem>
                                            First version
                                        </ListItem>
                                    </UnorderedList>
                                <ListItem>v0.6</ListItem>
                                <UnorderedList>
                                    <ListItem>
                                        Added feature panel
                                    </ListItem>
                                    <ListItem>
                                        New Responsive design for edit page
                                    </ListItem>
                                </UnorderedList>
                                <ListItem>v0.7</ListItem>
                                <UnorderedList>
                                    <ListItem>
                                        Added refresh button for clean cache
                                    </ListItem>
                                    <ListItem>
                                        Colored XLSX and CSV texts in description
                                    </ListItem>
                                    <ListItem>
                                        Some optimization processes 
                                    </ListItem>
                                </UnorderedList>
                                <ListItem>v0.8</ListItem>
                                <UnorderedList>
                                    <ListItem>
                                        Invoice Printer is serverless now ! 🎉🎉
                                    </ListItem>
                                </UnorderedList>
                                <ListItem>v0.9</ListItem>
                                <UnorderedList>
                                    <ListItem>
                                        Added Logo Input
                                    </ListItem>
                                    <ListItem>
                                        Edited mobile designed
                                    </ListItem>
                                    <ListItem>
                                        Removed minimize button
                                    </ListItem>
                                </UnorderedList>
                            </UnorderedList>
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">
                            <Link href="https://github.com/jack5341/invoice-printer" isExternal>
                                Github Repository <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}