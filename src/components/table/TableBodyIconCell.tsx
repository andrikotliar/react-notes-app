import { FC } from "react";

import taskIcon from "../../images/icons/task-icon.svg";
import ideaIcon from "../../images/icons/idea-icon.svg";
import randomThoughtIcon from "../../images/icons/random-thought-icon.svg";

const IconTableCell : FC<{icon: string}> = ({icon}) => (
  <td className="table-row__category-icon">
    <img src={icon} alt="" />
  </td>
);

const TableBodyIconCell : FC<{category: string}> = ({ category }) => {

  switch(category) {
    case "Idea":
      return (
        <IconTableCell icon={ideaIcon} />
      );
    case "Random Thought":
      return (
        <IconTableCell icon={randomThoughtIcon} />
      )
    default:
      return (
        <IconTableCell icon={taskIcon} />
      )
  }
}

export default TableBodyIconCell;