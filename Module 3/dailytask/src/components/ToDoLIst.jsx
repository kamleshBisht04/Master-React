import React, { useState } from "react";

const ToDoLIst = () => {
  const style = {
    color: "orange",
    fontSize: "3rem",
    fontWeight: "500",
    padding: "5px",
    borderRadius: "15px",
  };

  // const isDisable = true; // attribute

  let task = 0;
  const [count, setCount] = useState(task);
  const [text, setText] = useState("Welcome to React ...");
  
  // function countTask() {
  //   return task !== 0 ? task : "There is no task";
  // }
  function handleInc(e) {
    e.preventDefault();
    console.log("clicked ...");
    setCount((c) => c + 1);
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input type="text" onChange={handleChange} />
      <p style={style}>{text}</p>

      <h1
        style={{ color: "red", backgroundColor: "#ffffff", padding: "8px", borderRadius: "12px" }}
      >
        Hello Card Components
      </h1>
      <p>{`Task count Details : ${count !== 0 ? count : "There is no task"}`}</p>
      <h2 onChange={(e) => e.target.value}> Task : {count} </h2>

      <button onClick={handleInc}>Click me</button>
    </>
  );
};

export default ToDoLIst;
