import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseURL from "../BaseURL/BaseURL";


const productApiSlice = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({ baseUrl: getBaseURL(), credentials: "include" }),
  endpoints: builder => ({
    // get all the products 
    getProducts: builder.query({
      query: () => ({
        url: "product/all",
        method: "GET",
      }),
    }),
    // get product by specific id 
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
