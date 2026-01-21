import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Articles from "../Pages/Articles/Articles";
import Admin from "../Pages/Admin/Admin";
import Contact from "../Pages/Contact/Contact";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import SingleProduct from "../Pages/Products/SingleProduct";
import Sales from "../Pages/Admin/Sales";
import Sallers from "../Pages/Admin/Sallers";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Products />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/articles" element={<Articles />} />

      <Route path="/admin" element={<Admin />}>

        <Route path="sales" element={<Sales />} />
        <Route path="sallers" element={<Sallers />} />
        
      </Route>

      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
