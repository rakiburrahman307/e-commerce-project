import { IoIosArrowForward, IoMdMan } from "react-icons/io";
import { GrRestroomWomen, GrSpotify } from "react-icons/gr";
import {
  MdHealthAndSafety,
  MdOutlineWatch,
  MdOutlineBabyChangingStation,
  MdDevices,
  MdHomeMax,
  MdOutlineShoppingCart,
  MdHomeMini,
} from "react-icons/md";
import { TbBrandElectronicArts } from "react-icons/tb";
import { Link } from "react-router-dom";
import React from "react";
import useContextInfo from "../../Hooks/useContextInfo";
const Navigation = () => {
  const { textColor } = useContextInfo();
  const iconName = {
    GrRestroomWomen,
    MdHealthAndSafety,
    MdOutlineWatch,
    IoMdMan,
    MdOutlineBabyChangingStation,
    MdDevices,
    MdHomeMax,
    TbBrandElectronicArts,
    MdOutlineShoppingCart,
    MdHomeMini,
    GrSpotify,
  };
  const navigationData = [
    {
      name: "Women's & Girl's Fashion",
      icon_name: "GrRestroomWomen",
      link: "",
    },
    {
      name: "Health & Beauty",
      icon_name: "MdHealthAndSafety",
      link: "",
    },
    {
      name: "Watches, Bags, Jewelry",
      icon_name: "MdOutlineWatch",
      link: "",
    },
    {
      name: "Men's & Boy's Fashion",
      icon_name: "IoMdMan",
      link: "",
    },
    {
      name: "Mother & Baby",
      icon_name: "MdOutlineBabyChangingStation",
      link: "",
    },
    {
      name: "Electronics Device",
      icon_name: "MdDevices",
      link: "",
    },
    {
      name: "TV & Home Appliances",
      icon_name: "MdHomeMax",
      link: "",
    },
    {
      name: "Electronic Accessories",
      icon_name: "TbBrandElectronicArts",
      link: "",
    },
    {
      name: "Groceries",
      icon_name: "MdOutlineShoppingCart",
      link: "",
    },
    {
      name: "Home & Lifestyle",
      icon_name: "MdHomeMini",
      link: "",
    },
    {
      name: "Sports & Outdoors",
      icon_name: "GrSpotify",
      link: "",
    },
  ];

  return (
    <ul className="bg-base-100 dark:bg-bg-primary-dark w-64 rounded-box space-y-2 p-6 text-secondary-text dark:text-secondary-text-dark">
      {navigationData.map((navigation, idx) => (
        <li
          key={idx}
          className="group w-full flex gap-2 items-center rounded-md"
        >
          {React.createElement(iconName[navigation?.icon_name], {
            className: `group-hover:${textColor}`,
          })}
          <Link
            to={navigation.link}
            className={`flex items-center group-hover:${textColor}`}
          >
            {navigation?.name}
            <IoIosArrowForward
              className={`hidden group-hover:flex group-hover:${textColor}`}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
