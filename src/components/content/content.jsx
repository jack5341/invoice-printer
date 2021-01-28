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

                {props.type === "xlsx" ?
                    props.list.map((x, index) => x[0] == undefined ? null : <ListItem
                        key={index}
                        company={x[0]}
                        phone={x[1]}
                        email={x[2]}
                        product={x[3]}
                        piece={x[4]}
                        price={x[5]}
                    />) : props.list.map((x, index) => x[0] == undefined ? null : <ListItem
                        key={index}
                        company={x[0]}
                        phone={x[1]}
                        email={x[2]}
                        product={x[3]}
                        piece={x[4]}
                        price={x[3]}
                    />)
                }
            </Container>
        )
    }

    return null
}
