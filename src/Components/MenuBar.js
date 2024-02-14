import React from "react";
import { Link } from "react-router-dom";
import "./MenuBar.css";

function MenuBar() {
  return (
    <div className="menu-bar">
      <nav>
        <ul>
          <li>
            <Link to="/UserLogin">Login</Link>
          </li>
          <li>
            <Link to="/RegisterUser">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuBar;
