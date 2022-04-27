import {FC} from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { TableProps } from "../types/tables";

const Table: FC<TableProps> = ({data, structure}) => {
  const {headers, headerIcons, body} = structure;

  return (
    <div className="relative overflow-x-auto w-full mt-10 first:mt-0">
      <table className="w-full align-middle border-collapse">
        <TableHeader headers={headers} icons={headerIcons} />
        <TableBody data={data} body={body} />
      </table>
    </div>
  )
}

export default Table;