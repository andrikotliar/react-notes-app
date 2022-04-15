import { FC, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { addNoteAction, editNoteAction } from "../../store/actions/notesActions";
import { closeModalAction } from "../../store/actions/modalActions";
import { clearModalFormData } from "../../store/actions/modalFormActions";
import { SaveNoteType } from "../../types/notes";
import { validateParams } from "../../utils/validateParams";

interface Props {
  note: SaveNoteType;
  mode: string;
  id: number;
  errors: (field: string) => void;
}

const SaveNoteButton : FC<Props> = ({ note, mode, id, errors }) => {
  const dispatch = useDispatch();

  const onSaveNote = (event: MouseEvent) => {
    event.preventDefault();

    const isTitleValide = validateParams("title", note.title);

    if(isTitleValide) {
      if(mode === "save") {
        dispatch(addNoteAction(note));
      }
      if(mode === "update") {
        dispatch(editNoteAction(id, note));
      }
      dispatch(closeModalAction());
      dispatch(clearModalFormData());
    }

    if(!isTitleValide) {
      errors("title");
    }
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