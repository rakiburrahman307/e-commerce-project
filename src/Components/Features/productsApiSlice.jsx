import apiSlice from "./apiSlice";

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ skip, limit }) => ({
        url: `product/all?skip=${skip}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    // get product by specific id
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `product/${id}`,
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    relatedProduct: builder.query({
      query: (category) => ({
        url: `product/related/${category}`,
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useRelatedProductQuery,
} = productApiSlice;
