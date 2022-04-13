import { FC } from "react";
import { useDispatch } from "react-redux";
import { NoteType } from "../../types/notes";
import { archiveNoteAction, removeNoteAction } from "../../store/actions/notesActions";

import TableBodyIconCell from "./TableBodyIconCell";
import TableBodyDatesCell from "./TableBodyDatesCell";

import editIcon from "../../images/icons/edit-icon.svg";
import archiveIcon from "../../images/icons/archive-icon.svg";
import removeIcon from "../../images/icons/remove-icon.svg";

import "../../styles/table/table-body-row.css";

const TableBodyRow : FC<{data: NoteType}> = ({ data }) => {
  const dispatch = useDispatch();
  const onArchiveNote = (id: number) => {
    dispatch(archiveNoteAction(id))
  }

  const onRemoveNote = (id: number) => {
    dispatch(removeNoteAction(id))
  }

  return (
    <tr className="table__row table-row">
      <TableBodyIconCell category={data.category} />
      <td className="table-row__title">
        {data.title}
      </td>
      <td className="table-row__date">
        {data.created}
      </td>
      <td className="table-row__category">
        {data.category}
      </td>
      <td className="table-row__content">
        {data.content}
      </td>
      <TableBodyDatesCell content={data.content} />
      <td>
        <button className="table-row__button table-row__edit">
          <img src={editIcon} alt="" />
        </button>
      </td>
      <td>
        <button className="table-row__button table-row__archive" onClick={ () => onArchiveNote(data.id)}>
          <img src={archiveIcon} alt="" />
        </button>
      </td>
      <td>
        <button className="table-row__button table-row__remove" onClick={ () => onRemoveNote(data.id)}>
          <img src={removeIcon} alt="" />
        </button>
      </td>
    </tr>
  )
}

export default TableBodyRow;