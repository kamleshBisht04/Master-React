import React from "react";
import TaskCard from "../TaskCard/TaskCard";
import DropArea from "../DragArea/DropArea";
import "./TaskColumnModule.css";

function TaskColumn({ title, tasks, status, onDeleteTask, onSetActiveCardId, onDropCard }) {
  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <section className="task_column">
      <h2>{title}</h2>

      <DropArea onDrop={() => onDropCard(status, 0)} />

      {filteredTasks.map((task, index) => (
        <React.Fragment key={task.id}>
          <TaskCard
            id={task.id}
            title={task.query}
            tags={task.tags}
            onDeleteTask={onDeleteTask}
            onSetActiveCardId={onSetActiveCardId}
          />

          <DropArea onDrop={() => onDropCard(status, index + 1)} />
        </React.Fragment>
      ))}
    </section>
  );
}

export default TaskColumn;
