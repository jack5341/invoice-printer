import {
    Box,
    Tooltip,
    Table,
    TableCaption,
    Thead,
    Tbody
} from "@chakra-ui/react"
import jwt from 'jsonwebtoken'

// Containers
import ThSection from '../th-section/th.section'
import TdSection from '../td-section/td.section'

export default function TableSection(props) {
    return (
        <Tooltip hasArrow label="Click for Edit !" placement="top">
            <a target="_blank" href={"/invoice-edit/?token=" + jwt.sign(Object.assign({},props.output), 'shhhhh')}>
            <Box style={{ overflowX: "auto" }} boxShadow="outline" mt="5" mb="5" bg="#2866ca38">
                <Table variant="simple">
                    <TableCaption>Invoice for {window.localStorage.getItem("company_name")} </TableCaption>
                        <Thead>
                            {props.title.map((element, key) => <ThSection title={element} key={key} />)}
                        </Thead>
                        <Tbody>
                            {props.output.map((element, index) => <TdSection key={index} output={element} />)}
                        </Tbody>
                </Table>
            </Box>
            </a>
        </Tooltip>
    )
}