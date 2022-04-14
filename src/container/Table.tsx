import {FC} from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { TableProps } from "../types/tables";

import "../styles/table/table.css";

const Table: FC<TableProps> = ({data, structure}) => {
  const {specificClass, headers, body} = structure;

  return (
    <table className={`table ${specificClass}`}>
      <TableHeader headers={headers} />
      <TableBody data={data} body={body} />
    </table>
  )
}

export default Table;