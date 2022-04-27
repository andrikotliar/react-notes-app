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
    <div className="flex flex-wrap gap-2 mb-3">
      {categories.map(category =>
        <label className="flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-sm cursor-pointer" key={category.title}>
          <input type="radio" value={category.title} name="category" checked={category.checked} onChange={() => onChangeCategory(category.title)}/>
          <span>{category.title}</span>
        </label>
      )}
    </div>
  )
}

export default ModalFormCategories;