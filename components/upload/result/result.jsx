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
import jwt from "jsonwebtoken"
import { useMediaQuery } from "react-responsive";

export default function Result(props) {
  const obj = Object.assign({},props.items)
  
  return (
    <ScaleFade in={true}>
      <Tooltip className="result-container" hasArrow label="Click for edit !" bg="gray.300" color="black">
        <a target="_blank" href={"/edit?token=" + jwt.sign(obj, 'shhhh')}>
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
                    <Th
                      className="result-subject"
                      fontFamily="unset"
                      fontWeight="600"
                      fontSize="sm"
                      key={index}
                    >
                      {element}
                    </Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  {props.items.map((element, index) => (
                    <Td
                      className="result-key"
                      fontSize="sm"
                      key={index}
                    >
                      {" "}
                      {element}{" "}
                    </Td>
                  ))}
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </a>
      </Tooltip>
    </ScaleFade>
  );
}
