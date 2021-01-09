import { Text,Box } from "@chakra-ui/react"

export default function Header(){
    return (
    <>
        <Text
        pl="3"
        bgGradient="linear(to-l, #7928CA,#2866ca)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        >
        Invoice Printer
        </Text>
        <Box boxShadow="sm" padding="4" bg="blue.100" maxW="3xl">
            There are many benefits to a joint design and development system. Not only
            does it bring benefits to the design team.
        </Box>
    </>
    )
}