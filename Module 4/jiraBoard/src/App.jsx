import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import TaskForm from "./components/taskForm/TaskForm";

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
  });

  const [activeCardId, setActiveCardId] = useState(null);

  function handleCardDrop(status, index) {
    if (!activeCardId) return;

    setTasks((prev) => {
      const draggedTask = prev.find((task) => task.id === activeCardId);
      if (!draggedTask) return prev;

      const filtered = prev.filter((task) => task.id !== activeCardId);

      const updatedTask = {
        ...draggedTask,
        status,
      };

      filtered.splice(index, 0, updatedTask);
      return filtered;
    });

    setActiveCardId(null);
  }

  function handleDeleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const STATUS = ["Ready for Development", "In Progress", "Ready for test", "Closed"];

  return (
    <div className="app">
      <h1>Jira Board</h1>

      <TaskForm setTasks={setTasks} />

      <main className="app_main">
        {STATUS.map((status) => (
          <TaskColumn
            key={status}
            title={status}
            status={status}
            tasks={tasks}
            onDeleteTask={handleDeleteTask}
            onSetActiveCardId={setActiveCardId}
            onDropCard={handleCardDrop}
          />
        ))}
      </main>
    </div>
  );
}

export default App;





