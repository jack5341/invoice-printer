import {
  Box,
  Container,
  SlideFade,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import readXlsxFile from "read-excel-file";
import { CopyIcon, CheckIcon } from "@chakra-ui/icons";

import "./style.css";

// Containers
import Header from "../../containers/header/header";
import { useState } from "react";

export default function Upmenu(props) {
  const { colorMode } = useColorMode();
  const [postupload, setPostUpload] = useState(false);

  const handleFileChosenDoc = (file) => {
    if (!file) return alert("You have to upload an file");

    const regex = /(xlsx|csv?)/gm;
    const fileExtension = regex.exec(file.name)[0];

    if (fileExtension == null) return alert("Invalid File Extension.");

    switch (fileExtension) {
      case "xlsx":
        props.setType("xlsx");
        readXlsxFile(file).then((rows) => {
          props.setList(rows);
        });
        setPostUpload(true);
        break;

      case "csv":
        props.setType("csv");
        let fileReader = new FileReader();
        fileReader.onloadend = (e) => {
          props.setList(
            fileReader.result
              .toString()
              .split("\n")
              .map((e) => e.trim())
              .map((e) => e.split(",").map((e) => e.trim()))
          );
        };
        setPostUpload(true);
        break;

      default:
        break;
    }
  };

  const handleFileChosenLogo = async (file) => {
    if (!file) return null;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        window.localStorage.setItem("company_logo", reader.result);
    };
  };

  return (
    <Container maxW="xxl" centerContent>
      <Box
        padding="4"
        boxShadow={colorMode === "light" ? "md" : "none"}
        bg={colorMode === "light" ? "gray.100" : "none"}
        maxW="10xl"
      >
        <SlideFade in={true} offsetY="20px">
          <div>
            <Header />
            <Box
              className="upmenu-inputs"
              bg={colorMode === "light" ? "#2866ca38" : "#bee3f80a"}
              mt="4"
            >
              <center>
                <Box>
                  <Text
                    pl="5"
                    pt="3"
                    fontWeight="extrabold"
                    color={colorMode === "light" ? "#2866ca" : "white"}
                  >
                    {window.localStorage.getItem("company_logo") ? (
                      <CheckIcon />
                    ) : (
                      <CopyIcon />
                    )}{" "}
                    Company Logo (should be .PNG)
                  </Text>
                  <input
                    className="inputs"
                    name="document"
                    required
                    onChange={(e) => handleFileChosenLogo(e.target.files[0])}
                    style={{ padding: "2.5rem", width: "100%" }}
                    accept=".png"
                    type="file"
                  />
                </Box>
              </center>
            </Box>
            <Box
              className="upmenu-inputs"
              bg={colorMode === "light" ? "#2866ca38" : "#bee3f80a"}
              mt="4"
            >
              <center>
                <Box>
                  <Text
                    pl="5"
                    pt="3"
                    fontWeight="extrabold"
                    color={colorMode === "light" ? "#2866ca" : "white"}
                  >
                    {postupload ? <CheckIcon /> : <CopyIcon />} Your Document
                  </Text>
                  <input
                    className="inputs"
                    name="document"
                    required
                    onChange={(e) => handleFileChosenDoc(e.target.files[0])}
                    style={{ padding: "2.5rem", width: "100%" }}
                    accept=".xlsx, .csv"
                    type="file"
                  />
                </Box>
              </center>
            </Box>
          </div>
        </SlideFade>
      </Box>
    </Container>
  );
}
