import { lazy, Suspense, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PropTypes from "prop-types";
import {
  useDeleteReviewMutation,
  useGetReviewsQuery,
  useUpdateReviewMutation,
} from "../../../../Features/reviewApiSlice";
import useContextInfo from "../../Hooks/useContextInfo";
import Swal from "sweetalert2";
import ShowSuccessMessage from "../../Utilities/SuccessMessage/ShowSuccessMessage";
import LoadingSkeletonReview from "./LoadingSkeletonReview";
import ShowErrorMessage from "../../Utilities/ErrorMessage/ShowErrorMessage";
import { useGetUserQuery } from "../../../../Features/authApiSlice";

const Review = lazy(() => import("./Review"));

const DescriptionAndRating = ({ description, productId, keyPoint }) => {
  const { textColor, borderColor, selectedColor } = useContextInfo();
  const [openModal, setOpenModal] = useState(false);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const { data: reviews } = useGetReviewsQuery(productId);
  const [deleteReview, { isLoading }] = useDeleteReviewMutation();
  const { data: user } = useGetUserQuery();
  const [updateReview] = useUpdateReviewMutation();
  const tabList = [
    {
      id: 1,
      name: "Description",
    },
    {
      id: 2,
      name: "Review",
    },
  ];

  const handleDeleteReview = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await deleteReview(id);
          if (res?.data) {
            ShowSuccessMessage(res?.data?.message);
          }
        }
      });
    } catch (error) {
      ShowErrorMessage(error?.message);
    }
  };

  const submitData = async (id) => {
    const customerData = {
      id,
      comment,
      rating,
    };
    const res = await updateReview(customerData);
    if (res?.data) {
      ShowSuccessMessage(res?.data?.message);
    }
    setOpenModal(false);
  };

  return (
    <Tabs className='dark:text-secondary-text-dark dark:bg-semi-dark min-h-screen'>
      <TabList>
        {tabList?.map((tab) => (
          <Tab key={tab?.id}>{tab?.name}</Tab>
        ))}
      </TabList>
      <TabPanel className='mt-5'>
        <div className='bg-white p-3 dark:bg-semi-dark shadow-lg min-h-[500px] px-5'>
          <p className='text-justify'>{description}</p>
          <ul className='mt-10 list-disc'>
            <h3 className='text-2xl font-bold mb-3 ml-2'>Key Feature</h3>
            {keyPoint?.map((point, index) => {
              return (
                <li key={index} className='flex items-center'>
                  <p className='ml-2 font-semibold'>{index + 1}.</p>
                  <p className='ml-2 font-semibold text-justify'>
                    {point?.name}:
                  </p>
                  <p className='ml-2 font-medium text-justify'>
                    {point?.point}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </TabPanel>
      <TabPanel>
        {isLoading ? (
          <LoadingSkeletonReview />
        ) : (
          reviews?.map((review) => (
            <Suspense fallback={<LoadingSkeletonReview />} key={review?._id}>
              <Review
                review={review}
                user={user}
                textColor={textColor}
                handleDeleteReview={handleDeleteReview}
                setOpenModal={setOpenModal}
                setComment={setComment}
                setRating={setRating}
                openModal={openModal}
                borderColor={borderColor}
                selectedColor={selectedColor}
                submitData={submitData}
              />
            </Suspense>
          ))
        )}
      </TabPanel>
    </Tabs>
  );
};

DescriptionAndRating.propTypes = {
  description: PropTypes.string,
  productId: PropTypes.string,
  keyPoint: PropTypes.array,
};

export default DescriptionAndRating;
