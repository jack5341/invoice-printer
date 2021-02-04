import { Center, Text, ScaleFade, useColorMode} from "@chakra-ui/react"

export default function Card(props) {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <ScaleFade initialScale={0.9} in={true}>
            <Center borderRadius="xl" shadow="md" bg={colorMode == "light" ? "#5ba2e6" : "#bee3f80a"} m={3} p={4}>
                <Text>
                    {props.title} 
                </Text>
            </Center>
        </ScaleFade>
    )
}