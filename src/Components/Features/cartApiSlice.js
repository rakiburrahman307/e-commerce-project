import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseURL from "./BaseURL/BaseURL";

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
      providesTags: ["Carts"],
    }),
    // add carts by user
    addToCartProduct: builder.mutation({
      query: (cart) => ({
        url: `cart/add`,
        method: "POST",
        body: cart,
      }),
      invalidatesTags: ["Carts"],
    }),
  }),
});

export const { useGetCartQuery, useAddToCartProductMutation } = cartApiSlice;
export default cartApiSlice;
