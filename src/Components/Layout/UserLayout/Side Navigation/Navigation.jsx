import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        <ul className="bg-base-100 w-64 rounded-box space-y-2 p-6">
            <li className="group w-full flex justify-between items-center rounded-md">
                <Link to="/women-fashion" className="flex items-center group-hover:text-bg-primary">
                    Women&apos;s & Girl&apos;s Fashion
                    <IoIosArrowForward className="ml-2 hidden group-hover:flex group-hover:text-bg-primary" />
                </Link>
            </li>
            <li className="group w-full flex justify-between items-center rounded-md">
                <Link to="/women-fashion" className="flex items-center group-hover:text-bg-primary">
                Health & Beauty
                    <IoIosArrowForward className="ml-2 hidden group-hover:flex group-hover:text-bg-primary" />
                </Link>
            </li>
    
            <li className="group w-full flex justify-between items-center rounded-md">
                <Link to="/women-fashion" className="flex items-center group-hover:text-bg-primary">
                Watches, Bags, Jewelry
                    <IoIosArrowForward className="ml-2 hidden group-hover:flex group-hover:text-bg-primary" />
                </Link>
            </li>
            <li className="group w-full flex justify-between items-center rounded-md">
                <Link to="/women-fashion" className="flex items-center group-hover:text-bg-primary">
                Men&apos;s & Boy&apos;s Fashion
                    <IoIosArrowForward className="ml-2 hidden group-hover:flex group-hover:text-bg-primary" />
                </Link>
            </li>
            <li className="group w-full flex justify-between items-center rounded-md">
                <Link to="/women-fashion" className="flex items-center group-hover:text-bg-primary">
                Mother & Baby
                    <IoIosArrowForward className="ml-2 hidden group-hover:flex group-hover:text-bg-primary" />
                </Link>
            </li>
            <li className="group w-full flex justify-between items-center rounded-md">
                <Link to="/women-fashion" className="flex items-center group-hover:text-bg-primary">
                Electronics Device
                    <IoIosArrowForward className="ml-2 hidden group-hover:flex group-hover:text-bg-primary" />
                </Link>
            </li>
            <li className="group w-full flex justify-between items-center rounded-md">
                <Link to="/women-fashion" className="flex items-center group-hover:text-bg-primary">
                TV & Home Appliances
                    <IoIosArrowForward className="ml-2 hidden group-hover:flex group-hover:text-bg-primary" />
                </Link>
            </li>
            <li className="group w-full flex justify-between items-center rounded-md">
                <Link to="/women-fashion" className="flex items-center group-hover:text-bg-primary">
                Electronic Accessories
                    <IoIosArrowForward className="ml-2 hidden group-hover:flex group-hover:text-bg-primary" />
                </Link>
            </li>
            <li className="group w-full flex justify-between items-center rounded-md">
                <Link to="/women-fashion" className="flex items-center group-hover:text-bg-primary">
                Groceries
                    <IoIosArrowForward className="ml-2 hidden group-hover:flex group-hover:text-bg-primary" />
                </Link>
            </li>
            <li className="group w-full flex justify-between items-center rounded-md">
                <Link to="/women-fashion" className="flex items-center group-hover:text-bg-primary">
                Home & Lifestyle
                    <IoIosArrowForward className="ml-2 hidden group-hover:flex group-hover:text-bg-primary" />
                </Link>
            </li>
            <li className="group w-full flex justify-between items-center rounded-md">
                <Link to="/women-fashion" className="flex items-center group-hover:text-bg-primary">
                Sports & Outdoors
                    <IoIosArrowForward className="ml-2 hidden group-hover:flex group-hover:text-bg-primary" />
                </Link>
            </li>
        </ul>
    );
};

export default Navigation;