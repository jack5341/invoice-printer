import {
    Text,
    Box,
    Editable,
    Kbd,
    EditablePreview,
    EditableInput,
    useColorMode,
    Button
} from "@chakra-ui/react"

export default function Header() {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Button 
                onClick={() => toggleColorMode()}
                bgGradient={colorMode == "light" ? "linear(to-l, #7928CA,#2866ca)" : "linear(to-l, white,white)"}
                bgClip="text"
                _hover="none"
                _active="none"
            >
                {colorMode == "light" ? "Light Mode ☀️" : "Dark Mode 🌙"}
            </Button>
            <Text
                pl="3"
                bgGradient={colorMode == "light" ? "linear(to-l, #7928CA,#2866ca)" : "linear(to-l, white,white)"}
                bgClip="text"
                fontSize="6xl"
                fontWeight="extrabold"
            >
                Invoice Printer
            </Text>
            <Box boxShadow="sm" padding="4" bg={colorMode == "light" ? "blue.100" : "#bee3f80a"} maxW="3xl">
                There are many benefits to a joint design and development system. Not only
                does it bring benefits to the design team.
                <Editable defaultValue={window.localStorage.getItem("company_name") ? window.localStorage.getItem("company_name") : "Your Company Name"}>
                    <Kbd>
                        <EditablePreview />
                        <EditableInput onChange={e => window.localStorage.setItem("company_name", e.target.value)} />
                    </Kbd>
                </Editable>
            </Box>
        </>
    )
}