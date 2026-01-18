import React from "react";
import TaskCard from "../TaskCard/TaskCard";
import DropArea from "../DragArea/DropArea";
import "./TaskColumnModule.css";
import todoIcon from "../../assets/todo.jpg";
import progressIcon from "../../assets/inprogress.jpg";
import testing from "../../assets/testing.png";
import doneIcon from "../../assets/check_mark_btn.png";

const columnIcons = {
  "Ready for Development": todoIcon,
  "Ready for test": testing,
  "In Progress": progressIcon,
  "Closed": doneIcon,
};

function TaskColumn({ title, tasks, status, onDeleteTask, onSetActiveCardId, onDropCard }) {
  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <section className="task_column">
      {columnIcons[status] && <img src={columnIcons[status]} alt={status} className="close_icon" />}

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
