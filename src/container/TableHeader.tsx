import { FC } from "react";
import { TableHeaderItem } from "../types/tables";

import TableHeaderCell from "../components/table/TableHeaderCell";
import TableHeaderIcons from "../components/table/TableHeaderIcons";

import "../styles/table/table-header.css";

const TableHeader: FC<{headers: TableHeaderItem[], icons: boolean}> = ({headers, icons}) => {
  return (
    <thead className="table__header">
      <tr>
        {headers.map((header, index) =>
          <TableHeaderCell key={index} header={header} />
        )}
        {icons && <TableHeaderIcons />}
      </tr>
    </thead>
  );
}

export default TableHeader;