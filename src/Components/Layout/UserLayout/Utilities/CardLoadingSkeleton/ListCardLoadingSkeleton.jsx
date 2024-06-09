import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ListCardLoadingSkeleton = () => {
  return (
    <div className='my-5'>
      <div className='group mx-2 mt-10 grid max-w-screen-lg grid-cols-1 space-x-8 overflow-hidden rounded-lg border text-gray-700 shadow sm:mx-auto sm:grid-cols-5 md:h-72 py-3'>
        <div className='col-span-2 text-left text-gray-600'>
          <div className='group relative h-full w-full overflow-hidden'>
            <Skeleton height="100%" />
          </div>
        </div>
        <div className='col-span-3 flex flex-col space-y-3 pr-8 text-left'>
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
            <div className='flex flex-col'>
              <h2 className='mt-3 overflow-hidden text-lg font-semibold'>
                <Skeleton width={150} />
              </h2>
              <div className='flex justify-start items-center gap-2'>
                <Skeleton width={100} height={24} />
              </div>
            </div>
            <div className='flex items-center'>
              <Skeleton width={50} />
            </div>
          </div>
          <div className='flex flex-col text-gray-700 sm:flex-row'>
            <div className='flex h-fit space-x-2 text-sm font-medium'>
              <Skeleton count={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCardLoadingSkeleton;
