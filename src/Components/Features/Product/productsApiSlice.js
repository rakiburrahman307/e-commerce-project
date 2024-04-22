import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import getBaseURL from "../BaseURL/BaseURL";

const productApiSlice = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({ baseUrl: getBaseURL(), credentials: "include" }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => ({
        url: "/product/all",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApiSlice;
export default productApiSlice;
