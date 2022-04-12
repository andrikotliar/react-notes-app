import { FC } from "react";
import { TableHeaderItem } from "../../types/tableInterfaces";
import TableHeaderCell from "./TableHeaderCell";

import "../../styles/table/table-header.css";

const TableHeader: FC<{headers: TableHeaderItem[]}> = ({headers}) => {
  return (
    <thead className="table__header">
      <tr>
        {headers.map((header, index) =>
          <TableHeaderCell key={index} header={header} />
        )}
      </tr>
    </thead>
  );
}

export default TableHeader;