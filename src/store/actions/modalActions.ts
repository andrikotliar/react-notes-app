import { ModalActionTypes } from "../../types/modal";

export const showModalAction = (mode: string, id: number) => ({
  type: ModalActionTypes.SHOW_MODAL,
  payload: {
    mode,
    id
  }
})

export const closeModalAction = () => ({
  type: ModalActionTypes.HIDE_MODAL
})