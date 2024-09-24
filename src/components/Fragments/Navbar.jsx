import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-10 py-3 bg-[#4678f3] text-white">
      <h1 className="font-bold">KLEDO TEST</h1>
      <div className="flex gap-5 align-middle cursor-pointer">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "bg-black rounded px-2" : "hover:underline"
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-black rounded px-2" : "hover:underline"
          }
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
