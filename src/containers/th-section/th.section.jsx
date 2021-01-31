import {
    Th,
    Kbd,
    Editable,
    EditableInput,
    EditablePreview,
} from "@chakra-ui/react"

export default function ThSection(props) {
    return (
        <Th>
            <Editable defaultValue={props.title}>
                <Kbd>
                    <EditablePreview />
                    <EditableInput/>
                </Kbd>
            </Editable>
        </Th>
    )
}