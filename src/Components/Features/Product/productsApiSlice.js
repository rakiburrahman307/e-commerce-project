import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseURL from "../BaseURL/BaseURL";


const productApiSlice = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({ baseUrl: getBaseURL(), credentials: "include" }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => ({
        url: "product/all",
        method: "GET",
      }),
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `product/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productApiSlice;
export default productApiSlice;
