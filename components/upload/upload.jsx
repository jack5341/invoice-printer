import {
  Box,
  useToast,
  FormControl,
  FormLabel,
  Text,
  Input,
  Button,
  Collapse,
  useColorMode,
} from "@chakra-ui/react";
import {
  DownloadIcon,
  DeleteIcon,
  InfoIcon,
  CheckIcon,
} from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import readXlsxFile from "read-excel-file";

import Result from "./result/result";

const excel =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
const csv = "text/csv";

export default function Upload() {
  const { colorMode } = useColorMode();
  const [items, setItems] = useState(null);
  const [isUpload, setIsUpload] = useState(false);
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobileXL = useMediaQuery({ query: "(max-width: 600px)" });
  const toast = useToast();

  useEffect(() => (items ? setIsUpload(true) : setIsUpload(false)), [items]);

  function handleFile(file) {

    if (!file)
      return toast({
        title: "File upload failed",
        status: "warning",
        position: "top-left",
        isClosable: true,
      });

    if (!file.type === excel && !file.type === csv)
      return toast({
        title: "Wrong file type",
        status: "error",
        position: "top-left",
        isClosable: true,
      });

    switch (file.type) {
      case excel:
        readXlsxFile(file).then((rows) => {
          setItems(rows);
        });
        setIsUpload(true);
        break;

      case csv:
        let fileReader = new FileReader();
        fileReader.onloadend = (e) => {
          setItems(
            fileReader.result
              .toString()
              .split("\n")
              .map((e) => e.trim())
              .map((e) => e.split(",").map((e) => e.trim()))
          );
        };
        setIsUpload(true);
        break;

      default:
        toast({
          title: "Wrong file type",
          status: "error",
          position: "top-left",
          isClosable: true,
        });
        break;
    }
  }

  return (
    <Box
      padding={(isTablet ? "0rem" : "4rem") && (isMobileXL ? "1rem" : "4rem")}
      paddingTop={isTablet ? "0rem" : null}
      borderLeft={isMobileXL ? "0" : "1px solid gray"}
    >
      <Text
        color={colorMode === "light" ? "#107c41" : "white"}
        fontSize={(isTablet ? "xl" : "2xl") && (isMobileXL ? "md" : "2xl")}
      >
        <InfoIcon mr="0.5rem" /> You can drag your file to this box for parsing
        your file.
      </Text>
      <Collapse in={isUpload} animateOpacity>
        <Button
          mt="2"
          _focus="none"
          onClick={() => {
            setItems(null);
            setIsUpload(false);
            document.getElementsByClassName("docs").value = null;
          }}
          size={isMobileXL ? "sm" : "md"}
          leftIcon={<DeleteIcon />}
          colorScheme="green"
          display="block"
          w="100%"
        >
          Delete
        </Button>
      </Collapse>
      <FormControl
        borderRadius="0.5rem"
        border="2px dashed gray"
        mt="3"
      >
        <FormLabel
          color={colorMode === "light" ? "#107c41" : "white"}
          p="1rem"
          fontWeight="bold"
          fontSize={isMobileXL ? "md" : "2xl"}
        >
          {isUpload ? <CheckIcon /> : <DownloadIcon />} Upload your file
        </FormLabel>
        <Input
          className="docs"
          onChange={(e) => handleFile(e.target.files[0])}
          type="file"
          opacity="0"
          accept=".xlsx, .csv"
          border="0px"
        />
      </FormControl>
      {items
        ? items
            .slice(1)
            .map((element, index) => (
              <Result key={index} label={items[0]} items={element} />
            ))
        : null}
    </Box>
  );
}
