import "./TaskCardModule.css";
import deleteIcon from "../../assets/delete-button.png";
import Tags from "../Tags/Tags";

function TaskCard() { 
  return (
    <article className="taskCard_details">
      <p className="card-title">This is simple text</p>
      <div className="card-tasks">
        <div className="card_tags">
          <Tags profile="DEV" />
          <Tags profile="QA" />
        </div>
        <div className="card-delete-icon">
          <img src={deleteIcon} alt="delete button" className="delete_btn" />
        </div>
      </div>
    </article>
  );
}

export default TaskCard;
