import "../Admin/Users.css";
function Users({ user, onDeleteUser }) {
  // console.log(user);

  return (
    <ul className="user_list">
      <li>{user.name}</li>
      <li>{user.email}</li>
      <li>{user.address.city}</li>
      <li>
        <button onClick={() => onDeleteUser(user.id)}> ❌ Delete</button>
      </li>
    </ul>
  );
}

export default Users;
