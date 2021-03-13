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
  const [isSaved, isSetSaved] = useState(false);
  const [obj,setObj] = useState(null)

  useEffect(() => {
    return window.localStorage.getItem("company_information")
    ? isSetSaved(true)
    : isSetSaved(false)
  },[]);

  function toLocalStorage() {
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
    return onClose();
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
            ? "You have setted your company information."
            : "Company information not set yet !"}
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
              <FormControl mt="3">
                <FormLabel>Company Name:</FormLabel>
                <Input onChange={(e) => setName(e.target.value)} type="text" />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Company Slogan:</FormLabel>
                <Input
                  onChange={(e) => setSlogan(e.target.value)}
                  type="text"
                />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Company Location:</FormLabel>
                <Input
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Company Adress:</FormLabel>
                <Input
                  onChange={(e) => setAdress(e.target.value)}
                  type="text"
                />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Company Owner Name:</FormLabel>
                <Input
                  onChange={(e) => setOwnerName(e.target.value)}
                  type="text"
                />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Company Phone Number:</FormLabel>
                <Input onChange={(e) => setPhone(e.target.value)} type="text" />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Company Email:</FormLabel>
                <Input onChange={(e) => setEmail(e.target.value)} type="text" />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Company Domain Name:</FormLabel>
                <Input
                  onChange={(e) => setDomain(e.target.value)}
                  type="text"
                />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Invoice Description:</FormLabel>
                <Textarea
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
