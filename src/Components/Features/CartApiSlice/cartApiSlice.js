import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseURL from "../BaseURL/BaseURL";

const cartApiSlice = createApi({
  reducerPath: "cartApiSlices",
  baseQuery: fetchBaseQuery({ baseUrl: getBaseURL(), credential: "include" }),
  endpoints: (builder) => ({
    // get all carts by user
    getCart: builder.query({
      query: (id) => ({
        url: `cart/${id}`,
        method: "GET",
      }),
      providesTags: ["Cart"],
    }),
    // add carts by user
    addCart: builder.mutation({
      query: (cart) => ({
        url: `cart/add`,
        method: "POST",
        body: cart,
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

const { useGetCartQuery, useAddCartMutation } = cartApiSlice;
export default cartApiSlice;
