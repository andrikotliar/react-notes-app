import { FC, useRef } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { setParamAction } from "../../store/actions/modalFormActions";
import { getCurrentDate } from "../../utils/getCurrentDate";
import { generateUnicalID } from "../../utils/generateUnicalID";
import { getCategory } from "../../utils/getCategory";
import { SaveNoteType } from "../../types/notes";

import ModalFormCategories from "./ModalFormCategories";
import SaveNoteButton from "../buttons/SaveNoteButton";

const ModalForm : FC<{ mode: string, id: number }> = ({ mode, id }) => {
  const dispatch = useDispatch();
  const { title, categories, content } = useTypedSelector(state => state.modalForm);

  const titleInput = useRef<HTMLInputElement>(null);

  const onValueChange = (param: string, value: string) => {
    dispatch(setParamAction(param, value));
  }

  const validationError = (field : string) => {
    if(titleInput && titleInput.current && field === "title") {
      titleInput.current.focus();
    }
  }

  let note : SaveNoteType = {
    title,
    category: getCategory(categories),
    content
  };

  if(mode === "save") {
    note.id = generateUnicalID()
    note.created = getCurrentDate();
    note.active = true;
  }

  return (
    <form className="w-full">
      <input type="text" value={title} ref={titleInput} placeholder="Write note title..." className="input w-full p-2 mb-3" onChange={(e) => onValueChange("title", e.target.value)} />
      <h3 className="text-stone-500 text-base mb-2">Choose a category</h3>
      <ModalFormCategories categories={categories} />
      <textarea className="input w-full h-[250px] p-2 mb-3 resize-none mt-5" value={content} placeholder="Write note text..." onChange={(e) => onValueChange("content", e.target.value)}></textarea>
      <SaveNoteButton note={note} mode={mode} id={id} errors={validationError} />
    </form>
  )
}

export default ModalForm;