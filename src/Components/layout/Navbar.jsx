import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle =
    "px-4 py-2 rounded-lg text-sm font-medium transition";

  const activeStyle =
    "bg-blue-600 text-white";

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600">
        SkillPath
      </h1>

      {/* Links */}
      <div className="flex gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkStyle} ${
              isActive
                ? activeStyle
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/assessment"
          className={({ isActive }) =>
            `${linkStyle} ${
              isActive
                ? activeStyle
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          Assessment
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${linkStyle} ${
              isActive
                ? activeStyle
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          Dashboard
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
