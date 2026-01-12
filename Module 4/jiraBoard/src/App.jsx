import "./App.css";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import TaskForm from "./components/taskForm/TaskForm";
import tickButton from "../src/assets/check_mark_btn.png";

function App() {
  return (
    <div className="app">
      <h1>Jira Board</h1>
      <TaskForm />
      <div className="app_main">
        <TaskColumn title="Ready for Devlopment" />
        <TaskColumn title="In Progress" />
        <TaskColumn title="Ready for test" />
        <TaskColumn title="Closed" icon={tickButton} />
      </div>
    </div>
  );
}

export default App;
