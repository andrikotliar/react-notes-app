import { ModalState, ModalAction, ModalActionTypes } from "../../types/modal"

const initialState : ModalState = {
  modal: false
}

export const modalReducer = (state = initialState, action: ModalAction) : ModalState => {
  switch(action.type) {
    case ModalActionTypes.SHOW_MODAL:
      document.body.style.overflow = "hidden";
      return {
        ...state,
        modal: true
      }
    case ModalActionTypes.HIDE_MODAL:
      document.body.style.overflow = "";
      return initialState
    default:
      return state;
  }
}