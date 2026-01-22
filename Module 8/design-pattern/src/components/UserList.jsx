import "../components/UserList";
import "../components/UserList.css";

function UserList({ user }) {
  const { first_name, last_name, email, avatar, id } = user;
  return (
    <div className="user-list">
      <ul>
        <div className="avatar">
          <img src={avatar} alt={first_name} />
        </div>
        <div>
          <li>Name : {first_name + " " + last_name}</li>
          <li>Email :{email}</li>
          <li>Id :{id}</li>
        </div>
      </ul>
    </div>
  );
}

export default UserList;
