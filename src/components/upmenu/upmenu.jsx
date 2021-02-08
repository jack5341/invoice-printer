import { useState } from 'react'
import { Box, Container, IconButton, SlideFade, useColorMode } from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import readXlsxFile from 'read-excel-file'

// Containers
import Header from '../../containers/header/header'

export default function Upmenu(props) {

    let fileReader;
    const [hide, setHide] = useState(true)
    const { colorMode } = useColorMode();
    
    const handleFileChosen = (file) => {

        if (!file) {
            alert("Upload one Excel or Csv File.")
            return null
        }

        const regex = /(xlsx|csv?)/gm
        const fileExtension = regex.exec(file.name)[0]

        if (fileExtension == null) {
            alert("Invalid File Extension.")
            return null
        }

        switch (fileExtension) {
            case "xlsx":
                props.setType("xlsx")
                readXlsxFile(file).then((rows) => {
                    props.setList(rows)
                })
                break;

            case "csv":
                props.setType("csv")
                fileReader = new FileReader();
                fileReader.onloadend = (e) => {
                    props.setList(fileReader.result.toString()
                    .split('\n')
                    .map(e => e.trim()) 
                    .map(e => e.split(',').map(e => e.trim())))
                };
                break;

            default:
                break;
        }
    };

    return (
        <Container maxW="xxl" centerContent>
            <Box padding="4" boxShadow={colorMode === "light" ? "md" : "none"} bg={colorMode === "light" ? "gray.100" : "none"} maxW="10xl">
                <SlideFade in={hide} offsetY="20px">
                    <div style={{ display: !hide ? "none" : "block" }}>
                        <Header />
                        <Box bg={colorMode === "light" ? "#2866ca38" : "#bee3f80a"} mt="4">
                            <center>
                                <form>
                                    <input name="document" onChange={e => handleFileChosen(e.target.files[0])} style={{ padding: "2.5rem" }} accept=".xlsx, .csv" type="file" />
                                </form>
                            </center>
                        </Box>
                    </div>
                </SlideFade>
                <center>
                    <IconButton
                        mt="3"
                        style={{ width: "100%" }}
                        onClick={() => setHide(!hide)}
                        icon={hide ? <ChevronUpIcon fontSize="6xl" /> : <ChevronDownIcon fontSize="6xl" />}
                    />
                </center>
            </Box>
        </Container>
    )
}