import { Box, ScaleFade } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

export default function Empty() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Box
        display={isMobile ? "none" : "block"}
        width="21cm"
        shadow="2xl"
        minHeight="29.7cm"
        transform="scale(0.9)"
        background="white"
        padding="3rem"
        marginTop="1rem"
      ></Box>
    </ScaleFade>
  );
}
