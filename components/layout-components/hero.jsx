import { useState, useContext } from "react";
import readxlsxfile from "read-excel-file";

import IconList from "../shared-components/icon-list"

import { FileStore } from "../../contexts/fileStore";

export default function Hero(props) {
  const [isloading, setisloading] = useState(false);
  const { setresult } = useContext(FileStore);

  async function parseData(file) {
    setisloading(true)

    if (!file) {
      document.getElementsByClassName("subject").innerHTML =
        "You have to upload one file...";
      return null;
    }

    const matches = file.name.split(".").pop();
    switch (matches) {
      case "xlsx":
        readxlsxfile(file).then((rows) => setresult(rows))
        setTimeout(() => {
          window.scrollTo(0, 500);
        }, 300);
        break;
      case "xls":
        break;
      case "csv":
        break;

      default:
        document.getElementsByClassName("subject").innerHTML =
          "Wrong file extension !";
        break;
    }

     setTimeout(() => {
      setisloading(false)
     }, 3000);
  }

  return (
    <>
      <div className="hero">
        <p className="subject">Invoice Printer</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ipsa.
        </p>
        <div
          onClick={() => document.getElementById("file-input").click()}
          className={`input-box ${isloading ? "animate-pulse" : null}`}
        >
          Upload your file
        </div>
        <input
          type="file"
          accept=".xlsx, .csv, .xls"
          onChange={(e) => parseData(e.target.files[0])}
          id="file-input"
          className="hidden"
        ></input>

        <IconList links={props.links} />
      </div>
    </>
  );
}
