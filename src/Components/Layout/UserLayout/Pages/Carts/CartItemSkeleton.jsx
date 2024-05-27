import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CartItemSkeleton = () => {

      return (
      <>
      {
        Array(6).fill(null).map((_, idx)=>{
         return <div key={idx} className='md:flex items-stretch gap-5 md:gap-0 py-8 md:py-10 lg:py-8 border-t border-gray-50'>
          <div className='md:w-4/12 2xl:w-1/4 w-full'>
          <Skeleton height={200} width="100%" />
          </div>
          <div className='md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center'>
            <div className='flex items-center justify-between w-full'>
              <Skeleton width={300} height={15} className='mr-6' />
            </div>
            <Skeleton width={300} count={4} height={15} className='pt-2' />
              <div className='flex gap-10 items-center'>
                <Skeleton width={128} height={16} className='cursor-pointer' />
                <Skeleton width={128} height={16} className='cursor-pointer' />
              </div>
          </div>
        </div>
        })
      }
      </>
      );

};

export default CartItemSkeleton;