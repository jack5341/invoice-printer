import {
  Box,
  Flex,
  useToast,
  Icon,
  Button,
  Spacer,
  Input,
  Container,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DownloadIcon, DeleteIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "react-responsive";
import readXlsxFile from "read-excel-file";

import Result from "./result/result";

const excel =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
const csv = "text/csv";

export default function Content() {
  const [items, setItems] = useState(null);
  const [isUpload, setIsUpload] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 580px)" });
  const toast = useToast();

  useEffect(() => items ? setIsUpload(true) : setIsUpload(false), [items])

  function parseFile(file) {
    if (!file) 
      toast({
        title: "File upload failed",
        status: "warning",
        position: "top-left",
        isClosable: true,
      });

    if (!file.type === excel && !file.type === csv)
      toast({
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
          title: "Somethings were wrong",
          status: "error",
          position: "top-left",
          isClosable: true,
        });
        break;
    }
  }

  const CircleIcon = (props) => (
    <Icon viewBox="0 0 200 200" {...props}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );

  return (
    <Box padding="1.5rem" paddingTop="0px">
      <Container maxW={isMobile ? "container.xl" : "container.md"}>
        <Box
          padding={isMobile ? "0.5rem" : "1rem"}
          borderRadius="0.5rem"
          border="1px solid gray"
        >
          <Flex>
            <Box>
              <CircleIcon
                boxSize={isMobile ? 8 : 10}
                color={isUpload ? "green.400" : "red.400"}
              />
            </Box>
            <Spacer />
            <Box>
              <Input
                type="file"
                id="doc-input"
                accept=".xlsx, .csv"
                onChange={(e) => parseFile(e.target.files[0])}
                name="doc"
                display="none"
              />
              {isUpload ? (
                <Button
                  _focus="none"
                  onClick={() => {
                    setItems(null)
                    document.getElementById("doc-input").value = null
                  }}
                  rightIcon={<DeleteIcon />}
                  size={isMobile ? "sm" : "md"}
                  colorScheme="red"
                >
                  Delete File
                </Button>
              ) : (
                <Button
                  _focus="none"
                  onClick={() => document.getElementById("doc-input").click()}
                  rightIcon={<DownloadIcon />}
                  size={isMobile ? "sm" : "md"}
                  colorScheme="green"
                >
                  Upload Your File
                </Button>
              )}
            </Box>
          </Flex>
        </Box>
        {items ? items.slice(1).map((element,index) => <Result label={items[0]} items={element} />) : null}
      </Container>
    </Box>
  );
}
