import React from "react";
import Library from "./Library";
import Schedule from "./Schedule";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/library"></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
