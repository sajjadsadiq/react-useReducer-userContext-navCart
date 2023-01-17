import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";

const Navbar = () => {
  return (
    <nav style={{display: "flex", justifyContent: "space-between", background: "#f2f2f2", padding: "30px 40px", borderRadius: "10px"}}>
      {/* Logo */}
      <h1>JaboTech</h1>

      <ul style={{display: "flex", gap: "50px", listStyle: "none"}}>
        {/* Menu Item */}
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/top-rated">Top Rated</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li title="Wishlist" className="bg-indigo-500 p-2 rounded-full">
          <Link to="/">
            <IoIosListBox className="text-white" />
          </Link>
        </li>
        <li title="cart" className="bg-indigo-500 p-2 rounded-full">
          <Link to="/cart">
            <BsFillCartFill className="text-white " />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
