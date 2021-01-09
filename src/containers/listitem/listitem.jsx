import { Box,Tooltip,Table,TableCaption,Thead,Tr,Td,Tbody,Th,Kbd } from "@chakra-ui/react"

export default function ListItemContainer(props){
    return (
        <Tooltip hasArrow label="Click for print !" placement="top">
            <a href="javascript:void(0)">
                <Box style={{overflowX: "auto"}} boxShadow="outline" mt="5" mb="5" bg="#2866ca38">
                    <Table variant="simple">
                        <TableCaption>Invoice for {props.company} </TableCaption>
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
                                <Td> {props.company} </Td>
                                <Td><Kbd>{props.phone}</Kbd></Td>
                                <Td> {props.email} </Td>
                                <Td> {props.product} </Td>
                                <Td> {props.piece} </Td>
                                <Td> {props.price} </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </a>
        </Tooltip>
    )
}