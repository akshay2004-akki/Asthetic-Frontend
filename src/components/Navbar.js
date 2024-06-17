import React from "react";
import logo from "../images/ans-130sq.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav style={{ padding: "20px" }}>
        <div className="flex justify-around" style={{ alignItems: "center" }}>
          <div className="logo">
            <img src={logo} alt="ANS Logo" />
          </div>
          <div className="menus flex justify-evenly" style={{ width: "35%" }}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-orange-700" : "text-grey-700"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/features"
              className={({ isActive }) =>
                `${isActive ? "text-orange-700" : "text-grey-700"}`
              }
            >
              Features
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "text-orange-700" : "text-grey-700"}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/whyans"
              className={({ isActive }) =>
                `${isActive ? "text-orange-700" : "text-grey-700"}`
              }
            >
              Why choose ANS
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `${isActive ? "text-orange-700" : "text-grey-700"}`
              }
            >
              Blogs
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
