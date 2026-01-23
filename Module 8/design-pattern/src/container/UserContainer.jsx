import UserList from "../components/UserList";
import Loader from "../common/Loader";
import "../container/UserContainer.css";
import useFetch from "../hooks/useFetch";


function UserContainer() {
  const { isLoading, users, errors } = useFetch();
 
  return (
    <>
      <div className="UserList">
        {isLoading && <Loader />}
        {errors && <h2>{errors}</h2>}
        {users.map((user) => (
          <UserList user={user} key={user.id} />
        ))}
      </div>
    
     
    </>
  );
}

export default UserContainer;
