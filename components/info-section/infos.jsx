import {
  Box,
  Button,
  Flex,
  Spacer,
  Text,
  useColorMode,
  OrderedList,
  ListItem,
  Divider,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "react-responsive";

import Drawer from "./drawer/drawer";
import FeatureModal from "./feature-modal/feature.modal";

export default function Informations(props) {
  
  const { colorMode, toggleColorMode } = useColorMode();
  const isLaptop = useMediaQuery({ query: "(max-width: 1366px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobileXL = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <Box
      padding={isMobileXL ? "1rem" : "4rem"}
      paddingTop="1rem"
      height={isTablet ? "auto" : "100vh"}
    >
      <Box position={isTablet ? "relative" : "fixed"}>
        <Flex>
          <Button
            _hover="none"
            _active="none"
            _focus="none"
            marginRight="1"
            background="none"
            color={colorMode === "light" ? "#107c41" : "white"}
            onClick={toggleColorMode}
          >
            {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
          </Button>
          <FeatureModal
            version={props.version}
            logs={props.logs}
            colorMode={colorMode}
          />
          <Spacer />
        </Flex>
        <Text
          fontWeight="bold"
          color={colorMode === "light" ? "#107c41" : "white"}
          fontSize={(isLaptop ? "xl" : "8xl") && (isMobileXL ? "4xl" : "8xl")}
        >
          {props.texts.subject}
        </Text>
        <Text
          color={colorMode === "light" ? "#074a26" : "white"}
          marginTop={isMobileXL ? "0rem" : "-1rem"}
          fontSize={(isLaptop ? "lg" : "xl") && (isMobileXL ? "md" : "xl")}
        >
          {props.texts.description}
        </Text>
        <Text
          fontSize={(isLaptop ? "4xl" : "5xl") && isMobileXL ? "2xl" : "5xl"}
          marginTop="1rem"
          fontWeight="bold"
          color={colorMode === "light" ? "#107c41" : "white"}
        >
          {props.texts.howto}
        </Text>
        <Divider mb="0.3rem" />
        <OrderedList
          color={colorMode === "light" ? "#107c41" : "white"}
          fontSize={(isLaptop ? "lg" : "2xl") && isMobileXL ? "md" : "2xl"}
        >
          <ListItem>
            <Drawer text={props.texts} colorMode={colorMode} />
          </ListItem>
          <ListItem>
            {props.texts.steps.second}
          </ListItem>
          <ListItem> {props.texts.steps.third} </ListItem>
          <ListItem>
             {props.texts.steps.fourth}
          </ListItem>
        </OrderedList>
      </Box>
    </Box>
  );
}
