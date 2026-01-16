import TaskCard from "../TaskCard/TaskCard";
import "./TaskColumnModule.css";

function TaskColumn({ title, icon, tasks, status }) {
  return (
    <>
      <section className="task_column">
        <h2 className="task_column_heading">
          {icon && <span>{<img src={icon} alt="checked Button" className="checked_icon" />}</span>}
          {title}
        </h2>
        {tasks.map(
          (task, index) =>
            task.status === status && <TaskCard key={index} title={task.query} tags={task.tags} />
        )}
      </section>
    </>
  );
}

export default TaskColumn;
