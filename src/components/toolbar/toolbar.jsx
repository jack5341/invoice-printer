import { Box } from "@chakra-ui/react";
import jwt from 'jsonwebtoken'

import './style.css'

// Containers
import Cards from '../../containers/toolbar/cards/cards'

export default function Toolbar() {

    const str = window.location.search
    const paramObject = jwt.decode(str.replace("?token=", ''))

    return (
        <Box id="toolbar" bg="#2866ca38" h="100%" p={2} color="white">
            {Object.values(paramObject).map((element,index) => <Cards key={index} index={index} title={element} />)}
        </Box>
    )
}