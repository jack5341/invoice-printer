import {
    Box,
    SlideFade,
    Editable,
    EditableInput,
    EditablePreview,
    Flex
} from '@chakra-ui/react'

import './style.css'

export default function A4() {
    return (
        <center>
            <SlideFade in={true} initialScale={0.9}>
                <Box shadow="xl" mt="12" mb="12" p="12" border="2px" borderColor="gray.200" bg="whitesmoke" id="a4-paper">
                    <Box id="brand-name" pl="12">
                        <Editable className="brand" defaultValue={window.localStorage.getItem("company_name")}>
                            <EditablePreview />
                            <EditableInput />
                        </Editable>
                        <Editable className="slogan" defaultValue={"Company Slogan Here"}>
                            <EditablePreview />
                            <EditableInput />
                        </Editable>
                    </Box>
                    <Box id="brand-infos" mt="12">
                        <Flex>
                            <Box flex="1" pl="12" className="left-side">
                                <u>
                                    <Editable className="author-company-infos" defaultValue={"Company Name" + "/" + "Company Street" + "/" + "Company Location"}>
                                        <EditablePreview />
                                        <EditableInput />
                                    </Editable>
                                </u>
                                <br />
                                <Editable defaultValue={window.localStorage.getItem("company_name")}>
                                    <EditablePreview />
                                    <EditableInput />
                                </Editable>
                                <Editable defaultValue={"Mr/Mrs Company Owner Name"}>
                                    <EditablePreview />
                                    <EditableInput />
                                </Editable>
                                <Editable defaultValue={"Company Location"}>
                                    <EditablePreview />
                                    <EditableInput />
                                </Editable>
                            </Box>
                            <Box flex="1" pr="12" className="right-side">
                                <strong>
                                    <Editable defaultValue={window.localStorage.getItem("company_name")}>
                                        <EditablePreview />
                                        <EditableInput />
                                    </Editable>
                                </strong>
                                <Editable defaultValue={"Mr/Mrs Company Owner Name"}>
                                    <EditablePreview />
                                    <EditableInput />
                                </Editable>
                                <Editable defaultValue={"Company Location"}>
                                    <EditablePreview />
                                    <EditableInput />
                                </Editable>
                                <br />
                                <Editable defaultValue={"Tel:" + "144 4444 444"}>
                                    <EditablePreview />
                                    <EditableInput />
                                </Editable>
                                <Editable defaultValue={"E-Mail:" + "template@mail.com"}>
                                    <EditablePreview />
                                    <EditableInput />
                                </Editable>
                                <Editable defaultValue={"Internet:" + "www.domain.com"}>
                                    <EditablePreview />
                                    <EditableInput />
                                </Editable>
                            </Box>
                        </Flex>
                        <Flex mt="12">
                            <Box flex="1" pl="12" className="left-side">
                                <strong>
                                    <Editable fontSize="4xl" defaultValue={"Invoice"}>
                                        <EditablePreview />
                                        <EditableInput />
                                    </Editable><br />
                                    <Editable defaultValue={"Invoice Nr. " + "4444-44444"}>
                                        <EditablePreview />
                                        <EditableInput />
                                    </Editable>
                                </strong>
                                <Editable fontSize="sm" defaultValue={"Note for invoice paper"}>
                                    <EditablePreview />
                                    <EditableInput />
                                </Editable>
                            </Box>
                            <Box flex="1" mt="2" pr="12" className="right-side">
                                <Editable defaultValue={"Invoice Date: " + Date.now()}>
                                    <EditablePreview />
                                    <EditableInput />
                                </Editable>
                                <Editable defaultValue={"Customer Nr. " + 1234}>
                                    <EditablePreview />
                                    <EditableInput />
                                </Editable>
                            </Box>
                        </Flex>
                    </Box>
                    <br />
                    <hr />
                </Box>
            </SlideFade>
        </center>
    )
}