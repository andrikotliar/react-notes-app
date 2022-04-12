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
  DISPLAY_NOTES = "DISPLAY_NOTES",
  ADD_NOTE = "ADD_NOTE",
  ARCHIVE_NOTE = "ARCHIVE_NOTE",
  REMOVE_NOTE = "REMOVE_NOTE"
}

export interface DisplayNotesAction {
  type: NotesActionTypes.DISPLAY_NOTES;
  payload: Array<NoteType>
}