import {
    Text,
    Box,
    Editable,
    Kbd,
    EditablePreview,
    EditableInput,
    useColorMode,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Link,
    UnorderedList,
    ListItem
} from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Header() {

    const version = "v0.6"
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Text
                bgGradient={colorMode === "light" ? "linear(to-l, #7928CA,#2866ca)" : "linear(to-l, white,white)"}
                bgClip="text"
            >
                <Button
                    _focus="none"
                    onClick={() => toggleColorMode()}
                    bgGradient={colorMode === "light" ? "linear(to-l, #7928CA,#2866ca)" : "linear(to-l, white,white)"}
                    bgClip="text"
                    _hover="none"
                    _active="none"
                >
                    {colorMode === "light" ? "Light Mode ☀️" : "Dark Mode 🌙"}
                </Button>
                <Button 
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
            </Text>
            <Text
                pl="3"
                bgGradient={colorMode === "light" ? "linear(to-l, #7928CA,#2866ca)" : "linear(to-l, white,white)"}
                bgClip="text"
                fontSize="6xl"
                fontWeight="extrabold"
            >
                Invoice Printer
            </Text>
            <Box boxShadow="sm" padding="4" bg={colorMode === "light" ? "blue.100" : "#bee3f80a"} maxW="3xl">
                <div>
                    You can only upload XLSX(Excel) and CSV(Comma-Separated Values).After upload process
                    you will see boxes then choose a box and go to editor.<br /><br />
                    Write your company name to under editeable text.
                    <Editable defaultValue={window.localStorage.getItem("company_name") ? window.localStorage.getItem("company_name") : "Your Company Name"}>
                        <Kbd>
                            <EditablePreview />
                            <EditableInput onChange={e => window.localStorage.setItem("company_name", e.target.value)} />
                        </Kbd>
                    </Editable>
                </div>
            </Box>
        </>
    )
}