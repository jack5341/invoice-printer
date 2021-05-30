import { useState, useContext } from "react";
// import readxlsxfile from "read-excel-file";

import IconList from "../shared-components/icon-list";

// import { FileStore } from "../../contexts/fileStore";

export default function Hero(props) {
  const [isUploaded, setIsUploaded] = useState(null);
  // const [isloading, setisloading] = useState(false);
  // const { setresult } = useContext(FileStore);

  // async function parseData(file) {
  //   setisloading(true);

  //   if (!file) {
  //     document.getElementsByClassName("subject").innerHTML =
  //       "You have to upload one file...";
  //     return null;
  //   }

  //   const matches = file.name.split(".").pop();
  //   switch (matches) {
  //     case "xlsx":
  //       readxlsxfile(file).then((rows) => setresult(rows));
  //       setTimeout(() => {
  //         window.scrollTo(0, 500);
  //       }, 300);
  //       break;
  //     case "xls":
  //       break;
  //     case "csv":
  //       break;

  //     default:
  //       document.getElementsByClassName("subject").innerHTML =
  //         "Wrong file extension !";
  //       break;
  //   }

  //   setTimeout(() => {
  //     setisloading(false);
  //   }, 3000);
  // }

  const firstSide = () => {
    return (
      <div className="card-lg">
        {isUploaded == false ? (
          <button
            onClick={() => setIsUploaded(true)}
            className="steps-btn"
            style={{ right: 0, top: 0, margin: "1rem" }}
          >
            Next Step
          </button>
        ) : null}
        <p className="subject">Invoice Printer</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ipsa.
        </p>
        <div
          onClick={() => document.getElementById("file-input").click()}
          className={`input-box`}
        >
          Upload your file
        </div>
        <input
          type="file"
          accept=".xlsx, .csv, .xls"
          // onChange={(e) => parseData(e.target.files[0])}
          onChange={(e) => setIsUploaded(true)}
          id="file-input"
          className="hidden"
        ></input>
      </div>
    );
  };

  const secondSide = () => {
    return (
      <div className="card-lg">
        <button
          onClick={() => setIsUploaded(false)}
          className="steps-btn"
          style={{ left: 0, top: 0, margin: "1rem" }}
        >
          Previous Step
        </button>
        <h1>dwqllkjdwqlökjddw</h1>
      </div>
    );
  };

  return (
    <>
      <div className="hero">
        {!isUploaded ? firstSide() : secondSide()}
        <IconList links={props.links} />
      </div>
    </>
  );
}
