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
        <div className="list">
          <li>
            Name : <strong>{first_name + " " + last_name}</strong>
          </li>
          <li>Email :{email}</li>
          <li>Id :{id}</li>
        </div>
      </ul>
    </div>
  );
}

export default UserList;
