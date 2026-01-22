import "../Admin/Users.css";
function Users({ user, onDeleteUser, onUpdate }) {
  // console.log(user);

  return (
    <ul className="user_list">
      <table>
        <tbody>
          <td>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.address.city}</li>
            <td>
              <li>
                <button onClick={() => onDeleteUser(user.id)}> ❌ Delete</button>
              </li>
            </td>
            <td>
              <li>
                <button onClick={() => onUpdate(user)}> ✅Update</button>
              </li>
            </td>
          </td>
        </tbody>
      </table>
    </ul>
  );
}

export default Users;
