import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import useContextInfo from "../../Hooks/useContextInfo";
import Button from "../../../Reuseable/Button/Button";
import Card from "../../../Reuseable/Card/Card";
import Title from "../../Utilities/Title/Title";




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
   return (
      <section className="mx-auto bg-root-bg p-5 rounded-lg dark:bg-semi-dark">
         <div className="flex justify-between items-center">
            <Title>FlashSale</Title>
            <Button to='#' className={`relative shadow-xl md:hidden lg:hidden dark:bg-primary-dark inline-block h-7 w-28 overflow-hidden border-red-500 px-5 py-1 ${textColor} dark:text-secondary-text-dark shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:${selectedColor} before:duration-500 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:${selectedColor} after:duration-700 hover:text-white dark:hover:text-white before:hover:translate-x-0 after:hover:translate-x-0 rounded-2xl hover:scale-100 dark:bg-primary-dark`} value='Shop More'></Button>
         </div>
         <div className="flex justify-between items-center border-b-2 dark:border-primary-dark py-3">
            <div className="flex items-center gap-10">
               <div>
                  <h2 className={`${textColor} hidden md:flex lg:hidden`}>One Sale Now</h2>
               </div>
               <div className="flex items-center gap-5">
                  <div>
                     <h3>Ending in</h3>
                  </div>

                  {
                     timeLeft?.days > 0 ? (
                        <div className="flex items-center gap-3">
                           <div className={`${selectedColor} px-3 py-2 rounded-md text-white dark:text-secondary-text dark:bg-primary-dark`}>{timeLeft?.days ? timeLeft?.days : "00"}</div>
                           <div className={`${selectedColor} px-3 py-2 rounded-md text-white dark:text-secondary-text dark:bg-primary-dark`}>{formatTime(timeLeft?.hours) ? formatTime(timeLeft?.hours) : "00"}</div>
                           <div className={`${selectedColor} px-3 py-2 rounded-md text-white dark:text-secondary-text dark:bg-primary-dark`}>{formatTime(timeLeft?.minutes) ? formatTime(timeLeft?.minutes) : "00"}</div>
                           <div className={`${selectedColor} px-3 py-2 rounded-md text-white dark:text-secondary-text dark:bg-primary-dark`}>{formatTime(timeLeft?.seconds) ? formatTime(timeLeft?.seconds) : "00"}</div>
                        </div>
                     ) : (
                        <div className="flex items-center gap-3">
                           <div className={`${selectedColor} px-3 py-2 rounded-md text-white dark:text-secondary-text dark:bg-primary-dark`}>{formatTime(timeLeft?.hours) ? formatTime(timeLeft?.hours) : "00"}</div>
                           <div className={`${selectedColor} px-3 py-2 rounded-md text-white dark:text-secondary-text dark:bg-primary-dark`}>{formatTime(timeLeft?.minutes) ? formatTime(timeLeft?.minutes) : "00"}</div>
                           <div className={`${selectedColor} px-3 py-2 rounded-md text-white dark:text-secondary-text dark:bg-primary-dark`}>{formatTime(timeLeft?.seconds) ? formatTime(timeLeft?.seconds) : "00"}</div>
                        </div>
                     )
                  }

               </div>
            </div>
            <Button to='#' className={`relative shadow-xl dark:bg-primary-dark inline-block h-10 w-32 overflow-hidden border-red-500 px-5 py-2 ${textColor} dark:text-secondary-text-dark shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:${selectedColor} before:duration-500 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:${selectedColor} after:duration-700 hover:text-white dark:hover:text-white before:hover:translate-x-0 after:hover:translate-x-0 rounded-2xl hover:scale-100 dark:bg-primary-dark`} value='Shop More'></Button>
         </div>
         <div className="my-6">
            <div className="hidden md:flex lg:flex">
               <Card />
            </div>
            <div className="md:hidden lg:hidden mx-auto flex items-center gap-2">
               <div className="w-1/2">
                  <div className="w-[130px]">
                     <img className="w-full" src='https://static-01.daraz.com.bd/p/da6f0ac356dcc53d0d11d2e7bb74111b.jpg' alt="" />
                  </div>
                  <div className="flex flex-col items-start mt-2">
                     <p className={`${textColor}`}>390</p>
                     <div className="flex gap-2">
                        <del>800</del>
                        <span>51%</span>
                     </div>
                  </div>
               </div>
               <div className=" flex flex-col items-center gap-2">
               <div className="flex items-center gap-2">
                     <div className="w-[65px]">
                        <img className="w-full" src="https://static-01.daraz.com.bd/p/da6f0ac356dcc53d0d11d2e7bb74111b.jpg" alt="" />
                     </div>
                     <div className="flex flex-col items-start">
                        <p className={`${textColor}`}>390</p>
                        <div className="flex gap-2">
                           <del>800</del>
                           <span>51%</span>
                        </div>
                     </div>
                  </div>
               <div className="flex items-center gap-2">
                     <div className="w-[65px]">
                        <img className="w-full" src="https://static-01.daraz.com.bd/p/da6f0ac356dcc53d0d11d2e7bb74111b.jpg" alt="" />
                     </div>
                     <div className="flex flex-col items-start">
                        <p className={`${textColor}`}>390</p>
                        <div className="flex gap-2">
                           <del>800</del>
                           <span>51%</span>
                        </div>
                     </div>
                  </div>
               <div className="flex items-center gap-2">
                     <div className="w-[65px]">
                        <img className="w-full" src="https://static-01.daraz.com.bd/p/da6f0ac356dcc53d0d11d2e7bb74111b.jpg" alt="" />
                     </div>
                     <div className="flex flex-col items-start">
                        <p className={`${textColor}`}>390</p>
                        <div className="flex gap-2">
                           <del>800</del>
                           <span>51%</span>
                        </div>
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