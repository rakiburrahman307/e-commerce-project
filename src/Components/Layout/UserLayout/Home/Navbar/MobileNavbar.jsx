import { BiSolidCategory } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { IoMdCart, IoMdHome } from "react-icons/io";
import { NavLink } from "react-router-dom";
import useContextInfo from "../../Hooks/useContextInfo";

const MobileNavbar = () => {
    const {textColor} = useContextInfo()
    return (
        <div className="fixed -bottom-7 w-full z-50 my-5 md:hidden lg:hidden">
        <div className="flex items-center top-4 h-16 w-full">
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
            <NavLink to="/carts" className="flex flex-col items-center">
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
            <NavLink to="/login" className="flex flex-col items-center">
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
    );
};

export default MobileNavbar;