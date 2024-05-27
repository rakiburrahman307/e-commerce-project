import { FaBangladeshiTakaSign } from "react-icons/fa6";
import PropTypes from "prop-types";
import useContextInfo from "../../Hooks/useContextInfo";
import ReactStars from "react-rating-stars-component";
import LazyImage from "../LazyImgLoading/LazyImage";
import { Link } from "react-router-dom";

const Card = ({ _id, title, price, rating, brand, thumbnail }) => {
  const { textColor } = useContextInfo();

  return (
    <Link to={`/product/${_id}`} className="mx-auto">
      <div className='max-w-[400px] space-y-4 rounded-lg bg-white p-2 shadow-lg dark:bg-[#18181B] duration-500 hover:scale-105'>
        <div className='relative'>
          <LazyImage src={thumbnail} alt={title} className='w-full rounded-lg' />
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 rounded-lg'></div>
        </div>
        <div className='grid gap-1'>
          <h1 className='text-lg font-semibold dark:text-white/60'>
            {title?.length > 30 ? title?.slice(0, 35) : title}
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
  _id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
};

export default Card;
