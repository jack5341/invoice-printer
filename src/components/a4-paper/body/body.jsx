import {
  Box,
  Editable,
  EditablePreview,
  EditableInput,
  Tooltip,
} from "@chakra-ui/react";
import crypto from "crypto";

const uniqueId = crypto.randomBytes(8).toString("hex")

export default function Body(props) {
  console.log(props)
  return (
    <>
      <Box>
        <Editable
          fontSize="l"
          pl="2"
          color="black"
          defaultValue={props.local.adress}
        >
          <Tooltip
            hasArrow
            label={props.local.adress}
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
          defaultValue={props.local.location}
        >
          <Tooltip
            hasArrow
            label={props.local.location}
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
          defaultValue={props.local.name}
        >
          <Tooltip hasArrow label={props.local.name} bg="gray.300" color="black">
            <EditablePreview />
          </Tooltip>
          <EditableInput />
        </Editable>
        <Editable
          pl="2"
          fontSize="l"
          marginTop="0"
          color="black"
          defaultValue={props.local.ownername}
        >
          <Tooltip hasArrow label={props.local.ownername} bg="gray.300" color="black">
            <EditablePreview />
          </Tooltip>
          <EditableInput />
        </Editable>
      </Box>

      {/* Add adress for bill to company  */}
      <Box textAlign="right">
        <Editable
          fontSize="xl"
          fontWeight="bold"
          pl="2"
          color="black"
          defaultValue={props.query.Company}
        >
          <Tooltip hasArrow label={props.query.company} bg="gray.300" color="black">
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
          defaultValue={props.local.location}
        >
          <Tooltip
            hasArrow
            label={props.local.location}
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
        <Editable pl="2" color="black" defaultValue={`Tel: ${props.local.phone}`}>
          <Tooltip hasArrow label={props.local.phone} bg="gray.300" color="black">
            <EditablePreview />
          </Tooltip>
          <EditableInput />
        </Editable>
        <Editable
          pl="2"
          color="black"
          defaultValue={`Email: ${props.local.email}`}
        >
          <Tooltip
            hasArrow
            label={props.local.email}
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
          defaultValue={`Domain: ${props.local.domain}`}
        >
          <Tooltip
            hasArrow
            label={props.local.domain}
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
