import { useDispatch } from "react-redux";
import { showModalAction } from "../../store/actions/modalActions";

const CreateNoteButton = () => {
  const dispatch = useDispatch();

  const onShowModal = () => {
    dispatch(showModalAction("save", 0))
  }

  return (
    <button className="btn" onClick={onShowModal}>
      Create Note
    </button>
  )
}

export default CreateNoteButton;