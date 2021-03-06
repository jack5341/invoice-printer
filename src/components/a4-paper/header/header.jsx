import {
  Box,
  Editable,
  EditablePreview,
  EditableInput,
  Tooltip,
  Image,
} from "@chakra-ui/react";

export default function Header(props) {
  return (
    <>
      <Box>
        <Editable
          fontSize="4xl"
          fontWeight="bolder"
          pl="2"
          color="black"
          defaultValue={props.local ? props.local.name : "No Name"}
        >
          <Tooltip hasArrow label={props.local ? props.local.name : null} bg="gray.300" color="black">
            <EditablePreview />
          </Tooltip>
          <EditableInput />
        </Editable>
        <Editable
          mt="5"
          pl="2"
          fontSize="xl"
          marginTop="0"
          borderRadius="0.5rem"
          color="black"
          defaultValue={props.local ? props.local.slogan : "No Slogan"}
        >
          <Tooltip hasArrow label={props.local ? props.local.slogan : null} bg="gray.300" color="black">
            <EditablePreview />
          </Tooltip>
          <EditableInput />
        </Editable>
      </Box>
      <Box>
        <Image
          src={window.localStorage.getItem("company_logo") ? window.localStorage.getItem("company_logo") : null}
          width="80%"
          float="right"
        />
      </Box>
    </>
  );
}
