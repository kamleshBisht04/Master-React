import UserList from "../components/UserList";
import Loader from "../common/Loader";
import "../container/UserContainer.css";
import useFetch from "../hooks/useFetch";
import useWindowResize from "../hooks/useWindowResize";

function UserContainer() {
  const { isLoading, users, errors } = useFetch();
  const { width, height } = useWindowResize();
  console.log(width, height);
  return (
    <>
      <div className="UserList">
        {isLoading && <Loader />}
        {errors && <h2>{errors}</h2>}
        {users.map((user) => (
          <UserList user={user} key={user.id} />
        ))}
      </div>
      <h2 className="UserList">
        window size : width {width} x height {height}
      </h2>
    </>
  );
}

export default UserContainer;
