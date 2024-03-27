import { FaBangladeshiTakaSign } from "react-icons/fa6";
import PropTypes from 'prop-types';
import useContextInfo from "../../UserLayout/Hooks/useContextInfo";

const Card = ({ imageUrl, title, discountPrice, originalPrice, discountLevel }) => {
    const { textColor } = useContextInfo();
    const text ='Apple Watch Series 7 GPS, Aluminium ami nation akgdg jagdig kajgdiag kagdi Case, Starlight Sport';

    return (
        
        <div className="w-full max-w-[188px] h-full max-h-[340px] bg-white border border-gray-200 rounded-sm hover:shadow-md hover:shadow-white dark:bg-semi-dark dark:border-gray-700 cursor-pointer">
            <img className="rounded-t-sm" src={imageUrl||'https://static-01.daraz.com.bd/p/da6f0ac356dcc53d0d11d2e7bb74111b.jpg'} loading="lazy" alt={title} />
            <div className="px-1 pb-5 text-left mt-2">
                <h5 className="text-sm tracking-tight text-secondary-text dark:text-secondary-text-dark">{title?.length > 50 ? title?.slice(0, 50) : title || text}</h5>
                <div className="flex flex-col items-start justify-between mb-3">
                    <p className={`text-lg font-bold ${textColor} dark:text-secondary-text-dark`}>${discountPrice ? discountPrice || "00" : originalPrice||'00'}</p>
                    {discountLevel && (
                        <div className="flex justify-evenly gap-3">
                            <del className="text-xs text-secondary-text dark:text-secondary-text-dark"><FaBangladeshiTakaSign />{originalPrice||"00"}</del>
                            <span className="text-xs text-secondary-text dark:text-secondary-text-dark"><FaBangladeshiTakaSign />{discountLevel || 0}%</span>
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
