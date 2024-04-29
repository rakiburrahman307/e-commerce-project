import Skeleton from "react-loading-skeleton";

const LoadingSkeletonReview = () => {
  return (
    <div className='flex flex-col dark:bg-semi-dark my-8 rounded-lg px-2 md:px-3 lg:px-5 py-3 bg-white shadow-lg dark:text-secondary-text-dark'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col mb-2'>
          <Skeleton count={3} height={10} width={100}></Skeleton>
        </div>

        <div className='flex gap-5 items-center'>
          <Skeleton height={25} width={80}></Skeleton>
          <Skeleton height={25} width={80}></Skeleton>
        </div>
      </div>
      <Skeleton height={10} />
    </div>
  );
};

export default LoadingSkeletonReview;
