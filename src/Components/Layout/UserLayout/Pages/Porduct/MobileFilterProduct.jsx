import { IoIosAdd } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";

const MobileFilterProduct = ({
  section,
  isOpen,
  toggleSection,
  handlePriceChange,
  priceRange,
  selectedPrice,
  handleSelectPrice,
  openSideBar,
  setOpenSideBar,
}) => {
  return (
    <div
      className={`${
        openSideBar ? "opacity-100 visible" : "opacity-0 invisible"
      } duration-300  relative z-40`}
    >
      <div className='fixed inset-0 bg-black bg-opacity-25'></div>
      <div className='fixed inset-0 z-40 flex'>
        <div
          className={`relative ${
            openSideBar
              ? "-translate-x-0 opacity-100 duration-700"
              : "translate-x-full opacity-0 duration-300"
          } ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl`}
        >
          <div className='flex items-center justify-between px-4'>
            <h2 className='text-lg font-medium text-gray-900'>Filters</h2>
            <button
              type='button'
              className='-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400'
              onClick={() => setOpenSideBar(!openSideBar)}
            >
              <span className='sr-only'>Close menu</span>
              <MdClose size={30} />
            </button>
          </div>
          {/* Filters  */}
        </div>
      </div>
    </div>
  );
};

export default MobileFilterProduct;
