import { Box, Text, useColorMode, Divider } from "@chakra-ui/react";
import YouTube from "react-youtube";
import { useMediaQuery } from "react-responsive";

export default function Howto() {
  const { colorMode } = useColorMode();
  const isMobile = useMediaQuery({ query: "(max-width: 580px)" });
  const opts = {
    width: "100%",
    height: isMobile ? "180px" : "400px"
  }; 
  return (
    <Box
      background="none"
      padding="1.5rem"
      paddingTop="0rem"
    >
      <Text
        color={colorMode === "light" ? "#107c41" : "white"}
        fontSize={isMobile ? "xl" : "3xl"}
        fontWeight="bold"
      >
        How does work ?
      </Text>
      <Divider mb="1rem" />
      <YouTube opts={opts} videoId="TXtgqM73nYA" />
    </Box>
  );
}
