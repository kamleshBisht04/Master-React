import Tag from "../tags/Tag";
import "./TaskCardModule.css";
import deleteIcon from "../../assets/delete-button.png";

function TaskCard() { 
  return (
    <article className="taskCard_details">
      <p className="card-title">This is simple text</p>
      <div className="card-tasks">
        <div className="card_tags">
          <Tag profile="DEV" />
          <Tag profile="QA" />
        </div>
        <div className="card-delete-icon">
          <img src={deleteIcon} alt="delete button" className="delete_btn" />
        </div>
      </div>
    </article>
  );
}

export default TaskCard;
