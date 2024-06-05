import PropTypes from "prop-types";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
const CartItem = ({ cart, itemTotalPrices, addWishListToCart }) => {
  const { _id, title, thumbnail, price, quantity: totalQuantity } = cart;

  const handleAddWishListToCart = (cart) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "Move to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Move!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await addWishListToCart(cart).unwrap();
          Swal.fire({
            title: "Moved!",
            text: res?.message,
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.error(error);
      ShowErrorMessage(error?.data?.error);
    }
  };
  return (
    <div className='flex gap-4 bg-white p-4 rounded shadow-[0_2px_15px_-5px_rgba(6,81,237,0.3)] dark:bg-primary-dark hover:scale-105 duration-200'>
      <div className='flex gap-4'>
        <div className='w-36 h-36 max-sm:w-24 max-sm:h-24 shrink-0'>
          <img src={thumbnail} className='w-full h-full object-contain' />
        </div>

        <div className='flex flex-col gap-3'>
          <div>
            <h3 className='sm:text-lg text-base font-bold text text-gray-800 dark:text-white/60'>
              {title}
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
            onClick={() => handleAddWishListToCart(cart)}
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
CartItem.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  addWishListToCart: PropTypes.func,
  _id: PropTypes.string,
  itemTotalPrices: PropTypes.object,
};
export default CartItem;
