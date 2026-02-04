import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleInc() {
    setCount((c) => c + step);
  }

  function handleDec() {
    setCount((c) => c - step);
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const handleStep = (e) => {
    setStep(Number(e.target.value));
  };

  const handleCount = (e) => {
    setStep(Number(e.target.value));
  };
  return (
    <>
      <div>
        <h1>Step Counter with controll Element.</h1>
        <input type="range" min="0" max="10" value={step} onChange={handleStep} />
        <span> Step : {step}</span>
      </div>

      <div>
        <button onClick={handleDec}>➖</button>
        <input type="text" value={count} onChange={handleCount} />
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

// ===========================================================================================

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

//   const date = new Date();
//   date.setDate(date.getDate() + count);

//   function handleReset() {
//     setCount(0);
//     setStep(1);
//   }

//   return (
//     <>
//       <div>
//         <h1>Step Counter with controll Element.</h1>
//         <input
//           type="range"
//           min="0"
//           max="10"
//           value={step}
//           onChange={(e) => setStep(+e.target.value)}
//         />
//         <span> Step : {step}</span>
//       </div>

//       <div>
//         <button onClick={(c) => setCount((c) => c - step)}>➖</button>
//         <input type="text" value={count} onChange={(e) => setCount(Number(e.target.value))} />
//         <button onClick={(c) => setCount((c) => c + step)}>➕</button>
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

// ************************************************
// ************************************************

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

//   const date = new Date();

//   date.setDate(date.getDate() + count);
//   return (
//     <>
//       <h1>Step counter</h1>
//       <div className="section">
//         <button onClick={() => setStep((c) => c - 1)}>➖</button>
//         <span>Step : {step}</span>
//         <button onClick={() => setStep((c) => c + 1)}>➕</button>
//       </div>

//       <div className="section">
//         <button onClick={() => setCount((c) => c - step)}>➖</button>
//         <span>Count : {count}</span>
//         <button onClick={() => setCount((c) => c + step)}>➕</button>
//       </div>

//       <p>
//         <span>
//           {count === 0
//             ? "Today is "
//             : count > 0
//             ? `${count} days from Today is `
//             : `${Math.abs(count)} Days ago was `}
//         </span>
//         <span>{date.toDateString()}</span>
//       </p>
//     </>
//   );
// }
