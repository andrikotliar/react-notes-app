import { FC } from "react";
import TableBodyRow from "../components/table/TableBodyRow";
import { TableBodyTypes } from "../types/tables";

const TableBody: FC<{data: any[], body: TableBodyTypes}> = ({ data, body }) => {

  return (
    <tbody>
      {data.map(item => <TableBodyRow key={item.id} data={item} structure={body} />)}
    </tbody>
  )
}

export default TableBody;