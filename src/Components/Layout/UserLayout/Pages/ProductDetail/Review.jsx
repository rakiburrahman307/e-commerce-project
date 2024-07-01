import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';
import UpdateReviewModal from './UpdateReviewModal';

const Review = memo(({
  review,
  user,
  textColor,
  handleDeleteReview,
  setOpenModal,
  setComment,
  setRating,
  openModal,
  borderColor,
  selectedColor,
  submitData
}) => {
  const createdAtDate = new Date(review.createdAt);
  const formattedCreatedAt = useMemo(() => createdAtDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }), [createdAtDate]);

  return (
    <div className="flex flex-col dark:bg-semi-dark my-8 rounded-lg px-2 md:px-3 lg:px-5 py-3 bg-white shadow-lg dark:text-secondary-text-dark">
      <div className="flex justify-between items-center">
        <div className="flex flex-col mb-2">
          <p className="text-sm font-medium">{review?.userName}</p>
          <p className="text-xs">{formattedCreatedAt}</p>
          <ReactStars
            value={review.rating}
            count={5}
            edit={false}
            isHalf={false}
            size={20}
            activeColor="#ffd700"
          />
        </div>
        <div className="flex gap-5 items-center">
          {user?.user?._id === review?.userId && (
            <>
              <button
                onClick={() => setOpenModal(true)}
                className={`rounded-full hover:scale-95 border px-2 text-base md:text-base ${textColor} duration-300 hover:bg-orange-500 hover:text-white`}
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteReview(review?._id)}
                className={`rounded-full hover:scale-95 border px-2 text-base md:text-base ${textColor} duration-300 hover:bg-red-600 hover:text-white`}
              >
                Delete
              </button>
            </>
          )}
          <UpdateReviewModal
            review={review}
            openModal={openModal}
            setOpenModal={setOpenModal}
            setComment={setComment}
            setRating={setRating}
            borderColor={borderColor}
            selectedColor={selectedColor}
            submitData={submitData}
          />
        </div>
      </div>
      <p>{review.comment}</p>
    </div>
  );
});

Review.propTypes = {
  review: PropTypes.object.isRequired,
  user: PropTypes.object,
  textColor: PropTypes.string,
  handleDeleteReview: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  setComment: PropTypes.func.isRequired,
  setRating: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  borderColor: PropTypes.string.isRequired,
  selectedColor: PropTypes.string.isRequired,
  submitData: PropTypes.func.isRequired,
};

export default Review;
