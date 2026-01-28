import { useState } from "react";
import ClassComponent from "../src/components/ClassComponent";
import { FuctinalComponent } from "./components/FuctinalComponent";
import { UseState } from "./hooks/UseState";
import MyUseEffect from "./hooks/MyUseEffect";
function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>React Hooks</h1>
      {/* <ClassComponent /> */}
      <hr></hr>
      <button onClick={() => setShow(!show)}>show and hide functonal components</button>
      {/* {show && <FuctinalComponent />} */}
      <hr></hr>
      {/* <UseState/> */}
      <hr></hr>
       <MyUseEffect/>
    </div>
  );
}

export default App;
