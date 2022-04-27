import { FC } from "react";
import { useDispatch } from "react-redux";
import { removeNoteAction } from "../../store/actions/notesActions";

import removeIcon from "../../images/icons/remove-icon.svg";

const TableRemoveButton : FC<{ id: number }> = ({ id }) => {
  const dispatch = useDispatch();

  const onRemoveNote = (id: number) => {
    dispatch(removeNoteAction(id));
  }

  return (
    <button onClick={ () => onRemoveNote(id)}>
      <img src={removeIcon} alt="" />
    </button>
  )
}

export default TableRemoveButton;