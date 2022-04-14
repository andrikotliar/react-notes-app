import { FC, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { addNoteAction } from "../../store/actions/notesActions";
import { NoteType } from "../../types/notes";
import { closeModalAction } from "../../store/actions/modalActions";
import { clearModalFormData } from "../../store/actions/modalFormActions";

const SaveNoteButton : FC<{ note: NoteType }> = ({ note }) => {
  const dispatch = useDispatch();

  const onSaveNote = (event: MouseEvent) => {
    event.preventDefault();
    dispatch(addNoteAction(note));
    dispatch(closeModalAction());
    dispatch(clearModalFormData());
  }

  return (
    <button
      id="save-note"
      className="modal-form__save save-note"
      onClick={onSaveNote}
    >
      Save note
    </button>
  )
}

export default SaveNoteButton;