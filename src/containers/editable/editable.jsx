import {
    Editable,
    EditableInput,
    EditablePreview,
} from '@chakra-ui/react'

export default function EditableBox(props) {

    return (
        <Editable fontSize={props.fontsize} className={props.class} defaultValue={props.title}>
            <EditablePreview />
            <EditableInput />
        </Editable>
    )
}