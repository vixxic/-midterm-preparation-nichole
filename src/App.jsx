import "./App.css";
import Navbar from "./components/Navbar";
import FormTask from "./components/FormTask";
import DisplayTaskList from "./components/DisplayTaskList";

function App() {
  return (
    <>
      <div className="app-body-outer">
        <div>
          <Navbar />
          <div className="body-task-con">
            <FormTask />
            <DisplayTaskList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
