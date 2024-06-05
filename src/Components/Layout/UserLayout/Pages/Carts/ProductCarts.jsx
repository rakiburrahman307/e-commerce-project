import React from "react";
import { Link } from "react-router-dom";
import {
  useAddCardToWishListMutation,
  useClearCartMutation,
  useDecreaseCartQuantityMutation,
  useDeleteCartProductMutation,
  useGetCartsQuery,
  useIncreaseCartQuantityMutation,
  useResetCartQuantityMutation,
} from "../../../../Features/cartApiSlice";
import { useGetUserQuery } from "../../../../Features/authApiSlice";
import CartItems from "./CartItems";
import CartItemSkeleton from "./CartItemSkeleton";
import "./style.css";
import emptyCart from "../../../../../assets/svg/empty-cart.svg";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import useContextInfo from "../../Hooks/useContextInfo";
import Swal from "sweetalert2";
import { calculateTotalCartPrice } from "./calculationItemPrices";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const ProductCarts = () => {
  const { textColor } = useContextInfo();
  const { data: user, isLoading: userLoading } = useGetUserQuery();
  const { data: carts, isLoading: cartsLoading } = useGetCartsQuery(
    user?.user?._id
  );
  const [deleteCartProduct] = useDeleteCartProductMutation();
  const [increaseCartQuantity] = useIncreaseCartQuantityMutation();
  const [decreaseCartQuantity] = useDecreaseCartQuantityMutation();
  const [resetCartQuantity] = useResetCartQuantityMutation();
  const [clearCart] = useClearCartMutation();
  const [addCartToWishList] = useAddCardToWishListMutation();
  const { totalCartPrice, itemTotalPrices, updatedCarts } =
    calculateTotalCartPrice(carts);
  const handleClearCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Clear This Cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await clearCart(id).unwrap();
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
    <section className='container mx-auto mt-10 dark:bg-primary-dark'>
      <div className='sm:flex shadow-md my-10'>
        <div className='w-full sm:w-3/4 bg-white px-5 md:px-10 py-10 dark:bg-semi-dark'>
          <div className='flex justify-between border-b pb-8'>
            <h1 className='font-semibold text-xl md:text-2xl dark:text-secondary-text-dark'>
              Shopping Cart
            </h1>
            <h2 className='font-semibold text-lg md:text-xl dark:text-secondary-text-dark'>
              {updatedCarts?.length || 0} Items
            </h2>
          </div>
          <div className='max-h-screen overflow-y-scroll shadow-sm'>
            {userLoading || cartsLoading ? (
              <CartItemSkeleton />
            ) : updatedCarts?.length > 0 ? (
              updatedCarts?.map((cart) => (
                <CartItems
                  key={cart?._id}
                  cart={cart}
                  deleteCartProduct={deleteCartProduct}
                  increaseCartQuantity={increaseCartQuantity}
                  decreaseCartQuantity={decreaseCartQuantity}
                  resetCartQuantity={resetCartQuantity}
                  itemTotalPrices={itemTotalPrices}
                  addCartToWishList={addCartToWishList}
                />
              ))
            ) : (
              <div className='flex justify-center items-center h-full my-20'>
                <img src={emptyCart} alt='empty cart' className='w-1/2' />
              </div>
            )}
          </div>
          <div className='flex justify-between items-center'>
            <Link
              to='/'
              className={`flex items-center gap-2 font-semibold ${textColor} text-sm mt-10`}
            >
              <FaLongArrowAltLeft size={15} /> Continue Shopping
            </Link>
            <button
              className='flex items-center gap-2 font-semibold text-red-600 text-sm mt-10'
              onClick={() => handleClearCart(user?.user?._id)}
            >
              <RiDeleteBin6Fill size={15} /> Clear Cart Items
            </button>
          </div>
        </div>
        <div id='summary' className='w-full sm:w-1/4 md:w-1/2 px-8 py-10'>
          <h1 className='font-semibold text-2xl border-b pb-8 dark:text-secondary-text-dark'>
            Order Summary
          </h1>
          <div className='flex justify-between mt-10 mb-5 dark:text-secondary-text-dark'>
            <span className='font-semibold text-sm uppercase'>
              Items {carts?.length || 0}
            </span>
            <span className='font-semibold text-sm flex gap-1 items-center'>
              <FaBangladeshiTakaSign />
              {totalCartPrice || 0}
            </span>
          </div>
          <div className='dark:text-secondary-text-dark'>
            <label className='font-medium inline-block mb-3 text-sm uppercase'>
              Shipping
            </label>
            <select className='block p-2 text-gray-600 w-full text-sm dark:text-secondary-text-dark'>
              <option>Standard shipping - 75.00</option>
            </select>
          </div>
          <div className='py-10 dark:text-secondary-text-dark'>
            <label
              htmlFor='promo'
              className='font-semibold inline-block mb-3 text-sm uppercase'
            >
              Promo Code
            </label>
            <input
              type='text'
              id='promo'
              placeholder='Enter your code'
              className='p-2 text-sm w-full'
            />
          </div>
          <button className='bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase'>
            Apply
          </button>
          <div className='border-t mt-8 dark:text-secondary-text-dark'>
            <div className='flex font-semibold justify-between py-6 text-sm uppercase'>
              <span>Total cost</span>
              <span className='flex gap-1 items-center'>
                <FaBangladeshiTakaSign />
                {totalCartPrice + 75 || 0}
              </span>
            </div>
            <Link to=''>
              <button className='bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full'>
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarts;
