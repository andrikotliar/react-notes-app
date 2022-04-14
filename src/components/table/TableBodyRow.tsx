import { FC } from "react";
import { NoteType } from "../../types/notes";
import { TableBodyTypes } from "../../types/tables";

import TableBodyIconCell from "./TableBodyIconCell";
import TableBodyTextCell from "./TableBodyTextCell";
import TableBodyDatesCell from "./TableBodyDatesCell";
import TableBodyButtonCells from "./TableBodyButtonCells";

import "../../styles/table/table-body-row.css";

const TableBodyRow : FC<{data: NoteType, structure: TableBodyTypes}> = ({ data, structure }) => {
  return (
    <tr className="table__row table-row">
      {structure.icons && <TableBodyIconCell category={data.category} />}
      <TableBodyTextCell
        textFields={structure.textFields}
        data={data}
      />
      {structure.dates && <TableBodyDatesCell content={data.content} /> }
      {structure.buttons &&
        <TableBodyButtonCells
          id={data.id}
          title={data.title}
          content={data.content}
          category={data.category}
        />
      }
    </tr>
  )
}

export default TableBodyRow;