import { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { setParamAction } from "../../store/actions/modalFormActions";
import { getCurrentDate } from "../../utils/getCurrentDate";
import { generateUnicalID } from "../../utils/generateUnicalID";
import { getCategory } from "../../utils/getCategory";

import ModalFormCategories from "./ModalFormCategories";
import SaveNoteButton from "../buttons/SaveNoteButton";

import "../../styles/forms/modal-form.css";

const ModalForm : FC<{ mode: string, id: number }> = ({ mode, id }) => {
  const dispatch = useDispatch();
  const { title, categories, content } = useTypedSelector(state => state.modalForm);

  const onValueChange = (param: string, value: string) => {
    dispatch(setParamAction(param, value));
  }

  let note = {};

  if(mode === "save") {
    note = {
      id: generateUnicalID(),
      title: title === "" ? "No title" : title,
      created: getCurrentDate(),
      category: getCategory(categories),
      content: content === "" ? "No content" : content,
      active: true
    }
  }

  if(mode === "update") {
    note = {
      title: title === "" ? "No title" : title,
      category: getCategory(categories),
      content: content === "" ? "No content" : content
    }
  }

  return (
    <form className="modal-form">
      <input type="text" value={title} placeholder="Write note title..." className="modal-form__title" onChange={(e) => onValueChange("title", e.target.value)} />
      <h3>Choose a category</h3>
      <ModalFormCategories categories={categories} />
      <textarea className="modal-form__content" value={content} placeholder="Write note text..." onChange={(e) => onValueChange("content", e.target.value)}></textarea>
      <SaveNoteButton note={note} mode={mode} id={id} />
    </form>
  )
}

export default ModalForm;