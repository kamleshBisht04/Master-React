import TaskCard from "../TaskCard/TaskCard";
import "./TaskColumnModule.css";

function TaskColumn({ title, icon, tasks, status, onDeleteTask }) {
  return (
    <>
      <section className="task_column">
        <h2 className="task_column_heading">
          {icon && <span>{<img src={icon} alt="checked Button" className="checked_icon" />}</span>}
          {title}
        </h2>
        {tasks.map(
          (task) =>
            task.status === status && (
              <TaskCard
                key={task.id}
                title={task.query}
                tags={task.tags}
                onDeleteTask={onDeleteTask}
                id={task.id}
              />
            )
        )}
      </section>
    </>
  );
}

export default TaskColumn;
