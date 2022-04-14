import { CategoryType } from "../types/modal-form";

export const getCategory = (categories : CategoryType[]) : string => {
  let selectedCategory = "";

  for(let category of categories) {
    if(category.checked) {
      selectedCategory = category.title;
    }
  }

  return selectedCategory;
}