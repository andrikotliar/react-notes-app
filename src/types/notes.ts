export interface NoteType {
  id: number;
  title: string;
  created: string;
  category: string;
  content: string;
  active: boolean;
}

export interface NotesState {
  notes: NoteType[]
}

export enum NotesActionTypes {
  ADD_NOTE = "ADD_NOTE",
  ARCHIVE_NOTE = "ARCHIVE_NOTE",
  REMOVE_NOTE = "REMOVE_NOTE"
}

export interface AddNoteAction {
  type: NotesActionTypes.ADD_NOTE;
  payload: NoteType
}

export interface ArchiveNoteAction {
  type: NotesActionTypes.ARCHIVE_NOTE;
  payload: number
}

export interface RemoveNoteAction {
  type: NotesActionTypes.REMOVE_NOTE;
  payload: number
}

export type NotesAction = AddNoteAction | ArchiveNoteAction | RemoveNoteAction;