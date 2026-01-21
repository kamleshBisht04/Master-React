import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routers/AppRoutes";
import "./App.css";

function App() {
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="main">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
