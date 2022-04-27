import { FC } from "react";
import { useDispatch } from "react-redux";
import { archiveNoteAction } from "../../store/actions/notesActions";

import archiveIcon from "../../images/icons/archive-icon.svg";

const TableArchiveButton : FC<{id: number}> = ({ id }) => {
  const dispatch = useDispatch();

  const onArchiveNote = (id: number) => {
    dispatch(archiveNoteAction(id));
  }

  return (
    <button onClick={ () => onArchiveNote(id)}>
      <img src={archiveIcon} alt="" />
    </button>
  )
}

export default TableArchiveButton;