import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { Authcontext } from "../../Context/AuthContext";

const Navbar = () => {
  const { user, Logout } = use(Authcontext);
  const links = (
    <>
      <NavLink className="mr-3" to={"/"}>
        Home
      </NavLink>
      <NavLink className="mr-3" to={"/allProducts"}>All products</NavLink>
      {/* <NavLink to={"/career"}>Career</NavLink> */}
      {user ? (
        <>
          <NavLink className="mr-3" to={"/myproducts"}>
            My products
          </NavLink>
          <NavLink className="mr-3" to={"/mybids"}>
            My Bids{" "}
          </NavLink>
        </>
      ) : (
        ""
      )}
    </>
  );
  const handleLogout = () => {
    Logout()
      .then(() => {
        alert("Are you sure to want logout?");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Smart Deals</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary">
            Logout
          </button>
        ) : (
          <Link to={"/login"} className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
