import { FC } from "react";
import TableBodyRow from "../components/table/TableBodyRow";
import { NoteType } from "../types/notes";

import "../styles/table/table-body.css";

const TableBody: FC<{notes: NoteType[]}> = ({ notes }) => {
  return (
    <tbody className="table__body">
      {notes.map(note => <TableBodyRow key={note.id} data={note} />)}
    </tbody>
  )
}

export default TableBody;