import { NotesActionTypes } from "../../types/notes";
import { StatisticType } from "../../types/notes";

export const addNoteAction = (note: {}) => ({
  type: NotesActionTypes.ADD_NOTE,
  payload: note
});

export const archiveNoteAction = (id: number) => ({
  type: NotesActionTypes.ARCHIVE_NOTE,
  payload: id
});

export const editNoteAction = (id: number, data: {}) => ({
  type: NotesActionTypes.EDIT_NOTE,
  payload: {
    id,
    data
  }
});

export const initStatisticAction = (data : StatisticType[]) => ({
  type: NotesActionTypes.INIT_STATISTIC,
  payload: data
});

export const removeNoteAction = (id: number) => ({
  type: NotesActionTypes.REMOVE_NOTE,
  payload: id
});

export const showArchivedAction = (status: boolean) => ({
  type: NotesActionTypes.SHOW_ARCHIVED,
  payload: status
});
