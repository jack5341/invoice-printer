import { useContext } from "react";
import { FileStore } from "../../contexts/fileStore";

export default function Result() {
  const { result } = useContext(FileStore);

  if (result) {
    return (
      <table className="rounded-none m-5 mt-0 mb-0 w-full md:w-2/5 overflow-x-scroll block mx-auto bg-gray-200 text-gray-800 max-h-96">
        <tr className="text-left border-gray-300">
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
                className="bg-gray-100 border-b border-gray-200 hover:bg-gray-200 text-sm lg:text-base cursor-pointer"
              >
                {e.map((x, key) => (
                  <td key={key} className="px-4 py-3">
                    {" "}
                    {x}{" "}
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
