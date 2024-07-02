import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { cleanTitle } from "../UtilitiesFile/cleanTitle";

const CartItem = React.memo(
  ({ cart, itemTotalPrices, addWishListToCart, deleteItemToWishList }) => {
    const { _id, title, thumbnail, price, quantity: totalQuantity } = cart;

    const handleAction = useCallback(
      (actionType, idOrCart) => {
        const messages = {
          delete: {
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            confirmButtonText: "Yes, delete it!",
            successTitle: "Deleted!",
          },
          addToCart: {
            title: "Are you sure?",
            text: "Move to cart",
            confirmButtonText: "Yes, Move!",
            successTitle: "Moved!",
          },
        };

        const actionFunctions = {
          delete: deleteItemToWishList,
          addToCart: addWishListToCart,
        };

        Swal.fire({
          title: messages[actionType].title,
          text: messages[actionType].text,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: messages[actionType].confirmButtonText,
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              const res = await actionFunctions[actionType](idOrCart).unwrap();
              Swal.fire({
                title: messages[actionType].successTitle,
                text: res?.message,
                icon: "success",
              });
            } catch (error) {
              console.error(error);
              Swal.fire({
                icon: "error",
                title: "Error",
                text: error?.data?.error,
              });
            }
          }
        });
      },
      [addWishListToCart, deleteItemToWishList]
    );

    return (
      <div className='flex gap-4 bg-white p-4 rounded shadow-[0_2px_15px_-5px_rgba(6,81,237,0.3)] dark:bg-primary-dark hover:scale-105 duration-200'>
        <div className='flex gap-4 w-64'>
          <div className='w-36 h-36 max-sm:w-24 max-sm:h-24 shrink-0'>
            <img
              src={thumbnail}
              className='w-full h-full object-contain'
              alt='Cart Item Thumbnail'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <div>
              <h3 className='sm:text-lg line-clamp-1 text-base text-start font-bold text-gray-800 dark:text-white/60'>
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
            <button
              onClick={() => handleAction("addToCart", cart)}
              className='text-xs flex justify-start items-center leading-3 underline text-gray-800 cursor-pointer dark:text-secondary-text-dark'
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className='ml-auto flex flex-col'>
          <div className='flex items-start gap-4 justify-end'>
            <RiDeleteBinLine
              className='text-red-600 hover:scale-110 hover:text-red-700 duration-200'
              onClick={() => handleAction("delete", _id)}
              size={20}
            />
          </div>
          <h3 className='sm:text-lg text-base flex gap-1 items-center font-bold dark:text-secondary-text mt-auto'>
            <FaBangladeshiTakaSign size={15} /> {itemTotalPrices[_id]}
          </h3>
        </div>
      </div>
    );
  }
);

CartItem.propTypes = {
  cart: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  itemTotalPrices: PropTypes.object.isRequired,
  addWishListToCart: PropTypes.func.isRequired,
  deleteItemToWishList: PropTypes.func.isRequired,
};

export default CartItem;
