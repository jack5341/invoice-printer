import Link from "next/link";
import {
  Box,
  Center,
  Divider,
  Text,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  SunIcon,
  MoonIcon,
  AddIcon,
  MinusIcon,
  ArrowBackIcon,
} from "@chakra-ui/icons";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

import Header from "./header/header";
import Body from "./body/body";

import EmptyPage from "./second-page/second";

export default function Paper() {
  const [page, setPage] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  
  return (
    <>
      <Menu>
        <MenuButton
          display={isMobile ? "none" : "block"}
          position="absolute"
          as={IconButton}
          top="1rem"
          left="1rem"
          aria-label="Options"
          icon={<HamburgerIcon />}
          size="xs"
          variant="outline"
        />
        <MenuList borderRadius="0" border="0" borderTop="2px solid #107c41">
          <MenuItem
            onClick={() => setPage(!page)}
            icon={page ? <MinusIcon /> : <AddIcon />}
          >
            {" "}
            {page ? "Close Page" : "New Page"}
          </MenuItem>
          <Link href="/">
            <MenuItem icon={<ArrowBackIcon />}>Go Back</MenuItem>
          </Link>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          display={isMobile ? "none" : "block"}
          position="absolute"
          as={IconButton}
          top="1rem"
          left="3rem"
          onClick={toggleColorMode}
          aria-label="Options"
          icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
          size="xs"
          variant="outline"
        />
      </Menu>
      <Box
        display={isMobile ? "none" : "block"}
        width="21cm"
        shadow="2xl"
        minHeight="29.7cm"
        transform="scale(0.9)"
        background="white"
        padding="3rem"
      >
        <Header />
        <Body />
      </Box>
      {page ? <EmptyPage /> : null}
      <Center display={!isMobile ? "none" : "block"}>
        <Box>
          <img src="https://media.giphy.com/media/MQVjxVmQJ0sCVlaKgX/giphy.gif" />
          <Text
            margin="1rem"
            marginTop="1rem"
            textAlign="center"
            fontWeight="bold"
            fontSize="2xl"
          >
            I am currently developing Invoice Printer mobile app...
          </Text>
          <Divider />
          <Text
            margin="1rem"
            textDecoration="underline"
            textAlign="center"
            fontWeight="bold"
            fontSize="xl"
          >
            Help me
          </Text>

          <Text textAlign="center">
            <Link
              href="https://github.com/jack5341/invoice-printer"
              color="blue.500"
              isExternal
            >
              https://github.com/jack5341/invoice-printer
            </Link>
          </Text>
        </Box>
      </Center>
    </>
  );
}
