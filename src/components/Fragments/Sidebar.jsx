import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    Cookies.remove("access_token");
    navigate("/login");
  };

  return (
    <>
      <aside className="flex flex-col justify-between w-[20%] bg-[#f8f8f8] px-10 py-3">
        <div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faHouse} />
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "py-3 cursor-pointer text-blue-400"
                  : "py-3 cursor-pointer"
              }
            >
              <h1>Dashboard</h1>
            </NavLink>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faTruck} />
            <NavLink
              to="/shipping-comps"
              className={({ isActive }) =>
                isActive ? "cursor-pointer text-blue-400" : "cursor-pointer"
              }
            >
              <h1>Shipping Comps</h1>
            </NavLink>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faRightFromBracket} />
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "cursor-pointer text-blue-400" : "cursor-pointer"
            }
          >
            <h1 onClick={handleSignOut}>Logout</h1>
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
