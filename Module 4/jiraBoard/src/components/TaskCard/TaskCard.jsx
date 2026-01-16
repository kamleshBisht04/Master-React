import "./TaskCardModule.css";
import deleteIcon from "../../assets/delete-button.png";
import Tags from "../Tags/Tags";

function TaskCard({ title, tags }) {
  return (
    <article className="taskCard_details">
      <p className="card-title">{title}</p>
      <div className="card-tasks">
        <div className="card_tags">
          {tags.map((tag, index) => (
            <Tags profile={tag} key={index} isSelected />
          ))}
        </div>
        <div className="card-delete-icon">
          <img src={deleteIcon} alt="delete button" className="delete_btn" />
        </div>
      </div>
    </article>
  );
}

export default TaskCard;
