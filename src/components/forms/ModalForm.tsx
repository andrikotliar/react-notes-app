import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { setParamAction } from "../../store/actions/modalFormActions";
import { getCurrentDate } from "../../utils/getCurrentDate";
import { generateUnicalID } from "../../utils/generateUnicalID";
import { getCategory } from "../../utils/getCategory";
import { NoteType } from "../../types/notes";

import ModalFormCategories from "./ModalFormCategories";
import SaveNoteButton from "../buttons/SaveNoteButton";

import "../../styles/forms/modal-form.css";

const ModalForm = () => {
  const dispatch = useDispatch();
  const { title, categories, content } = useTypedSelector(state => state.modalForm);

  const onValueChange = (param: string, value: string) => {
    dispatch(setParamAction(param, value));
  }

  const newNote : NoteType = {
    id: generateUnicalID(),
    title,
    created: getCurrentDate(),
    category: getCategory(categories),
    content,
    active: true
  }

  return (
    <form className="modal-form">
      <input type="text" value={title} placeholder="Write note title..." className="modal-form__title" onChange={(e) => onValueChange("title", e.target.value)} />
      <h3>Choose a category</h3>
      <ModalFormCategories categories={categories} />
      <textarea className="modal-form__content" value={content} placeholder="Write note text..." onChange={(e) => onValueChange("content", e.target.value)}></textarea>
      <SaveNoteButton note={newNote} />
    </form>
  )
}

export default ModalForm;