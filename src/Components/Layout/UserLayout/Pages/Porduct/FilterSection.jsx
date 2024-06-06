
import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

const FilterSection = ({
  section,
  isOpen,
  toggleSection,
  handlePriceChange,
  priceRange,
  selectedPrice,
  handleSelectPrice,
  selectedCategory,
  handleSelectCategory,
  selectedColor,
  handleSelectColor,
  selectedSize,
  handleSelectSize,
  selectedBrand,
  handleSelectBrand,
  selectedRating,
  handleSelectRating,
}) => (
  <div className='border-b border-gray-200 py-6'>
    <h3 className='-my-3 flow-root'>
      <button
        type='button'
        onClick={() => toggleSection(section?.key)}
        className='flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500'
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
      className={`overflow-hidden transition-all duration-500 ${
        isOpen ? 'max-h-96' : 'max-h-0'
      }`}
    >
      <div className={`pt-6 space-y-4 ${isOpen ? 'block' : 'hidden'}`}>
        {section?.key === 'price' ? (
          section?.options.map((option, index) => (
            <div key={index} className='flex items-center'>
              <input
                id={`filter-${section?.key}-${index}`}
                name='price'
                type='radio'
                value={option}
                onChange={handleSelectPrice}
                checked={selectedPrice === option}
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
        ) : section?.key === 'priceRange' ? (
          <div>
            <div className='flex items-center justify-between'>
              <span className='text-sm text-secondary-text dark:text-secondary-text-dark'>
                ${priceRange[0]}
              </span>
              <span className='text-sm text-secondary-text dark:text-secondary-text-dark'>
                ${priceRange[1]}
              </span>
            </div>
            <div className='flex items-center h-6'>
              <input
                name='max'
                type='range'
                min='0'
                max='1000'
                step='10'
                value={priceRange[1]}
                onChange={handlePriceChange}
                className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
                style={{
                  background: `linear-gradient(to right, #4B9CE2 0%, #4B9CE2 ${
                    (priceRange[1] / 1000) * 100
                  }%, #ccc ${(priceRange[1] / 1000) * 100}%, #ccc 100%)`,
                }}
              />
            </div>
          </div>
        ) : section?.key === 'categories' ? (
          section.options.map((option, index) => (
            <div key={index} className='flex items-center'>
              <input
                id={`filter-${section?.key}-${index}`}
                name={`${section?.key}[]`}
                value={option.toLowerCase()}
                type='checkbox'
                checked={selectedCategory === option.toLowerCase()}
                onChange={() => handleSelectCategory(option.toLowerCase())}
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
        ) : section?.key === 'color' ? (
          section.options.map((option, index) => (
            <div key={index} className='flex items-center'>
              <input
                id={`filter-${section?.key}-${index}`}
                name={`${section?.key}[]`}
                value={option.toLowerCase()}
                type='checkbox'
                checked={selectedColor === option.toLowerCase()}
                onChange={() => handleSelectColor(option.toLowerCase())}
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
        ) : section?.key === 'size' ? (
          section.options.map((option, index) => (
            <div key={index} className='flex items-center'>
              <input
                id={`filter-${section?.key}-${index}`}
                name={`${section?.key}[]`}
                value={option.toLowerCase()}
                type='checkbox'
                checked={selectedSize === option.toLowerCase()}
                onChange={() => handleSelectSize(option.toLowerCase())}
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
        ) : section?.key === 'brand' ? (
          section.options.map((option, index) => (
            <div key={index} className='flex items-center'>
              <input
                id={`filter-${section?.key}-${index}`}
                name={`${section?.key}[]`}
                value={option.toLowerCase()}
                type='checkbox'
                checked={selectedBrand === option.toLowerCase()}
                onChange={() => handleSelectBrand(option.toLowerCase())}
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
        ) : section?.key === 'rating' ? (
          section.options.map((option, index) => (
            <div key={index} className='flex items-center'>
              <input
                id={`filter-${section?.key}-${index}`}
                name={`${section?.key}[]`}
                value={option.toLowerCase()}
                type='checkbox'
                checked={selectedRating === option.toLowerCase()}
                onChange={() => handleSelectRating(option.toLowerCase())}
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
          ) : (
            section?.options?.map((option, index) => (
              <div key={index} className='flex items-center'>
                <input
                  id={`filter-${section?.key}-${index}`}
                  name={`${section?.key}[]`}
                  value={option.toLowerCase()}
                  type='checkbox'
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
          )}
        </div>
      </div>
    </div>
  );
  
  export default FilterSection;
  
