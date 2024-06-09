import { useState } from "react";
import PropTypes from "prop-types";
import useContextInfo from "../../Hooks/useContextInfo";
import { IoMdClose } from "react-icons/io";
import { TbBasketHeart } from "react-icons/tb";
import CartItem from "./CartItem";
import emptyCart from "../../../../../assets/svg/empty-cart.svg";
import LoadingItemSkeleton from "./LoadingItemSkeleton";
import { useAddWishListToCartMutation } from "../../../../Features/cartWishListApiSlice";
import { calculateTotalCartPrice } from "../../Pages/Carts/calculationItemPrices";
const WishList = ({ wishListData, WishListLoading, userLoading }) => {
  const [openLeftSidebar, setLeftSidebar] = useState(false);
  const { textColor } = useContextInfo();
  const { itemTotalPrices, updatedCarts } =
    calculateTotalCartPrice(wishListData);
  const [addWishListToCart] = useAddWishListToCartMutation();

  return (
    <div className='dark:bg-semi-dark'>
      <h4 className='text-xl text-white dark:text-secondary-text-dark mb-4'>
        Wish List
      </h4>
      <div className='relative'>
        <TbBasketHeart
          size={25}
          className='text-white hover:scale-110 duration-300'
          onClick={() => setLeftSidebar(!openLeftSidebar)}
        ></TbBasketHeart>
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
      >
        <div
          className={`absolute right-0 min-w-96 rounded-lg bg-white pb-5 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
            openLeftSidebar
              ? "-translate-x-0 opacity-100 duration-700"
              : "translate-x-full opacity-0 duration-300"
          } rounded-none min-h-full`}
        >
          <IoMdClose
            onClick={() => setLeftSidebar(false)}
            className='font-extrabold my-5 ml-2 hover:scale-110 duration-200 hover:text-red-500'
            size={30}
          />
          <h1 className='mb-5 text-center text-2xl font-bold'>Wish List</h1>
          <div className='rounded-lg w-full p-4 max-h-[500px] overflow-y-auto'>
            {userLoading || WishListLoading ? (
              <LoadingItemSkeleton />
            ) : updatedCarts?.length > 0 ? (
              updatedCarts?.map((cart) => (
                <CartItem
                  key={cart?._id}
                  cart={cart}
                  itemTotalPrices={itemTotalPrices}
                  addWishListToCart={addWishListToCart}
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
};
WishList.propTypes = {
  wishListData: PropTypes.array,
  WishListLoading: PropTypes.bool,
  userLoading: PropTypes.bool,
};
export default WishList;
