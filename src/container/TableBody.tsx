import { FC } from "react";
import TableBodyRow from "../components/table/TableBodyRow";
import { TableBodyTypes } from "../types/tables";

import "../styles/table/table-body.css";

const TableBody: FC<{data: any[], body: TableBodyTypes}> = ({ data, body }) => {
  return (
    <tbody className="table__body">
      {data.map(note => <TableBodyRow key={note.id} data={note} structure={body} />)}
    </tbody>
  )
}

export default TableBody;