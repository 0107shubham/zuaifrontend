import React from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black h-[5vw] flex justify-between">
      <ul>
        <Link to="/" className="text-white text-4xl my-auto">
          StoryLoom
        </Link>
      </ul>

      <Link
        to="/admin"
        className="border-[2px] font-medium p-4 hover:scale-105 cursor-pointer  border-gray-600 text-white flex justify-center items-center gap-2 m-3"
      >
        Admin
        <FaPlus />
      </Link>
    </div>
  );
};

export default Navbar;
