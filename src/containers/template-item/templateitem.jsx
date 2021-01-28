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
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter
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
    const [hide, setHide] = useState(true)

    useEffect((e) => {
        if (uniqueId) {
            document.getElementById(uniqueId).remove()
            document.getElementById(uniqueId).remove()
        }
    }, [uniqueId])

    const [thList, setThList] = useState({
        th: [{
            element: <ThSection uniqueId={uuidv4()} />
        },
        {
            element: <ThSection uniqueId={uuidv4()} />
        }],
        td: [{ element: <TdSection title="hello world" /> },
        {
            element: <Td>
                {"Example"}
                <Select onChange={e => window.localStorage.setItem("list/" + uuidv4(),e.target.value) } border="0px">
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
        <>
            <Modal size="xl" onClose={!hide} isOpen={hide} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Text
                            pl="2"
                            bgGradient="linear(to-l, #7928CA,#2866ca)"
                            bgClip="text"
                            fontSize="2xl"
                            fontWeight="semibold"
                        >
                            Setting your outputs
                        </Text>
                    </ModalHeader>
                    <Box style={{ overflowX: "auto" }} mb="5" bg="#2866ca38">
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
                    <a onClick={e => {
                        setHide(false)
                        window.sessionStorage.setItem("show", true)
                    }} href="#">
                        <Text
                            pl="7"
                            bgGradient="linear(to-l, #7928CA,#2866ca)"
                            bgClip="text"
                            fontSize="sm"
                            fontWeight="semibold"
                        >
                            I don't need set my outputs
                        </Text>
                    </a>
                    <ModalFooter>
                        <Button
                            id="save-btn"
                            w="100%"
                            mb="5"
                            onClick={e => {
                                const btn = document.getElementById("save-btn")
                                btn.setAttribute("disabled", "")
                                btn.innerHTML = "Your settings are saving..."
                                window.sessionStorage.setItem("show", false)
                                setTimeout(() => setHide(false), 1000);
                            }}
                            colorScheme="blue"
                            size="lg"
                            borderRadius="md"
                            colorScheme="blue"
                        >
                            Save this template
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}