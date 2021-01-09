import {useState} from 'react'
import { Box,Container,IconButton,ScaleFade } from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

// Containers
import Header from '../../containers/header/header'
import SwitchContainer from '../../containers/switch/switch'

export default function Upmenu(){

    const [hide,setHide] = useState(true)

    return (
        <Container maxW="xl" centerContent>
            <Box padding="4" bg="gray.100" maxW="10xl">
                <ScaleFade in={hide} initialScale={0.9} >
                    <div style={{display: hide == false ? "none" : "block"}}>
                        <SwitchContainer/>
                        <Header/>
                        <Box bg="#2866ca38" mt="4" boxShadow="outline">
                            <center>
                                <input style={{padding: "2.5rem"}} accept=".pdf, .docx , .xls" type="file" />
                            </center>
                        </Box>
                    </div>            
                </ScaleFade >
                <center>
                    <IconButton
                    mt="3"
                    onClick={() => setHide(!hide)}
                    icon={hide == true ? <ChevronDownIcon fontSize="6xl"/> : <ChevronUpIcon fontSize="6xl"/>}
                    />
                </center>
            </Box>
        </Container>
    )
}