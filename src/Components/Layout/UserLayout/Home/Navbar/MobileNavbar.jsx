import { BiSolidCategory } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { IoMdCart, IoMdHome } from "react-icons/io";
import { NavLink } from "react-router-dom";
import useContextInfo from "../../Hooks/useContextInfo";
import PropTypes from "prop-types";

const MobileNavbar = ({ isNavbarVisible }) => {
  const { textColor } = useContextInfo();
  return (
    <div
      className={`fixed w-full transform transition-all duration-500 md:hidden lg:hidden z-50 ${
        isNavbarVisible ? "-bottom-0" : "-bottom-20"
      }`}
    >
      <div className='flex items-center h-16 w-full'>
        <div className='group flex items-center justify-center bg-white py-3 w-1/4 h-full dark:bg-semi-dark dark:text-secondary-text-dark'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `flex flex-col items-center ${
                isActive ? `${textColor} animate-pulse` : "text-secondary-text"
              } group-hover:${textColor}`
            }
          >
            <IoMdHome size={25} />
            <h4 className='text-xs'>Home</h4>
          </NavLink>
        </div>
        <div className='group flex items-center justify-center bg-white py-3 w-1/4 h-full dark:bg-semi-dark dark:text-secondary-text-dark'>
          <NavLink
            to='/category'
            className={({ isActive }) =>
              `flex flex-col items-center ${
                isActive ? `${textColor} animate-pulse` : "text-secondary-text"
              } group-hover:${textColor}`
            }
          >
            <BiSolidCategory size={25} />
            <h4 className='text-xs'>Category</h4>
          </NavLink>
        </div>
        <div className='group flex items-center justify-center bg-white py-3 w-1/4 h-full dark:bg-semi-dark dark:text-secondary-text-dark'>
          <NavLink
            to='/carts'
            className={({ isActive }) =>
              `flex flex-col items-center ${
                isActive ? `${textColor} animate-pulse` : "text-secondary-text"
              } group-hover:${textColor}`
            }
          >
            <IoMdCart size={25} />
            <h4 className='text-xs'>Cart</h4>
          </NavLink>
        </div>
        <div className='group flex items-center justify-center bg-white py-3 w-1/4 h-full dark:bg-semi-dark dark:text-secondary-text-dark'>
          <NavLink
            to='/login'
            className={({ isActive }) =>
              `flex flex-col items-center ${
                isActive ? `${textColor} animate-pulse` : "text-secondary-text"
              } group-hover:${textColor}`
            }
          >
            <FaUser size={25} />
            <h4 className='text-xs'>Account</h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
MobileNavbar.propTypes = {
  isNavbarVisible: PropTypes.bool,
};
export default MobileNavbar;
