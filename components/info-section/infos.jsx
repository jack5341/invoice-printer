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

import Drawer from "./drawer/drawer";
import FeatureModal from "./feature-modal/feature.modal";

export default function Informations(props) {
  
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      className="info-container"
      padding="4rem"
      paddingTop="1rem"
      height="100vh"
    >
      <Box className="info-box" position="fixed">
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
          className="subject"
          fontWeight="bold"
          color={colorMode === "light" ? "#107c41" : "white"}
          fontSize="8xl"
        >
          {props.texts.subject}
        </Text>
        <Text
          className="description"
          color={colorMode === "light" ? "#074a26" : "white"}
          marginTop="-1rem"
          fontSize="xl"
        >
          {props.texts.description}
        </Text>
        <Text
          className="howto"
          fontSize="5xl"
          marginTop="1rem"
          fontWeight="bold"
          color={colorMode === "light" ? "#107c41" : "white"}
        >
          {props.texts.howto}
        </Text>
        <Divider mb="0.3rem" />
        <OrderedList
          className="list"
          color={colorMode === "light" ? "#107c41" : "white"}
          fontSize="2xl"
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
