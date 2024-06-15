import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import useContextInfo from "../../Hooks/useContextInfo";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import Button from "../../Utilities/Button/Button";
import MobileNavbar from "./MobileNavbar";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useGetUserQuery } from "../../../../Features/authApiSlice";
import { useGetCartsQuery } from "../../../../Features/cartApiSlice";
import SearchBoxAdvance from "../../Utilities/SearchBoxAdvance/SearchBoxAdvance";
import getBaseURL from "../../../../Features/BaseURL/BaseURL";

const Navbar = () => {
  const { selectedColor, textColor } = useContextInfo();
  const [searchBoxClick, setSearchBoxClick] = useState(false);
  const { data: user } = useGetUserQuery();
  const { data: carts, isLoading } = useGetCartsQuery(user?.user?._id);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      // Scrolling up
      setIsNavbarVisible(true);
    } else {
      // Scrolling down
      setIsNavbarVisible(false);
    }
    setLastScrollY(currentScrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // const inputField = (
  //   <input
  //     className='border-none w-full py-2 rounded-lg text-secondary-text focus:ring-0 dark:text-secondary-text-dark dark:bg-primary-dark'
  //     type='text'
  //     placeholder='Search in Daraz'
  //   />
  // );

  const fetchSuggestions = async (value) => {
    try {
      const baseURL = getBaseURL();
      const url = `${baseURL}/product/search/query?title=${value}`;

      const res = await fetch(url);

      if (!res.ok) {
        if (res.status === 404) {
          return [];
        } else {
          // Handle other errors
          throw new Error(
            `Network response was not ok: ${res.status} ${res.statusText}`
          );
        }
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch suggestions:", error);
      return [];
    }
  };

  const navSubLinks = (
    <>
      <Link to='#'>
        <li className='text-sm'>Become a Seller</li>
      </Link>
      <li className='text-sm'>Daraz Donates</li>
      <button className='text-sm'>Help & Support</button>
    </>
  );

  return (
    <section className='mx-auto min-w-fit'>
      {/* This is for navbar design start here  */}
      <nav
        className={`px-2 md:px-10 lg:px-20 py-2 relative ${selectedColor} text-white w-full dark:bg-semi-dark dark:text-secondary-text-dark`}
      >
        <div className='flex justify-start'>
          <ul className='flex gap-4'>{navSubLinks}</ul>
        </div>
        <div className='flex items-center justify-between top-0 gap-2 md:gap-3 lg:gap-5'>
          <div className='flex justify-between items-center w-full'>
            {/* This is brand name   */}
            <div className='scale-100 cursor-pointer rounded-2xl mr-5 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110'>
              <Link to='/'>
                <h2 className='text-4xl dark:text-secondary-text-dark'>
                  Daraz
                </h2>
              </Link>
            </div>
            {/* This is brand name end here  */}
            {/* -------------------------  */}
            {/* Search Box start here */}
            <div className='hidden relative w-full md:flex md:mx-auto lg:flex lg:mx-auto xl:mx-auto 2xl:mx-auto'>
              <SearchBoxAdvance
                placeholder={"Search in Daraz"}
                inputFieldCssClass={
                  "border-none w-full py-2 rounded-lg text-secondary-text focus:ring-0 dark:text-secondary-text-dark dark:bg-primary-dark"
                }
                fetchSuggestions={fetchSuggestions}
                staticData={[]}
                dataKey={"title"}
                splitTextStyle={`${textColor} text-semibold`}
                linkTo={"/product/"}
              ></SearchBoxAdvance>
            </div>
            {/* Search Box end here */}
            {/* --------------------------------------------  */}
            {/* Search Box for the mobile view start */}
            <div className='md:hidden lg:hidden'>
              <IoSearch
                onClick={() => setSearchBoxClick(!searchBoxClick)}
                size={25}
                className='flex justify-end hover:scale-150 hover:duration-300 md:hidden lg:hidden'
              />
              {searchBoxClick && (
                <div
                  className={`flex mx-auto gap-5 items-center w-full h-full absolute top-0 left-0 px-8 text-secondary-text ${selectedColor} dark:bg-semi-dark dark:text-secondary-text-dark`}
                >
                  <BiLeftArrowAlt
                    onClick={() => setSearchBoxClick(!searchBoxClick)}
                    size={25}
                    className=' text-white hover:scale-150 hover:duration-300 dark:text-secondary-text-dark'
                  />
                  {searchBoxClick && 
                  <SearchBoxAdvance
                  placeholder={"Search in Daraz"}
                  inputFieldCssClass={
                    "border-none w-full py-2 rounded-lg text-secondary-text focus:ring-0 dark:text-secondary-text-dark dark:bg-primary-dark"
                  }
                  fetchSuggestions={fetchSuggestions}
                  staticData={[]}
                  dataKey={"title"}
                  splitTextStyle={`${textColor} text-semibold`}
                  linkTo={"/product/"}
                ></SearchBoxAdvance>
                }
                </div>
              )}
            </div>
            {/* Search Box for the mobile view start */}
          </div>
          {/* This is for the  nav header section start here  */}
          <div className='flex justify-between items-center gap-4'>
            <div className='hidden md:flex items-center'>
              <Button
                className='flex items-center justify-center gap-2 font-bold hover:scale-125 w-20 h-12 rounded-xl duration-200 dark:hover:bg-dark-color dark:text-dark-color'
                value='Login'
                to='/login'
              >
                <FaRegUser />
                Log In
              </Button>
              <div className='ml-1 mr-1'>|</div>
              <Button
                className='flex items-center justify-center gap-2 font-bold hover:scale-125 w-20 h-12 rounded-xl duration-200 dark:hover:bg-dark-color dark:text-dark-color'
                value='Register'
                to='/register'
              >
                Register
              </Button>
            </div>
            <div className='relative hidden md:flex justify-evenly items-center gap-2'>
              <Link to='/carts'>
                <CiShoppingCart className='text-4xl hover:scale-125 duration-200' />
              </Link>
              {carts?.length > 0 && !isLoading && (
                <span
                  className={`absolute -right-2 -top-2 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white text-center text-[12px] ${textColor}`}
                >
                  {carts?.length}
                </span>
              )}
            </div>
          </div>
          {/* This is for the  nav header section start here  */}
        </div>
      </nav>
      {/* This is for navbar design start end here  */}
      {/* -------------------------------------------------- */}
      {/* This is for mobile view bottom section  */}
      <MobileNavbar isNavbarVisible={isNavbarVisible} />
      {/* This is for mobile view bottom section end  */}
    </section>
  );
};

export default Navbar;
