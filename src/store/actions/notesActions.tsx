import { NotesActionTypes } from "../../types/notes";

export const archiveNoteAction = (id: number) => ({
  type: NotesActionTypes.ARCHIVE_NOTE,
  payload: id
});

export const removeNoteAction = (id: number) => ({
  type: NotesActionTypes.REMOVE_NOTE,
  payload: id
});