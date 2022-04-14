import { FC } from "react";
import { TableHeaderItem } from "../../types/tables";

const TableHeaderCell : FC<{header: TableHeaderItem}> = ({header}) => {

  if(header.type == "empty") {
    return <td></td>
  }

  return <td>{header.title}</td>
}

export default TableHeaderCell;