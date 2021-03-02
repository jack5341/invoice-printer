import {
  Box,
  Editable,
  EditablePreview,
  EditableInput,
  Tooltip,
  Image,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Box>
        <Editable
          fontSize="4xl"
          fontWeight="bolder"
          pl="2"
          color="black"
          defaultValue="Example LLC"
        >
          <Tooltip hasArrow label="Example LLC" bg="gray.300" color="black">
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
          defaultValue="Take some chakra"
        >
          <Tooltip hasArrow label="Company Slogan" bg="gray.300" color="black">
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
