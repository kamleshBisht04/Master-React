import { useEffect, useState } from "react";

export const FuctinalComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(function () {
    console.log(`mounting phase ${count}`);
  }, []);

  useEffect(function () {
    console.log(`mounting phase ${count}`);

   return ()=> console.log(`unmounting phase ${count}`);
  }, [count]);

  return (
    <div>
      {console.log("render")}
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add by 1</button>
    </div>
  );
};
