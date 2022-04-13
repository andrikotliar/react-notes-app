import { ModalState, ModalAction, ModalActionTypes } from "../../types/modal"

const initialState : ModalState = {
  modal: false
}

export const modalReducer = (state = initialState, action: ModalAction) : ModalState => {
  switch(action.type) {
    case ModalActionTypes.SHOW_MODAL:
      return {
        ...state,
        modal: true
      }
    case ModalActionTypes.HIDE_MODAL:
      return initialState
    default:
      return state;
  }
}