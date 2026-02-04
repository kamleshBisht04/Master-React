import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  //   console.log(state, action);
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown Action");
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleInc() {
    dispatch({ type: "inc" });
  }

  function handleDec() {
    dispatch({ type: "dec" });
  }

  function handleReset() {
    dispatch({ type: "reset" });
  }

  //  handleChnage fucntion
  const handleCountChange = (e) => {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const handleStepChange = (e) => {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };
  return (
    <>
      <div>
        <h1>Step Counter with controll Element.</h1>
        <input type="range" min="0" max="10" value={step} onChange={handleStepChange} />
        <span> Step : {step}</span>
      </div>

      <div>
        <button onClick={handleDec}>➖</button>
        <input type="text" value={count} onChange={handleCountChange} />
        <button onClick={handleInc}>➕</button>
      </div>

      <p>
        <span>
          {count === 0
            ? " Today is "
            : count > 0
              ? `${count} days from Today is `
              : `${Math.abs(count)} Days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
      ) : null}
    </>
  );
}

export default Counter;

// ===========   CONTROL ELEMENT E.TARGET.VALUE case 2    ===============

// import { useReducer, useState } from "react";

// function reducer(state, action) {
//   console.log(state, action);
//   if (action.type === "inc") return state + action.payload;
//   if (action.type === "dec") return state + action.payload;
//   if (action.type === "setCount") return action.payload;
//   if (action.type === "reset") return action.payload;
// }

// function Counter() {
//   //   const [count, setCount] = useState(0);
//   const [count, dispatch] = useReducer(reducer, 0);
//   const [step, setStep] = useState(1);

//   const date = new Date();
//   date.setDate(date.getDate() + count);

//   function handleInc() {
//     dispatch({ type: "inc", payload: 1 });
//   }

//   function handleDec() {
//     dispatch({ type: "dec", payload: -1 });
//   }

//   function handleReset() {
//     dispatch({ type: "reset", payload: 0 });
//     // setCount(0);
//     setStep(1);
//   }

//   //  handleChnage fucntion
//   const handleStepChange = (e) => {
//     setStep(Number(e.target.value));
//   };

//   const handleCountChange = (e) => {
//     dispatch({ type: "setCount", payload: Number(e.target.value) });
//   };
//   return (
//     <>
//       <div>
//         <h1>Step Counter with controll Element.</h1>
//         <input type="range" min="0" max="10" value={step} onChange={handleStepChange} />
//         <span> Step : {step}</span>
//       </div>

//       <div>
//         <button onClick={handleDec}>➖</button>
//         <input type="text" value={count} onChange={handleCountChange} />
//         <button onClick={handleInc}>➕</button>
//       </div>

//       <p>
//         <span>
//           {count === 0
//             ? " Today is "
//             : count > 0
//               ? `${count} days from Today is `
//               : `${Math.abs(count)} Days ago was `}
//         </span>
//         <span>{date.toDateString()}</span>
//       </p>

//       {count !== 0 || step !== 1 ? (
//         <button className="btn" onClick={handleReset}>
//           Reset
//         </button>
//       ) : null}
//     </>
//   );
// }

// export default Counter;
