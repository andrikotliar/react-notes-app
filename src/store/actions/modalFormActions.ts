import { ModalFormActionTypes } from "../../types/modal-form";

export const setParamAction = (param: string, value: string) => ({
  type: ModalFormActionTypes.SET_PARAM,
  payload: {
    param,
    value
  }
});

export const changeCategoryAction = (title: string) => ({
  type: ModalFormActionTypes.CHANGE_CATEGORY,
  payload: title
});

export const clearModalFormData = () => ({
  type: ModalFormActionTypes.CLEAR_DATA
})