import {
    Text,
    Box,
    Editable,
    Kbd,
    EditablePreview,
    EditableInput,
    useColorMode,
    Button,
    Link
} from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons'

// Containers
import Feature from '../modal/feature/feature'

export default function Header() {

    const { colorMode, toggleColorMode } = useColorMode();

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
                <Feature colorMode={colorMode} />
                <Button 
                 className="refresh-btn"
                 float="right"
                 leftIcon={<DeleteIcon />}
                 colorScheme="messenger"
                 variant="solid"
                 color={colorMode === "light" ? "white" : "black"}
                 onClick={() => window.location.reload() }
                 bgGradient={colorMode === "light" ? "linear(to-l, #7928CA,#2866ca)" : "#fff"}>
                    Refresh
                </Button>
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
                    <p>
                        You can only upload <Link color={colorMode === "light" ? "teal.600" : "teal.300"}>XLSX(Excel)</Link> and <Link color={colorMode === "light" ? "blue.500" : "blue.200"}>CSV(Comma-Separated Values)</Link>.After upload process
                        you will see boxes then choose a box and go to editor.<br /><br />
                        Write your company name to under editeable text.
                    </p>
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