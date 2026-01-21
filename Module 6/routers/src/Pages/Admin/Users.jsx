import "../Admin/Users.css";
function Users({ user }) {
    console.log(user)
  return (
    <div className="user">
      <ul>
        <img src={user.img}/>
        <li>{user.name}</li>
        <li>{user.email}</li>
      </ul>
    </div>
  );
}

export default Users;
