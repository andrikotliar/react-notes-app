import notes from "../../data/notes.json";
import { NotesState, NotesActionTypes, NotesAction } from '../../types/notes';
import { updatedStatistic } from "../../utils/updateStatistic";

const initialState : NotesState = {
  notes,
  categories: ["Idea", "Task", "Random Thought"],
  statistic: []
}

export const notesReducer = (state = initialState, action: NotesAction) : NotesState => {
  switch(action.type) {
    case NotesActionTypes.ADD_NOTE:
      return {
        ...state,
        statistic: updatedStatistic(
          state.categories,
          [...state.notes, action.payload]
        ),
        notes: [
          ...state.notes,
          action.payload
        ]
      }
    case NotesActionTypes.ARCHIVE_NOTE:
      const copyNotesForArchive = [...state.notes];
      const archivedNote = copyNotesForArchive.find(
        note => note.id == action.payload
      );

      if(archivedNote) archivedNote.active = false;

      return {
        ...state,
        statistic: updatedStatistic(
          state.categories,
          copyNotesForArchive
        ),
        notes: copyNotesForArchive
      }
    case NotesActionTypes.EDIT_NOTE:
      return {
        ...state
      }
    case NotesActionTypes.REMOVE_NOTE:
      const filteredNotes = state.notes.filter(note =>
        note.id !== action.payload
      );

      return {
        ...state,
        statistic: updatedStatistic(
          state.categories,
          filteredNotes
        ),
        notes: filteredNotes
      }
    case NotesActionTypes.INIT_STATISTIC:
      return {
        ...state,
        statistic: action.payload
      }
    default:
      return state;
  }
}