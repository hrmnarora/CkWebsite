import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export const Navlink = ({ text, address, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname == address;
  return (
    <div className="group relative">
      <NavLink onClick={onClick} to={`${address}`} activeClassName="active" className="text-white  py-2">
        {text}
      </NavLink>
      <div className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-[1px] bg-gradient-to-r from-black via-blue-300 to-black transition-all duration-300 ease-in-out group-hover:w-full ${isActive && "w-full"}`}></div>
      
    </div>
  );
};
