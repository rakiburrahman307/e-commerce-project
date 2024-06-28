import React, { useCallback, useMemo } from "react";
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
}) => {
  const renderOptions = useCallback(
    (key, options, handleChange, selectedValue) => {
      return options.map((option, index) => {
        const optionValue = typeof option === "object" ? option.value : option;
        const optionLabel = typeof option === "object" ? option.name : option;
        const isSelected = selectedValue === optionValue;

        return (
          <div key={index} className='flex items-center'>
            <input
              id={`filter-${key}-${index}`}
              name={key}
              value={optionValue}
              type='radio'
              onChange={handleChange}
              checked={isSelected}
              className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
            />
            <label
              htmlFor={`filter-${key}-${index}`}
              className='ml-3 text-sm text-secondary-text dark:text-secondary-text-dark cursor-pointer'
            >
              {optionLabel}
            </label>
          </div>
        );
      });
    },
    []
  );

  const optionsContent = useMemo(() => {
    switch (section?.key) {
      case "price":
        return (
          <div className='flex flex-col items-center gap-5 w-full min-h-62 mb-3'>
            <div className='w-full'>
              <span className='text-sm flex items-center gap-1 text-secondary-text dark:text-secondary-text-dark'>
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
              <span className='text-sm flex items-center gap-1 text-secondary-text dark:text-secondary-text-dark'>
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
        );
      case "categories":
        return renderOptions(
          "categories",
          section?.options,
          handleSelectCategory,
          selectedCategories
        );
      case "color":
        return renderOptions(
          "color",
          section?.options,
          handleSelectColor,
          selectedColor
        );
      case "size":
        return renderOptions(
          "size",
          section?.options,
          handleSelectSize,
          selectedSize
        );
      case "brand":
        return renderOptions(
          "brand",
          section?.options,
          handleSelectBrand,
          selectedBrand
        );
      case "rating":
        return renderOptions(
          "rating",
          section?.options,
          handleSelectRating,
          selectedRating
        );
      default:
        return null;
    }
  }, [
    section,
    minPrice,
    maxPrice,
    selectedCategories,
    selectedColor,
    selectedSize,
    selectedBrand,
    selectedRating,
    handleMinPriceChange,
    handleMaxPriceChange,
    handleSelectCategory,
    handleSelectColor,
    handleSelectSize,
    handleSelectBrand,
    handleSelectRating,
    renderOptions,
  ]);

  return (
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
          {optionsContent}
        </div>
      </div>
    </div>
  );
};

FilterSection.propTypes = {
  section: PropTypes.object.isRequired,
  isOpen: PropTypes.bool,
  toggleSection: PropTypes.func,
  handleMinPriceChange: PropTypes.func.isRequired,
  handleMaxPriceChange: PropTypes.func.isRequired,
  minPrice: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired,
  selectedColor: PropTypes.string.isRequired,
  selectedCategories: PropTypes.string.isRequired,
  selectedSize: PropTypes.string.isRequired,
  selectedBrand: PropTypes.string.isRequired,
  selectedRating: PropTypes.string.isRequired,
  handleSelectBrand: PropTypes.func.isRequired,
  handleSelectCategory: PropTypes.func.isRequired,
  handleSelectColor: PropTypes.func.isRequired,
  handleSelectSize: PropTypes.func.isRequired,
  handleSelectRating: PropTypes.func.isRequired,
};

export default FilterSection;
