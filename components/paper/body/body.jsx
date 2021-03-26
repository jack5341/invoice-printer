import {
  Box,
  SimpleGrid,
  Editable,
  EditablePreview,
  EditableInput,
} from "@chakra-ui/react";

export default function Body() {
  return (
    <SimpleGrid mt="5rem" columns={2}>
      <Box>
        <Editable
          color="black"
          fontSize="2xl"
          fontWeight="bold"
          defaultValue="Example LLC"
        >
          <EditablePreview />
          <EditableInput />
        </Editable>
        <Editable color="black" fontSize="xl" defaultValue="Nedim Akar">
          <EditablePreview />
          <EditableInput />
        </Editable>
        <Editable
          color="black"
          fontSize="xl"
          defaultValue="Neuss 41460, Germany"
        >
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Box>
      <Box textAlign="right">
        <Editable
          color="black"
          fontSize="2xl"
          fontWeight="bold"
          defaultValue="Example LLC"
        >
          <EditablePreview />
          <EditableInput />
        </Editable>
        <Editable color="black" fontSize="xl" defaultValue="41460, Germany">
          <EditablePreview />
          <EditableInput />
        </Editable>
        <Editable color="black" fontSize="xl" defaultValue="Nedim Akar">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Box>
      <Box></Box>
      <Box mt="2rem" textAlign="right">
        <Editable color="black" fontSize="xl" defaultValue="Tel: 177 1777 177">
          <EditablePreview />
          <EditableInput />
        </Editable>
        <Editable color="black" fontSize="xl" defaultValue="Email: info@invoiceprinter.com">
          <EditablePreview />
          <EditableInput />
        </Editable>
        <Editable color="black" fontSize="xl" defaultValue="Domain: www.invoiceprinter.com">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Box>
    </SimpleGrid>
  );
}
