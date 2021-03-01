import { Box, Text, Image, useColorMode } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

import photo from "../../assets/img/howto-img.png";

// Will be carousel in future....

export default function Carousel() {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Text
        color={colorMode === "light" ? "#2866ca" : "white"}
        mt="1"
        fontSize="2xl"
        fontWeight="bolder"
      >
        <InfoIcon mr="2" /> How should be layout ?
      </Text>
      <Image borderRadius="0.5rem" mt="2" width="100%" src={photo} />
    </Box>
  );
}
