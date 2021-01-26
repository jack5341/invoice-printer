import { useState, useEffect } from 'react'
import {
    Box,
    Table,
    TableCaption,
    Thead,
    Tr,
    Td,
    Th,
    Icon,
    Tbody,
    Select
} from "@chakra-ui/react"
import { PlusSquareIcon } from '@chakra-ui/icons'
import { v4 as uuidv4 } from 'uuid'

// Components
import ThSection from './th-section/th.section'
import TdSection from './td-section/td.section'

// Styles
import "./style.css"

export default function TemplateItem() {

    const [uniqueId, setUniqueId] = useState(null)

    useEffect(() => {
        if (uniqueId) {
            document.getElementById(uniqueId).remove()
            document.getElementById(uniqueId).remove()
        }
    }, [uniqueId])

    const [thList, setThList] = useState({
        th: [<ThSection setUniqueId={setUniqueId} />, <ThSection setUniqueId={setUniqueId} />],
        td: [<TdSection title="hello world"/>,
        <Td>
            {"Example"}
            <Select border="0px">
                <option value="option1">€</option>
                <option value="option2">$</option>
            </Select>
        </Td>]
    })
    
    function addNewList(){
        const uniqueToken = uuidv4()
        setThList({
            th: [...thList.th, <ThSection uniqueId={uniqueToken} setUniqueId={setUniqueId} />],
            td: [...thList.td, <TdSection uniqueId={uniqueToken} title="hello world" id={uniqueToken} />]
        })
    } 

    return (
        <a>
            <Box style={{ overflowX: "auto" }} boxShadow="outline" mt="5" mb="5" bg="#2866ca38">
                <Table variant="simple">
                    <TableCaption>Invoice for {"Example"}</TableCaption>
                    <Thead>
                        <Tr>
                            {thList.th.map((element) => element)}
                            <Th>
                                <a className="icons" onClick={addNewList} href="#">
                                    <Icon fontSize="2xl" as={PlusSquareIcon} mb="2" />
                                </a>
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            {thList.td.map((element, key) => element)}
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
        </a>
    )
}