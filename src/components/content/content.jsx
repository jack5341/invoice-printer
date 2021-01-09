import { Container,Text,Spinner } from "@chakra-ui/react"

// Container's
import ListItem from '../../containers/listitem/listitem'

export default function Content(){

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
            Export results

            {/* <center>
                <Spinner mt="5" size="xl" color="blue.300" />
            </center> */}
            </Text>
            <ListItem/>
        </Container>
    )
}