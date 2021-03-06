import {
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tfoot,
  Tbody,
  Editable,
  EditableInput,
  EditablePreview,
  Tooltip,
  Text
} from "@chakra-ui/react";

export default function TableComponent(props) {
  return (
    <>
      <Table mt="5" color="black">
        <Thead>
          <Tr>
            <Th>
              <Editable
                fontWeight="bolder"
                color="black"
                defaultValue="Product"
              >
                <EditablePreview />
                <EditableInput />
              </Editable>
            </Th>
            <Th>
              <Editable
                fontWeight="bolder"
                color="black"
                defaultValue="Piece"
              >
                <EditablePreview />
                <EditableInput />
              </Editable>
            </Th>
            <Th isNumeric>
              <Editable
                fontWeight="bolder"
                color="black"
                defaultValue="Price"
              >
                <EditablePreview />
                <EditableInput />
              </Editable>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Editable defaultValue="Iphone X">
                <Tooltip hasArrow label="Iphone X" bg="gray.300" color="black">
                  <EditablePreview />
                </Tooltip>
                <EditableInput />
              </Editable>
            </Td>
            <Td>
              <Editable defaultValue="10">
                <Tooltip hasArrow label="10" bg="gray.300" color="black">
                  <EditablePreview />
                </Tooltip>
                <EditableInput />
              </Editable>
            </Td>
            <Td>
              <Editable textAlign="right" defaultValue={props.query.Price}>
                <Tooltip hasArrow label={props.query.Price} bg="gray.300" color="black">
                  <EditablePreview />
                </Tooltip>
                <EditableInput />
              </Editable>
            </Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>
              <Editable defaultValue="Taxes">
                <EditablePreview />
                <EditableInput />
              </Editable>
            </Th>
            <Th>
              <Editable defaultValue={props.local ? props.local.tax + "%" : "No tax"}>
                <EditablePreview />
                <EditableInput />
              </Editable>
            </Th>
            <Th isNumeric>
              <Editable defaultValue={props.query.Price / 100 * (props.local ? props.local.tax : null)}>
                <EditablePreview />
                <EditableInput />
              </Editable>
            </Th>
          </Tr>
        </Tfoot>
      </Table>
      <Text mt="8" p="5">
        <Editable textAlign="left" defaultValue={props.local ? props.local.description : "No Description"}>
          <Tooltip hasArrow label={props.local ? props.local.description : null} bg="gray.300" color="black">
            <EditablePreview />
          </Tooltip>
          <EditableInput />
        </Editable>
      </Text>
    </>
  );
}
