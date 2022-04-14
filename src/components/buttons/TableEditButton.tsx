import { FC } from "react";
import { useDispatch } from "react-redux";
import { showModalAction } from "../../store/actions/modalActions";
import { setParamAction, changeCategoryAction } from "../../store/actions/modalFormActions";

import editIcon from "../../images/icons/edit-icon.svg";

interface TableEditButtonProps {
  id: number,
  title: string,
  content: string,
  category: string
}

const TableEditButton : FC<TableEditButtonProps> = ({ id, title, content, category }) => {
  const dispatch = useDispatch();

  const onEditNote = (title: string, content: string, category: string) => {
    dispatch(showModalAction("update", id));
    dispatch(setParamAction("title", title));
    dispatch(setParamAction("content", content));
    dispatch(changeCategoryAction(category));
  }

  return (
    <button className="table-row__button table-row__edit" onClick={() => onEditNote(title, content, category)}>
      <img src={editIcon} alt="" />
    </button>
  )
}

export default TableEditButton;