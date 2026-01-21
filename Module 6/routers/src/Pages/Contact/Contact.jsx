import { useState, useEffect } from "react";
import axios from "axios";
import Users from "../Admin/Users";
import "./Contact.css";
function Contact() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => setUsers(res.data));
  }, []);
  return (
    <div>
      <h1>Contact us</h1>
      <div className="User-container">
        {users.map((user) => (
          <Users user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}
export default Contact;
