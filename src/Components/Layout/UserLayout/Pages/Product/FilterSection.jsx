import React from "react";
import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import PropTypes from "prop-types";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const FilterSection = ({
  section,
  isOpen,
  toggleSection,
  handleMinPriceChange,
  handleMaxPriceChange,
  minPrice,
  maxPrice,
  selectedColor,
  selectedCategories,
  selectedSize,
  selectedBrand,
  selectedRating,
  handleSelectBrand,
  handleSelectCategory,
  handleSelectColor,
  handleSelectSize,
  handleSelectRating,
}) => (
  <div className='border-b border-gray-200 py-6'>
    <h3 className='-my-3 flow-root mb-3'>
      <button
        type='button'
        onClick={() => toggleSection(section?.key)}
        className='flex w-full items-center justify-between pt-2 text-sm text-gray-400 hover:text-gray-500'
      >
        <span className='font-medium text-gray-900 dark:text-secondary-text-dark'>
          {section?.title}
        </span>
        <span className='ml-6 flex items-center'>
          {isOpen ? <RiSubtractFill size={15} /> : <IoIosAdd size={15} />}
        </span>
      </button>
    </h3>
    <div
      className={`overflow-y-scroll transition-all duration-500 ${
        isOpen ? "max-h-52" : "max-h-0"
      }`}
    >
      <div className={`pt-6 w-full space-y-4 ${isOpen ? "block" : "hidden"}`}>
        {section?.key === "price" ? (
          <div>
            <div className='flex flex-col'>
              <div className=' flex flex-col items-center gap-5 w-full min-h-62 mb-3'>
                <div className='w-full'>
                  <span className='text-sm flex item-center gap-1 text-secondary-text dark:text-secondary-text-dark'>
                    Min:
                    <FaBangladeshiTakaSign /> {minPrice}
                  </span>
                  <input
                    name='minPrice'
                    type='range'
                    min='0'
                    max='50000'
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    className='w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
                  />
                </div>
                <div className='w-full'>
                  <span className='text-sm flex item-center gap-1 text-secondary-text dark:text-secondary-text-dark'>
                    Max:
                    <FaBangladeshiTakaSign /> {maxPrice}
                  </span>
                  <input
                    name='maxPrice'
                    type='range'
                    min='0'
                    max='200000'
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    className='w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
                  />
                </div>
              </div>
            </div>
          </div>
        ) : section?.key === "categories" ? (
          section?.options?.map((option, index) => (
            <div key={index} className='flex items-center'>
              <input
                id={`filter-${section?.key}-${index}`}
                name={`categories`}
                value={option?.value?.toLowerCase()}
                type='radio'
                onChange={handleSelectCategory}
                checked={selectedCategories === option?.value?.toLowerCase()}
                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
              />
              <label
                htmlFor={`filter-${section?.key}-${index}`}
                className='ml-3 text-sm text-secondary-text dark:text-secondary-text-dark cursor-pointer'
              >
                {option?.name}
              </label>
            </div>
          ))
        ) : section?.key === "color" ? (
          section?.options?.map((option, index) => (
            <div key={index} className='flex items-center'>
              <input
                id={`filter-${section?.key}-${index}`}
                name={`color`}
                value={option?.toLowerCase()}
                type='radio'
                onChange={handleSelectColor}
                checked={selectedColor === option?.toLowerCase()}
                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
              />
              <label
                htmlFor={`filter-${section?.key}-${index}`}
                className='ml-3 text-sm text-secondary-text dark:text-secondary-text-dark cursor-pointer'
              >
                {option}
              </label>
            </div>
          ))
        ) : section?.key === "size" ? (
          section?.options?.map((option, index) => (
            <div key={index} className='flex items-center'>
              <input
                id={`filter-${section?.key}-${index}`}
                name={`size`}
                value={option?.toLowerCase()}
                type='radio'
                onChange={handleSelectSize}
                checked={selectedSize === option?.toLowerCase()}
                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
              />
              <label
                htmlFor={`filter-${section?.key}-${index}`}
                className='ml-3 text-sm text-secondary-text dark:text-secondary-text-dark cursor-pointer'
              >
                {option}
              </label>
            </div>
          ))
        ) : section?.key === "brand" ? (
          section?.options?.map((option, index) => (
            <div key={index} className='flex items-center'>
              <input
                id={`filter-${section?.key}-${index}`}
                name={`brand`}
                value={option?.toLowerCase()}
                type='radio'
                onChange={handleSelectBrand}
                checked={selectedBrand === option?.toLowerCase()}
                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
              />
              <label
                htmlFor={`filter-${section?.key}-${index}`}
                className='ml-3 text-sm text-secondary-text dark:text-secondary-text-dark cursor-pointer'
              >
                {option}
              </label>
            </div>
          ))
        ) : section?.key === "rating" ? (
          section?.options?.map((option, index) => (
            <div key={index} className='flex items-center'>
              <input
                id={`filter-${section?.key}-${index}`}
                name={`rating`}
                value={option?.toLowerCase()}
                type='radio'
                onChange={handleSelectRating}
                checked={selectedRating === option?.toLowerCase()}
                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
              />
              <label
                htmlFor={`filter-${section?.key}-${index}`}
                className='ml-3 text-sm text-secondary-text dark:text-secondary-text-dark cursor-pointer'
              >
                {option}
              </label>
            </div>
          ))
        ) : null}
      </div>
    </div>
  </div>
);
FilterSection.propTypes = {
  section: PropTypes.object,
  isOpen: PropTypes.bool,
  toggleSection: PropTypes.func,
  handleMinPriceChange: PropTypes.func,
  handleMaxPriceChange: PropTypes.func,
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number,
  selectedColor: PropTypes.string,
  selectedCategories: PropTypes.string,
  selectedSize: PropTypes.string,
  selectedBrand: PropTypes.string,
  selectedRating: PropTypes.string,
  handleSelectBrand: PropTypes.func,
  handleSelectCategory: PropTypes.func,
  handleSelectColor: PropTypes.func,
  handleSelectSize: PropTypes.func,
  handleSelectRating: PropTypes.func,
};
export default FilterSection;
