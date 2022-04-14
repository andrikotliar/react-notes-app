export interface CategoryType {
  title: string;
  checked: boolean;
}

export interface ModalFormState {
  title: string;
  categories: CategoryType[];
  content: string;
}

export enum ModalFormActionTypes {
  SET_PARAM = "SET_PARAM",
  CHANGE_CATEGORY = "CHANGE_CATEGORY",
  CLEAR_DATA = "CLEAR_DATA"
}

export interface setParamPayload {
  param: string;
  value: string;
}

export interface SetParamAction {
  type: ModalFormActionTypes.SET_PARAM,
  payload: setParamPayload
}

export interface ChangeCategoryAction {
  type: ModalFormActionTypes.CHANGE_CATEGORY,
  payload: string
}

export interface ClearDataAction {
  type: ModalFormActionTypes.CLEAR_DATA
}

export type ModalFormAction = SetParamAction | ChangeCategoryAction | ClearDataAction;