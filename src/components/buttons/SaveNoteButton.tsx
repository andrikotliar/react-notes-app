import { FC, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { addNoteAction, editNoteAction } from "../../store/actions/notesActions";
import { closeModalAction } from "../../store/actions/modalActions";
import { clearModalFormData } from "../../store/actions/modalFormActions";

const SaveNoteButton : FC<{ note: {}, mode: string, id: number }> = ({ note, mode, id }) => {
  const dispatch = useDispatch();

  const onSaveNote = (event: MouseEvent) => {
    event.preventDefault();
    if(mode === "save") {
      dispatch(addNoteAction(note));
    }
    if(mode === "update") {
      dispatch(editNoteAction(id, note));
    }
    dispatch(closeModalAction());
    dispatch(clearModalFormData());
  }

  return (
    <button
      className="modal-form__save"
      onClick={onSaveNote}
    >
      Save note
    </button>
  )
}

export default SaveNoteButton;