import {useState} from 'react'
import {
    Th,
    Kbd,
    Icon,
    Editable,
    EditableInput,
    EditablePreview,
} from "@chakra-ui/react"
import { CloseIcon } from '@chakra-ui/icons'

export default function ThSection(props) {

    return (
        <Th id={props.uniqueId}>
            <a className="icons" onClick={(e) => {
                e.preventDefault()
                props.setUniqueId(props.uniqueId)
            }} href="#"><Icon as={CloseIcon} mb="2" />
            </a>
            <Editable defaultValue="Enter a title">
                <Kbd>
                    <EditablePreview />
                </Kbd>
                <EditableInput onChange={(e) => console.log(e.target.value)}/>
            </Editable>
        </Th>
    )
}