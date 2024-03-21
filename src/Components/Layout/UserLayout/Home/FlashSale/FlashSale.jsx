import Title from "../../Hooks/Title";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import useContextInfo from "../../Hooks/useContextInfo";
import Button from "../../Components/Button/Button";


const FlashSale = ({ targetDate }) => {
   const { selectedColor, textColor } = useContextInfo();
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
 const text ='Apple Watch Series 7 GPS, Aluminium ami nation akgdg jagdig kajgdiag kagdi Case, Starlight Sport';
   return (
      <section className="mx-auto">
         <Title title='FlashSale'></Title>
         <div className="flex justify-between items-center border-b-2 border-white dark:border-semi-dark py-3">
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
                           <div className={`${selectedColor} px-3 py-2 rounded-md text-white dark:text-secondary-text dark:bg-semi-dark`}>{timeLeft?.days ? timeLeft?.days : "00"}</div>
                           <div className={`${selectedColor} px-3 py-2 rounded-md text-white dark:text-secondary-text dark:bg-semi-dark`}>{formatTime(timeLeft?.hours) ? formatTime(timeLeft?.hours) : "00"}</div>
                           <div className={`${selectedColor} px-3 py-2 rounded-md text-white dark:text-secondary-text dark:bg-semi-dark`}>{formatTime(timeLeft?.minutes) ? formatTime(timeLeft?.minutes) : "00"}</div>
                           <div className={`${selectedColor} px-3 py-2 rounded-md text-white dark:text-secondary-text dark:bg-semi-dark`}>{formatTime(timeLeft?.seconds) ? formatTime(timeLeft?.seconds) : "00"}</div>
                        </div>
                     ) : (
                        <div className="flex items-center gap-3">
                           <div className={`${selectedColor} px-3 py-2 rounded-md text-white dark:text-secondary-text dark:bg-semi-dark`}>{formatTime(timeLeft?.hours) ? formatTime(timeLeft?.hours) : "00"}</div>
                           <div className={`${selectedColor} px-3 py-2 rounded-md text-white dark:text-secondary-text dark:bg-semi-dark`}>{formatTime(timeLeft?.minutes) ? formatTime(timeLeft?.minutes) : "00"}</div>
                           <div className={`${selectedColor} px-3 py-2 rounded-md text-white dark:text-secondary-text dark:bg-semi-dark`}>{formatTime(timeLeft?.seconds) ? formatTime(timeLeft?.seconds) : "00"}</div>
                        </div>
                     )
                  }

               </div>
            </div>
               <Button to='#' className={`relative dark:bg-semi-dark inline-block h-10 w-32 overflow-hidden border-red-500 px-5 py-2 ${textColor} dark:text-secondary-text-dark shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[85%] before:rounded-s-full before:${selectedColor} before:duration-500 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[85%] after:rounded-e-full after:${selectedColor} after:duration-700 hover:text-white dark:hover:text-white before:hover:translate-x-0 after:hover:translate-x-0 rounded-2xl dark:bg-primary-dark`} value='Shop More'></Button>
         </div>
         <div className="my-10">
         <div className="w-full max-w-[188px] h-full max-h-[290px] bg-white border border-gray-200 rounded-sm hover:shadow-md hover:shadow-white dark:bg-semi-dark dark:border-gray-700 cursor-pointer">
        <img className="rounded-t-sm" src="https://static-01.daraz.com.bd/p/da6f0ac356dcc53d0d11d2e7bb74111b.jpg" loading="lazy"/>
    <div className="px-1 pb-5 text-left mt-2">
            <h5 className="text-sm tracking-tight text-secondary-text dark:text-secondary-text-dark">{text.length >50 ? text.slice(0,50): text}</h5>
        <div className="flex flex-col items-start justify-between mb-3">
            <span className={`text-lg font-bold ${textColor} dark:text-secondary-text-dark`}>$599</span>
            <div className="flex justify-evenly gap-3">
            <del className="text-xs text-secondary-text dark:text-secondary-text-dark">$80</del><span className="text-xs text-secondary-text dark:text-secondary-text-dark">10%</span>
            </div>
        </div>
    </div>
</div>

         </div>
      </section>

   );

};
FlashSale.propTypes = {
   targetDate: PropTypes.object,

}
export default FlashSale;