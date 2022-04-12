import notesTableStructure from "../data/notesTableStructure.json";
import ContainerTable from "../container/ContainerTable";

function App() {
  return (
    <div className="wrapper">
      <ContainerTable structure={notesTableStructure} />
    </div>
  )
}

export default App;
