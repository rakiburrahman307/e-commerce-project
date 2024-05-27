import  PropTypes  from 'prop-types';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
const CartItems = ({ cart }) => {

  const { title, thumbnail, price } = cart;
  return (
    <div className='md:flex items-strech md:px-3 py-8 md:py-10 lg:py-8 border-t border-gray-50'>
      <div className='relative md:w-4/12 2xl:w-1/4 w-full cursor-pointer'>
        <img
          src={thumbnail}
          alt={title}
          className='h-full object-center object-cover md:block hidden'
        />
        <img
          src={thumbnail}
          alt={title}
          className='md:hidden w-full h-full object-center object-cover'
        />
         <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 rounded-lg'></div>
      </div>
      <div className='md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center'>
        <div className='flex items-center justify-between w-full'>
          <p className='text-base font-black leading-none text-gray-800 dark:text-secondary-text-dark'>
            {title}
          </p>
          <select
            aria-label='Select quantity'
            className='py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:text-secondary-text-dark'
          >
            <option>01</option>
            <option>02</option>
            <option>03</option>
          </select>
        </div>
        <p className='text-xs leading-3 text-gray-600 pt-2 dark:text-secondary-text-dark'>
          Height: 10 inches
        </p>
        <p className='text-xs leading-3 text-gray-600 py-4 dark:text-secondary-text-dark'>
          Color: Black
        </p>
        <p className='w-96 text-xs leading-3 text-gray-600 dark:text-secondary-text-dark'>
          Composition: 100% calf leather
        </p>
        <div className='flex items-center justify-between pt-5'>
          <div className='flex itemms-center'>
            <p className='text-xs leading-3 underline text-gray-800 cursor-pointer dark:text-secondary-text-dark'>
              Add to favorites
            </p>
            <p className='text-xs leading-3 underline text-red-500 pl-5 cursor-pointer dark:text-secondary-text-dark'>
              Remove
            </p>
          </div>
          <p className='flex gap-1 text-base font-black leading-none text-gray-800 dark:text-secondary-text-dark'>
           <FaBangladeshiTakaSign size={15}/> {price}
          </p>
        </div>
      </div>
    </div>
  );
};
CartItems.propTypes={
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
}
export default CartItems;
