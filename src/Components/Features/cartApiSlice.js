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
    // delete carts by user
    deleteCartProduct: builder.mutation({
      query: (id) => ({
        url: `cart/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Carts"],
    }),
    // increase carts by user
    increaseCartQuantity: builder.mutation({
      query: (id) => ({
        url: `cart/increase/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Carts"],
    }),
    // decrease carts by user
    decreaseCartQuantity: builder.mutation({
      query: (id)=>({
        url: `cart/decrease/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Carts"],
    }),
    // reset carts by user
    resetCartQuantity: builder.mutation({
      query: (id)=>({
        url: `cart/reset/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Carts"],
    })
  }),
});

export const {
  useGetCartsQuery,
  useDeleteCartProductMutation,
  useAddToCartProductMutation,
  useIncreaseCartQuantityMutation,
  useDecreaseCartQuantityMutation,
  useResetCartQuantityMutation
} = cartApiSlice;
export default cartApiSlice;
