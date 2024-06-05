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
  }),
});

export const { useGetWishListQuery, useAddWishListToCartMutation } =
  cartWishListApiSlice;
