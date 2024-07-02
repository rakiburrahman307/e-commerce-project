import React, { useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import {
  useDecreaseCartQuantityMutation,
  useDeleteCartProductMutation,
  useIncreaseCartQuantityMutation,
  useResetCartQuantityMutation,
} from "../../../../Features/cartApiSlice";
import FloatCartItem from "./FloatCartItem";
import useContextInfo from "../../Hooks/useContextInfo";
import emptyCart from "../../../../../assets/svg/empty-cart.svg";
import LoadingItemSkeleton from "../Wishlist/LoadingItemSkeleton";
import useCartCalculator from "../../Hooks/useCartCalculator";
import "./style.css";
import CartIcon from "./CartIcon";

const CartFloat = React.memo(({ carts, cartsLoading, userLoading }) => {
  const [openLeftSidebar, setLeftSidebar] = useState(false);
  const [deleteCartProduct] = useDeleteCartProductMutation();
  const [increaseCartQuantity] = useIncreaseCartQuantityMutation();
  const [decreaseCartQuantity] = useDecreaseCartQuantityMutation();
  const [resetCartQuantity] = useResetCartQuantityMutation();
  const { calculateTotalCartPrice } = useCartCalculator();
  const { itemTotalPrices, updatedCarts } = useMemo(
    () => calculateTotalCartPrice(carts),
    [carts, calculateTotalCartPrice]
  );
  const { textColor } = useContextInfo();

  const toggleSidebar = useCallback(() => {
    setLeftSidebar((prevState) => !prevState);
  }, []);

  const closeSidebar = useCallback(() => {
    setLeftSidebar(false);
  }, []);

  return (
    <div className='dark:bg-semi-dark'>
      <h4 className='text-xl text-white dark:text-secondary-text-dark mb-4'>
        Carts
      </h4>
      {
        <CartIcon
          toggleSidebar={toggleSidebar}
          carts={carts}
          cartsLoading={cartsLoading}
        />
      }
      <div
        className={`fixed z-[100] inset-0 bg-black/20 backdrop-blur-sm duration-100 ${
          openLeftSidebar ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeSidebar}
      >
        <div
          className={`absolute right-0 w-full md:w-[500px] rounded-lg bg-white pb-5 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
            openLeftSidebar
              ? "-translate-x-0 opacity-100 duration-700"
              : "translate-x-full opacity-0 duration-300"
          } rounded-none min-h-full`}
        >
          <IoMdClose
            onClick={closeSidebar}
            className='font-extrabold my-5 ml-2 hover:scale-110 duration-200 hover:text-red-500'
            size={30}
          />
          <h1
            className={`mb-5 text-3xl font-bold text-left border-b-2 ml-5 ${textColor}`}
          >
            Carts
          </h1>
          <div className='rounded-lg w-full p-4 max-h-[500px] overflow-y-auto'>
            {userLoading || cartsLoading ? (
              <LoadingItemSkeleton />
            ) : updatedCarts?.length > 0 ? (
              updatedCarts.map((cart) => (
                <FloatCartItem
                  key={cart?._id}
                  cart={cart}
                  deleteCartProduct={deleteCartProduct}
                  increaseCartQuantity={increaseCartQuantity}
                  decreaseCartQuantity={decreaseCartQuantity}
                  resetCartQuantity={resetCartQuantity}
                  itemTotalPrices={itemTotalPrices}
                />
              ))
            ) : (
              <div className='flex justify-center items-center h-full my-20'>
                <img src={emptyCart} alt='empty cart' className='w-1/2' />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

CartFloat.propTypes = {
  carts: PropTypes.array,
  userLoading: PropTypes.bool,
  cartsLoading: PropTypes.bool,
};

export default CartFloat;
