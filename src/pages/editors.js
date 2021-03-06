import {
  Container,
  Box,
  SimpleGrid,
  AlertDescription,
  Alert,
  AlertTitle,
  CloseButton,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { EditIcon } from "@chakra-ui/icons";
import jwt from "jsonwebtoken";

import A4Header from "../components/a4-paper/header/header";
import A4Body from "../components/a4-paper/body/body";
import A4Table from "../components/a4-paper/table/table";

export default function Editors() {
  const { colorMode } = useColorMode();

  const queryObject = jwt.decode(window.location.search.replace("?token=", ""));
  const localSettings = jwt.decode(
    window.localStorage.getItem("configuration_settings")
  );

  if (queryObject) {
    return (
      <Container className="editor" padding="2rem" maxW="4xl">
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
            onClick={() =>
              (document.querySelector(".alert").style = "display:none")
            }
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
        <Box
          color="black"
          padding="3rem"
          background={colorMode === "light" ? "whitesmoke" : "white"}
          width="21cm"
          height="29cm"
        >
          <SimpleGrid fontWeight="500" columns={2} spacing={10}>
            <A4Header local={localSettings} query={queryObject} />
            <A4Body local={localSettings} query={queryObject} />
          </SimpleGrid>
          <A4Table local={localSettings} query={queryObject} />
        </Box>
        <Button
          className="print-btn"
          onClick={() => window.print()}
          _hover="none"
          _focus="none"
          shadow="lg"
          position="fixed"
          bottom="5px"
          margin="4rem"
          rightIcon={<ArrowForwardIcon />}
          background="blue.300"
          size="lg"
        >
          Print
        </Button>
      </Container>
    );
  }

  return null;
}
