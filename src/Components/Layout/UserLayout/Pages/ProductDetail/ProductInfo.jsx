
import  PropTypes  from "prop-types";
import useContextInfo from "../../Hooks/useContextInfo";
import ProtectedRoutes from "../../../../../Router/ProtectedRoutes";
import ReactStars from "react-rating-stars-component";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const ProductInfo = ({
  product,
  state,
  setState,
  handleDecrease,
  handleIncrease,
  handleAddToCarts,
}) => {
  const { textColor, selectedColor, borderColor } = useContextInfo();
  return (
    <div className='px-3 mt-10 w-full'>
      <h2 className='text-4xl font-semibold dark:text-secondary-text-dark'>
        {product?.title}
      </h2>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
          <div className='flex items-center gap-2'>
            <ReactStars
              value={product?.rating}
              count={5}
              edit={false}
              isHalf={true}
              size={24}
              activeColor='#ffd700'
            />
            <span className='text-blue-600'>{product?.rating} Ratings</span>
          </div>
          <p className='dark:text-secondary-text-dark'>
            Brand: <span className='text-blue-500'>{product?.brand}</span>
          </p>
          <p className='dark:text-secondary-text-dark'>
            Stock:{" "}
            {product?.stock > 0 ? (
              <span className='text-blue-500'>
                {product?.availabilityStatus || "In stock"}
              </span>
            ) : (
              <span className='text-blue-500'>
                {product?.availabilityStatus || "Out of stock"}
              </span>
            )}
          </p>
        </div>
        <div>
          {state.heartFill ? (
            <IoHeartSharp
              onClick={() =>
                setState((prev) => ({
                  ...prev,
                  heartFill: !prev.heartFill,
                }))
              }
              size={25}
              className={`${textColor}`}
            />
          ) : (
            <IoHeartOutline
              onClick={() =>
                setState((prev) => ({
                  ...prev,
                  heartFill: !prev.heartFill,
                }))
              }
              size={25}
              className='dark:text-secondary-text-dark'
            />
          )}
        </div>
      </div>
      <div className='mt-2 mb-4 dark:text-secondary-text-dark'>
        <hr />
      </div>
      <p className={`flex gap-2 text-3xl ${textColor}`}>
        <FaBangladeshiTakaSign size={30} />
        {product.price}
      </p>
      <p className='mt-2 mb-4 text-base text-semi-dark font-medium dark:text-secondary-text-dark'>
        Promotion:{" "}
      </p>
      <div className='flex gap-5 items-center'>
        <p className='text-base text-semi-dark font-medium dark:text-secondary-text-dark'>
          Quantity:
        </p>
        <div className='flex gap-8 items-center'>
          <button
            className={`border ${
              state.quantity > 1
                ? `hover:text-white hover:scale-95 duration-500 ${textColor} hover:${selectedColor}`
                : "border-gray-500 text-gray-500"
            } font-bold rounded-full text-sm px-2.5 py-1 text-center inline-flex items-center cursor-pointer dark:${textColor} dark:hover:${selectedColor}`}
            onClick={handleDecrease}
            disabled={state.quantity === 1}
          >
            -
          </button>
          <p className='text-lg w-4 mx-auto dark:text-secondary-text-dark'>
            {state.quantity}
          </p>
          <button
            className={`border ${
              state.quantity < 10
                ? `hover:text-white hover:scale-95 duration-500 ${textColor} hover:${selectedColor}`
                : "border-gray-500 text-gray-500"
            } font-bold rounded-full text-sm px-2.5 py-1 text-center inline-flex items-center cursor-pointer dark:${textColor} dark:hover:${selectedColor}`}
            onClick={handleIncrease}
            disabled={state.quantity === 10}
          >
            +
          </button>
        </div>
      </div>
      <ProtectedRoutes>
        <div className='flex justify-between md:justify-start gap-2 md:gap-5 mt-14 mx-auto'>
          <button
            className={`rounded-sm hover:scale-95 w-42 md:w-full border border-blue-500 px-8 py-3 text-base md:text-xl text-blue-500 duration-300 hover:bg-blue-500 hover:text-white`}
          >
            Buy Now
          </button>
          <button
            onClick={handleAddToCarts}
            className={`rounded-sm hover:scale-95 w-42 md:w-full border ${borderColor} px-6 py-3 text-base md:text-xl ${textColor} duration-300 hover:${selectedColor} hover:text-white`}
          >
            Add To Cart
          </button>
        </div>
      </ProtectedRoutes>
    </div>
  );
};
ProductInfo.propTypes = {
  product: PropTypes.object,
  state: PropTypes.object,
  setState: PropTypes.func,
  handleDecrease: PropTypes.func,
  handleIncrease: PropTypes.func,
  handleAddToCarts: PropTypes.func,
};

export default ProductInfo;
