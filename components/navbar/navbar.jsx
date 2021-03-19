import {
  Box,
  Text,
  Button,
  useColorMode,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "react-responsive";

import FeatureModal from "./feature-modal/feature.modal";
import Alert from "./alert/alert";


export default function Navbar(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isMobile = useMediaQuery({ query: "(max-width: 580px)" });


  return (
    <Box
      padding="1.5rem"
      paddingBottom="0.5rem"
      paddingTop="0.5rem"
      background="none"
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
          <FeatureModal version={props.version} logs={props.logs} colorMode={colorMode} />
          <Spacer />
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
          You can only upload{" "}
          <span
            style={{ color: colorMode === "light" ? "#107c41" : "#2ed077" }}
          >
            .XLSX
          </span>{" "}
          and{" "}
          <span style={{ color: colorMode === "light" ? "blue" : "#64c5ff" }}>
            .CSV
          </span>
          . After upload process you will see boxes then choose a box and go to
          editor.
        </Text>
      </Box>
      <Alert colorMode={colorMode} />
    </Box>
  );
}
