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
    SlideFade  
} from "@chakra-ui/react"

export default function ListItemContainer(props){
    return (
        <SlideFade in={true} initialScale={0.7} >
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
                                    <Td><Kbd>Example GmbH</Kbd></Td>
                                    <Td><Kbd>177 1777 177</Kbd></Td>
                                    <Td><Kbd>nedim.akar53411@gmail.com</Kbd></Td>
                                    <Td><Kbd>Apple</Kbd></Td>
                                    <Td><Kbd>500</Kbd></Td>
                                    <Td><Kbd>3000.00 €</Kbd></Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Box>
                </a>
            </Tooltip>
        </SlideFade>
    )
}