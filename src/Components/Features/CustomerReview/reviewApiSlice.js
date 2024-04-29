import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseURL from "../BaseURL/BaseURL";

const reviewApiSlice = createApi({
  reducerPath: "customerReview",
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseURL(),
    credential: "include",
  }),
  endpoints: (builder) => ({
      // get all customer review
    getReviews: builder.query({
      query: (productId) => ({
        url: `reviews/${productId}`,
        method: "GET",
      }),
      providesTags:['Reviews']
    }),
     // post all customer review
     postReview: builder.mutation({
      query: (reviewData) => ({
        url: "reviews/add",
        method: "POST",
        body: reviewData,
      }),
      invalidatesTags: ['Reviews']
    }),
    // delete the review 
    deleteReview: builder.mutation({
      query: (reviewId) => ({
        url: `reviews/delete/${reviewId}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Reviews']
    }),
    // update the review 
    updateReview: builder.mutation({
      query: (reviewData) => ({
        url: `reviews/update`,
        method: "PUT",
        body: reviewData,
      }),
      invalidatesTags: ['Reviews']
    })
  }),
});
export const { useGetReviewsQuery, usePostReviewMutation, useDeleteReviewMutation, useUpdateReviewMutation } = reviewApiSlice;
export default reviewApiSlice;
