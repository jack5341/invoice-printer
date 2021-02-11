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

    return (
        <Container mt="7" textAlign="center">
            <hr/>
            <Text pt="5">developed by <a 
            style={{color: colorMode === "light" ? "#2866ca" : "rgb(151, 179, 223)"}}
            target="_blank" rel="noreferrer" href="https://github.com/jack5341">jack5341</a> </Text>
        </Container>
    )
}
