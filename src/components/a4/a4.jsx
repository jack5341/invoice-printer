import {
    Box,
    SlideFade,
    Flex,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Text
} from '@chakra-ui/react'
import dayjs from 'dayjs'

// Container's
import EditableBox from '../../containers/editable/editable'

import './style.css'

export default function A4() {
    return (
        <center>
            <SlideFade in={true} initialScale={0.9}>
                <Box shadow="xl" mt="12" mb="12" p="12" border="2px" borderColor="gray.200" bg="whitesmoke" id="a4-paper">
                    <Box id="brand-name" pl="12">
                        <EditableBox class={"brand"} title={window.localStorage.getItem("company_name")} />
                        <EditableBox title={"Company slogan is here"} />
                    </Box>
                    <Box id="brand-infos" mt="12">
                        <Flex>
                            <Box flex="1" pl="12" className="left-side">
                                <u>
                                    <EditableBox class={"author-company-infos"} title={"Company Name" + " / " + "Company Street" + " / " + "Company Location"} />
                                </u>
                                <br />
                                <EditableBox title={window.localStorage.getItem("company_name")} />
                                <EditableBox title={"Mr/Mrs Company Owner Name"} />
                            </Box>
                            <Box flex="1" pr="12" className="right-side">
                                <strong>
                                    <EditableBox title={window.localStorage.getItem("company_name")} />
                                </strong>
                                <EditableBox title={"Mr/Mrs Company Owner Name"} />
                                <EditableBox title={"Company Location"} />
                                <br />
                                <EditableBox title={"Tel:" + "144 4444 444"} />
                                <EditableBox title={"E-Mail:" + "template@mail.com"} />
                                <EditableBox title={"Internet:" + "www.domain.com"} />
                            </Box>
                        </Flex>
                        <Flex mt="12">
                            <Box flex="1" pl="12" className="left-side">
                                <strong>
                                    <EditableBox fontsize={"4xl"} title={"Invoice"} />
                                    <EditableBox title={"Invoice Nr. " + "4444-44444"} />
                                </strong>
                                <EditableBox fontsize={"sm"} title={"Note for invoice paper"} />
                            </Box>
                            <Box flex="1" mt="2" pr="12" className="right-side">
                                <EditableBox title={"Invoice Date: " + dayjs().format('YYYY/MM/DD')} />
                                <EditableBox title={"Customer Nr. " + 1234} />
                            </Box>
                        </Flex>
                    </Box>
                    <br />
                    <hr />
                    <Table mt="12">
                        <TableCaption><EditableBox title={"Editing by Invoice Printer"} /></TableCaption>
                        <Thead>
                            <Tr>
                                <Th><EditableBox title={"Product"} /></Th>
                                <Th><EditableBox title={"Piece"} /></Th>
                                <Th isNumeric><EditableBox title={"Price " + "(€)"} /></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td><EditableBox title={"Samsung Galaxy S10"} /></Td>
                                <Td><EditableBox title={5} /></Td>
                                <Td isNumeric><EditableBox title={5000} /></Td>
                            </Tr>
                            <Tr>
                                <Td><EditableBox title={"Iphone XR"} /></Td>
                                <Td><EditableBox title={3} /></Td>
                                <Td isNumeric><EditableBox title={3000} /></Td>
                            </Tr>
                        </Tbody>
                        <Tbody>
                            <Tr>
                                <Td><EditableBox title={"Samsung Galaxy S10"} /></Td>
                                <Td><EditableBox title={5} /></Td>
                                <Td isNumeric><EditableBox title={5000} /></Td>
                            </Tr>
                            <Tr>
                                <Th><EditableBox title={"Taxes"} /></Th>
                                <Th><EditableBox title={"18% MwSt"} /></Th>
                                <Th isNumeric><EditableBox title={1500} /></Th>
                            </Tr>
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th><EditableBox title={"Result"} /></Th>
                                <Th><EditableBox title={""} /></Th>
                                <Th isNumeric><EditableBox title={13150} /></Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                    <Box className="a4-footer" pl="7" pr="7" textAlign="left">
                        <EditableBox title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                        <br/>
                        <EditableBox title={"This invoice generated by Invoice Printer"} />
                    </Box>
                </Box>
            </SlideFade>
        </center>
    )
}