import { FC } from "react";
import { TableHeaderItem } from "../types/tables";
import TableHeaderCell from "../components/table/TableHeaderCell";

import "../styles/table/table-header.css";

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