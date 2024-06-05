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
        url: `cart/increase/quantity/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Carts"],
    }),
    // decrease carts by user
    decreaseCartQuantity: builder.mutation({
      query: (id) => ({
        url: `cart/decrease/quantity/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Carts"],
    }),
    // reset carts by user
    resetCartQuantity: builder.mutation({
      query: (id) => ({
        url: `cart/reset/quantity/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Carts"],
    }),
    clearCart: builder.mutation({
      query: (userId) => ({
        url: `cart/clear/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Carts"],
    }),
     // add to wishList
     addCardToWishList: builder.mutation({
      query: (cart) => ({
        url: `cart/toWish`,
        method: "POST",
        body: cart,
      }),
      invalidatesTags: ["Carts", "WishList"],
    }),
      // get Wish list carts by user
      getWishList: builder.query({
        query: (id) => ({
          url: `wish/all/${id}`,
          method: "GET",
        }),
        providesTags: ["WishList"],
      }),
  
      addWishListToCart: builder.mutation({
        query: (cart) => ({
          url: `wish/toCart`,
          method: "POST",
          body: cart,
        }),
        invalidatesTags: ["WishList", "Carts"],
      })
  }),
});

export const {
  useGetCartsQuery,
  useDeleteCartProductMutation,
  useAddToCartProductMutation,
  useIncreaseCartQuantityMutation,
  useDecreaseCartQuantityMutation,
  useResetCartQuantityMutation,
  useClearCartMutation,
  useAddCardToWishListMutation,
  useGetWishListQuery,
  useAddWishListToCartMutation,
} = cartApiSlice;
export default cartApiSlice;
