import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseURL from "../BaseURL/BaseURL";

const reviewApiSlice = createApi({
  reducerPath: "customerReview",
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseURL(),
    credential: "include",
  }),
  // get all customer review
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => ({
        url: "reviews/all",
        method: "GET",
      }),
    }),
     // post all customer review
     postComment: builder.mutation({
      query: (commentData) => ({
        url: "reviews/add",
        method: "POST",
        body: commentData,
      }),
    }),
  }),
});
export const { useGetCommentsQuery, usePostCommentMutation } = reviewApiSlice;
export default reviewApiSlice;
