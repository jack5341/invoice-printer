import {
    Box,
    Table,
    TableCaption,
    Thead,
    Tr,
    Td,
    Tbody,
    Th,
    Kbd,
    Icon,
    Editable,
    EditableInput,
    EditablePreview,
    Select
} from "@chakra-ui/react"
import { CloseIcon, PlusSquareIcon } from '@chakra-ui/icons'

// Styles
import "./style.css"

export default function TemplateItem() {
    return (
        <a>
            <Box style={{ overflowX: "auto" }} boxShadow="outline" mt="5" mb="5" bg="#2866ca38">
                <Table variant="simple">
                    <TableCaption>Invoice for {"Example"} </TableCaption>
                    <Thead>
                        <Tr>
                            <Th><a class="icons" style={{ padding: "5px" }} href="#"><Icon as={CloseIcon} /></a><br />
                                <Editable defaultValue="Enter a title">
                                    <Kbd>
                                        <EditablePreview />
                                    </Kbd>
                                    <EditableInput />
                                </Editable>
                            </Th>
                            <Th><a class="icons" style={{ padding: "5px" }} href="#"><Icon as={CloseIcon} /></a><br />
                                <Editable defaultValue="Enter a title">
                                    <Kbd>
                                        <EditablePreview />
                                    </Kbd>
                                    <EditableInput />
                                </Editable>
                            </Th>
                            <Th><a class="icons" style={{ padding: "5px" }} href="#"><Icon as={CloseIcon} /></a><br />
                                <Editable defaultValue="Enter a title">
                                    <Kbd>
                                        <EditablePreview />
                                    </Kbd>
                                    <EditableInput />
                                </Editable>
                            </Th>
                            <Th><a class="icons" style={{ padding: "5px" }} href="#"><Icon as={CloseIcon} /></a><br />
                                <Editable defaultValue="Enter a title">
                                    <Kbd>
                                        <EditablePreview />
                                    </Kbd>
                                    <EditableInput />
                                </Editable>
                            </Th>
                            <Th><a class="icons" style={{ padding: "5px" }} href="#"><Icon as={CloseIcon} /></a><br />
                                <Editable defaultValue="Enter a title">
                                    <Kbd>
                                        <EditablePreview />
                                    </Kbd>
                                    <EditableInput />
                                </Editable>
                            </Th>
                            <Th><a class="icons" style={{ padding: "5px" }} href="#"><Icon as={CloseIcon} /></a><br />
                                <Editable defaultValue="Enter a title ">
                                    <Kbd>
                                        <EditablePreview />
                                    </Kbd>
                                    <EditableInput />
                                </Editable>
                            </Th>

                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>{"Example"}</Td>
                            <Td>{"Example"}</Td>
                            <Td>{"Example"}</Td>
                            <Td>{"Example"}</Td>
                            <Td>{"Example"}</Td>
                            <Td>
                                {"Example"}
                                <Select border="0px">
                                    <option value="option1">€</option>
                                    <option value="option2">$</option>
                                </Select>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
        </a>
    )
}