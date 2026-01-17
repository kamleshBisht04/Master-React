import "./App.css";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import TaskForm from "./components/taskForm/TaskForm";
import tickButton from "../src/assets/check_mark_btn.png";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
  });

  const [activeCardId, setActiveCardId] = useState(null);

  console.log(activeCardId);

  function handleDeleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app">
      <h1>Jira Board</h1>
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="Ready for Development"
          tasks={tasks}
          status="Ready for Development"
          onDeleteTask={handleDeleteTask}
          onSetActiveCardId={setActiveCardId}
        />
        <TaskColumn
          title="In Progress"
          tasks={tasks}
          status="In Progress"
          onDeleteTask={handleDeleteTask}
          onSetActiveCardId={setActiveCardId}
        />
        <TaskColumn
          title="Ready for test"
          tasks={tasks}
          status="Ready for test"
          onDeleteTask={handleDeleteTask}
          onSetActiveCardId={setActiveCardId}
        />
        <TaskColumn
          title="Closed"
          icon={tickButton}
          tasks={tasks}
          status="Closed"
          onDeleteTask={handleDeleteTask}
          onSetActiveCardId={setActiveCardId}
        />
      </main>
      <h2>Active card :{activeCardId}</h2>
    </div>
  );
}

export default App;
