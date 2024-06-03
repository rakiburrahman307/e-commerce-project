import { useState } from "react";
import PropTypes from "prop-types";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import {
  useDecreaseCartQuantityMutation,
  useDeleteCartProductMutation,
  useIncreaseCartQuantityMutation,
  useResetCartQuantityMutation,
} from "../../../../Features/cartApiSlice";
import FloatCartItem from "./FloatCartItem";
import { calculateTotalCartPrice } from "../../Pages/Carts/calculationItemPrices";
import CartItemSkeleton from "../../Pages/Carts/CartItemSkeleton";
import useContextInfo from "../../Hooks/useContextInfo";

const CartFloat = ({ carts, cartsLoading, userLoading }) => {
  const [openLeftSidebar, setLeftSidebar] = useState(false);
  const [deleteCartProduct] = useDeleteCartProductMutation();
  const [increaseCartQuantity] = useIncreaseCartQuantityMutation();
  const [decreaseCartQuantity] = useDecreaseCartQuantityMutation();
  const [resetCartQuantity] = useResetCartQuantityMutation();
  const { itemTotalPrices, updatedCarts } = calculateTotalCartPrice(carts);
  const { textColor } = useContextInfo();
  return (
    <div>
      <h4 className='text-xl text-white dark:text-secondary-text-dark mb-4'>
        Cart Items
      </h4>
      <div className='relative'>
        <FiShoppingCart
          size={25}
          className='text-white'
          onClick={() => setLeftSidebar(!openLeftSidebar)}
        ></FiShoppingCart>
        {carts?.length > 0 && !cartsLoading && (
          <span
            className={`absolute left-6 -top-2 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white text-center text-[12px] ${textColor}`}
          >
            {carts?.length}
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
            className='font-extrabold my-5 ml-2'
            size={30}
          />
          <h1 className='mb-5 text-center text-2xl font-bold'>Cart Items</h1>
          <div className='rounded-lg w-full p-2 max-h-[500px] overflow-scroll'>
            {userLoading || cartsLoading ? (
              <CartItemSkeleton />
            ) : updatedCarts?.length > 0 ? (
              updatedCarts?.map((cart) => (
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
};
CartFloat.propTypes = {
  carts: PropTypes.array,
  usrLoading: PropTypes.bool,
  cartsLoading: PropTypes.bool,
};
export default CartFloat;
