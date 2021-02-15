import { useState } from 'react'
import { Box, Text, useColorMode, Button, UnorderedList, ListItem } from "@chakra-ui/react"
import jwt from 'jsonwebtoken'
import axios from 'axios'
import { useMediaQuery } from 'react-responsive'

// Containers
import Cards from '../../containers/toolbar/cards/cards'

export default function Toolbar() {

    const [disable, setDisable] = useState(false)
    const { colorMode, toggleColorMode } = useColorMode();
    const str = window.location.search
    const paramObject = jwt.decode(str.replace("?token=", ''))

    const isTablet = useMediaQuery({ query: '(max-width: 1100px)'})

    function sendToApiToken(e){
        e.preventDefault()
        axios({
            method: "post",
            url: "https://invoice-printer-fastify.herokuapp.com/print/invoice/",
            data: {
                token: window.localStorage.getItem("invoice-token")
            }
        }).then(res => {
            if (res.data) {
                var a = document.createElement("a")
                a.href = "data:application/pdf;base64," + res.data.file
                a.download = res.data.fileName + ".pdf"
                a.click();
                return setDisable(false)
            }
            return alert("Somethings were wrong..")
        })
        setDisable(true)
    }

    return (
        <Box id="toolbar" shadow="lg" style={{ overflowX: "auto",position: 'fixed' }} background={colorMode === "light" ? "white" : "#1a202c"} h="100%" p={2} color="white">
            <Text
                textAlign="center"
                bgGradient={colorMode === "light" ? "linear(to-l, #7928CA,#2866ca)" : "linear(to-l, white,white)"}
                bgClip="text"
                display={isTablet ? "none" : "block"}
                pt="5"
                fontWeight="black"
                fontSize="2xl"
            >
                Your Outputs
            </Text>
            <hr style={{display: isTablet ? "none" : "block"}} />
            <UnorderedList ml="0">
                {Object.values(paramObject).map((element, index) => <ListItem listStyleType="none"><Cards key={index} index={index} title={element} /></ListItem>)}
            </UnorderedList>
            <center>
                <Button
                    onClick={sendToApiToken}
                    isLoading={disable}
                    loadingText="Printing"
                    background="#5ba2e6"
                    mb="3"
                    width="90%"
                >
                    Print this page
                </Button>
            </center>
            <hr />
            <center>
                <Button
                    onClick={() => toggleColorMode()}
                    bgGradient={colorMode === "light" ? "linear(to-l, #7928CA,#2866ca)" : "linear(to-l, white,white)"}
                    bgClip="text"
                    _hover="none"
                    _active="none"
                >
                    {colorMode === "light" ? "Light Mode ☀️" : "Dark Mode 🌙"}
                </Button>
            </center>
        </Box>
    )
}