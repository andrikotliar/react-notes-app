import { FC } from "react";

import TableArchiveButton from "../buttons/TableArchiveButton";
import TableEditButton from "../buttons/TableEditButton";
import TableRemoveButton from "../buttons/TableRemoveButton";

interface TableButtonsProps {
  id: number,
  title: string;
  content: string;
  category: string;
}

const TableBodyButtonCells : FC<TableButtonsProps> = ({ id, title, content, category }) => {
  return (
    <>
      <td>
        <TableEditButton
          title={title}
          content={content}
          category={category}
        />
      </td>
      <td>
        <TableArchiveButton id={id} />
      </td>
      <td>
        <TableRemoveButton id={id} />
      </td>
    </>
  );
}

export default TableBodyButtonCells;