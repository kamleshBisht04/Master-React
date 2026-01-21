import { Link, Navigate, Outlet } from "react-router-dom";

function Admin() {
  const user = {
    role: "user",
  };

  if (user.role !== "admin") {
    return <Navigate to="/" />;

  }
  return (
    <div>
      <h1>Admin</h1>

      <ul>
        <li>
          <Link to="/admin/sales">sales</Link>
        </li>
        <li>
          <Link to="/admin/sallers">Seller</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Admin;
