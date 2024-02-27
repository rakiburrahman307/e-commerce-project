import { AiFillSafetyCertificate } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { IoReturnUpBack, IoPricetagSharp, IoCheckmarkDoneCircle } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import React from "react";
const About = () => {
    const iconName = {
        AiFillSafetyCertificate,
        TbTruckDelivery,
        IoReturnUpBack,
        IoPricetagSharp,
        IoCheckmarkDoneCircle,
        RiVerifiedBadgeFill


    };
    const navigationData = [
        {
            name: "Safe Payment",
            icon_name: 'AiFillSafetyCertificate',
            link: '',
            bg: "text-bg-primary"
        },
        {
            name: "Nationwide Delivery",
            icon_name: 'TbTruckDelivery',
            link: '',
            bg: "text-[#007787]"
        },
        {

            name: "Free & Easy Return",
            icon_name: 'IoReturnUpBack',
            link: '',
            bg: "text-[#3F0686]"
        },
        {
            name: "Best Price Guaranteed",
            icon_name: 'IoPricetagSharp',
            link: '',
            bg: "text-bg-primary"
        },
        {

            name: "100% Authentic Products",
            icon_name: 'IoCheckmarkDoneCircle',
            link: '',
            bg: "text-[#3F0686]"
        },
        {


            name: "Daraz Verified",
            icon_name: 'RiVerifiedBadgeFill',
            link: '',
            bg: "text-bg-primary"
        },

    ]

    return (
        <div className="bg-[#FFE8DE] mt-5 flex mx-auto flex-col md:flex-row lg:flex-row justify-evenly items-center w-full dark:bg-bg-primary-dark rounded-box space-y-2 py-3 text-secondary-text dark:text-secondary-text-dark">
            {navigationData.map((navigation, idx) => (
                <li key={idx} className="group flex w-full list-none px-2 gap-2 items-center rounded-md">
                    <Link to={navigation.link} className="flex items-center gap-2 group-hover:text-bg-primary">
                        {React.createElement(iconName[navigation?.icon_name], { className: `group-hover:text-bg-primary text-2xl ${navigation?.bg}` })}
                        {navigation?.name}
                    </Link>
                </li>
            ))}
        </div>

    );
};

export default About;