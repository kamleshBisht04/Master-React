import React, { useState } from "react";

const ToDoLIst = () => {
  let task = 0;
  const [count, setcount] = useState(task);

  // function countTask() {
  //   return task !== 0 ? task : "There is no task";
  // }

  function handleInc(e) {
    e.preventDefault();
    setcount((c) => c + 1);
  }

  return (
    <>
      <h1>Hello Card Components </h1>
      <p>{`Task count Details : ${count !== 0 ? count : "There is no task"}`}</p>
      <h2 onChange={(e) => e.target.value}> Task : {count} </h2>

      <button onClick={handleInc}>Click me</button>
    </>
  );
};

export default ToDoLIst;
