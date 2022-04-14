export interface ModalState {
  modal: boolean,
  mode: string,
  id: number
}

export enum ModalActionTypes {
  SHOW_MODAL = "SHOW_MODAL",
  HIDE_MODAL = "HIDE_MODAL"
}

export interface ShowModalAction {
  type: ModalActionTypes.SHOW_MODAL,
  payload: {
    mode: string,
    id: number
  }
}

export interface HideModalAction {
  type: ModalActionTypes.HIDE_MODAL
}

export type ModalAction = ShowModalAction | HideModalAction;