import "./App.css";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import TaskForm from "./components/taskForm/TaskForm";
import tickButton from "../src/assets/check_mark_btn.png";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="app">
      <h1>Jira Board</h1>
      <TaskForm setTasks={setTasks} />
      <div className="app_main">
        <TaskColumn title="Ready for Development" tasks={tasks} status="Ready for Development" />
        <TaskColumn title="In Progress" tasks={tasks} status="In Progress" />
        <TaskColumn title="Ready for test" tasks={tasks} status="Ready for test" />
        <TaskColumn title="Closed" icon={tickButton} tasks={tasks} status="Closed" />
      </div>
    </div>
  );
}

export default App;
