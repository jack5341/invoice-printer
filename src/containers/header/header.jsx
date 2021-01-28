import { useState } from 'react'
import { Text,Box } from "@chakra-ui/react"

// Containers
import TemplateItem from '../../containers/template-item/templateitem'

export default function Header(){

    const [modal,setModal] = useState(false)

    return (
    <>
    {modal ? <TemplateItem/> : null}
        <a href="#" onClick={() => setModal(!modal)}>
            <Text 
            pl="3"
            bgGradient="linear(to-l, #7928CA,#2866ca)"
            fontSize="lg"
            bgClip="text">
                Set your template 🔨
            </Text>
        </a>
        <Text
        pl="3"
        bgGradient="linear(to-l, #7928CA,#2866ca)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        >
        Invoice Printer
        </Text>
        <Box boxShadow="sm" padding="4" bg="blue.100" maxW="3xl">
            There are many benefits to a joint design and development system. Not only
            does it bring benefits to the design team.
        </Box>
    </>
    )
}