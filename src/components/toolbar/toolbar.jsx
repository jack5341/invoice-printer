import {useState} from 'react'
import { Box, Text, useColorMode, Button } from "@chakra-ui/react";
import jwt from 'jsonwebtoken'
import axios from 'axios'

// Containers
import Cards from '../../containers/toolbar/cards/cards'

export default function Toolbar() {

    const [disable,setDisable] = useState(false)
    const { colorMode, toggleColorMode } = useColorMode();
    const str = window.location.search
    const paramObject = jwt.decode(str.replace("?token=", ''))

    return (
        <Box id="toolbar" style={{overflowX: "auto"}} h="100%" p={2} color="white">
            <Text
                textAlign="center"
                bgGradient={colorMode === "light" ? "linear(to-l, #7928CA,#2866ca)" : "linear(to-l, white,white)"}
                bgClip="text"
                pt="5"
                fontWeight="black"
                fontSize="2xl"
            >
                Your Outputs
            </Text>
            <hr />
            {Object.values(paramObject).map((element, index) => <Cards key={index} index={index} title={element} />)}
            <center>
                <Button
                    onClick={(e) => {
                        axios({
                            method: "post",
                            url: "http://127.0.0.1:8080/layout/invoice", 
                            data: {
                                token: window.localStorage.getItem("invoice-token")
                            }
                        })
                        setDisable(true)
                    }}
                    disabled={disable}
                    background="#5ba2e6"
                    mb="3"
                    width="90%"
                >
                    Print this page
                </Button>
            </center>
            <hr />
            <br />
            <center>
                <Button
                    onClick={() => toggleColorMode()}
                    bgGradient={colorMode === "light" ? "linear(to-l, #7928CA,#2866ca)" : "linear(to-l, white,white)"}
                    bgClip="text"
                    mb="5"
                    _hover="none"
                    _active="none"
                >
                    {colorMode === "light" ? "Light Mode ☀️" : "Dark Mode 🌙"}
                </Button>
            </center>
        </Box>
    )
}