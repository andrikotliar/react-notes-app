export interface ModalState {
  modal: boolean
}

export enum ModalActionTypes {
  SHOW_MODAL = "SHOW_MODAL",
  HIDE_MODAL = "HIDE_MODAL"
}

export interface ShowModalAction {
  type: ModalActionTypes.SHOW_MODAL
}

export interface HideModalAction {
  type: ModalActionTypes.HIDE_MODAL
}

export type ModalAction = ShowModalAction | HideModalAction;