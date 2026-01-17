import "./TaskCardModule.css";
import deleteIcon from "../../assets/delete-button.png";
import Tags from "../Tags/Tags";

function TaskCard({ title, tags, onDeleteTask, id, onSetActiveCardId }) {
  return (
    <article
      className="taskCard_details"
      draggable
      onDragStart={() => onSetActiveCardId(id)}
      onDragEnd={() => onSetActiveCardId(null)}
    >
      <p className="card-title">{title}</p>
      <div className="card-tasks">
        <div className="card_tags">
          {tags.map((tag, index) => (
            <Tags profile={tag} key={index} isSelected />
          ))}
        </div>
        <div className="card-delete-icon">
          <img
            src={deleteIcon}
            alt="delete button"
            className="delete_btn"
            onClick={() => onDeleteTask(id)}
          />
        </div>
      </div>
    </article>
  );
}

export default TaskCard;
