import {
  useToast,
  Center
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

import Paper from "../components/paper/paper";

export default function EditPage() {
  const [item, setItem] = useState(null);
  const toast = useToast();

  useEffect(() => {
    setItem(jwt.decode(window.location.search.replace("?token=", "")));
    return toast({
      title: "You can edit your paper as you want, everything is editable",
      status: "info",
      position: "top-right",
      isClosable: true,
    });
  }, []);

  return (
    <Center>
      <Paper />
    </Center>
  );
}
