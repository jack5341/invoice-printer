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
      <Box textAlign="left">
        <Editable
          fontSize="xl"
          fontWeight="bold"
          pl="2"
          color="black"
          defaultValue={props.query.Company}
        >
          <Tooltip hasArrow label={props.query.Company} bg="gray.300" color="black">
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
          defaultValue={props.local ? props.local.location : null}
        >
          <Tooltip
            hasArrow
            label={props.local ? props.local.location : null}
            bg="gray.300"
            color="black"
          >
            <EditablePreview />
          </Tooltip>
          <EditableInput />
        </Editable>
      </Box>

      <Box textAlign="right">
        <Editable
          fontSize="l"
          pl="2"
          color="black"
          defaultValue={props.local ? props.local.adress : null}
        >
          <Tooltip
            hasArrow
            label={props.local ? props.local.adress : null}
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
          defaultValue={props.local ? props.local.location : null}
        >
          <Tooltip
            hasArrow
            label={props.local ? props.local.location : null}
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
          defaultValue={props.local ? props.local.name : null}
        >
          <Tooltip hasArrow label={props.local ? props.local.name : null} bg="gray.300" color="black">
            <EditablePreview />
          </Tooltip>
          <EditableInput />
        </Editable>
        <Editable
          pl="2"
          fontSize="l"
          marginTop="0"
          color="black"
          defaultValue={props.local ? props.local.ownername : null}
        >
          <Tooltip hasArrow label={props.local ? props.local.ownername : null} bg="gray.300" color="black">
            <EditablePreview />
          </Tooltip>
          <EditableInput />
        </Editable>
      </Box>

      {/* Add adress for bill to company  */}
      <Box></Box>
      <Box textAlign="right">
        <Editable pl="2" color="black" defaultValue={`Tel: ${props.local ? props.local.phone : null}`}>
          <Tooltip hasArrow label={props.local ? props.local.phone : null} bg="gray.300" color="black">
            <EditablePreview />
          </Tooltip>
          <EditableInput />
        </Editable>
        <Editable
          pl="2"
          color="black"
          defaultValue={`Email: ${props.local ? props.local.email : null}`}
        >
          <Tooltip
            hasArrow
            label={props.local ? props.local.email : null}
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
          defaultValue={`Domain: ${props.local ? props.local.domain : null}`}
        >
          <Tooltip
            hasArrow
            label={props.local ? props.local.domain : null}
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
