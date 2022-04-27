import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { closeModalAction } from "../store/actions/modalActions";

import closeIcon from "../images/icons/close-icon.svg";

import ModalForm from "../components/forms/ModalForm";

const Modal = () => {
  const { modal, mode, id } = useTypedSelector(state => state.modal);
  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(closeModalAction());
  }

  if(!modal) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full" id="modal">
      <div className="flex justify-center items-center w-full h-full bg-black/80">
        <div className="relative bg-white rounded-sm md:min-w-[450px] max-w-[90%] max-h-[90%] overflow-y-auto p-7 pt-12">
          <ModalForm mode={mode} id={id} />
          <button aria-label="Close the modal" className="absolute w-6 h-6 top-2.5 right-5 text-2xl border-none bg-transparent cursor-pointer" onClick={onCloseModal}>
            <img src={closeIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;