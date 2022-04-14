import { NotesActionTypes, NoteType } from "../../types/notes";
import { StatisticType } from "../../types/notes";

export const addNoteAction = (note: NoteType) => ({
  type: NotesActionTypes.ADD_NOTE,
  payload: note
});

export const archiveNoteAction = (id: number) => ({
  type: NotesActionTypes.ARCHIVE_NOTE,
  payload: id
});

export const editNoteAction = (id: number) => ({
  type: NotesActionTypes.EDIT_NOTE,
  payload: id
});

export const initStatisticAction = (data : StatisticType[]) => ({
  type: NotesActionTypes.INIT_STATISTIC,
  payload: data
});

export const removeNoteAction = (id: number) => ({
  type: NotesActionTypes.REMOVE_NOTE,
  payload: id
});
