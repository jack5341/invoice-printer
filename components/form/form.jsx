import { Box,Grid } from "@chakra-ui/react";

export default function Form() {
  return (
    <Box paddingTop="0rem" padding="1.5rem">
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
      </Grid>
    </Box>
  );
}
