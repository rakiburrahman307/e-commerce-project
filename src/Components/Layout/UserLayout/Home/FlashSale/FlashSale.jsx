import Title from "../../Hooks/Title";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import useContextInfo from "../../Hooks/useContextInfo";

const FlashSale = ({ targetDate }) => {
   const { selectedColor, textColor } = useContextInfo();
   console.log(textColor)
   const calculateTimeLeft = () => {
      if (!targetDate || isNaN(targetDate.getTime())) {
         return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
         };
      }
      const deference = targetDate.getTime() - new Date().getTime();
      let timeLeft = {};
      if (deference > 0) {
         timeLeft = {
            days: Math.floor(deference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((deference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((deference / 1000 / 60) % 60),
            seconds: Math.floor((deference / 1000) % 60)

         };
      }

      return timeLeft;
   }
   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
   const formatTime = (value) => {
      return value < 10 ? `0${value}` : value;
   }
   useEffect(() => {
      const timer = setTimeout(() => {
         setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearTimeout(timer);
   });

   return (
      <div>
         <Title title='FlashSale'></Title>
         <div className="flex items-center gap-10">
            <div>
               <h2 className={`${textColor}`}>One Sale Now</h2>
            </div>
            <div className="flex items-center gap-5">
               <div>
                  <h3>Ending in</h3>
               </div>

               {
                  timeLeft?.days > 0 ? (
                     <div className="flex items-center gap-3">
                        <div className={`${selectedColor} px-3 py-2 rounded-md text-white dark:text-secondary-text dark:bg-bg-primary-dark`}>{timeLeft?.days ? timeLeft?.days : "00"}</div>
                        <div className={`${selectedColor} px-3 py-2 rounded-md text-white dark:text-secondary-text dark:bg-bg-primary-dark`}>{formatTime(timeLeft?.hours) ? formatTime(timeLeft?.hours) : "00"}</div>
                        <div className={`${selectedColor} px-3 py-2 rounded-md text-white dark:text-secondary-text dark:bg-bg-primary-dark`}>{formatTime(timeLeft?.minutes) ? formatTime(timeLeft?.minutes) : "00"}</div>
                        <div className={`${selectedColor} px-3 py-2 rounded-md text-white dark:text-secondary-text dark:bg-bg-primary-dark`}>{formatTime(timeLeft?.seconds) ? formatTime(timeLeft?.seconds) : "00"}</div>
                     </div>
                  ) : (
                     <div className="flex items-center gap-3">
                        <div className={`${selectedColor} px-3 py-2 rounded-md text-white dark:text-secondary-text dark:bg-bg-primary-dark`}>{formatTime(timeLeft?.hours) ? formatTime(timeLeft?.hours) : "00"}</div>
                        <div className={`${selectedColor} px-3 py-2 rounded-md text-white dark:text-secondary-text dark:bg-bg-primary-dark`}>{formatTime(timeLeft?.minutes) ? formatTime(timeLeft?.minutes) : "00"}</div>
                        <div className={`${selectedColor} px-3 py-2 rounded-md text-white dark:text-secondary-text dark:bg-bg-primary-dark`}>{formatTime(timeLeft?.seconds) ? formatTime(timeLeft?.seconds) : "00"}</div>
                     </div>
                  )
               }

            </div>
         </div>
      </div>

   );

};
FlashSale.propTypes = {
   targetDate: PropTypes.object,

}
export default FlashSale;