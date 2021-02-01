import { Container,Grid,GridItem } from '@chakra-ui/react'
import Helmet from 'react-helmet'
import { DndContext } from '@dnd-kit/core';

// Components 
import Toolbar from '../components/toolbar/toolbar'
import A4 from '../components/a4/a4'

export default function Editor() {
    return (
        <>
            <Helmet>
                <title>Invoice Editor ⚙️</title>
            </Helmet>
            <DndContext>
                <Container maxW="7xl">
                    <Grid
                        h="200px"
                        templateRows="repeat(2, 1fr)"
                        templateColumns="repeat(5, 1fr)"
                        gap={4}
                    >
                        <GridItem style={{position: "fixed",height: "100%"}} >
                            <Toolbar />
                        </GridItem>
                        <GridItem colSpan={1} />
                        <GridItem colSpan={4}>
                            <A4 />
                        </GridItem>
                    </Grid>
                </Container>
            </DndContext>
        </>
    )
}