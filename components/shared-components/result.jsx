import { useContext } from "react";
import { FileStore } from "../../contexts/fileStore";

export default function Result() {
  const { result } = useContext(FileStore);

  if (result) {
    return (
      <table className="result">
        <tr className="head">
          {result
            ? result[0].map((e, index) => (
                <th key={index} className="px-4 py-3">
                  {" "}
                  {e}{" "}
                </th>
              ))
            : null}
        </tr>
        {result
          ? result.slice(1).map((e, index) => (
              <tr
                key={index}
                className="element"
              >
                {e.map((x, key) => (
                  <td key={key} className="px-4 py-3">
                    {x}
                  </td>
                ))}
              </tr>
            ))
          : null}
      </table>
    );
  }

  return null;
}
