import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseURL from "./BaseURL/BaseURL";

const apiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: getBaseURL(),
        credentials: "include"
    }),
    endpoints: () => ({}),
})

export default apiSlice;