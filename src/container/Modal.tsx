import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { closeModalAction } from "../store/actions/modalActions";

import ModalForm from "../components/forms/ModalForm";

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
        <div className="modal__content">
          <ModalForm />
          <button aria-label="Close the modal" className="modal__close" onClick={onCloseModal}>
            ✖
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;