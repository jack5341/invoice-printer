import { Box, ScaleFade, Text, useColorMode } from "@chakra-ui/react";

export default function Result() {
  const { colorMode } = useColorMode();

  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Box borderRadius="0.2rem" border="1px solid gray" pt="3" mt="5">
        <Text
          color={colorMode === "light" ? "#094223" : "#27d476"}
          padding="1rem"
          paddingTop="0px"
          fontSize="xl"
          fontWeight="600"
        >
          Company: Company LLC
        </Text>
        
      </Box>
    </ScaleFade>
  );
}
