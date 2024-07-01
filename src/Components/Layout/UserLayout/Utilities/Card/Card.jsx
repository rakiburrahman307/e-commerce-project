import { FaBangladeshiTakaSign } from "react-icons/fa6";
import PropTypes from "prop-types";
import useContextInfo from "../../Hooks/useContextInfo";
import ReactStars from "react-rating-stars-component";
import LazyImage from "../LazyImgLoading/LazyImage";
import { Link } from "react-router-dom";
import { cleanTitle } from "../UtilitiesFile/cleanTitle";

const Card = ({ _id, title, price, rating, brand, thumbnail }) => {
  const { textColor } = useContextInfo();
  return (
    <Link to={`/product/${_id}`} className='mx-auto '>
      <div className='w-[280px] h-[360px] space-y-4 rounded-lg bg-white p-2 shadow-lg dark:bg-[#18181B] duration-500 hover:scale-105'>
        <div className='relative'>
          <LazyImage
            src={thumbnail}
            alt={title}
            className='w-full rounded-lg'
          />
          <span className='absolute top-2 left-2 rounded-full bg-yellow-200 px-2 text-xs font-semibold text-yellow-600'>
            {brand}
          </span>
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 rounded-lg'></div>
        </div>
        <div className='grid gap-1'>
          <h1 className='text-base line-clamp-1 font-semibold text-left text-wrap dark:text-white/60'>
            {cleanTitle(title)}
          </h1>
          <p className='text-sm text-gray-500 dark:text-white/60'>{brand}</p>
          <div className='flex'>
            <ReactStars
              value={rating}
              count={5}
              edit={false}
              isHalf={true}
              size={24}
              activeColor='#ffd700'
            />
          </div>
          <div
            className={`text-lg font-semibold ${textColor} flex items-center gap-1`}
          >
            <FaBangladeshiTakaSign />
            {price}
          </div>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  _id: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  brand: PropTypes.string,
};

export default Card;
