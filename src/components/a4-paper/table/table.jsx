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
  Tooltip
} from "@chakra-ui/react";

export default function TableComponent(props) {

  return (
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
          <Th>{props.local.tax + "%"}</Th>
          <Th isNumeric>{ props.query.Price / 100 * props.local.tax } €</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}
