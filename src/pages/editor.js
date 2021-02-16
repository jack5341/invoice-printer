import { useState,useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Container, Grid, GridItem, Box, Center } from '@chakra-ui/react'
import Helmet from 'react-helmet'

// Components 
import Toolbar from '../components/toolbar/toolbar'
import A4 from '../components/a4/a4'
import A4Print from '../components/a4-print/a4.print'

export default function Editor() {

    const [print,setPrint] = useState(false)
    var isTablet = useMediaQuery({ query: '(max-width: 1100px)' })
    var isPrint = useMediaQuery({ print: true })

    useEffect(() => {
        if(print){
            setTimeout(() => {
                window.print()
                setPrint(false)
            }, window.onload);
        }
        return null
    },[print])

    return (
        <>
            <Helmet>
                <title>Invoice Editor ⚙️</title>
            </Helmet>
            <Box className="pdf-page">
                <Box display={isPrint ? "none" : "block"} className="pdf-edit">
                    <Container pl="0" pr="0" maxW="7xl">
                        <Grid
                            h="200px"
                            templateRows="repeat(2, 1fr)"
                            templateColumns="repeat(5, 1fr)"
                            gap={4}
                        >
                            <GridItem colSpan={1} >
                                <Toolbar setPrint={setPrint} />
                            </GridItem>
                            <GridItem colSpan={isTablet ? 12 : 4}>
                                <A4 />
                            </GridItem>
                        </Grid>
                    </Container>
                </Box>
                <Box display={isPrint ? "block" : "none"} className="pdf-print">
                    <Center>
                        <A4Print />
                    </Center>
                </Box>
            </Box>
        </>
    )
}