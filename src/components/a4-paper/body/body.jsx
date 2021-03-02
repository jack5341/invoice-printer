import {
  Box,
  Editable,
  EditablePreview,
  EditableInput,
  Tooltip,
} from "@chakra-ui/react";
import crypto from "crypto";

const uniqueId = crypto.randomBytes(8).toString("hex")

export default function Body() {
  return (
    <>
      <Box>
        <Editable
          fontSize="l"
          pl="2"
          color="black"
          defaultValue="Adolf-Flecken-Straße 6"
        >
          <Tooltip
            hasArrow
            label="Adolf-Flecken-Straße 6"
            bg="gray.300"
            color="black"
          >
            <EditablePreview />
          </Tooltip>
          <EditableInput />
        </Editable>
        <Editable
          fontSize="l"
          pl="2"
          color="black"
          defaultValue="41460 Neuss,Germany"
        >
          <Tooltip
            hasArrow
            label="41460 Neuss,Germany"
            bg="gray.300"
            color="black"
          >
            <EditablePreview />
          </Tooltip>
          <EditableInput />
        </Editable>
        <Editable
          pl="2"
          fontSize="l"
          marginTop="0"
          color="black"
          defaultValue="Example LLC"
        >
          <Tooltip hasArrow label="Example LLC" bg="gray.300" color="black">
            <EditablePreview />
          </Tooltip>
          <EditableInput />
        </Editable>
        <Editable
          pl="2"
          fontSize="l"
          marginTop="0"
          color="black"
          defaultValue="Nedim Akar"
        >
          <Tooltip hasArrow label="Nedim Akar" bg="gray.300" color="black">
            <EditablePreview />
          </Tooltip>
          <EditableInput />
        </Editable>
      </Box>
      <Box textAlign="right">
        <Editable
          fontSize="xl"
          fontWeight="bold"
          pl="2"
          color="black"
          defaultValue="Google LLC"
        >
          <Tooltip hasArrow label="Google LLC" bg="gray.300" color="black">
            <EditablePreview />
          </Tooltip>
          <EditableInput />
        </Editable>
        <Editable pl="2" color="black" defaultValue="Nedime Tatlici">
          <Tooltip hasArrow label="Nedime Tatlici" bg="gray.300" color="black">
            <EditablePreview />
          </Tooltip>
          <EditableInput />
        </Editable>
        <Editable
          pl="2"
          color="black"
          defaultValue="1600 Amphitheatre Parkway
          Mountain View, CA 94043 USA"
        >
          <Tooltip
            hasArrow
            label="1600 Amphitheatre Parkway
            Mountain View, CA 94043 USA"
            bg="gray.300"
            color="black"
          >
            <EditablePreview />
          </Tooltip>
          <EditableInput />
        </Editable>
      </Box>
      <Box></Box>
      <Box textAlign="right">
        <Editable pl="2" color="black" defaultValue={"Tel: 177 1777 177"}>
          <Tooltip hasArrow label="177 1777 177" bg="gray.300" color="black">
            <EditablePreview />
          </Tooltip>
          <EditableInput />
        </Editable>
        <Editable
          pl="2"
          color="black"
          defaultValue={"E-Mail: nedim.akar53411@gmail.com"}
        >
          <Tooltip
            hasArrow
            label="nedim.akar53411@gmail.com"
            bg="gray.300"
            color="black"
          >
            <EditablePreview />
          </Tooltip>
          <EditableInput />
        </Editable>
        <Editable
          pl="2"
          color="black"
          defaultValue={"Domain: invoiceprinter.com"}
        >
          <Tooltip
            hasArrow
            label="invoiceprinter.com"
            bg="gray.300"
            color="black"
          >
            <EditablePreview />
          </Tooltip>
          <EditableInput />
        </Editable>
      </Box>
      <Box>
        <Editable
          fontSize="3xl"
          fontWeight="bold"
          pl="2"
          color="black"
          defaultValue="Invoice"
        >
          <EditablePreview />
          <EditableInput />
        </Editable>
        <Editable
          pl="2"
          color="black"
          defaultValue={"Invoice Nr. " + uniqueId}
        >
          <Tooltip hasArrow label={uniqueId} bg="gray.300" color="black">
            <EditablePreview />
          </Tooltip>
          <EditableInput />
        </Editable>
      </Box>
      <Box></Box>
    </>
  );
}
