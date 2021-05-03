import { useContext,useState, useEffect } from "react";
import { FileStore } from "../../contexts/fileStore";

import Pagination from "../util-component/pagination"

export default function Result() {
  const [listElement,setListElement] = useState([])
  const { result } = useContext(FileStore);
  
  useEffect(() => setListElement(result),[result])

  if (result) {
    return (
      <div className="overflow-auto p-0 md:p-24 md:pb-5 md:pt-10">
        <table className="result shadow-sm">
          <thead>
            <tr className="head">
              {listElement
                ? listElement[0].map((e, index) => (
                    <th key={index} className="px-4 py-3">
                      {" "}
                      {e}{" "}
                    </th>
                  ))
                : null}
            </tr>
          </thead>
          <tbody>
            {listElement
              ? listElement.slice(1).map((e, index) => (
                  <tr key={index} className="element">
                    {e.map((x, key) => (
                      <td key={key} className="px-4 py-3">
                        {x}
                      </td>
                    ))}
                  </tr>
                ))
              : null}
          </tbody>
        </table>
        <Pagination/>
      </div>
    );
  }

  return null;
}
