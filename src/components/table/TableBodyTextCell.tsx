import { FC } from "react";
import { NoteType } from "../../types/notes";

const TableBodyTextCell : FC<{textFields: string[], data: NoteType}> = ({ textFields, data }) => {
  return (
    <>
      {textFields.map((field, index) =>
        <td key={index} className={`table-row__${field}`}>
          {data[field as keyof NoteType]}
        </td>
      )}
    </>
  );
}

export default TableBodyTextCell;