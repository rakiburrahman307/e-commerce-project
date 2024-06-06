import { MdClose } from "react-icons/md";
const MobileFilterProduct = () => {
  return (
    <div className='relative z-40 lg:hidden'>
      <div className='fixed inset-0 bg-black bg-opacity-25'></div>
      <div className='fixed inset-0 z-40 flex'>
        <div className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl'>
          <div className='flex items-center justify-between px-4'>
            <h2 className='text-lg font-medium text-gray-900'>Filters</h2>
            <button
              type='button'
              className='-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400'
            >
              <span className='sr-only'>Close menu</span>
              <MdClose size={30} />
            </button>
          </div>
          {/* Filters  */}
          <form className='mt-4 border-t border-gray-200'>
            <h3 className='sr-only'>Categories</h3>
            <ul role='list' className='px-2 py-3 font-medium text-gray-900'>
              <li>
                <a href='#' className='block px-2 py-3'>
                  Totes
                </a>
              </li>
              <li>
                <a href='#' className='block px-2 py-3'>
                  Backpacks
                </a>
              </li>
              <li>
                <a href='#' className='block px-2 py-3'>
                  Travel Bags
                </a>
              </li>
              <li>
                <a href='#' className='block px-2 py-3'>
                  Hip Bags
                </a>
              </li>
              <li>
                <a href='#' className='block px-2 py-3'>
                  Laptop Sleeves
                </a>
              </li>
            </ul>

            <div className='border-t border-gray-200 px-4 py-6'>
              <h3 className='-mx-2 -my-3 flow-root'>
                {/* Expand/collapse section button  */}
                <button
                  type='button'
                  className='flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500'
                  aria-controls='filter-section-mobile-0'
                  aria-expanded='false'
                >
                  <span className='font-medium text-gray-900'>Color</span>
                  <span className='ml-6 flex items-center'>
                    {/* Expand icon, show/hide based on section open state.  */}
                    <svg
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path d='M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z' />
                    </svg>
                    {/* Collapse icon, show/hide based on section open state.  */}
                    <svg
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </span>
                </button>
              </h3>
              {/* Filter section, show/hide based on section state. */}
              <div className='pt-6' id='filter-section-mobile-0'>
                <div className='space-y-6'>
                  <div className='flex items-center'>
                    <input
                      id='filter-mobile-color-0'
                      name='color[]'
                      value='white'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                    <label
                      for='filter-mobile-color-0'
                      className='ml-3 min-w-0 flex-1 text-gray-500'
                    >
                      White
                    </label>
                  </div>
                  <div className='flex items-center'>
                    <input
                      id='filter-mobile-color-1'
                      name='color[]'
                      value='beige'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                    <label
                      for='filter-mobile-color-1'
                      className='ml-3 min-w-0 flex-1 text-gray-500'
                    >
                      Beige
                    </label>
                  </div>
                  <div className='flex items-center'>
                    <input
                      id='filter-mobile-color-2'
                      name='color[]'
                      value='blue'
                      type='checkbox'
                      checked
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                    <label
                      for='filter-mobile-color-2'
                      className='ml-3 min-w-0 flex-1 text-gray-500'
                    >
                      Blue
                    </label>
                  </div>
                  <div className='flex items-center'>
                    <input
                      id='filter-mobile-color-3'
                      name='color[]'
                      value='brown'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                    <label
                      for='filter-mobile-color-3'
                      className='ml-3 min-w-0 flex-1 text-gray-500'
                    >
                      Brown
                    </label>
                  </div>
                  <div className='flex items-center'>
                    <input
                      id='filter-mobile-color-4'
                      name='color[]'
                      value='green'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                    <label
                      for='filter-mobile-color-4'
                      className='ml-3 min-w-0 flex-1 text-gray-500'
                    >
                      Green
                    </label>
                  </div>
                  <div className='flex items-center'>
                    <input
                      id='filter-mobile-color-5'
                      name='color[]'
                      value='purple'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                    <label
                      for='filter-mobile-color-5'
                      className='ml-3 min-w-0 flex-1 text-gray-500'
                    >
                      Purple
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MobileFilterProduct;
