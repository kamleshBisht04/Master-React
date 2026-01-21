import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Articles</a>
        </li>
        <li>
          <a href="/">Admin</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
