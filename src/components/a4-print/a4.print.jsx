import {
  Box,
  SimpleGrid,
  Table,
  Text,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import jwt from "jsonwebtoken";

import "./style.css";

export default function A4Print() {
  const str = window.location.search;
  const decodedObject = jwt.decode(str.replace("?token=", ""));

  return (
    <Box className="a4-print" width="210mm" height="297mm" p="12" color="black">
      <SimpleGrid columns={2} spacing={5}>
        <Box>
          <Text fontSize="4xl" fontWeight="bold">
            {window.localStorage.getItem("company_name")
              ? window.localStorage.getItem("company_name")
              : "Company Name"}
          </Text>
          <Text fontWeight="600"> {window.localStorage.getItem("company_slogan") ? window.localStorage.getItem("company_slogan") : ""} </Text>
          <Text>Mr/Mrs Company Owner Name</Text>
          <Text>Company Location</Text>
          <Text>
            <b>Tel:</b>{" "}
            {decodedObject["Phone Number"]
              ? decodedObject["Phone Number"]
              : "177 1777 177"}
          </Text>
          <Text>
            <b>E-Mail:</b>{" "}
            {decodedObject["E-Mail"]
              ? decodedObject["E-Mail"]
              : "templatemail@gmail.com"}
          </Text>
          <Text>
            <b>Domain:</b> invoiceprinter.com
          </Text>
        </Box>
        <Box textAlign="right" padding="5">
            <img alt="company logo" src={window.localStorage.getItem("company_logo") ? window.localStorage.getItem("company_logo") : ""} width="100%"/>
        </Box>
      </SimpleGrid>
      <SimpleGrid mt="12" columns={2} spacing={5}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Bill to
          </Text>
          <Text mt="2">Name</Text>
          <Text>Company Name</Text>
          <Text>Company Adress</Text>
          <Text mt="2">Phone number</Text>
        </Box>
        <Box mt="0" textAlign="right">
          <Text
           fontSize="6xl" 
           fontWeight="bold"
           style={{marginTop: "-1rem"}}
          >
            Invoice
          </Text>
          <Text>
            <b>Date:</b> {dayjs().format("YYYY/MM/DD")}
          </Text>
          <Text>
            <b>Invoice Nr:</b> #11111412
          </Text>
          <Text>
            <b>Customer Id:</b> 543
          </Text>
          <Text>
            <b>Due Date:</b> {dayjs().format("YYYY/MM/DD")}
          </Text>
        </Box>
      </SimpleGrid>
      <Table mt="12">
        <Thead>
          <Tr>
            <Th>Description</Th>
            <Th>Taxed</Th>
            <Th>Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Service Fee</Td>
            <Td></Td>
            <Td>400.00</Td>
          </Tr>
          <Tr>
            <Td>
              {decodedObject.Product
                ? decodedObject.Product
                : "Template Product"}
            </Td>
            <Td>X</Td>
            <Td>{decodedObject.Price ? decodedObject.Price : 10}</Td>
          </Tr>
        </Tbody>
      </Table>
      <SimpleGrid columns={2} spacing={5}>
        <Box p="5">
          <Text fontWeight="bold">Other Comments</Text>
          <OrderedList fontSize="sm">
            <ListItem>Lorem ipsum dolor sit amet </ListItem>
            <ListItem>Lorem ipsum dolor sit amet </ListItem>
            <ListItem>Lorem ipsum dolor sit amet </ListItem>
          </OrderedList>
        </Box>
        <Box
          borderTop="0px solid black !important"
          border="1px solid black"
          p="2"
        >
          <Text textAlign="center">
            <i>
              {" "}
              <b>Subtotal:</b> 1000{" "}
            </i>
          </Text>
          <Text textAlign="center">
            <i>
              {" "}
              <b>Taxable:</b> 345{" "}
            </i>
          </Text>
          <Text textAlign="center">
            <i>
              {" "}
              <b>Tax Rate:</b> 6.250%{" "}
            </i>
          </Text>
          <Text textAlign="center">
            <i>
              {" "}
              <b>Taxe Due:</b> 21.60{" "}
            </i>
          </Text>
          <Text textAlign="center">
            <b>Total:</b> 1000
          </Text>
        </Box>
      </SimpleGrid>

      <Text mt="12" fontStyle="italic" textAlign="center">
        If you have any question about this invoice
        <br /> contact me
      </Text>
      <Text textAlign="center" fontStyle="italic" fontWeight="bold">
        Thank You For Your Business!
      </Text>
    </Box>
  );
}
