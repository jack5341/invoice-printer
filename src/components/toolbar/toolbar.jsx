import { Box, Text,useColorMode,Button } from "@chakra-ui/react";
import jwt from 'jsonwebtoken'

import './style.css'

// Containers
import Cards from '../../containers/toolbar/cards/cards'

export default function Toolbar() {

    const { colorMode, toggleColorMode } = useColorMode();
    const str = window.location.search
    const paramObject = jwt.decode(str.replace("?token=", ''))

    return (
        <Box id="toolbar" h="100%" p={2} color="white">
            <Text
                textAlign="center"
                bgGradient={colorMode == "light" ? "linear(to-l, #7928CA,#2866ca)" : "linear(to-l, white,white)"}
                bgClip="text"
                pt="5"
                fontWeight="black"
                fontSize="2xl"
            >
                Your Outputs
            </Text>            
            <hr/>
            {Object.values(paramObject).map((element, index) => <Cards key={index} index={index} title={element} />)}
            <hr/>
            <br/>
            <center>
                <Button 
                    onClick={() => toggleColorMode()}
                    bgGradient={colorMode == "light" ? "linear(to-l, #7928CA,#2866ca)" : "linear(to-l, white,white)"}
                    bgClip="text"
                    _hover="none"
                    _active="none"
                >
                    {colorMode == "light" ? "Light Mode ☀️" : "Dark Mode 🌙"}
                </Button>
            </center>
        </Box>
    )
}