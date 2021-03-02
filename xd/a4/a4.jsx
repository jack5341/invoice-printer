import {
    Box,
    SlideFade,
    Flex,
    Grid,
    GridItem,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react'
import dayjs from 'dayjs'
import jwt from 'jsonwebtoken'

// Container's
import EditableBox from '../../src/containers/editable/editable'

import './style.css'

export default function A4() {

    const str = window.location.search
    const decodedObject = jwt.decode(str.replace("?token=", ''))
    window.localStorage.setItem("invoice-token", str.replace("?token=", ''))

    return (
        <center>
            <SlideFade in={true} initialScale={0.9}>
                <Box shadow="xl" mt="12" mb="12" p="12" border="2px" borderColor="gray.200" bg="whitesmoke" id="a4-paper">
                    <Box id="brand-name" pl="12">
                        <EditableBox class="brand" title={window.localStorage.getItem("company_name") ? window.localStorage.getItem("company_name") : "Your Company Name"} />
                        <EditableBox class="slogan" title={window.localStorage.getItem("company_slogan") ? window.localStorage.getItem("company_slogan") : "Company Slogan is here"} />
                    </Box>
                    <Box id="brand-infos" mt="12">
                        <Flex>
                            <Box flex="1" pl="12" className="left-side">
                                <u>
                                    <EditableBox class={"author-company-infos"} title={"Company Name/Company Street/Company Location"} />
                                </u>
                                <br />
                                <EditableBox title={window.localStorage.getItem("company_name") ? window.localStorage.getItem("company_name") : "Your Company" } />
                                <EditableBox title={"Mr/Mrs Company Owner Name"} />
                            </Box>
                            <Box flex="1" pr="12" className="right-side">
                                <strong>
                                    <EditableBox title={ decodedObject.Company ? decodedObject.Company : "Firma Name" } />
                                </strong>
                                <EditableBox title={"Mr/Mrs Company Owner Name"} />
                                <EditableBox title={"Company Location"} />
                                <br />
                                <EditableBox title={ decodedObject["Phone Number"] ? "Tel: " + decodedObject["Phone Number"] : "Tel: 144 4444 444" } />
                                <EditableBox title={ decodedObject["E-Mail"] ? "Email: " + decodedObject["E-Mail"] : "E-Mail: Examplemail@here.com" } />
                                <EditableBox title={ decodedObject.Domain ? "Internet: " + decodedObject.Domain : "Internet: www.domain.com"} />
                            </Box>
                        </Flex>
                        <Flex mt="12">
                            <Box flex="1" pl="12" className="left-side">
                                <strong>
                                    <EditableBox className="subject" title={"Invoice"} />
                                    <EditableBox className="invoice-number" title={"Invoice Nr. 4444-44444"} />
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
                    <Table className="table" mt="12">
                        <Thead>
                            <Tr>
                                <Th><EditableBox title={"Product"} /></Th>
                                <Th><EditableBox title={"Piece"} /></Th>
                                <Th isNumeric><EditableBox title={"Price (€)"} /></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td><EditableBox title={ decodedObject.Product ? decodedObject.Product : "Product is here"} /></Td>
                                <Td><EditableBox title={ decodedObject.Piece ? decodedObject.Piece : "Piece is here" } /></Td>
                                <Td isNumeric><EditableBox title={ decodedObject.Price ? decodedObject.Price : "Price is here" } /></Td>
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
                                <Th><EditableBox title={"18% Tax"} /></Th>
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
                    <Box className="a4-footer" textAlign="left">
                        <EditableBox title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                        <br />
                        <EditableBox title={"This invoice generated by Invoice Printer"} />
                    </Box>
                    <Grid
                        className="a4-under"
                        borderTop="1px"
                        borderColor="black"
                        mt="12"
                        pl="7" pr="7"
                        textAlign="left"
                        templateColumns="repeat(4, 1fr)"
                        gap={4}
                    >
                        <GridItem colSpan={1}>
                            <EditableBox title={"Firma is here"} />
                            <EditableBox title={"Firma owner name is here"} />
                            <EditableBox title={"Firma is adress here"} />
                            <EditableBox title={"Firma is country here"} />
                        </GridItem>
                        <GridItem colSpan={1}>
                            <EditableBox title={"Firma is here"} />
                            <EditableBox title={"Firma owner name is here"} />
                            <EditableBox title={"Firma is adress here"} />
                            <EditableBox title={"Firma is country here"} />
                        </GridItem>
                        <GridItem colSpan={1}>
                            <EditableBox title={"IBAN: DE75512108001245126199"} />
                            <EditableBox title={"BIC:IPA-5858"} />
                        </GridItem>
                        <GridItem colSpan={1}>
                            <EditableBox title={"Firma is here"} />
                            <EditableBox title={"Firma owner name is here"} />
                            <EditableBox title={"Firma is adress here"} />
                            <EditableBox title={"Firma is country here"} />
                        </GridItem>
                    </Grid>
                </Box>
            </SlideFade>
        </center>
    )
}