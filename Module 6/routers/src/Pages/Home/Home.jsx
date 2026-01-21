import { useEffect, useState } from "react";

function Home() {
  const [name, setName] = useState("");

  function login(str) {
    console.log(str);
  }
  useEffect(
    function () {
      login("mounting");
      // cleaning function
      return () => login("unmounting");
    },
    [name],
  );
  return (
    <div>
      <h1>Home</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default Home;
