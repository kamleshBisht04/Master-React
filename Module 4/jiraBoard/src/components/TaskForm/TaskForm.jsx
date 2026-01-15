import { useState } from "react";
import "./TaskFormModule.css";
import Tags from "../Tags/Tags";

function TaskForm() {
  const [taskData, setTaskData] = useState({
    query: "",
    status: "Ready for Devlopment",
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  function handleSelectedTag(tag) {
    if (taskData.tags.some((tags) => tags === tag)) {
      const uniqueTag = taskData.tags.filter((tags) => tags !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: uniqueTag };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(taskData);
  }

  // console.log(taskData);

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          onChange={handleChange}
          className="task_input"
          placeholder="Enter Task Details"
        />
        <div className="task_action">
          <div className="btn_section">
            <Tags profile={"DEV"} onSelectedTag={handleSelectedTag} />
            <Tags profile={"QA"} onSelectedTag={handleSelectedTag} />
            <Tags profile={"Product Owner"} onSelectedTag={handleSelectedTag} />
          </div>
          <div className="action_section">
            <select name="status" onChange={handleChange} className="task_status">
              <option value="Ready for Devlopment">Ready for Devlopment</option>
              <option value="In Progress">In Progress</option>
              <option value="Ready for test">Ready for test</option>
              <option value="Closed">Closed</option>
            </select>
            <button className="btn-submit">
              <span>+</span>Add
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}

export default TaskForm;
