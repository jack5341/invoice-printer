import {useState} from 'react'
import axios from 'axios'
import { Box,Container,IconButton,SlideFade  } from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

// Containers
import Header from '../../containers/header/header'
import SwitchContainer from '../../containers/switch/switch'

export default function Upmenu(){

    const [hide,setHide] = useState(true)
    const [file,setFile] = useState(null)

    function uploadFile(e){  
        var formData = new FormData()
        formData.append("document", e.target.files[0]);
        axios({
            method: "post",
            url: "http://localhost:8080/test",
            data: formData
        })
    }

    return (
        <Container maxW="xxl" centerContent>
            <Box padding="4" bg="gray.100" maxW="10xl">
            <SlideFade in={hide} offsetY="20px">
                <div style={{display: hide == false ? "none" : "block"}}>
                        <SwitchContainer/>
                        <Header/>
                        <Box bg="#2866ca38" mt="4" boxShadow="outline">
                            <center>
                                <form>
                                    <input name="document" onChange={uploadFile} style={{padding: "2.5rem"}} accept=".pdf, .docx, .xls" type="file" />
                                </form>
                            </center>
                        </Box>
                </div>            
            </SlideFade>
                <center>
                    <IconButton
                    mt="3"
                    onClick={() => setHide(!hide)}
                    icon={hide == true ? <ChevronUpIcon fontSize="6xl"/> : <ChevronDownIcon fontSize="6xl"/>}
                    />
                </center>
            </Box>
        </Container>
    )
}