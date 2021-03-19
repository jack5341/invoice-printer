import { useState,useEffect } from "react"
import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { ItemStore } from "../context/itemStore"

function MyApp({ Component, pageProps }) {
  const [parsedItem,setParsedItem] = useState(null)
  useEffect(() => console.log(parsedItem), [parsedItem])

  return (
    <ItemStore.Provider value={{
      state: parsedItem,
      setstate: setParsedItem
    }}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ItemStore.Provider>
  ) 
}

export default MyApp
