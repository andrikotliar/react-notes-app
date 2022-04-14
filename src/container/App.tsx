import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../hooks/useTypedSelector";
import { initStatistic } from "../store/action-creators/notes";

import notesTableStructure from "../data/notesTableStructure.json";
import statisticTableStructure from "../data/statisticTableStructure.json";

import Table from "./Table";
import Modal from "./Modal";
import CreateNoteButton from "../components/buttons/CreateNoteButton";

function App() {
  const { notes, statistic, categories } = useTypedSelector(state => state.notes);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initStatistic(categories, notes));
  }, [])

  const activeNotes = notes.filter(note => note.active);
  const reversedNotes = activeNotes.reverse();

  return (
    <>
      <div className="wrapper">
        <Table data={reversedNotes} structure={notesTableStructure} />
        <CreateNoteButton />
        {statistic.length && <Table data={statistic} structure={statisticTableStructure} /> }
      </div>
      <Modal />
    </>
  )
}

export default App;
