import { combineReducers } from "redux";
import { notesReducer } from "./notesReducer";
import { modalReducer } from "./modalReducer";

export const rootReducer = combineReducers({
  notes: notesReducer,
  modal: modalReducer
});

export type RootState = ReturnType<typeof rootReducer>