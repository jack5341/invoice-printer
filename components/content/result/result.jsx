import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tooltip,
} from "@chakra-ui/react";


export default function Result() {

  return (
    <Tooltip hasArrow label="Click for edit !" bg="gray.300" color="black">
      <Box
        w="100%"
        padding="1rem"
        mt="4"
        overflow="auto"
        borderRadius="0.5rem"
        border="1px solid gray"
      >
        <Table borderRadius="0.5rem" variant="striped">
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Tooltip>
  );
}
