import {
  Text,
  Box,
  useColorMode,
  Button,
  Link
} from "@chakra-ui/react";
import { DeleteIcon,MoonIcon,SunIcon } from "@chakra-ui/icons";

// Containers
import Feature from "../modal/feature/feature";
import ModalForm from "../modal/modal-form/modalform"

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Text
        bgGradient={
          colorMode === "light"
            ? "linear(to-l, #7928CA,#2866ca)"
            : "linear(to-l, white,white)"
        }
        bgClip="text"
      >
        <Button
          _hover="none"
          _active="none"
          marginRight="1"
          color={colorMode === "light" ? "blue.700" : "white"}
          onClick={() => toggleColorMode()}
        >
          {colorMode === "light" ? <SunIcon/> : <MoonIcon/>}
        </Button>
        <Feature/>
        <Button
          className="refresh-btn"
          float="right"
          leftIcon={<DeleteIcon />}
          colorScheme="messenger"
          variant="solid"
          color={colorMode === "light" ? "white" : "black"}
          onClick={() => window.location.reload()}
          bgGradient={
            colorMode === "light"
              ? "linear(to-l, #7928CA,#2866ca)"
              : "linear(to-l, white,white)"
          }
        >
          Refresh
        </Button>
      </Text>
      <Text
        pl="3"
        bgGradient={
          colorMode === "light"
            ? "linear(to-l, #7928CA,#2866ca)"
            : "linear(to-l, white,white)"
        }
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Invoice Printer
      </Text>
      <Box
        boxShadow="sm"
        padding="4"
        borderRadius="0.5rem"
        bg={colorMode === "light" ? "blue.100" : "#bee3f80a"}
        maxW="3xl"
      >
        <Box>
          <Text>
            You can only upload{" "}
            <Link color={colorMode === "light" ? "teal.600" : "teal.300"}>
              XLSX(Excel)
            </Link>{" "}
            and{" "}
            <Link color={colorMode === "light" ? "blue.500" : "blue.200"}>
              CSV(Comma-Separated Values)
            </Link>
            .After upload process you will see boxes then choose a box and go to
            editor.
            <br />
            <br />
          </Text>
          <ModalForm/>
        </Box>
      </Box>
    </>
  );
}
