import React, { useState } from "react";
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
import useContextInfo from "../../Hooks/useContextInfo";
import SubCategoryMenu from "./SubCategoryMenu";


const CategoryMenu = () => {
  const { textColor } = useContextInfo();
  const [activeCategory, setActiveCategory] = useState(null);

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
      subcategories: [
        { name: 'Women\'s Bags', value: 'womens-bags' },
        { name: 'Women\'s Dresses', value: 'womens-dresses' },
        { name: 'Tops', value: 'tops' },
        { name: 'Women\'s Watches', value: 'womens-watches' },
        { name: 'Women\'s Shoes', value: 'womens-shoes' },
        { name: 'Women\'s Jewellery', value: 'womens-jewellery' },
      ],
    },
    {
      name: "Health & Beauty",
      icon_name: "MdHealthAndSafety",
      link: "",
      subcategories: [
        { name: 'Beauty', value: 'beauty' },
        { name: 'Fragrances', value: 'fragrances' },
        { name: 'Skin Care', value: 'skin-care' },
      ],
    },
    {
      name: "Watches, Bags, Jewelry",
      icon_name: "MdOutlineWatch",
      link: "",
      subcategories: [
        { name: 'Men\'s Watches', value: 'mens-watches' },
        { name: 'Women\'s Watches', value: 'womens-watches' },
        { name: 'Women\'s Bags', value: 'womens-bags' },
        { name: 'Women\'s Jewellery', value: 'womens-jewellery' },
      ],
    },
    {
      name: "Men's & Boy's Fashion",
      icon_name: "IoMdMan",
      link: "",
      subcategories: [
        { name: 'Men\'s Shirts', value: 'mens-shirts' },
        { name: 'Men\'s Shoes', value: 'mens-shoes' },
        { name: 'Men\'s Watches', value: 'mens-watches' },
      ],
    },
    {
      name: "Mother & Baby",
      icon_name: "MdOutlineBabyChangingStation",
      link: "",
      subcategories: [
        { name: 'Baby Clothing', value: 'baby-clothing' },
        { name: 'Baby Accessories', value: 'baby-accessories' },
        { name: 'Maternity Wear', value: 'maternity-wear' },
      ],
    },
    {
      name: "Electronics Device",
      icon_name: "MdDevices",
      link: "",
      subcategories: [
        { name: 'Smartphones', value: 'smartphones' },
        { name: 'Laptops', value: 'laptops' },
        { name: 'Tablets', value: 'tablets' },
      ],
    },
    {
      name: "TV & Home Appliances",
      icon_name: "MdHomeMax",
      link: "",
      subcategories: [
        { name: 'Televisions', value: 'televisions' },
        { name: 'Refrigerators', value: 'refrigerators' },
        { name: 'Washing Machines', value: 'washing-machines' },
      ],
    },
    {
      name: "Electronic Accessories",
      icon_name: "TbBrandElectronicArts",
      link: "",
      subcategories: [
        { name: 'Mobile Accessories', value: 'mobile-accessories' },
        { name: 'Computer Accessories', value: 'computer-accessories' },
      ],
    },
    {
      name: "Groceries",
      icon_name: "MdOutlineShoppingCart",
      link: "",
      subcategories: [
        { name: 'Groceries', value: 'groceries' },
        { name: 'Fresh Food', value: 'fresh-food' },
        { name: 'Beverages', value: 'beverages' },
      ],
    },
    {
      name: "Home & Lifestyle",
      icon_name: "MdHomeMini",
      link: "",
      subcategories: [
        { name: 'Home Decoration', value: 'home-decoration' },
        { name: 'Kitchen Accessories', value: 'kitchen-accessories' },
        { name: 'Furniture', value: 'furniture' },
      ],
    },
    {
      name: "Sports & Outdoors",
      icon_name: "GrSpotify",
      link: "",
      subcategories: [
        { name: 'Sports Equipment', value: 'sports-equipment' },
        { name: 'Outdoor Gear', value: 'outdoor-gear' },
        { name: 'Sports Accessories', value: 'sports-accessories' },
      ],
    },
  ];

  return (
    <div className="relative">
      <ul className="bg-base-100 dark:bg-semi-dark w-64 rounded-box space-y-2 p-6 text-secondary-text dark:text-secondary-text-dark">
        {navigationData.map((navigation, idx) => (
          <li
            key={idx}
            className="group w-full flex gap-2 items-center rounded-md relative"
            onMouseEnter={() => setActiveCategory(navigation?.name)}
            onMouseLeave={() => setActiveCategory(null)}
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
            {activeCategory === navigation?.name && (
              <SubCategoryMenu subcategories={navigation?.subcategories} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
