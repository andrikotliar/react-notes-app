import { FC } from "react";
import { TableHeaderItem } from "../types/tables";

import TableHeaderCell from "../components/table/TableHeaderCell";
import TableHeaderIcons from "../components/table/TableHeaderIcons";

const TableHeader: FC<{headers: TableHeaderItem[], icons: boolean}> = ({headers, icons}) => {
  return (
    <thead className="text-white font-bold bg-cyan-600">
      <tr className="border-b-8 border-white">
        {headers.map((header, index) =>
          <TableHeaderCell key={index} header={header} />
        )}
        {icons && <TableHeaderIcons />}
      </tr>
    </thead>
  );
}

export default TableHeader;