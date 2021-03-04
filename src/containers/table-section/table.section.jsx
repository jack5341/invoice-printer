import {
    Box,
    Tooltip,
    Table,
    TableCaption,
    Thead,
    Tbody,
    Tr,
    useColorMode
} from "@chakra-ui/react"
import jwt from 'jsonwebtoken'

// Containers
import ThSection from './th-section/th.section'
import TdSection from './td-section/td.section'

export default function TableSection(props) {
    const { colorMode } = useColorMode();
    const companyName = (jwt.decode(window.localStorage.getItem("configuration_settings"))).name

    return (
        <Tooltip hasArrow label="Click for Edit !" placement="top">
            <a target="_blank" rel="noreferrer" href={"/edit/?token=" + jwt.sign(props.namesCol.reduce((acc, val, ind) => {
            acc[val] = props.output[ind];
            return acc;
         }, {}), "shhhhh")}>
            <Box style={{ overflowX: "auto" }} boxShadow="xl" mt="5" mb="5" bg={colorMode === "light" ? "#2866ca38" : "#bee3f80a"}>
                <Table variant="simple">
                    <TableCaption>Invoice for {companyName ? companyName : "Undefined"} </TableCaption>
                        <Thead>
                            <Tr>
                                {props.title.map((element, key) => <ThSection title={element} key={key} />)}
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                {props.output.map((element, index) => <TdSection key={index} output={element} />)}
                            </Tr>
                        </Tbody>
                </Table>
            </Box>
            </a>
        </Tooltip>
    )
}