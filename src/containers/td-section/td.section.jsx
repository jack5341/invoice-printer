import { Td,Kbd } from "@chakra-ui/react"

export default function TdSection(props) {
    return (
        <Td><Kbd>{props.output}</Kbd></Td>
    )
}