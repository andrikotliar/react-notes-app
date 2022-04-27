import { FC } from "react";
import { NoteType } from "../../types/notes";

const TableBodyTextCell : FC<{textFields: string[], data: NoteType}> = ({ textFields, data }) => {

  const renderClassName = (field: string) : string => {
    if(field === "title") {
      return "font-bold";
    }
    if(field === "content") {
      return "font-normal w-[400px]";
    }
    return "font-normal";
  }

  return (
    <>
      {textFields.map((field, index) =>
        <td key={index} className={renderClassName(field)}>
          {data[field as keyof NoteType]}
        </td>
      )}
    </>
  );
}

export default TableBodyTextCell;