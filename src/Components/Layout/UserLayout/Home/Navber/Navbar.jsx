import { Link, NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { MdLanguage } from "react-icons/md";
import useContextInfo from "../../Hooks/useContextInfo";
import { IoMdHome, IoMdCart } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { BiLeftArrowAlt, BiSolidCategory } from "react-icons/bi";
import "./style.css";
import { useState } from "react";
import Button from "../../../Reuseable/Button/Button";


const Navbar = () => {
  const { selectedColor, textColor } = useContextInfo();
  const [searchBoxClick, setSearchBoxClick] = useState(false);

  const inputField = (
    <input
      className="border-none w-full md:w-[550px] lg:w-[700px] py-2 rounded-lg text-secondary-text dark:text-secondary-text-dark dark:bg-primary-dark"
      type="text"
      placeholder="Search in Daraz"
    />
  );

  const navSubLinks = (
    <>
      <Link to="#">
        <li className="text-sm">Become a Seller</li>
      </Link>
      <li className="text-sm">Daraz Donates</li>
      <button className="text-sm">Help & Support</button>
    </>
  );

  const language = (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="flex gap-2">
        <MdLanguage className="text-2xl" /> EN
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-10 menu p-2 shadow rounded-box w-36 text-black bg-base-200 dark:text-white dark:bg-semi-dark mt-4"
      >
        <li>
          <a>Bangla</a>
        </li>
        <li>
          <a>English</a>
        </li>
      </ul>
    </div>
  );

  return (
    <section className="mx-auto">
      {/* This is for navbar design start here  */}
      <nav
        className={`px-2 md:px-10 lg:px-20 py-2 relative ${selectedColor} text-white w-full dark:bg-semi-dark dark:text-secondary-text-dark`}
      >
        <div className="flex justify-start">
          <ul className="flex gap-4">{navSubLinks}</ul>
        </div>
        <div className="flex items-center justify-between top-0 gap-2 md:gap-4 lg:gap-6">
          <div className="flex justify-between items-center w-full">
            {/* This is brand name   */}
            <div className="scale-100 cursor-pointer rounded-2xl mr-5 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
              <h2 className="text-4xl dark:text-secondary-text-dark">Daraz</h2>
            </div>
            {/* This is brand name end here  */}
            {/* -------------------------  */}
            {/* Search Box start here */}
            <div className="hidden md:flex md:mx-auto lg:flex lg:mx-auto">
              {inputField}
            </div>
            {/* Search Box end here */}
            {/* --------------------------------------------  */}
            {/* Search Box for the mobile view start */}
            <div className="md:hidden lg:hidden">
              <IoSearch
                onClick={() => setSearchBoxClick(!searchBoxClick)}
                size={25}
                className="flex justify-end hover:scale-150 hover:duration-300 md:hidden lg:hidden"
              />
              {searchBoxClick && (
                <div
                  className={`flex mx-auto gap-5 items-center w-full h-full absolute top-0 left-0 px-8 text-secondary-text ${selectedColor} dark:bg-semi-dark dark:text-secondary-text-dark`}
                >
                  <BiLeftArrowAlt
                    onClick={() => setSearchBoxClick(!searchBoxClick)}
                    size={25}
                    className=" text-white hover:scale-150 hover:duration-300 dark:text-secondary-text-dark"
                  />
                  {searchBoxClick && inputField}
                </div>
              )}
            </div>
            {/* Search Box for the mobile view start */}
          </div>
          {/* This is for the  nav header section start here  */}
          <div className="flex justify-between items-center gap-4">
            <div className="hidden md:flex items-center">
              <Button
                className="flex items-center justify-center gap-2 font-bold hover:scale-125 w-20 h-12 rounded-xl duration-150 dark:hover:bg-dark-color dark:text-dark-color"
                value="Login"
              >
                <FaRegUser />
                Log In
              </Button>
              <div className="ml-1 mr-1">|</div>
              <Button
                className="flex items-center justify-center gap-2 font-bold hover:scale-125 w-20 h-12 rounded-xl duration-150 dark:hover:bg-dark-color dark:text-dark-color"
                value="Register"
              >
                Register
              </Button>
            </div>
            <div className="hidden md:flex justify-evenly items-center gap-2">
              {language}
              <button>
                <CiShoppingCart className="text-4xl" />
              </button>
            </div>
          </div>
          {/* This is for the  nav header section start here  */}
        </div>
      </nav>
      {/* This is for navbar design start end here  */}
      {/* -------------------------------------------------- */}
      {/* This is for mobile view bottom section  */}
      <div className="fixed -bottom-7 w-full z-50 my-5 md:hidden lg:hidden">
        <div className="flex justify-around items-center top-4 h-16 w-full">
          <div className="group flex items-center justify-center bg-white py-3 w-1/4 h-full dark:bg-semi-dark dark:text-secondary-text-dark">
            <NavLink to="/" className="flex flex-col items-center">
              <IoMdHome
                size={25}
                className={`text-secondary-text group-hover:${textColor}`}
              />
              <h4
                className={`text-secondary-text text-xs group-hover:${textColor}`}
              >
                Home
              </h4>
            </NavLink>
          </div>
          <div className="group flex items-center justify-center bg-white py-3 w-1/4 h-full dark:bg-semi-dark dark:text-secondary-text-dark">
            <NavLink to="/category" className="flex flex-col items-center">
              <BiSolidCategory
                size={25}
                className={`text-secondary-text group-hover:${textColor}`}
              />
              <h4
                className={`text-secondary-text text-xs group-hover:${textColor}`}
              >
                Category
              </h4>
            </NavLink>
          </div>
          <div className="group flex items-center justify-center bg-white py-3 w-1/4 h-full dark:bg-semi-dark dark:text-secondary-text-dark">
            <NavLink to="/cart" className="flex flex-col items-center">
              <IoMdCart
                size={25}
                className={`text-gray-500 group-hover:${textColor}`}
              />
              <h4
                className={`text-secondary-text text-xs group-hover:${textColor}`}
              >
                Cart
              </h4>
            </NavLink>
          </div>
          <div className="group flex items-center justify-center bg-white py-3 w-1/4 h-full dark:bg-semi-dark dark:text-secondary-text-dark">
            <NavLink to="/user" className="flex flex-col items-center">
              <FaUser
                size={25}
                className={`text-secondary-text group-hover:${textColor}`}
              />
              <h4
                className={`text-secondary-text text-xs group-hover:${textColor}`}
              >
                Account
              </h4>
            </NavLink>
          </div>
        </div>
      </div>
      {/* This is for mobile view bottom section end  */}
    </section>
  );
};

export default Navbar;
