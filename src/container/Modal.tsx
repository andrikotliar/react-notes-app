import { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { closeModalAction } from "../store/actions/modalActions";

import "../styles/modal/modal.css";

const Modal = () => {
  const { modal } = useTypedSelector(state => state.modal);
  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(closeModalAction());
  }

  if(!modal) {
    return null;
  }

  return (
    <div className="modal" id="modal">
      <div className="modal__overlay">
        <div className="note-popup">
          <input type="text" placeholder="Write note title..." className="note-popup__title" />
          <h3>Choose a category</h3>
          <div className="note-popup__categories">
            <label className="note-popup__category">
              <input type="radio" value="Task" name="category" className="note-category-input" checked={true} />
              <span>Task</span>
            </label>
            <label className="note-popup__category">
              <input type="radio" value="Idea" name="category" className="note-category-input" />
              <span>Idea</span>
            </label>
            <label className="note-popup__category">
              <input type="radio" value="Random Thought" name="category" className="note-category-input" />
              <span>Random Thought</span>
            </label>
          </div>
          <textarea className="note-popup__content" placeholder="Write note text..."></textarea>
          <button id="save-note" className="note-popup__save save-note">
            Save note
          </button>
          <button aria-label="Close modal" className="note-popup__close" onClick={onCloseModal}>
            ✖
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;