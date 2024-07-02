import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowDown, IoMdMan } from "react-icons/io";
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
import useContextInfo from "../../Hooks/useContextInfo";
import Title from "../../Utilities/Title/Title";

const Category = () => {
  const { textColor } = useContextInfo();
  const [activeCategory, setActiveCategory] = useState(null);

  const navigationData = [
    {
      name: "Women's & Girl's Fashion",
      icon_name: "GrRestroomWomen",
      subcategories: [
        { name: "Women's Bags", value: "womens-bags" },
        { name: "Women's Dresses", value: "womens-dresses" },
        { name: "Tops", value: "tops" },
        { name: "Women's Watches", value: "womens-watches" },
        { name: "Women's Shoes", value: "womens-shoes" },
        { name: "Women's Jewellery", value: "womens-jewellery" },
      ],
    },
    {
      name: "Health & Beauty",
      icon_name: "MdHealthAndSafety",
      subcategories: [
        { name: "Beauty", value: "beauty" },
        { name: "Fragrances", value: "fragrances" },
        { name: "Skin Care", value: "skin-care" },
      ],
    },
    {
      name: "Watches, Bags, Jewelry",
      icon_name: "MdOutlineWatch",
      subcategories: [
        { name: "Men's Watches", value: "mens-watches" },
        { name: "Women's Watches", value: "womens-watches" },
        { name: "Women's Bags", value: "womens-bags" },
        { name: "Women's Jewellery", value: "womens-jewellery" },
      ],
    },
    {
      name: "Men's & Boy's Fashion",
      icon_name: "IoMdMan",
      subcategories: [
        { name: "Men's Shirts", value: "mens-shirts" },
        { name: "Men's Shoes", value: "mens-shoes" },
        { name: "Men's Watches", value: "mens-watches" },
      ],
    },
    {
      name: "Mother & Baby",
      icon_name: "MdOutlineBabyChangingStation",
      subcategories: [
        { name: "Baby Clothing", value: "baby-clothing" },
        { name: "Baby Accessories", value: "baby-accessories" },
        { name: "Maternity Wear", value: "maternity-wear" },
      ],
    },
    {
      name: "Electronics Device",
      icon_name: "MdDevices",
      subcategories: [
        { name: "Smartphones", value: "smartphones" },
        { name: "Laptops", value: "laptops" },
        { name: "Tablets", value: "tablets" },
      ],
    },
    {
      name: "TV & Home Appliances",
      icon_name: "MdHomeMax",
      subcategories: [
        { name: "Televisions", value: "televisions" },
        { name: "Refrigerators", value: "refrigerators" },
        { name: "Washing Machines", value: "washing-machines" },
      ],
    },
    {
      name: "Electronic Accessories",
      icon_name: "TbBrandElectronicArts",
      subcategories: [
        { name: "Mobile Accessories", value: "mobile-accessories" },
        { name: "Computer Accessories", value: "computer-accessories" },
      ],
    },
    {
      name: "Groceries",
      icon_name: "MdOutlineShoppingCart",
      subcategories: [
        { name: "Groceries", value: "groceries" },
        { name: "Fresh Food", value: "fresh-food" },
        { name: "Beverages", value: "beverages" },
      ],
    },
    {
      name: "Home & Lifestyle",
      icon_name: "MdHomeMini",
      subcategories: [
        { name: "Home Decoration", value: "home-decoration" },
        { name: "Kitchen Accessories", value: "kitchen-accessories" },
        { name: "Furniture", value: "furniture" },
      ],
    },
    {
      name: "Sports & Outdoors",
      icon_name: "GrSpotify",
      subcategories: [
        { name: "Sports Equipment", value: "sports-equipment" },
        { name: "Outdoor Gear", value: "outdoor-gear" },
        { name: "Sports Accessories", value: "sports-accessories" },
      ],
    },
  ];

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

  const handleCategoryClick = useCallback((name) => {
    setActiveCategory((prev) => (prev === name ? null : name));
  }, []);

  return (
    <section className='mx-auto mt-5 md:hidden bg-root-bg rounded-lg dark:bg-semi-dark'>
      <Title className='pl-10'>Category</Title>
      <ul className='flex flex-col gap-2 max-w-full mx-auto mt-10 text-secondary-text dark:text-secondary-text-dark'>
        {navigationData.map((navigation, idx) => (
          <li
            key={idx}
            className='group w-full p-5 hover:bg-gray-200 dark:hover:bg-gray-800 flex flex-col gap-2 items-start rounded-md relative'
          >
            <div
              className='flex items-center justify-between w-full cursor-pointer'
              onClick={() => handleCategoryClick(navigation?.name)}
            >
              <div className='flex items-center gap-2'>
                {React.createElement(iconName[navigation?.icon_name], {
                  className: `group-hover:${textColor} duration-300`,
                })}
                <span className={`group-hover:${textColor}`}>
                  {navigation?.name}
                </span>
              </div>
              {activeCategory === navigation?.name ? (
                <IoIosArrowDown
                  className={`transition-all duration-300 ${textColor}`}
                />
              ) : (
                <IoIosArrowForward
                  className={`transition-all duration-300 group-hover:${textColor}`}
                />
              )}
            </div>
            {activeCategory === navigation?.name && (
              <ul className='pl-8 w-full mt-2 space-y-1 transition-all duration-500 ease-in-out'>
                {navigation?.subcategories.map((subcategory, subIdx) => (
                  <li
                    className='w-full group hover:bg-gray-300 p-3 dark:hover:bg-gray-800 flex items-center justify-between gap-2 rounded-md relative'
                    key={subIdx}
                  >
                    <Link
                      to={`/product/category/${subcategory?.value}`}
                      className={`block text-secondary-text dark:text-secondary-text-dark hover:${textColor} dark:hover:${textColor}`}
                    >
                      {subcategory?.name}
                    </Link>
                    {activeCategory === navigation?.name && (
                      <IoIosArrowForward
                        className={`transition-all duration-300 group-hover:${textColor}`}
                      />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default React.memo(Category);
