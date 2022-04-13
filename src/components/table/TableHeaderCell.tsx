import { FC } from "react";
import { TableHeaderItem } from "../../types/tables";

const TableHeaderCell : FC<{header: TableHeaderItem}> = ({header}) => {

  if(header.type == "empty") {
    return <td></td>
  }

  if(header.type == "icon") {
    return (
      <td>
        <img src={header.iconSrc} alt="" />
      </td>
    )
  }

  return <td>{header.title}</td>
}

export default TableHeaderCell;