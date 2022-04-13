import notesTableStructure from "../data/notesTableStructure.json";
import { useTypedSelector } from "../hooks/useTypedSelector";

import Table from "../container/Table";
import CreateNoteButton from "../components/buttons/CreateNoteButton";
import Modal from "../container/Modal";

function App() {
  const { notes } = useTypedSelector(state => state.notes);

  return (
    <>
      <div className="wrapper">
        <Table notes={notes} structure={notesTableStructure} />
        <CreateNoteButton />
      </div>
      <Modal />
    </>
  )
}

export default App;
