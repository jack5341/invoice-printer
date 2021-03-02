import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  useDisclosure,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";

export default function ModalForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const [companyName, setCompanyName] = useState(null);
  const [companySlogan, setCompanySlogan] = useState(null);
  const [companyLocation, setLocationName] = useState(null);
  const [companyOwnerName, setCompanyOwnerName] = useState(null);
  const [companyPhone, setCompanyPhone] = useState(null);
  const [companyEmail, setCompanyEmail] = useState(null);
  const [companyDomain, setCompanyDomain] = useState(null);
  const [companyDescription, setCompanyDescription] = useState(null);

  const [have, setHave] = useState(null);

  useEffect(() => setHave(jwt.decode(window.localStorage.getItem("configuration_settings"))),[]);

  function setLocalInfo() {
    const localInfo = {
      name: companyName,
      slogan: companySlogan,
      location: companyLocation,
      ownername: companyOwnerName,
      phone: companyPhone,
      email: companyEmail,
      domain: companyDomain,
      description: companyDescription,
    };

    window.localStorage.setItem(
      "configuration_settings",
      jwt.sign(localInfo, "shhhhh")
    );
    return onClose();
  }

  return (
    <>
      <Button
        size="xs"
        onClick={onOpen}
        _hover="none"
        _focus="none"
        color={colorMode === "light" ? "white" : "black"}
        bgGradient={
          colorMode === "light"
            ? "linear(to-l, #7928CA,#2866ca)"
            : "linear(to-l, white,white)"
        }
      >
        Configure your company infos *
      </Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Configure your company infos <br />
            <Text fontSize="xs">
              Please fill correctly this form for best experience
            </Text>
          </ModalHeader>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Company Name: </FormLabel>
              <Input
                onChange={(e) => setCompanyName(e.target.value)}
                required
                placeholder={have ? have.name : "Company Name"}
              />
            </FormControl>
            <FormControl mt="5">
              <FormLabel>Company Slogan: </FormLabel>
              <Input
                onChange={(e) => setCompanySlogan(e.target.value)}
                required
                placeholder={have ? have.slogan : "Company Slogan"}
              />
            </FormControl>
            <FormControl mt="5">
              <FormLabel>Company Location: </FormLabel>
              <Input
                onChange={(e) => setLocationName(e.target.value)}
                required
                placeholder={have ? have.location : "Company Location"}
              />
            </FormControl>
            <FormControl mt="5">
              <FormLabel>Company Owner Name: </FormLabel>
              <Input
                onChange={(e) => setCompanyOwnerName(e.target.value)}
                required
                placeholder={
                  have ? have.ownername : "Company Owner Name"
                }
              />
            </FormControl>
            <FormControl mt="5">
              <FormLabel>Company Phone Number: </FormLabel>
              <Input
                onChange={(e) => setCompanyPhone(e.target.value)}
                required
                placeholder={have ? have.phone : "Company Phone Number"}
              />
            </FormControl>
            <FormControl mt="5">
              <FormLabel>Company Email: </FormLabel>
              <Input
                onChange={(e) => setCompanyEmail(e.target.value)}
                type="email"
                placeholder={have ? have.email : "Company Email"}
              />
            </FormControl>
            <FormControl mt="5">
              <FormLabel>Company Domain Name: </FormLabel>
              <Input
                onChange={(e) => setCompanyDomain(e.target.value)}
                placeholder={have ? have.domain : "Company Domain Name"}
              />
            </FormControl>
            <FormControl mt="5">
              <FormLabel>Invoice Description: </FormLabel>
              <Textarea
                onChange={(e) => setCompanyDescription(e.target.value)}
                placeholder={
                  have ? have.description : "Invoice Description"
                }
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => setLocalInfo()}
              colorScheme="blue"
              _focus="none"
              _hover="none"
              mr={3}
              bgGradient={
                colorMode === "light"
                  ? "linear(to-l, #7928CA,#2866ca)"
                  : "linear(to-l, white,white)"
              }
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
