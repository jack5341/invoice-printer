import Head from "next/head";
import "../styles/globals.css";
import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { ItemStore } from "../context/itemStore";

function MyApp({ Component, pageProps }) {
  const [items, setItem] = useState(null);

  return (
    <ChakraProvider>
      <Head>
        <title>Invoice Printer</title>
        <meta
          name="description"
          content="Free Fastest Invoice Printer by parsed Excel or Csv files. You should just upload your file and choose it."
        />
        <meta
          name="keywords"
          content="invoice printer, printer, invoice,automatic invoice printer, invoice printer by web app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VTPVN058D5"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'G-VTPVN058D5');
            `,
          }}
        />
        <script
          data-ad-client="ca-pub-3442542443909627"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Head>
      <ItemStore.Provider
        value={{
          value: items,
          setvalue: setItem,
        }}
      >
        <Component {...pageProps} />
      </ItemStore.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
