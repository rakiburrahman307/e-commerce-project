import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { MdLanguage } from "react-icons/md";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import useContextInfo from "../Hooks/useContextInfo";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(true);
    const { selectedColor } = useContextInfo();

    const inputField = (
        <input
            className="border-none w-52 md:w-[550px] lg:w-[700px] py-2 rounded-lg text-black dark:text-white"
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
                className="dropdown-content z-10 menu p-2 shadow rounded-box w-36 text-black bg-base-200 dark:text-white dark:bg-dark-color mt-4"
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
        <nav className={`px-2 md:px-10 lg:px-20 py-2 ${selectedColor} text-white dark:bg-bg-primary-dark dark:text-secondary-text-dark`}>

            <div className="flex justify-start">
                <ul className="flex gap-4">{navSubLinks}</ul>
            </div>
            <div className="flex items-center justify-between top-0 gap-2 md:gap-4 lg:gap-6">
                <div className="scale-100 cursor-pointer rounded-2xl py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                    <h2 className="text-4xl dark:text-secondary-text-dark">Daraz</h2>
                </div>
                <div className="hidden md:flex">{inputField}</div>
                <div className="flex justify-between items-center gap-4">
                    <div className="md:hidden lg:hidden">
                        {open ? (
                            <IoMdClose
                                onClick={() => setOpen(!open)}
                                className="text-4xl"
                            />
                        ) : (
                            <HiMenuAlt1 onClick={() => setOpen(!open)} className="text-4xl" />
                        )}

                        {open && (
                            <ul className="menu absolute pb-5 left-0 top-20 w-full pt-6 px-4 bg-bg-primary dark:bg-bg-primary-dark duration-200 transition-all text-white p-0 [&_li>*]:rounded-none space-y-5 z-10">
                                <div className="flex justify-end item-center gap-5">
                                    {language}
                                    <button>
                                        <CiShoppingCart className="text-4xl hover:bg-orange-600" />
                                    </button>
                                </div>
                                <li className="text-xl font-bold hover:border-b-2 pb-1 duration-150 transition-all">
                                    Login
                                </li>
                                <li className="text-xl font-bold hover:border-b-2 pb-1 duration-150 transition-all">
                                    Register
                                </li>
                                {inputField}
                            </ul>
                        )}
                    </div>
                    <div className="hidden md:flex items-center">
                        <button className="flex items-center justify-center gap-2 font-bold hover:bg-orange-600 w-20 h-12 rounded-xl duration-150 dark:hover:bg-dark-color dark:text-dark-color">
                            <FaRegUser />Log In
                        </button>
                        <div className="ml-1 mr-1">|</div>
                        <button className="flex items-center justify-center gap-2 font-bold hover:bg-orange-600 w-20 h-12 rounded-xl duration-150 dark:hover:bg-dark-color dark:text-dark-color">
                            Register
                        </button>
                    </div>
                    <div className="hidden md:flex justify-evenly items-center gap-2">
                        {language}
                        <button>
                            <CiShoppingCart className="text-4xl" />
                        </button>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
