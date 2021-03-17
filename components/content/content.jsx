import {
  Box,
  Flex,
  useToast,
  Icon,
  Button,
  Spacer
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons"
import { useMediaQuery } from "react-responsive";

export default function Content() {
  // const { colorMode } = useColorMode();
  const isMobile = useMediaQuery({ query: "(max-width: 580px)" });
  const toast = useToast();

  function parseFile(file) {
    if (!file) {
      toast({
        title: "File upload failed",
        status: "warning",
        position: "top-left",
        isClosable: true,
      });
    }
  }

  const CircleIcon = (props) => (
    <Icon viewBox="0 0 200 200" {...props}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );

  return (
    <Box padding="1.5rem" paddingTop="0px">
      <Box padding={isMobile ? "0.5rem" : "1rem"} borderRadius="0.5rem" border="2px solid gray">
        <Flex>
          <Box>
            <CircleIcon boxSize={isMobile ? 8 : 10} color="red.400" />
          </Box>
          <Spacer />
          <Box>
            <Button _focus="none" leftIcon={<DownloadIcon />} size={isMobile ? "sm" : "md"} colorScheme="green">
              Upload Your File
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
