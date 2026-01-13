import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    // console.log(data);
    setAdvice((advice) => data.slip.advice);
    setCount((c) => c + 1);
  }
  // useEffect hook
  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="advice-section">
      <h1 className="advice-Box">{advice}</h1>
      <button className="btn-Advice" onClick={getAdvice}>
        Get Advice
      </button>
      <Message count={count} />
    </div>
  );
}

function Message({ count }) {
  return (
    <h2>
      <p>
        You have read <strong>{count}</strong> pieces of advice. 
      </p>
    </h2>
  );
}

export default App;
