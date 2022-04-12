import {FC} from "react";
import TableHeader from "../components/table/TableHeader";
import { TableStructure } from "../types/tableInterfaces";

import "../styles/table/table.css";

const ContainerTable: FC<{structure: TableStructure}> = ({structure}) => {
  const {specificClass, headers} = structure;
  return (
    <table className={`table ${specificClass}`}>
      <TableHeader headers={headers} />
      <tbody></tbody>
    </table>
  )
}

export default ContainerTable;