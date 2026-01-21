import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Product">Products</NavLink>
        </li>
        <li>
          <NavLink to="/Articles">Articles</NavLink>
        </li>
        <li>
          <NavLink to="/Admin">Admin</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
