import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Swal from "sweetalert2";
import "./style.css";
import ShowErrorMessage from "../../Utilities/ErrorMessage/ShowErrorMessage";
import useContextInfo from "../../Hooks/useContextInfo";
import { GrPowerReset } from "react-icons/gr";

const CartItems = React.memo(
  ({
    cart,
    deleteCartProduct,
    decreaseCartQuantity,
    increaseCartQuantity,
    resetCartQuantity,
    itemTotalPrices,
    addCartToWishList,
  }) => {
    const { textColor, selectedColor } = useContextInfo();
    const { _id, title, thumbnail, price, quantity: totalQuantity } = cart;
    const [quantity, setQuantity] = useState(totalQuantity || 1);

    const handleCartAction = useCallback(
      async (actionType, id, cartData) => {
        try {
          let res;
          switch (actionType) {
            case "decrease":
              res = await decreaseCartQuantity(id).unwrap();
              setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
              break;
            case "increase":
              res = await increaseCartQuantity(id).unwrap();
              setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
              break;
            case "reset":
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
                  res = await resetCartQuantity(id).unwrap();
                  setQuantity(1);
                }
              });
              break;
            case "delete":
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
                  res = await deleteCartProduct(id).unwrap();
                }
              });
              break;
            case "wishlist":
              Swal.fire({
                title: "Are you sure?",
                text: "Added to wishList",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Added!",
              }).then(async (result) => {
                if (result.isConfirmed) {
                  res = await addCartToWishList(cartData).unwrap();
                }
              });
              break;
            default:
              throw new Error("Invalid action type");
          }
          if (res) {
            Swal.fire({
              title: res?.message,
              icon: "success",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        } catch (error) {
          console.error(error);
          ShowErrorMessage(error?.data?.error);
        }
      },
      [
        decreaseCartQuantity,
        increaseCartQuantity,
        resetCartQuantity,
        deleteCartProduct,
        addCartToWishList,
      ]
    );

    return (
      <div className='md:flex items-strech md:px-3 py-8 md:py-10 lg:py-8 border-t border-gray-50'>
        <div className='relative md:w-4/12 2xl:w-1/4 w-full cursor-pointer mb-10'>
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
                className={`border  ${
                  quantity > 1
                    ? `hover:text-white hover:scale-95 duration-500 ${textColor} hover:${selectedColor}`
                    : "border-gray-500 text-gray-500"
                } font-bold rounded-full text-sm px-2.5 py-1 text-center inline-flex items-center cursor-pointer dark:${textColor} dark:hover:${selectedColor}`}
                onClick={() => handleCartAction("reset", _id)}
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
                onClick={() => handleCartAction("decrease", _id)}
                disabled={quantity === 1}
              >
                -
              </button>
              <p className='text-lg w-4 mx-auto dark:text-secondary-text-dark'>
                {quantity}
              </p>
              <button
                className={`border ${
                  quantity < 20
                    ? `hover:text-white hover:scale-95 duration-500 ${textColor} hover:${selectedColor}`
                    : "border-gray-500 text-gray-500"
                } font-bold rounded-full text-sm px-2.5 py-1 text-center inline-flex items-center cursor-pointer dark:${textColor} dark:hover:${selectedColor}`}
                onClick={() => handleCartAction("increase", _id)}
                disabled={quantity === 20}
              >
                +
              </button>
            </div>
          </div>
          <p className='text-xs leading-3 text-gray-600 pt-2 dark:text-secondary-text-dark'>
            Quantity: {totalQuantity}
          </p>
          <p className='text-xs flex gap-1 leading-3 text-gray-600 py-4 dark:text-secondary-text-dark'>
            Price: <FaBangladeshiTakaSign size={10} /> {price}
          </p>
          <p className='w-96 text-xs leading-3 text-gray-600 dark:text-secondary-text-dark'>
            Composition: 100% calf leather
          </p>
          <div className='flex items-center justify-between pt-5'>
            <div className='flex itemms-center'>
              <button
                onClick={() => handleCartAction("wishlist", _id, cart)}
                className='text-xs leading-3 underline text-gray-800 cursor-pointer dark:text-secondary-text-dark'
              >
                Add to wishList
              </button>
              <button
                onClick={() => handleCartAction("delete", _id)}
                className='text-xs leading-3 underline text-red-500 pl-5 cursor-pointer dark:text-secondary-text-dark'
              >
                Remove
              </button>
            </div>
            <p className='flex gap-1 text-base font-black leading-none text-gray-800 dark:text-secondary-text-dark'>
              <FaBangladeshiTakaSign size={15} /> {itemTotalPrices[_id]}
            </p>
          </div>
        </div>
      </div>
    );
  }
);

CartItems.propTypes = {
  cart: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  deleteCartProduct: PropTypes.func.isRequired,
  decreaseCartQuantity: PropTypes.func.isRequired,
  increaseCartQuantity: PropTypes.func.isRequired,
  resetCartQuantity: PropTypes.func.isRequired,
  addCartToWishList: PropTypes.func.isRequired,
  itemTotalPrices: PropTypes.object.isRequired,
};

export default CartItems;
