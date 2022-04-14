import { ModalFormState, ModalFormAction, ModalFormActionTypes } from "../../types/modal-form"

const initialState : ModalFormState = {
  title: "",
  categories: [
    {
      title: "Idea",
      checked: false
    },
    {
      title: "Task",
      checked: true
    },
    {
      title: "Random Thought",
      checked: false
    }
  ],
  content: ""
}

export const modalFormReducer = (state = initialState, action : ModalFormAction) : ModalFormState => {
  switch(action.type) {
    case ModalFormActionTypes.SET_PARAM:
      return {
        ...state,
        [action.payload.param]: action.payload.value
      }
    case ModalFormActionTypes.CHANGE_CATEGORY:
      const updatedCategory = state.categories.map(c => (
        {
          title: c.title,
          checked: c.title === action.payload ? true : false
        })
      );
      return {
        ...state,
        categories: updatedCategory
      }
    case ModalFormActionTypes.CLEAR_DATA:
      return initialState
    default:
      return state;
  }
}