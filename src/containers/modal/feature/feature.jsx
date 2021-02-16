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
    Link
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const version = "v0.8"

export default function Feature(props) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
        <>
            <Button
                color={props.colorMode === "light" ? "#1941b3" : "white"} onClick={onOpen}>
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