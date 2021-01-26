import { Td } from "@chakra-ui/react"

export default function TdSection(props){
    return (
        <Td id={props.id}>{props.title}</Td>
    )
}