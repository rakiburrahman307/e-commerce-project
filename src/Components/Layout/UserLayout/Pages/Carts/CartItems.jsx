import PropTypes from "prop-types";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Swal from "sweetalert2";
import "./style.css";
import ShowErrorMessage from "../../Utilities/ErrorMessage/ShowErrorMessage";
import { useState } from "react";
import useContextInfo from "../../Hooks/useContextInfo";
const CartItems = ({ cart, deleteCartProduct }) => {
  const [quantity, setQuantity] = useState(1);
  const { textColor, selectedColor } = useContextInfo();
  const { _id, title, thumbnail, price } = cart;


  const handleDecrease =()=>{

    
  }
  const handleIncrease =()=>{}

//   Delete Function 
  const handleDeleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await deleteCartProduct(id).unwrap();
          Swal.fire({
            title: "Deleted!",
            text: res?.message,
            icon: "success",
          });
        } catch (error) {
          console.error(error);
          ShowErrorMessage(error?.data?.error);
        }
      }
    });
  };
  return (
    <div className='md:flex items-strech md:px-3 py-8 md:py-10 lg:py-8 border-t border-gray-50'>
      <div className='relative md:w-4/12 2xl:w-1/4 w-full cursor-pointer'>
        <img
          src={thumbnail}
          alt={title}
          className='h-full object-center object-cover md:block hidden'
        />
        <img
          src={thumbnail}
          alt={title}
          className='md:hidden w-full h-full object-center object-cover'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 rounded-lg'></div>
      </div>
      <div className='md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center'>
        <div className='flex items-center justify-between w-full'>
          <p className='text-base font-black leading-none text-gray-800 dark:text-secondary-text-dark'>
            {title}
          </p>
          <div className='dark:text-secondary-text-dark flex gap-3 items-center'>
            <button
              className={`border ${
                quantity > 1
                  ? `hover:text-white hover:scale-95 duration-500 ${textColor} hover:${selectedColor}`
                  : "border-gray-500 text-gray-500"
              } font-bold rounded-full text-sm px-2.5 py-1 text-center inline-flex items-center cursor-pointer dark:${textColor} dark:hover:${selectedColor}`}
              onClick={handleDecrease}
              disabled={quantity === 1}
            >
              -
            </button>
            <p className='text-lg w-4 mx-auto dark:text-secondary-text-dark'>
              {quantity}
            </p>
            <button
              className={`border ${
                quantity < 10
                  ? `hover:text-white hover:scale-95 duration-500 ${textColor} hover:${selectedColor}`
                  : "border-gray-500 text-gray-500"
              } font-bold rounded-full text-sm px-2.5 py-1 text-center inline-flex items-center cursor-pointer dark:${textColor} dark:hover:${selectedColor}`}
              onClick={handleIncrease}
              disabled={quantity === 10}
            >
              +
            </button>
          </div>
        </div>
        <p className='text-xs leading-3 text-gray-600 pt-2 dark:text-secondary-text-dark'>
          Height: 10 inches
        </p>
        <p className='text-xs leading-3 text-gray-600 py-4 dark:text-secondary-text-dark'>
          Color: Black
        </p>
        <p className='w-96 text-xs leading-3 text-gray-600 dark:text-secondary-text-dark'>
          Composition: 100% calf leather
        </p>
        <div className='flex items-center justify-between pt-5'>
          <div className='flex itemms-center'>
            <p className='text-xs leading-3 underline text-gray-800 cursor-pointer dark:text-secondary-text-dark'>
              Add to favorites
            </p>
            <button
              onClick={() => handleDeleteItem(_id)}
              className='text-xs leading-3 underline text-red-500 pl-5 cursor-pointer dark:text-secondary-text-dark'
            >
              Remove
            </button>
          </div>
          <p className='flex gap-1 text-base font-black leading-none text-gray-800 dark:text-secondary-text-dark'>
            <FaBangladeshiTakaSign size={15} /> {price}
          </p>
        </div>
      </div>
    </div>
  );
};
CartItems.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  deleteCartProduct: PropTypes.func,
  _id: PropTypes.string,
};
export default CartItems;
