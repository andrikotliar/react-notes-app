import notes from '../../data/notes.json';
import { NotesState, NotesActionTypes, DisplayNotesAction } from '../../types/notes';

const initialState : NotesState = {
  notes
}

export const notesReducer = (state = initialState, action: DisplayNotesAction) => {
  switch(action.type) {
    case NotesActionTypes.DISPLAY_NOTES:
      return {
        ...state,
        notes: action.payload
      }

    default:
      return state;
  }
}