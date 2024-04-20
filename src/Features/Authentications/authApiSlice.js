import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BaseURL from "../BaseURL/BaseURL";



 const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000", credentials: "include" }),
  endpoints: builder => ({
    // loginApi Here
    loginUser: builder.mutation({
      query: (email, password) => ({
        url: "/login",
        method: "POST",
        body: { email, password },
      }),
    }),

    // registerApi Here
    registerUser: builder.mutation({
      query: userData => ({
        url: "auth/register",
        method: "POST",
        body: userData,
      }),
    }),
    // logoutApi Here
    logoutUser: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutMutation,
} = authApiSlice;

export default authApiSlice;

