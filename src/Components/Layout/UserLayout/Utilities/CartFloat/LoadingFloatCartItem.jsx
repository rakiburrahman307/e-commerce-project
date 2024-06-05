import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const LoadingItemSkeleton = () => {
  return (
    <>
      {Array(6)
        .fill(null)
        .map((_, idx) => {
          return (
            <div
              key={idx}
              className='md:flex items-stretch gap-2 md:gap-0 py-2 md:py-10 lg:py-4 border-t border-gray-50'
            >
              <div className='md:w-4/12 2xl:w-1/4 w-full'>
                <Skeleton height={80} width='100%' />
              </div>
              <div className='md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center'>
                <Skeleton width={200} count={4} height={15} className='pt-2' />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default LoadingItemSkeleton;