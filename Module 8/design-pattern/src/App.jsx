import "./App.css";
import UserContainer from "./container/UserContainer";
import { Routes, Route } from "react-router-dom";
import useWindowResize from "./hooks/useWindowResize";
import userAuth from "./hoc/userAuth";
import Dashboard from "./components/Dashboard";
import UserProfile from "./components/UserProfile";

const ProtectedDashboard = userAuth(Dashboard);
const ProtectedProfile = userAuth(UserProfile);

function App() {
  const { width, height } = useWindowResize();

  return (
    <>
      <h1>Design Pattern</h1>

      <UserContainer />

      <h2 className="UserList">
        Window size : {width} x {height}
      </h2>

      <hr />

      <Routes>
        <Route path="/" element={<div>HOC Component and Welcome to Login Page</div>} />
        <Route path="/dashboard" element={<ProtectedDashboard name="Ajay" />} />
        <Route path="/userprofile" element={<ProtectedProfile />} />
      </Routes>
    </>
  );
}

export default App;
