import notes from "../../data/notes.json";
import { NotesState, NotesActionTypes, NotesAction } from '../../types/notes';
import { updatedStatistic } from "../../utils/updateStatistic";

const initialState : NotesState = {
  notes,
  categories: ["Idea", "Task", "Random Thought"],
  statistic: [],
  showArchive: false
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
        note => note.id === action.payload
      );

      if(archivedNote) {
        archivedNote.active = !archivedNote.active
      };

      return {
        ...state,
        statistic: updatedStatistic(
          state.categories,
          copyNotesForArchive
        ),
        notes: copyNotesForArchive
      }
    case NotesActionTypes.EDIT_NOTE:
      const copyNotesForEdit = [...state.notes];
      const newData = action.payload.data;
      const noteForEdit = copyNotesForEdit.find(
        note => note.id === action.payload.id
      );

      if(noteForEdit) {
        noteForEdit.title = newData.title;
        noteForEdit.content = newData.content;
        noteForEdit.category = newData.category;
      }
      return {
        ...state,
        statistic: updatedStatistic(
          state.categories,
          copyNotesForEdit
        ),
        notes: copyNotesForEdit
      }
    case NotesActionTypes.INIT_STATISTIC:
      return {
        ...state,
        statistic: action.payload
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
    case NotesActionTypes.SHOW_ARCHIVED:
      const copyNotesForShowArchived = [...state.notes];
      return {
        ...state,
        notes: copyNotesForShowArchived,
        showArchive: action.payload
      }
    default:
      return state;
  }
}