import { useState } from "react";
import readxlsxfile from "read-excel-file";

export default function Hero(props) {
  const [isloading, setisloading] = useState(false);

  async function parseData(file) {
    setisloading(true);
    if (!file) {
      document.getElementsByClassName("subject").innerHTML =
        "You have to upload one file...";
      setisloading(false)
      return null;
    }

    const matches = file.name.split(".").pop();
    if (!matches === "xlsx" && !matches === "csv" && !matches === "xls") {
      document.getElementsByClassName("subject").innerHTML =
        "Wrong file extension !";
      setisloading(false)
      return null;
    }

    switch (matches) {
      case "xlsx":
        readxlsxfile(file).then((rows) => console.log(rows))
        setisloading(false)
        break;
      case "xls":
        break;
      case "csv":
        break;

      default:
        break;
    }
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
        <ul className="icon-list">
          {props.links
            ? props.links.map((e, index) => (
                <li key={index}>
                  <a href={e.href} target="_blank">
                    <img src={e.src} alt={e.name} />
                  </a>
                </li>
              ))
            : null}
        </ul>
      </div>
    </>
  );
}
