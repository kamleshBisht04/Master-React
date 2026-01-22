import "../Admin/Users.css";
function Users({ user }) {
  console.log(user);
  return (
    <ul className="user_list">
      <li>{user.name}</li>
      <li>{user.email}</li>
      <li>{user.address.city}</li>
    </ul>
  );
}

export default Users;
