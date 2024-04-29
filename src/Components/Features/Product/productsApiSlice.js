import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseURL from "../BaseURL/BaseURL";

const productApiSlice = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({ baseUrl: getBaseURL(), credentials: "include" }),
  endpoints: (builder) => ({
    // get all the products
    getProducts: builder.query({
      query: () => ({
        url: "product/all",
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
export default productApiSlice;
