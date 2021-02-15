import { useMediaQuery } from 'react-responsive'
import { Container,Grid,GridItem } from '@chakra-ui/react'
import Helmet from 'react-helmet'
import { DndContext } from '@dnd-kit/core';

// Components 
import Toolbar from '../components/toolbar/toolbar'
import A4 from '../components/a4/a4'

export default function Editor() {

    var isTablet = useMediaQuery({ query: '(max-width: 1100px)'})

    return (
        <>
            <Helmet>
                <title>Invoice Editor ⚙️</title>
            </Helmet>
            <DndContext>
                <Container pl="0" pr="0" maxW="7xl">
                    <Grid
                        h="200px"
                        templateRows="repeat(2, 1fr)"
                        templateColumns="repeat(5, 1fr)"
                        gap={4}
                    >
                        <GridItem colSpan={1} >
                            <Toolbar />
                        </GridItem>
                        <GridItem colSpan={isTablet ? 12 : 4}>
                            <A4 />
                        </GridItem>
                    </Grid>
                </Container>
            </DndContext>
        </>
    )
}