import { Container,Text,Spinner } from "@chakra-ui/react"

// Container's
import ListItem from '../../containers/listitem/listitem'

export default function Content(props){

    function isLoad(){
        if(props.loadState == true){
            return (
                <center>
                    <Spinner mt="12" size="xl" color="blue.300" />
                </center>
            )
        }
        if(props.loadState == false){
            return (
                <>
                <Text
                    mt="5"
                    textAlign="center"
                    bgGradient="linear(to-l, #7928CA,#2866ca)"
                    bgClip="text"
                    fontSize="4xl"
                    fontWeight="extrabold"
                    >
                    Export results

                </Text>
                <ListItem/>
                </>
            )
        }else{
            return null
        }
    }

    return (
        <Container maxW="container.md">
            {isLoad()}
        </Container>
    )
}