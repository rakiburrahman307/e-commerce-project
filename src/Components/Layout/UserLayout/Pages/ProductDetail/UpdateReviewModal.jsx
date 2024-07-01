import React from "react";
import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";

const UpdateReviewModal = ({
  review,
  openModal,
  setOpenModal,
  setComment,
  setRating,
  borderColor,
  selectedColor,
  submitData,
}) => {
  return (
    <div
      className={`fixed z-[100] flex items-center justify-center ${
        openModal ? "opacity-1 visible" : "invisible opacity-0"
      } inset-0 bg-black/20 backdrop-blur-sm duration-100 px-10`}
    >
      <div
        className={`absolute max-w-md rounded-lg bg-white p-3 pb-5 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
          openModal
            ? "scale-1 opacity-1 duration-300"
            : "scale-0 opacity-0 duration-150"
        } `}
      >
        <svg
          onClick={() => setOpenModal(false)}
          className='mx-auto mr-0 w-8 cursor-pointer fill-black dark:fill-white'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g strokeWidth='0'></g>
          <g strokeLinecap='round' strokeLinejoin='round'></g>
          <g>
            <path d='M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z'></path>
          </g>
        </svg>

        <div className='flex flex-col justify-center items-center gap-3'>
          <h3 className='mb-2 text-xl font-semibold'>Rating and Review</h3>
          <ReactStars
            value={review.rating}
            count={5}
            edit={true}
            isHalf={false}
            onChange={(value) => setRating(value)}
            size={24}
            activeColor='#ffd700'
          />
          <textarea
            defaultValue={review.comment}
            onChange={(e) => setComment(e.target.value)}
            className={`rounded-lg border ${borderColor} bg-transparent px-4 py-2 text-black dark:text-white/90 focus:outline-none`}
            type='text'
          />
          <button
            onClick={() => submitData(review._id)}
            className={`rounded-full hover:scale-95 w-20 md:w-24 lg:w-28 border ${borderColor} px-1 py-1 text-base md:text-base duration-300 hover:${selectedColor} hover:text-white`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

UpdateReviewModal.propTypes = {
  review: PropTypes.object.isRequired,
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  setComment: PropTypes.func.isRequired,
  setRating: PropTypes.func.isRequired,
  borderColor: PropTypes.string.isRequired,
  selectedColor: PropTypes.string.isRequired,
  submitData: PropTypes.func.isRequired,
};

export default UpdateReviewModal;
