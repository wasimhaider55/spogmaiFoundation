import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Button } from "./Button";
import { Dropdown, Drop } from "./Dropdown";
import logoo from "../../assets/logoo.png";
import { NavMenu } from "./NavMenu";
import { Header } from "../../components";
import SideBar from "../sideBar/SideBar";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Navbar = () => {
  const token = Cookies.get("token");
  console.log("is testing token available: ", token);
  // React Hooks
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [drop, setDrop] = useState(false);

  const handleLogout = () => {
    Cookies.remove("token");
    window.location.reload()
    toast.success("logout successfully", { autoClose: 1000 });
  };

  const handleClick = () => {
    setNav(!nav);
  };

  const onMouseEnter = () => {
    setDropdown("true");
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };
  const onMouseEnter1 = () => {
    setDrop("true");
  };

  const onMouseLeave1 = () => {
    setDrop(false);
  };

  const click = () => {
    setDropdown(false);
  };
  const click1 = () => {
    setDrop(false);
  };

  return (
    <>
      <Header />

      <nav className="flex justify-between items-center sticky top-0 px-4 w-full h-14 sm:h-20 text-white bg-[#004d73] z-10">
        {/* navBar brand or logo */}

        <div className="lg:flex gap-5 items-center w-80">
          {/* side bar components import here  */}

          {token && <SideBar />}

          <div>
            <img
              src={logoo}
              alt="LogoImage"
              className=" h-[6rem] sm:h-[7rem] pb-2 md:ml-5 mt-2"
            />
          </div>
        </div>

        {/* navBar Links started */}
        <ul className="hidden md:flex justify-center text-gray-300 font-semibold">
          <li
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            className="px-4 cursor-pointer capitalize 
            hover:scale-101  duration-200 hover:underline"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white underline" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            className=" px-4 cursor-pointer capitalize 
            hover:scale-101  duration-200 hover:underline"
          >
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive ? "text-white underline" : ""
              }
            >
              About Us
            </NavLink>
          </li>

          <li
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            className="px-4 cursor-pointer capitalize 
            hover:scale-101  duration-200 hover:underline"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={click}
          >
            <NavLink
              to="/OurActivities"
              className={({ isActive }) =>
                isActive ? "text-white underline" : ""
              }
            >
              <div className="flex gap-2">
                {" "}
                Our Causes <AiOutlineDown className="h-7" />
              </div>
            </NavLink>
            {dropdown && <Dropdown />}
          </li>

          <li
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}
            onClick={click1}
            className="px-4 cursor-pointer capitalize 
            hover:scale-101  duration-200 hover:underline"
          >
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "text-white underline" : ""
              }
            >
              <div className="flex gap-2">
                {" "}
                Gallery <AiOutlineDown className="h-7" />
              </div>
            </NavLink>
            {drop && <Drop />}
          </li>

          <li
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            className="px-4 cursor-pointer capitalize 
            hover:scale-101  duration-200 hover:underline"
          >
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                isActive ? "text-white underline" : ""
              }
            >
              Contact Us
            </NavLink>
          </li>
          {/* button components is render here */}
        </ul>
        <div className="flex space-x-2">
          {token && (
            <button
              className="hidden lg:block  bg-blue-500 px-2 py-[2px] rounded-full"
              onClick={handleLogout}
            >
              LogOut
            </button>
          )}

          <Button />
        </div>

        {/* navBar Links ended */}

        {/* For Mobile screen  navBar */}

        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
        </div>

        <ul
          className={
            !nav
              ? "hidden"
              : "md:hidden fixed right-0 sm:w-[50%] w-[60%] mt-[21.5rem] bg-[#004d73] rounded-br-3xl text-gray-300 py-5"
          }
        >
          {NavMenu.map((menu, indx) => {
            return (
              <Link to={menu.path} key={indx}>
                {" "}
                <li
                  onClick={() => {
                    setNav(!nav);
                  }}
                  activeclass="active"
                  spy={"true"}
                  smooth={"true"}
                  duration={400}
                  className=" px-4 cursor-pointer capitalize py-4 text-xl font-semibold"
                >
                  {menu.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
