import { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import useContextInfo from "../../Hooks/useContextInfo";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { cleanTitle } from "../UtilitiesFile/cleanTitle";

const FloatCartItem = ({
  cart,
  deleteCartProduct,
  decreaseCartQuantity,
  increaseCartQuantity,
  resetCartQuantity,
  itemTotalPrices,
}) => {
  const { textColor, selectedColor } = useContextInfo();
  const { _id, title, thumbnail, price, quantity: totalQuantity } = cart;
  const [quantity, setQuantity] = useState(totalQuantity || 1);
  const handleDecrease = async (id) => {
    try {
      const res = await decreaseCartQuantity(id).unwrap();
      setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
      Swal.fire({
        position: "center",
        icon: "success",
        title: res?.message,
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (error) {
      console.error(error);
      ShowErrorMessage(error?.data?.error);
    }
  };

  const handleIncrease = async (id) => {
    try {
      const res = await increaseCartQuantity(id).unwrap();
      setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
      Swal.fire({
        position: "center",
        icon: "success",
        title: res?.message,
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (error) {
      console.error(error);
      ShowErrorMessage(error?.data?.error);
    }
  };
  const handleResetQuantity = () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "reset this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, reset it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await resetCartQuantity(_id).unwrap();
          setQuantity(1);
          Swal.fire({
            title: res?.message,
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.error(error);
      ShowErrorMessage(error?.data?.error);
    }
  };
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
    <div className='flex gap-4 bg-white p-4 rounded shadow-[0_2px_15px_-5px_rgba(6,81,237,0.3)] dark:bg-primary-dark hover:scale-105 duration-200'>
      <div className='flex gap-4 w-80'>
        <div className='w-36 h-36 max-sm:w-24 max-sm:h-24 shrink-0'>
          <img src={thumbnail} className='w-full h-full object-contain' />
        </div>

        <div className='flex flex-col gap-4'>
          <div>
            <h3 className='sm:text-lg text-base text-left text-wrap font-bold text text-gray-800 dark:text-white/60'>
              {cleanTitle(title)}
            </h3>
            <p className='text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2'>
              Price: <span className='inline-block w-5 h-5'>{price}</span>
            </p>
            <p className='text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2'>
              Quantity:{" "}
              <span className='inline-block w-5 h-5'>{totalQuantity}</span>
            </p>
          </div>

          <div className='mt-auto flex items-center gap-3'>
            <button
              className={`border  ${
                quantity > 1
                  ? `hover:text-white hover:scale-95 duration-500 ${textColor} hover:${selectedColor}`
                  : "border-gray-500 text-gray-500"
              } font-bold rounded-full text-sm px-2.5 py-1 text-center inline-flex items-center cursor-pointer dark:${textColor} dark:hover:${selectedColor}`}
              onClick={() => handleResetQuantity(_id)}
              disabled={quantity === 1}
            >
              <GrPowerReset size={18} />
            </button>
            <button
              className={`border ${
                quantity > 1
                  ? `hover:text-white hover:scale-95 duration-500 ${textColor} hover:${selectedColor}`
                  : "border-gray-500 text-gray-500"
              } font-bold rounded-full text-sm px-2.5 py-1 text-center inline-flex items-center cursor-pointer dark:${textColor} dark:hover:${selectedColor}`}
              onClick={() => handleDecrease(_id)}
              disabled={quantity === 1}
            >
              -
            </button>
            <p className='text-lg w-3 dark:text-secondary-text-dark'>
              {quantity}
            </p>
            <button
              className={`border ${
                quantity < 20
                  ? `hover:text-white hover:scale-95 duration-500 ${textColor} hover:${selectedColor}`
                  : "border-gray-500 text-gray-500"
              } font-bold rounded-full text-sm px-2.5 py-1 text-center inline-flex items-center cursor-pointer dark:${textColor} dark:hover:${selectedColor}`}
              onClick={() => handleIncrease(_id)}
              disabled={quantity === 20}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className='ml-auto flex flex-col'>
        <div className='flex items-start gap-4 justify-end'>
          <RiDeleteBinLine
            className='text-red-600 hover:scale-110 hover:text-red-700 duration-200'
            onClick={() => handleDeleteItem(_id)}
            size={20}
          />
        </div>
        <h3 className='sm:text-lg text-base flex gap-1 items-center font-bold dark:text-secondary-text mt-auto'>
          <FaBangladeshiTakaSign size={15} /> {itemTotalPrices[_id]}
        </h3>
      </div>
    </div>
  );
};
FloatCartItem.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  deleteCartProduct: PropTypes.func,
  decreaseCartQuantity: PropTypes.func,
  increaseCartQuantity: PropTypes.func,
  resetCartQuantity: PropTypes.func,
  _id: PropTypes.string,
  itemTotalPrices: PropTypes.object,
};
export default FloatCartItem;
