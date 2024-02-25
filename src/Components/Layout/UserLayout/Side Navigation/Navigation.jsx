import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
const Navigation = () => {

    const navigationData =[
        {
            name:"Women's & Girl's Fashion",
            icon_name:'',
            link:''
        },
        {
            name:"Health & Beauty",
            icon_name:'',
            link:''
        },
        {
            name:"Watches, Bags, Jewelry",
            icon_name:'',
            link:''
        },
        {
            name:"Men's & Boy's Fashion",
            icon_name:'',
            link:''
        },
        {
            name:"Mother & Baby",
            icon_name:'',
            link:''
        },
        {
            name:"Electronics Device",
            icon_name:'',
            link:''
        },
        {
            name:"TV & Home Appliances",
            icon_name:'',
            link:''
        },
        {
            name:"Electronic Accessories",
            icon_name:'',
            link:''
        },
        {
            name:"Groceries",
            icon_name:'',
            link:''
        },
        {
            name:"Home & Lifestyle",
            icon_name:'',
            link:''
        },
        {
            name:"Sports & Outdoors",
            icon_name:'',
            link:''
        },
    ]

    return (
        <ul className="bg-base-100 w-64 rounded-box space-y-2 p-6">
            <li className="group w-full flex justify-between items-center rounded-md">
                <Link to="/women-fashion" className="flex items-center group-hover:text-bg-primary">
                    
                    <IoIosArrowForward className="ml-2 hidden group-hover:flex group-hover:text-bg-primary" />
                </Link>
            </li>
        </ul>
    );
};

export default Navigation;