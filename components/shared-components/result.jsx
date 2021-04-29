import { useContext } from "react";
import DataTable from "react-data-table-component";
import { FileStore } from "../../contexts/fileStore";

export default function Result() {
  const { result } = useContext(FileStore);
  console.log(result ? result.slice(0) : null)
  
  return (
    <div className="flex flex-col result items-center">
      <DataTable
        title="Parsed Invoices"
        columns={[
          {
            name: 'Title',
            selector: 'title',
            sortable: true,
          },
          {
            name: 'Director',
            selector: 'director',
            sortable: true,
          },
          {
            name: 'Year',
            selector: 'year',
            sortable: true,
          },
        ]}
      />
    </div>
  );
}
