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
                <a href="#">
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
                                    <Td><Kbd>{props.company}</Kbd></Td>
                                    <Td><Kbd>{props.phone}</Kbd></Td>
                                    <Td><Kbd>{props.email}</Kbd></Td>
                                    <Td><Kbd>{props.product}</Kbd></Td>
                                    <Td><Kbd>{props.piece}</Kbd></Td>
                                    <Td><Kbd>{props.price} €</Kbd></Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Box>
                </a>
            </Tooltip>
        </SlideFade>
    )
}