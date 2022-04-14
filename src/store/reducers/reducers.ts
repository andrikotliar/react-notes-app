import { combineReducers } from "redux";
import { notesReducer } from "./notesReducer";
import { modalReducer } from "./modalReducer";
import { modalFormReducer } from "./modalFormReducer";

export const rootReducer = combineReducers({
  notes: notesReducer,
  modal: modalReducer,
  modalForm: modalFormReducer
});

export type RootState = ReturnType<typeof rootReducer>