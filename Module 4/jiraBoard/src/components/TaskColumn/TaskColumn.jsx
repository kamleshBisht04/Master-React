import "./TaskColumnModule.css";

function TaskColumn({ title, icon }) {
  return (
    <>
      <section className="task_column">
        <h2 className="task_column_heading">
          {icon && <span>{<img src={icon} alt="checked Button" className="checked_icon" />}</span>}
          {title}
        </h2>
      </section>
    </>
  );
}

export default TaskColumn;
