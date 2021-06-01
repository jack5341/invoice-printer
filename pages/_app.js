import { useState } from "react";
import "../global/globals.css";
import { FileStore } from "../contexts/fileStore";

function MyApp({ Component, pageProps }) {
  const [result, setresult] = useState(null);

  return (
    <FileStore.Provider>
      <Component {...pageProps} />
    </FileStore.Provider>
  );
}

export default MyApp;
