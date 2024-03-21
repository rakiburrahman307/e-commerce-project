import useContextInfo from "../../Hooks/useContextInfo";
import PropTypes from 'prop-types';
const Card = ({ imageUrl, title, discountPrice, originalPrice, discountLevel }) => {
    const { textColor } = useContextInfo();
    return (
        <div className="w-full max-w-[188px] h-full max-h-[290px] bg-white border border-gray-200 rounded-sm hover:shadow-md hover:shadow-white dark:bg-semi-dark dark:border-gray-700 cursor-pointer">
            <img className="rounded-t-sm" src={imageUrl} loading="lazy" alt={title} />
            <div className="px-1 pb-5 text-left mt-2">
                <h5 className="text-sm tracking-tight text-secondary-text dark:text-secondary-text-dark">{title?.length > 50 ? title?.slice(0, 50) : title}</h5>
                <div className="flex flex-col items-start justify-between mb-3">
                    <span className={`text-lg font-bold ${textColor} dark:text-secondary-text-dark`}>${discountPrice}</span>
                    {discountLevel && (
                        <div className="flex justify-evenly gap-3">
                            <del className="text-xs text-secondary-text dark:text-secondary-text-dark">${originalPrice}</del>
                            <span className="text-xs text-secondary-text dark:text-secondary-text-dark">{discountLevel}%</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    discountPrice: PropTypes.number,
    originalPrice: PropTypes.number,
    discountLevel: PropTypes.number
};
export default Card;
