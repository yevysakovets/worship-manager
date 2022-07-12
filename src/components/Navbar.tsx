import React from "react";
import Library from "./Library";
import Schedule from "./Schedule";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="library">Library</Link>
        </li>
        <li>
          <Link to="schedule">Schedule</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
