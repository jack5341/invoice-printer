import { Container, Text } from "@chakra-ui/react"

// Container's
import ListItem from '../../containers/listitem/listitem'

export default function Content(props) {
    if (props.list) {
        return (
            <Container maxW="container.md">
                <Text
                    mt="5"
                    textAlign="center"
                    bgGradient="linear(to-l, #7928CA,#2866ca)"
                    bgClip="text"
                    fontSize="4xl"
                    fontWeight="extrabold"
                >
                    Export Results
                    </Text>
                <hr />
                <ListItem parsedlist={props.list} />
            </Container>
        )
    }

    return null
}
