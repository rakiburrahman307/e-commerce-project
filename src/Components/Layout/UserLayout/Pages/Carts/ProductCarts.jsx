import React from "react";
import { Link } from "react-router-dom";
import {
  useDeleteCartProductMutation,
  useGetCartsQuery,
} from "../../../../Features/cartApiSlice";
import { useGetUserQuery } from "../../../../Features/authApiSlice";
import CartItems from "./CartItems";
import CartItemSkeleton from "./CartItemSkeleton";
import "./style.css";
import emptyCart from "../../../../../assets/svg/empty-cart.svg";

const ProductCarts = () => {
  const { data: user, isLoading: userLoading } = useGetUserQuery();
  const { data: carts, isLoading: cartsLoading } = useGetCartsQuery(
    user?.user?._id
  );
  const [deleteCartProduct] = useDeleteCartProductMutation();

  return (
    <section className='container mx-auto mt-10'>
      <div className='sm:flex shadow-md my-10'>
        <div className='w-full sm:w-3/4 bg-white px-5 md:px-10 py-10 dark:bg-semi-dark'>
          <div className='flex justify-between border-b pb-8'>
            <h1 className='font-semibold text-xl md:text-2xl dark:text-secondary-text-dark'>
              Shopping Cart
            </h1>
            <h2 className='font-semibold text-lg md:text-xl dark:text-secondary-text-dark'>
              {carts?.length || 0} Items
            </h2>
          </div>
          <div className='max-h-screen overflow-y-scroll my-scroll-container'>
            {userLoading || cartsLoading ? (
              <CartItemSkeleton />
            ) : carts?.length > 0 ? (
              carts?.map((cart) => (
                <CartItems
                  key={cart?._id}
                  cart={cart}
                  deleteCartProduct={deleteCartProduct}
                />
              ))
            ) : (
              <div className='flex justify-center items-center h-full my-20'>
                <img src={emptyCart} alt='empty cart' className='w-1/2' />
              </div>
            )}
          </div>
          <Link
            to='/'
            className='flex font-semibold text-indigo-600 text-sm mt-10'
          >
            <svg
              className='fill-current mr-2 text-indigo-600 w-4'
              viewBox='0 0 448 512'
            >
              <path d='M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z' />
            </svg>
            Continue Shopping
          </Link>
        </div>
        <div id='summary' className='w-full sm:w-1/4 md:w-1/2 px-8 py-10'>
          <h1 className='font-semibold text-2xl border-b pb-8 dark:text-secondary-text-dark'>
            Order Summary
          </h1>
          <div className='flex justify-between mt-10 mb-5 dark:text-secondary-text-dark'>
            <span className='font-semibold text-sm uppercase'>
              Items {carts?.length || 0}
            </span>
            <span className='font-semibold text-sm'>590$</span>
          </div>
          <div className='dark:text-secondary-text-dark'>
            <label className='font-medium inline-block mb-3 text-sm uppercase'>
              Shipping
            </label>
            <select className='block p-2 text-gray-600 w-full text-sm dark:text-secondary-text-dark'>
              <option>Standard shipping - $10.00</option>
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
              <span>$600</span>
            </div>
            <button className='bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full'>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarts;
