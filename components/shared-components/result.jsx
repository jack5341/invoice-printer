import { useContext } from "react";
import { FileStore } from "../../contexts/fileStore";

export default function Result() {
  const { result } = useContext(FileStore);

  if (result) {
    return (
      <div className="overflow-auto p-0 md:p-24 md:pt-10">
        <table className="result shadow-sm">
          <thead>
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
          </thead>
          <tbody>
            {result
              ? result.slice(1).map((e, index) => (
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
      </div>
    );
  }

  return null;
}
