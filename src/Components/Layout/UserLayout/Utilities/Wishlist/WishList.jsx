import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import { TbBasketHeart } from "react-icons/tb";
import CartItem from "./CartItem";
import emptyCart from "../../../../../assets/svg/empty-cart.svg";
import LoadingItemSkeleton from "./LoadingItemSkeleton";
import {
  useAddWishListToCartMutation,
  useDeleteItemToWishListMutation,
} from "../../../../Features/cartWishListApiSlice";
import useCartCalculator from "../../Hooks/useCartCalculator";
import useContextInfo from "../../Hooks/useContextInfo";

const WishList = React.memo(
  ({ wishListData, WishListLoading, userLoading }) => {
    const [openLeftSidebar, setLeftSidebar] = useState(false);
    const { textColor } = useContextInfo();
    const { calculateTotalCartPrice } = useCartCalculator();
    const { itemTotalPrices, updatedCarts } =
      calculateTotalCartPrice(wishListData);
    const [addWishListToCart] = useAddWishListToCartMutation();
    const [deleteItemToWishList, { isLoading: deleteLoading }] =
      useDeleteItemToWishListMutation();

    const toggleSidebar = useCallback(() => {
      setLeftSidebar((prevState) => !prevState);
    }, []);

    const closeSidebar = useCallback(() => {
      setLeftSidebar(false);
    }, []);

    return (
      <div className='dark:bg-semi-dark'>
        <h4 className='text-xl text-white dark:text-secondary-text-dark mb-4'>
          Wish List
        </h4>
        <div className='relative'>
          <TbBasketHeart
            size={25}
            className='text-white hover:scale-110 duration-300'
            onClick={toggleSidebar}
          />
          {wishListData?.length > 0 && !WishListLoading && (
            <span
              className={`absolute left-6 -top-2 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white text-center text-[12px] ${textColor}`}
            >
              {updatedCarts?.length}
            </span>
          )}
        </div>
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
            onClick={(e) => e.stopPropagation()}
          >
            <IoMdClose
              onClick={closeSidebar}
              className='font-extrabold my-5 ml-2 hover:scale-110 duration-200 hover:text-red-500'
              size={30}
            />
            <h1
              className={`mb-5 text-3xl font-bold text-left border-b-2 ml-5 ${textColor}`}
            >
              WishList
            </h1>
            <div className='rounded-lg w-full p-4 max-h-[500px] overflow-y-auto'>
              {userLoading || WishListLoading || deleteLoading ? (
                <LoadingItemSkeleton />
              ) : updatedCarts?.length > 0 ? (
                updatedCarts?.map((cart) => (
                  <CartItem
                    key={cart?._id}
                    cart={cart}
                    itemTotalPrices={itemTotalPrices}
                    addWishListToCart={addWishListToCart}
                    deleteItemToWishList={deleteItemToWishList}
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
  }
);

WishList.propTypes = {
  wishListData: PropTypes.array,
  WishListLoading: PropTypes.bool,
  userLoading: PropTypes.bool,
};

export default WishList;
