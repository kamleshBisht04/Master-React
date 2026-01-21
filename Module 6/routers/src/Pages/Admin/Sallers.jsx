import { useEffect, useState } from "react";

function Sallers() {
  const [users, setUsers] = useState([]);

  useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1> Admin Sallers</h1>

      {users.map((user) => (
        <ul key={user.id}>
          <li>
            <p>{user.name}</p>
          </li>
          <li>
            <p>{user.email}</p>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Sallers;
