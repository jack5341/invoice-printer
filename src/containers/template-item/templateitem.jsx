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
    Select,
    Button,
    Text
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
    const [typeMoney, setTypeMoney] = useState("€")
    const [load,setLoad] = useState(null)

    useEffect((e) => {
        if (uniqueId) {
            document.getElementById(uniqueId).remove()
            document.getElementById(uniqueId).remove()
        }
    }, [uniqueId])

    const [thList, setThList] = useState({
        th: [{
            element: <ThSection setUniqueId={setUniqueId} />
        },
        {
            element: <ThSection setUniqueId={setUniqueId} />
        }],
        td: [{ element: <TdSection title="hello world" /> },
        {
            element: <Td>
                {"Example"}
                <Select onChange={e => setTypeMoney(e.target.value)} border="0px">
                    <option value="€">€</option>
                    <option value="$">$</option>
                </Select>
            </Td>
        }]
    })

    function addNewList(e) {
        e.preventDefault()
        const uniqueToken = uuidv4()
        setThList({
            th: [...thList.th, {
                id: uniqueToken,
                element: <ThSection uniqueId={uniqueToken} setUniqueId={setUniqueId} />
            }],
            td: [...thList.td, {
                id: uniqueToken,
                element: <TdSection uniqueId={uniqueToken} title="hello world" id={uniqueToken} />
            }]
        })
    }

    return (
        <a>
            <Text
                pl="2"
                bgGradient="linear(to-l, #7928CA,#2866ca)"
                bgClip="text"
                fontSize="4xl"
                fontWeight="semibold"
            >
                Setting your outputs
            </Text>
            <Box style={{ overflowX: "auto" }} boxShadow="outline" mt="5" mb="5" bg="#2866ca38">
                <Table variant="simple">
                    <TableCaption>Invoice for {"Example"}</TableCaption>
                    <Thead>
                        <Tr>
                            {thList.th.map((x) => x.element)}
                            <Th>
                                <a className="icons" onClick={addNewList} href="#">
                                    <Icon fontSize="2xl" as={PlusSquareIcon} mb="2" />
                                </a>
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            {thList.td.map((x) => x.element)}
                        </Tr>
                    </Tbody>
                </Table>
            </Box>

            <Button
                id="save-btn"
                w="100%"
                mb="5"
                onClick={e => {
                    const btn = document.getElementById("save-btn")
                    btn.setAttribute("disabled", "")
                    btn.innerHTML = "Your settings are saving..."
                    setLoad(true)
                }}
                colorScheme="blue"
                size="lg"
                borderRadius="md"
                colorScheme="blue"
            >
                Save this template
            </Button>
        </a>
    )
}