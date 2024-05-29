import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseURL from "./BaseURL/BaseURL";

const cartApiSlice = createApi({
  reducerPath: "cartApiSlices",
  baseQuery: fetchBaseQuery({ baseUrl: getBaseURL(), credential: "include" }),
  endpoints: (builder) => ({
    // get all carts by user
    getCarts: builder.query({
      query: (id) => ({
        url: `cart/all/${id}`,
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
    deleteCartProduct: builder.mutation({
      query: (id) => ({
        url: `cart/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Carts"],
    }),
  }),
});

export const {
  useGetCartsQuery,
  useDeleteCartProductMutation,
  useAddToCartProductMutation,
} = cartApiSlice;
export default cartApiSlice;
