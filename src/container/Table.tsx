import {FC} from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { TableProps } from "../types/tables";

import "../styles/table/table.css";

const Table: FC<TableProps> = ({notes, structure}) => {
  const {specificClass, headers} = structure;

  const activeNotes = notes.filter(note => note.active);
  const reversedNotes = activeNotes.reverse();

  return (
    <table className={`table ${specificClass}`}>
      <TableHeader headers={headers} />
      <TableBody notes={reversedNotes} />
      <tbody></tbody>
    </table>
  )
}

export default Table;