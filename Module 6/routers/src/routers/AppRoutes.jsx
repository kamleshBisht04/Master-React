import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Articles from "../Pages/Articles/Articles";
import Admin from "../Pages/Admin/Admin";
import Contact from "../Pages/Contact/Contact";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Product" element={<Products />} />
      <Route path="/Articles" element={<Articles />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
