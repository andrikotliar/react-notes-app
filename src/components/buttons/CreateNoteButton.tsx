import { useDispatch } from "react-redux";
import { showModalAction } from "../../store/actions/modalActions";

import "../../styles/buttons/create-note-button.css";

const CreateNoteButton = () => {
  const dispatch = useDispatch();

  const onShowModal = () => {
    dispatch(showModalAction())
  }

  return (
    <button className="create-note" onClick={onShowModal}>
      Create Note
    </button>
  )
}

export default CreateNoteButton;