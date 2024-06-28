import apiSlice from "./apiSlice";

const cartWishListApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
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
    }),
    deleteItemToWishList: builder.mutation({
      query: (id) => ({
        url: `wish/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["WishList"],
    })
  }),
});

export const { useGetWishListQuery, useAddWishListToCartMutation, useDeleteItemToWishListMutation } =
  cartWishListApiSlice;
