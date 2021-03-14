import {
  Link,
  Drawer,
  DrawerBody,
  DrawerFooter,
  Button,
  DrawerOverlay,
  DrawerContent,
  Text,
  Alert,
  AlertIcon,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Divider,
  NumberDecrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
} from "@chakra-ui/react";
import { CheckIcon, DownloadIcon, CopyIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import jwt from "jsonwebtoken";

export default function AlertSection(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState(null);
  const [slogan, setSlogan] = useState(null);
  const [location, setLocation] = useState(null);
  const [adress, setAdress] = useState(null);
  const [ownername, setOwnerName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [domain, setDomain] = useState(null);
  const [description, setDescription] = useState(null);
  const [tax, setTax] = useState(null);
  const [logo, setLogo] = useState(null);
  const [isSaved, isSetSaved] = useState(false);
  const [isUpload, setIsUploaded] = useState(false);
  const [obj, setObj] = useState(null);

  useEffect(() => {
    window.localStorage.getItem("company_information")
      ? isSetSaved(true)
      : isSetSaved(false);
    setObj(jwt.decode(window.localStorage.getItem("company_information")));
  }, []);

  function toLocalStorage() {
    let reader = new FileReader();
    reader.readAsDataURL(logo);
    reader.onload = function () {
      window.localStorage.setItem("company_logo", reader.result);
    };

    const obj = {
      name: name,
      slogan: slogan,
      location: location,
      adress: adress,
      ownername: ownername,
      phone: phone,
      email: email,
      domain: domain,
      description: description,
      tax: tax,
    };

    const token = jwt.sign(obj, "shhhhh");
    window.localStorage.setItem("company_information", token);
    setIsUploaded(true);
    onClose();

    window.location.reload();
  }

  return (
    <>
      <Link>
        <Alert
          fontWeight="600"
          onClick={onOpen}
          status={isSaved ? "success" : "warning"}
          mt="2"
          variant="left-accent"
        >
          <AlertIcon />
          {isSaved
            ? "You have set your company information."
            : "Company information not set yet!"}
        </Alert>
      </Link>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent
            background={props.colorMode === "light" ? "white" : "#15151f"}
            borderLeft="2px solid #27d476"
          >
            <DrawerBody>
              <Text
                pb="2"
                fontSize="xl"
                color={props.colorMode === "light" ? "#094223" : "#27d476"}
                fontWeight="bold"
              >
                Set your company information
              </Text>
              <Text pb="2" fontSize="sm">
                Please fill correctly this form for best experience
              </Text>
              <Divider />
              <FormControl
                borderRadius="0.5rem"
                border="2px dashed gray"
                mt="3"
              >
                <FormLabel
                  color={props.colorMode === "light" ? "#27d476" : "white"}
                  p="1rem"
                  fontWeight="bold"
                >
                  {isUpload ? <CheckIcon /> : <DownloadIcon />} Upload your Logo
                  (.png)
                </FormLabel>
                <Input
                  onChange={(e) => setLogo(e.target.files[0])}
                  type="file"
                  accept=".png"
                  opacity="0"
                  border="0px"
                />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Company Name:</FormLabel>
                <Input
                  placeholder={obj ? obj.name : null}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Company Slogan:</FormLabel>
                <Input
                  placeholder={obj ? obj.slogan : null}
                  onChange={(e) => setSlogan(e.target.value)}
                  type="text"
                />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Company Location:</FormLabel>
                <Input
                  placeholder={obj ? obj.location : null}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Company Adress:</FormLabel>
                <Input
                  placeholder={obj ? obj.adress : null}
                  onChange={(e) => setAdress(e.target.value)}
                  type="text"
                />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Company Owner Name:</FormLabel>
                <Input
                  placeholder={obj ? obj.ownername : null}
                  onChange={(e) => setOwnerName(e.target.value)}
                  type="text"
                />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Company Phone Number:</FormLabel>
                <Input
                placeholder={obj ? obj.phone : null}
                onChange={(e) => setPhone(e.target.value)} type="text" />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Company Email:</FormLabel>
                <Input 
                placeholder={obj ? obj.email : null}
                onChange={(e) => setEmail(e.target.value)} type="text" />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Company Domain Name:</FormLabel>
                <Input
                  placeholder={obj ? obj.domain : null}
                  onChange={(e) => setDomain(e.target.value)}
                  type="text"
                />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Invoice Description:</FormLabel>
                <Textarea
                  placeholder={obj ? obj.description : null}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Tax (%):</FormLabel>
                <NumberInput
                  onChange={(e) => setTax(e.target)}
                  defaultValue={15}
                  precision={2}
                  step={0.1}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </DrawerBody>
            <DrawerFooter>
              <Button _focus="none" variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                _focus="none"
                colorScheme="green"
                onClick={() => toLocalStorage()}
              >
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
