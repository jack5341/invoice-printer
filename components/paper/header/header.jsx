import {
  Editable,
  EditablePreview,
  EditableInput,
  SimpleGrid,
  Box,
  Image,
} from "@chakra-ui/react";
import { useState,useEffect } from "react"

export default function Header() {
  const [logo,setLogo] = useState(null)
  useEffect(() => setLogo(window.localStorage.getItem("company_logo")),[])

  return (
    <>
      <SimpleGrid columns={2}>
        <Box>
          <Editable
            color="black"
            fontSize="4xl"
            fontWeight="bold"
            defaultValue="Company Name"
          >
            <EditablePreview />
            <EditableInput />
          </Editable>
          <Editable
            color="black"
            fontSize="xl"
            defaultValue="Company Slogan is Here"
          >
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Box>
        <Box>
          <Image
            float="right"
            height="120px"
            width="120px"
            src={logo}
          />
        </Box>
      </SimpleGrid>
    </>
  );
}
