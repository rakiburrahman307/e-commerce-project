import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SkeletonLoader = () => {
  return (
    <div className='w-full bg-white shadow-xl rounded-lg dark:bg-semi-dark h-[500px]'>
      <div className='flex flex-col md:flex-row px-1 md:px-3 lg:px-5 lg:flex-row my-4 gap-10'>
        <div className={`flex flex-col items-center mt-5`}>
          <div className={`p-2 rounded-lg h-[300px] shadow-sm md:shadow-md`}>
            <Skeleton height={300} width={350} />
          </div>
          <div className='w-[320px] md:w-[300px] mx-auto mt-3 md:mt-5 lg:mt-8 px-1 md:px-2 lg:px-3'>
            <Skeleton height={50} width={250} />
          </div>
        </div>
        <div className='px-3 mt-10 w-full invisible md:visible'>
          <h2 className='text-4xl font-semibold dark:text-secondary-text-dark'>
            <Skeleton height={40} width={200} />
          </h2>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col'>
              <div className='flex items-center gap-2'>
                <Skeleton height={20} width={100} />
                <span className='text-blue-600'>
                  <Skeleton height={15} width={200} />
                </span>
              </div>
              <p className='dark:text-secondary-text-dark'>
                <Skeleton height={15} width={200} />
              </p>
            </div>
          </div>
          <div className='mt-2 mb-4 dark:text-secondary-text-dark'>
            <hr />
          </div>
          <Skeleton height={15} count={2} width={200} />

          <div className='flex gap-5 items-center'>
            <div className='flex gap-8 items-center'>
              <Skeleton height={30} circle={true} width={30} />
              <Skeleton height={15} width={15} />
              <Skeleton height={30} circle={true} width={30} />
            </div>
          </div>
          <div className='flex justify-between md:justify-start gap-2 md:gap-5 mt-14 mx-auto'>
            <Skeleton height={40} width={176} />
          </div>
        </div>
        <div className='dark:text-secondary-text-dark invisible md:visible'>
          <div className='mt-2'>
            <Skeleton height={20} width={250} />
            <div className='flex gap-2 justify-between'>
              <div className='flex gap-1 items-center'>
                <Skeleton height={20} width={250} />
              </div>
              <Skeleton height={20} width={36} />
            </div>
            <div className='flex gap-2 justify-between mt-5'>
              <div className='flex gap-1 items-center'>
                <Skeleton height={20} width={250} />
              </div>
              <span className='text-gray-500 flex items-center gap-1'>
                <Skeleton height={20} width={30} />
              </span>
            </div>
            <div className='flex gap-2 justify-between mt-5'>
              <div className='flex gap-1 items-center'>
                <Skeleton height={20} width={250} />
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <Skeleton height={20} width={250} />
            <div className='flex gap-2 justify-between'>
              <div className='flex gap-1 items-center'>
                <Skeleton height={20} width={250} />
              </div>
            </div>
            <div className='flex gap-2 justify-between mt-5'>
              <div className='flex gap-1 items-center'>
                <Skeleton height={20} width={250} />
              </div>
            </div>
            <div className='flex gap-2 justify-between mt-5'>
              <div className='flex gap-1 items-center'>
                <Skeleton height={20} width={250} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
