import React from "react";
import { NavLink } from "react-router-dom";

function Products() {
  return (
    <div>
      <h1>Products</h1>

      <ul>
        <li>
          <NavLink to="/product/1">product 1</NavLink>
        </li>
        <li>
          <NavLink to="/product/2"> product 2 </NavLink>
        </li>
        <li>
          <NavLink to="/product/3"> product 3</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Products;
