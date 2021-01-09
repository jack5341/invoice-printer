import { Container,Text,Spinner } from "@chakra-ui/react"

// Container's
import ListItem from '../../containers/listitem/listitem'

export default function Content(){
    return (
        <Container maxW="container.md">
            {/* <center>
                <Spinner size="xl" color="blue.300" />
            </center> */}
            <Text
            mt="5"
            textAlign="center"
            bgGradient="linear(to-l, #7928CA,#2866ca)"
            bgClip="text"
            fontSize="4xl"
            fontWeight="extrabold"
            >
            Export result
            </Text>
            <ListItem/>
        </Container>
    )
}