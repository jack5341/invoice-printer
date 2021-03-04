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
          defaultValue={props.local.name}
        >
          <Tooltip hasArrow label={props.local.name} bg="gray.300" color="black">
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
          defaultValue={props.local.slogan}
        >
          <Tooltip hasArrow label={props.local.slogan} bg="gray.300" color="black">
            <EditablePreview />
          </Tooltip>
          <EditableInput />
        </Editable>
      </Box>
      <Box>
        <Image
          src="https://logosmarken.com/wp-content/uploads/2020/04/Huawei-Logo.png"
          width="80%"
          float="right"
        />
      </Box>
    </>
  );
}
