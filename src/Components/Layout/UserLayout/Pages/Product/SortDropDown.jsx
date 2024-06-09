import { useEffect, useRef, useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import PropTypes from "prop-types";
import useContextInfo from "../../Hooks/useContextInfo";

const SortDropDown = ({
  sectionsData,
  handleSelectedSorting,
  selectedSorting,
}) => {
  const { selectedColor, textColor } = useContextInfo();
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);
  const sortSection = sectionsData.find((section) => section.key === "sort");
  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={dropDownRef} className='relative mx-auto w-fit text-white'>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className='group inline-flex items-center gap-2 justify-center text-sm font-medium text-gray-700 dark:text-secondary-text-dark hover:text-gray-900'
      >
        Sort
        {open ? (
          <BsArrowDown className={`-rotate-180 scale-105 duration-500 ${textColor}`} />
        ) : (
          <BsArrowDown className='rotate-0 duration-500' />
        )}
      </button>
      <div
        className={`${
          open ? "visible" : "invisible"
        } absolute top-12 z-50 w-full space-y-1 rounded-sm`}
      >
        {sortSection?.options?.map((item, index) => (
          <div
            key={index}
            style={{
              transform: `translateX(${open ? 0 : (index + 1) * 20}px)`,
            }}
            className={`flex items-center rounded-sm ${selectedColor} p-2 ${
              open ? "opacity-100 duration-500" : "opacity-0 duration-200"
            } hover:${selectedColor}/90 w-52`}
          >
            <input
              id={`filter-${item?.key}-${index}`}
              name={`categories`}
              value={item?.value?.toLowerCase()}
              type='radio'
              onChange={handleSelectedSorting}
              checked={selectedSorting === item?.value?.toLowerCase()}
              className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
            />
            <label
              htmlFor={`filter-${item?.key}-${index}`}
              className='ml-3 text-sm text-white dark:text-secondary-text-dark cursor-pointer'
            >
              {item?.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
SortDropDown.propType = {
  sectionsData: PropTypes.array,
  handleSelectedSorting: PropTypes.func,
  selectedSorting: PropTypes.string,
};
export default SortDropDown;
