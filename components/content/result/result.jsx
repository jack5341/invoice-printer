import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tooltip,
  ScaleFade,
} from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

export default function Result(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 580px)" });
  return (
    <ScaleFade in={true}>
      <Tooltip hasArrow label="Click for edit !" bg="gray.300" color="black">
        <Box
          w="100%"
          mt="4"
          overflow="auto"
          borderRadius="0.5rem"
          border="1px solid gray"
        >
          <Table borderRadius="0.5rem" variant="striped">
            <Thead>
              <Tr>
                {props.label.map((element, index) => (
                  <Th padding={isMobile ? "0.5rem" : null} fontFamily="unset" fontWeight="600" fontSize={isMobile ? "xs" : "sm"} key={index}>{element}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                {props.items.map((element, index) => (
                  <Td padding={isMobile ? "0.5rem" : null} fontSize={isMobile ? "xs" : "sm"} key={index}> {element} </Td>
                ))}
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Tooltip>
    </ScaleFade>
  );
}
