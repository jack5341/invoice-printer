import {
  Box,
  Text,
  Button,
  useColorMode,
  Flex,
  Spacer,
  useDisclosure
} from "@chakra-ui/react";
import { DeleteIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useMediaQuery } from 'react-responsive'

import FeatureModal from "./feature-modal/feature.modal"

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isMobile = useMediaQuery({ query: '(max-width: 580px)' })
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      padding="1.5rem"
      background={colorMode === "light" ? "white" : "#107c41"}
      borderBottomRadius="1rem"
    >
      <Box>
        <Flex>
          <Button
            _hover="none"
            _active="none"
            _focus="none"
            marginRight="1"
            background="none"
            color={colorMode === "light" ? "#107c41" : "white"}
            onClick={() => toggleColorMode()}
          >
            {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
          </Button>
          <Button
            letterSpacing="2px"
            _hover="none"
            _active="none"
            _focus="none"
            onClick={onOpen}
            background="none"
            color={colorMode === "light" ? "#107c41" : "white"}
            size="md"
          >
            v1.1
          </Button>
          <FeatureModal colorMode={colorMode} isOpen={isOpen} onClose={onClose} />
          <Spacer />
          <Button
            background="none"
            color={colorMode === "light" ? "#107c41" : "white"}
            onClick={() => window.location.reload()}
            _hover="none"
            _active="none"
            _focus="none"
            fontSize={isMobile ? "xs" : "md"}
            leftIcon={<DeleteIcon />}
            size="md"
          >
            Refresh
          </Button>
        </Flex>
      </Box>
      <Box>
        <Text
          fontSize={isMobile ? "2rem" : "6xl"}
          color={colorMode === "light" ? "#107c41" : "white"}
          fontWeight="bold"
        >
          Invoice Printer
        </Text>
        <Text fontSize={isMobile ? "0.7rem" : "lg"}>
          You can only upload <span style={{color: colorMode === "light" ? "#107c41" : "#2ed077"}}>XLSX(Excel)</span> and <span style={{color: colorMode === "light" ? "blue" : "#64c5ff" }}>CSV(Comma-Separated Values)</span>.After
          upload process you will see boxes then choose a box and go to editor.
        </Text>
      </Box>
    </Box>
  );
}
