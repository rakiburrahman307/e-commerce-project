import { FaBangladeshiTakaSign } from "react-icons/fa6";
import PropTypes from "prop-types";
import useContextInfo from "../../UserLayout/Hooks/useContextInfo";

const Card = ({
  imageUrl,
  title,
  discountPrice,
  originalPrice,
  discountLevel,
}) => {
  const { textColor, selectedColor, borderColor } = useContextInfo();
  const text =
    "Apple Watch Series 7 GPS, Aluminium ami nation akgdg jagdig kajgdiag kagdi Case, Starlight Sport";

  return (
    <div className='mx-auto max-w-[350px] space-y-4 rounded-lg bg-white p-4 shadow-lg md:w-[350px] dark:bg-[#18181B]'>
      <img
        loading='lazy'
        className='h-[200px] w-[350px] rounded-lg object-cover hover:scale-105 duration-300'
        src='https://source.unsplash.com/200x200/?bed'
        alt='card navigate ui'
      />
      <div className='grid gap-2'>
        <h1 className='text-lg font-semibold'>{title || "product Name"}</h1>
        <p className='text-sm text-gray-500 dark:text-white/60'>
          This is a brief description of the product. It highlights the key
          features and benefits.
        </p>
        <div className='text-lg font-semibold'>$99.99</div>
      </div>
      <div className='flex gap-5 items-center'>
        <button
          className={`rounded-lg ${selectedColor} px-6 py-2 text-[12px] font-semibold text-white duration-500 hover:bg-gray-700  hover:scale-95 sm:text-sm md:text-base `}
        >
          Add to Cart
        </button>
        <button
          className={`rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white hover:scale-95 py-2 hover:text-white hover:${borderColor}  duration-500 hover:${selectedColor}`}
        >
          View Details
        </button>
      </div>
    </div>
  );
};
Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  discountPrice: PropTypes.number,
  originalPrice: PropTypes.number,
  discountLevel: PropTypes.number,
};
export default Card;
