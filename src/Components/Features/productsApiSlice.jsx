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
    // get product by category name
    relatedProduct: builder.query({
      query: (category) => ({
        url: `product/related/${category}`,
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    // get product by filtered data
    filterProducts: builder.query({
      query: ({
        categories,
        color,
        size,
        brand,
        minPrice,
        maxPrice,
        rating,
      }) => ({
        url: "product/filter",
        method: "POST",
        body: {
          categories,
          color,
          size,
          minPrice,
          maxPrice,
          brand,
          rating,
        },
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useRelatedProductQuery,
  useFilterProductsQuery,
} = productApiSlice;
