import { Box,
    Tooltip,
    Table,
    TableCaption,
    Thead,
    Tr,
    Td,
    Tbody,
    Th,
    Kbd,
    ScaleFade
} from "@chakra-ui/react"

export default function ListItemContainer(props){
    return (
        <ScaleFade in={true} initialScale={0.9} >
            <Tooltip hasArrow label="Click for print !" placement="top">
                <a href="javascript:void(0)">
                    <Box style={{overflowX: "auto"}} boxShadow="outline" mt="5" mb="5" bg="#2866ca38">
                        <Table variant="simple">
                            <TableCaption>Invoice for Example GmbH </TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Company</Th>
                                    <Th>Phone Number</Th>
                                    <Th>Email</Th>
                                    <Th>Product</Th>
                                    <Th>Piece</Th>
                                    <Th>Price</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td> Example Gmbh </Td>
                                    <Td><Kbd> 177 1777 177</Kbd></Td>
                                    <Td> nedim.akar53411@gmail.com </Td>
                                    <Td> Apple </Td>
                                    <Td> 500 </Td>
                                    <Td> 3000.00 € </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Box>
                </a>
            </Tooltip>
        </ScaleFade>
    )
}