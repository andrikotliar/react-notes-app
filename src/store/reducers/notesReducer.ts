import notes from "../../data/notes.json";
import { NotesState, NotesActionTypes, NotesAction, NoteType } from '../../types/notes';

const initialState : NotesState = {
  notes
}

export const notesReducer = (state = initialState, action: NotesAction) : NotesState => {
  switch(action.type) {
    case NotesActionTypes.ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          action.payload
        ]
      }
    case NotesActionTypes.ARCHIVE_NOTE:
      const copyNotes = [...state.notes];
      const archivedNote = copyNotes.find(
        note => note.id == action.payload
      );

      if(archivedNote) archivedNote.active = false;

      return {
        ...state,
        notes: copyNotes
      }
    case NotesActionTypes.REMOVE_NOTE:
      const filteredNotes = state.notes.filter(note =>
        note.id !== action.payload
      );

      return {
        ...state,
        notes: filteredNotes
      }
    default:
      return state;
  }
}