import {
    Th,
    Kbd
} from "@chakra-ui/react"

export default function ThSection(props) {
    return (
        <Th>
            <Kbd>
                {props.title}
            </Kbd>
        </Th>
    )
}