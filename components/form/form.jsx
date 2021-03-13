import { Box, SimpleGrid } from "@chakra-ui/react";

export default function Form() {
  return (
    <SimpleGrid columns={2} padding="1.5rem">
      <Box bg="green" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
    </SimpleGrid>
  );
}
