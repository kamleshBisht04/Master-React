import "./TaskCardModule.css";
import deleteIcon from "../../assets/delete-button.png";
import Tags from "../Tags/Tags";

function TaskCard({ title, tags, onDeleteTask, id, onSetActiveCardId }) {
  return (
    <article
      className="taskCard_details"
      draggable
      onDragStart={(e) => {
        onSetActiveCardId(id);
        e.dataTransfer.setData("text/plain", id);
      }}
      onDragEnd={() => onSetActiveCardId(null)}
    >
      <p className="card-title">{title}</p>

      <div className="card-tasks">
        <div className="card_tags">
          {tags.map((tag, index) => (
            <Tags key={index} profile={tag} isSelected />
          ))}
        </div>

        <img
          src={deleteIcon}
          alt="delete"
          className="delete_btn"
          onClick={() => onDeleteTask(id)}
        />
      </div>
    </article>
  );
}

export default TaskCard;
