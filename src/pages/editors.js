import {
  Container,
  Box,
  SimpleGrid,
  AlertDescription,
  Alert,
  AlertTitle,
  CloseButton,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

import A4Header from "../components/a4-paper/header/header"
import A4Body from "../components/a4-paper/body/body"
import A4Table from "../components/a4-paper/table/table"

export default function Editors() {
  return (
    <Container padding="2rem" maxW="4xl">
      <Alert className="alert" mb="5" width="21cm">
        <EditIcon mr="5" />
        <Box flex="1">
          <AlertTitle>Editable !</AlertTitle>
          <AlertDescription display="block">
            In A4 Paper everything is editable what you see,go then try it.
            <br />
            Your inputs will appear in tooltip while your mouse on over the
            text.
          </AlertDescription>
        </Box>
        <CloseButton
          onClick={() => document.querySelector(".alert").style = "display:none"}
          position="absolute"
          right="8px"
          top="8px"
        />
      </Alert>
      <Box color="black" padding="3rem" background="white" width="21cm" height="29.7cm">
        <SimpleGrid fontWeight="500" columns={2} spacing={10}>
          <A4Header/>
          <A4Body />
        </SimpleGrid>
        <A4Table />
      </Box>
    </Container>
  );
}
