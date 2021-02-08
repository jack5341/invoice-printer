import { Container, Text, useColorMode } from "@chakra-ui/react"

// Container's
import ListItem from '../../containers/listitem/listitem'

export default function Content(props) {

    const { colorMode } = useColorMode();
    
    if (props.list) {
        return (
            <Container maxW="container.md">
                <Text
                    mt="5"
                    textAlign="center"
                    bgGradient={colorMode === "light" ? "linear(to-l, #7928CA,#2866ca)" : "linear(to-l, white,white)"}
                    bgClip="text"
                    fontSize="4xl"
                    fontWeight="extrabold"
                >
                    Export Results
                    </Text>
                <hr />
                <ListItem namesCol={props.list[0]} parsedlist={props.list} />
            </Container>
        )
    }

    return null
}
