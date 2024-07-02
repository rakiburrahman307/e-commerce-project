import React, { useState, useCallback } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import useContextInfo from "../../Hooks/useContextInfo";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { cleanTitle } from "../UtilitiesFile/cleanTitle";

const FloatCartItem = React.memo(({ cart, deleteCartProduct, itemTotalPrices }) => {
  const { _id, title, thumbnail, price, quantity: totalQuantity } = cart;
  const { textColor, selectedColor } = useContextInfo();

  const handleDelete = useCallback(async () => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (!result.isConfirmed) return;

      const res = await deleteCartProduct(_id).unwrap();

      Swal.fire({
        position: "center",
        icon: "success",
        title: res?.message,
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error?.data?.error,
      });
    }
  }, [_id, deleteCartProduct]);

  return (
    <div className="flex gap-4 bg-white p-4 rounded shadow-[0_2px_15px_-5px_rgba(6,81,237,0.3)] dark:bg-primary-dark hover:scale-105 duration-200">
      <div className="flex gap-4 w-80">
        <div className="w-36 h-36 max-sm:w-24 max-sm:h-24 shrink-0">
          <img src={thumbnail} className="w-full h-full object-contain" alt="Cart Item Thumbnail" />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="sm:text-lg text-base line-clamp-1 text-left text-wrap font-bold text-gray-800 dark:text-white/60">
              {cleanTitle(title)}
            </h3>
            <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">
              Price: <span className="inline-block w-5 h-5">{price}</span>
            </p>
            <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">
              Quantity: <span className="inline-block w-5 h-5">{totalQuantity}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="ml-auto flex flex-col">
        <div className="flex items-start gap-4 justify-end">
          <RiDeleteBinLine
            className="text-red-600 hover:scale-110 hover:text-red-700 duration-200"
            onClick={handleDelete}
            size={20}
          />
        </div>
        <h3 className="sm:text-lg text-base flex gap-1 items-center font-bold dark:text-secondary-text mt-auto">
          <FaBangladeshiTakaSign size={15} /> {itemTotalPrices[_id]}
        </h3>
      </div>
    </div>
  );
});

FloatCartItem.propTypes = {
  cart: PropTypes.object.isRequired,
  deleteCartProduct: PropTypes.func.isRequired,
  itemTotalPrices: PropTypes.object.isRequired,
};

export default FloatCartItem;
