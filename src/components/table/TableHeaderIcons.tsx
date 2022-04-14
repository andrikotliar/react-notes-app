import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import archiveIcon from "../../images/icons/archive-icon-white.svg";
import removeIcon from "../../images/icons/remove-icon-white.svg";
import { showArchivedAction } from "../../store/actions/notesActions";

const TableHeaderIcons = () => {
  const dispatch = useDispatch();
  const { showArchive } = useTypedSelector(state => state.notes);

  const onShowArchived = () => {
    showArchive ?
      dispatch(showArchivedAction(false)) :
      dispatch(showArchivedAction(true))
  }

  return (
    <>
      <td>
        <button className="table-row__button" onClick={onShowArchived}>
          <img src={archiveIcon} alt="" />
        </button>
      </td>
      <td>
        <div className="table-row__icon">
          <img src={removeIcon} alt="" />
        </div>
      </td>
    </>
  )
}

export default TableHeaderIcons;