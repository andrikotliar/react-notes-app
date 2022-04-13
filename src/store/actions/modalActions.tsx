import { ModalActionTypes } from "../../types/modal";

export const showModalAction = () => ({
  type: ModalActionTypes.SHOW_MODAL
})

export const closeModalAction = () => ({
  type: ModalActionTypes.HIDE_MODAL
})