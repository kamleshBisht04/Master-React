import React from "react";
import TaskCard from "../TaskCard/TaskCard";
import "./TaskColumnModule.css";
import DropArea from "../DragArea/DropArea";

function TaskColumn({ title, icon, tasks, status, onDeleteTask, setActiveCard }) {
  return (
    <>
      <section className="task_column ">
        <h2 className="task_column_heading">
          {icon && <span>{<img src={icon} alt="checked Button" className="checked_icon" />}</span>}
          {title}
        </h2>
        <DropArea />
        {tasks.map(
          (task) =>
            task.status === status && (
              <React.Fragment key={task.id}>
                <TaskCard
                  key={task.id}
                  title={task.query}
                  tags={task.tags}
                  onDeleteTask={onDeleteTask}
                  id={task.id}
                  setActiveCard={setActiveCard}
                />
                <DropArea />
              </React.Fragment>
            )
        )}
      </section>
    </>
  );
}

export default TaskColumn;
