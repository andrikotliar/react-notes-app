import { ModalState, ModalAction, ModalActionTypes } from "../../types/modal"

const initialState : ModalState = {
  modal: false,
  mode: "save",
  id: 0
}

export const modalReducer = (state = initialState, action: ModalAction) : ModalState => {
  switch(action.type) {
    case ModalActionTypes.SHOW_MODAL:
      document.body.style.overflow = "hidden";
      return {
        modal: true,
        mode: action.payload.mode,
        id: action.payload.id
      }
    case ModalActionTypes.HIDE_MODAL:
      document.body.style.overflow = "";
      return initialState
    default:
      return state;
  }
}