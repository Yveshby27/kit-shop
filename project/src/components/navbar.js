import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-link" : "nonActive-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/AboutUs"
            className={({ isActive }) =>
              isActive ? "active-link" : "non-active-link"
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ContactUs"
            className={({ isActive }) =>
              isActive ? "active-link" : "non-active-link"
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
