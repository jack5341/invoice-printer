import {
  Container,
  Box,
  Editable,
  EditablePreview,
  EditableInput,
  Tooltip,
  SimpleGrid,
  AlertDescription,
  Alert,
  AlertTitle,
  CloseButton,
  Image,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

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
          onClick={() =>
            (document.querySelector(".alert").style = "display:none")
          }
          position="absolute"
          right="8px"
          top="8px"
        />
      </Alert>
      <Box padding="3rem" background="white" width="21cm" height="29.7cm">
        <SimpleGrid columns={2} spacing={10}>
          <Box>
            <Editable
              fontSize="4xl"
              fontWeight="bolder"
              pl="2"
              color="black"
              defaultValue="Take some chakra"
            >
              <Tooltip hasArrow label="Example LLC" bg="gray.300" color="black">
                <EditablePreview />
              </Tooltip>
              <EditableInput />
            </Editable>
            <Editable
              mt="5"
              pl="2"
              fontSize="xl"
              marginTop="0"
              borderRadius="0.5rem"
              color="black"
              defaultValue="Take some chakra"
            >
              <Tooltip
                hasArrow
                label="Company Slogan"
                bg="gray.300"
                color="black"
              >
                <EditablePreview />
              </Tooltip>
              <EditableInput />
            </Editable>
          </Box>
          <Box>
            <Image
              src="https://logosmarken.com/wp-content/uploads/2020/04/Huawei-Logo.png"
              width="100%"
            />
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
}
