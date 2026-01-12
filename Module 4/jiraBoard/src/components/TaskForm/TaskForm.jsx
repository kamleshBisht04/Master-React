import Tag from "../tags/Tag";
import "./TaskFormModule.css";
function TaskForm() {
  return (
    <header className="app_header">
      <form>
        <input type="text" className="task_input" placeholder="Enter Task Details" />
        <div className="task_action">
          <div className="btn_section">
            <Tag profile={"DEV"}/>
            <Tag profile={"QA"} />
            <Tag profile={"Product Owner"}/>
          </div>
          <div className="action_section">
            <select className="task_status">
              <option value="Ready for Devlopment">Ready for Devlopment</option>
              <option value="In Progress">In Progress</option>
              <option value="Ready for test">Ready for test</option>
              <option value="Closed">Closed</option>
            </select>
            <button type="submit" className="btn-submit">
              + Add
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}

export default TaskForm;
