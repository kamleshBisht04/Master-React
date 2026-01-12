import "./App.css";
import TaskForm from "./components/taskForm/TaskForm";

function App() {
  return (
    <div className="app">
      <h1>Jira Board</h1>
       <TaskForm/>
      <div className="app_main">
        <section className="task_column">Section 1</section>
        <section className="task_column">Section 2</section>
        <section className="task_column">Section 3</section>
        <section className="task_column">Section 4</section>
      </div>
    </div>
  );
}

export default App;
