import { FaBangladeshiTakaSign } from "react-icons/fa6";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReactStars from 'react-rating-stars-component';
import LazyImage from "../LazyImgLoading/LazyImage";
import useContextInfo from "../../Hooks/useContextInfo";

const ListCard = ({ _id, title, price, rating, brand, thumbnail, keyPoint }) => {
    const {textColor}= useContextInfo();
  return (
    <Link to={`/product/${_id}`} className="my-5">
      <div className="group mx-2 mt-10 grid max-w-screen-lg grid-cols-1 space-x-8 overflow-hidden rounded-lg border text-gray-700 shadow transition hover:shadow-lg sm:mx-auto sm:grid-cols-5 md:h-72 py-3">
        <div className="col-span-2 text-left text-gray-600 hover:text-gray-700">
          <div className="group relative h-full w-full overflow-hidden">
            <LazyImage src={thumbnail} alt={title} className="h-full w-full border-none object-cover text-gray-700 transition group-hover:scale-125" />
            <span className="absolute top-2 left-2 rounded-full bg-yellow-200 px-2 text-xs font-semibold text-yellow-600">{brand}</span>
          </div>
        </div>
        <div className="col-span-3 flex flex-col space-y-3 pr-8 text-left">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex flex-col">
              <h2 className="mt-3 overflow-hidden text-lg font-semibold">{title.substring(0, 28)}</h2>
              <div className='flex justify-start items-center gap-2'>
                <ReactStars
                  value={rating}
                  count={5}
                  edit={false}
                  isHalf={true}
                  size={24}
                  activeColor='#ffd700'
                />
                <span className='text-blue-600'>
                  {rating} Ratings
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div className={`flex items-center gap-1 ${textColor}`}>
                <FaBangladeshiTakaSign />
                {price}
              </div>
            </div>
          </div>
          <div className="flex flex-col text-gray-700 sm:flex-row">
            <div className="flex h-fit space-x-2 text-sm font-medium">
              <ul className="list-disc">
                {keyPoint?.map((point, idx) =>{
                    return (
                        <li key={idx} className='flex items-center gap-2'>
                         <p className='ml-2 font-medium'><span className="font-semibold">{point?.name}:</span> {point?.point}</p>
                       </li>
                     )
                } )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

ListCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  brand: PropTypes.string,
  thumbnail: PropTypes.string,
  keyPoint: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      point: PropTypes.string
    })
  )
};

export default ListCard;
