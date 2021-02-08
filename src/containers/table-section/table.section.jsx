import {
    Box,
    Tooltip,
    Table,
    TableCaption,
    Thead,
    Tbody,
    useColorMode
} from "@chakra-ui/react"
import jwt from 'jsonwebtoken'

// Containers
import ThSection from '../th-section/th.section'
import TdSection from '../td-section/td.section'

export default function TableSection(props) {
    const { colorMode } = useColorMode();

    return (
        <Tooltip hasArrow label="Click for Edit !" placement="top">
            <a target="_blank" rel="noreferrer" href={"/invoice-edit/?token=" + jwt.sign(props.namesCol.reduce((acc, val, ind) => {
            acc[val] = props.output[ind];
            return acc;
         }, {}), "shhhhh")}>
            <Box style={{ overflowX: "auto" }} boxShadow="xl" mt="5" mb="5" bg={colorMode === "light" ? "#2866ca38" : "#bee3f80a"}>
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