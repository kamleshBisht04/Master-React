import { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../components/UserList"
import Loader from "../common/Loader";
import "../container/UserContainer.css";
function UserContainer() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("https://reqres.in/api/users?page=1", {
          headers: {
            "x-api-key": "reqres_df8cda2fa7244c8dbb553fd9d02cfea1",
          },
        });
        setUsers(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        setErrors(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="UserList">
      {isLoading && <Loader/> }
      {errors && <h2>{errors}</h2>}
      {users.map((user) => (
        <UserList  user={user} key={user.id}/>
      ))}
    </div>
  );
}

export default UserContainer;
