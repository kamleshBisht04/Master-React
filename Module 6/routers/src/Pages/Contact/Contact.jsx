import { useEffect, useState } from "react";
import Users from "../Admin/Users";
import axios from "axios";
import "./Contact.css";
import Loader from "../../common/Loader";
function Contact() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);

        console.log("ye to pakka chalaga last me ");
      }
    };
    fetchUserData();
  }, []);

  // post request
  const handleUser = async () => {
    try {
      const newUser = {
        name,
        email: `${name}@gmail.com`,
        address: { city: "Delhi" },
      };

      const res = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);

      setUsers((prev) => [res.data, ...prev]);
      setName("");
    } catch (error) {
      setError(error.message);
    }
  };

  // onDelete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleUser}>Add new user</button>
      </div>
      <h1>Contact us</h1>
      {isLoading && <Loader />}
      {error && <em>{error}</em>}
      <div className="User-container">
        {users.map((user) => (
          <Users user={user} key={user.id} onDeleteUser={handleDelete} />
        ))}
      </div>
    </div>
  );
}
export default Contact;

// without async and await
//  useEffect(function () {
//     setIsLoading(true);
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         setUsers(res.data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setIsLoading(false);
//       });
//   }, []);
