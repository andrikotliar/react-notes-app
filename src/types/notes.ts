export interface NoteType {
  id: number;
  title: string;
  created: string;
  category: string;
  content: string;
  active: boolean;
}

export interface StatisticType {
  id: number;
  category: string;
  activeNotes: number;
  archivedNotes: number;
}

export interface NotesState {
  notes: NoteType[];
  categories: string[];
  statistic: StatisticType[]
}

export enum NotesActionTypes {
  ADD_NOTE = "ADD_NOTE",
  ARCHIVE_NOTE = "ARCHIVE_NOTE",
  EDIT_NOTE = "EDIT_NOTE",
  REMOVE_NOTE = "REMOVE_NOTE",
  INIT_STATISTIC = "INIT_STATISTIC"
}

export interface AddNoteAction {
  type: NotesActionTypes.ADD_NOTE;
  payload: NoteType
}

export interface ArchiveNoteAction {
  type: NotesActionTypes.ARCHIVE_NOTE;
  payload: number
}

export interface EditNoteAction {
  type: NotesActionTypes.EDIT_NOTE;
  payload: number
}

export interface RemoveNoteAction {
  type: NotesActionTypes.REMOVE_NOTE;
  payload: number
}

export interface InitiStatisticAction {
  type: NotesActionTypes.INIT_STATISTIC;
  payload: any[]
}

export type NotesAction = AddNoteAction | ArchiveNoteAction | EditNoteAction | RemoveNoteAction | InitiStatisticAction;