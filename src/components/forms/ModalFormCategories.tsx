import { FC } from "react";
import { useDispatch } from "react-redux";
import { changeCategoryAction } from "../../store/actions/modalFormActions";
import { CategoryType } from "../../types/modal-form";

const ModalFormCategories : FC<{categories: CategoryType[]}> = ({ categories }) => {
  const dispatch = useDispatch();

  const onChangeCategory = (title: string) => {
    dispatch(changeCategoryAction(title))
  }

  return (
    <div className="modal-form__categories">
      {categories.map(category =>
        <label className="modal-form__category" key={category.title}>
          <input type="radio" value={category.title} name="category" className="note-category-input" checked={category.checked} onChange={() => onChangeCategory(category.title)}/>
          <span>{category.title}</span>
        </label>
      )}
    </div>
  )
}

export default ModalFormCategories;