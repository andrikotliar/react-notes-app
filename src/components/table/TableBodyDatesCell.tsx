import { FC } from "react";

const TableBodyDatesCell : FC<{content: string}> = ({ content }) => {

  const reg = /\d{1,4}[\/.]\d{1,2}[\/.]\d{1,4}/g;
  const dates = content.match(reg);

  let datesString : string = "";

  if(dates) {
    datesString = dates.join(", ");
  }

  return (
    <td>
      {datesString}
    </td>
  )
}

export default TableBodyDatesCell;