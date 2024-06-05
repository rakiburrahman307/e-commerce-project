import apiSlice from "./apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // loginApi Here
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "auth/login",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),
    // registerApi Here
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "auth/register",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),
    // logoutApi Here
    logoutUser: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: "auth/user",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutMutation,
} = authApiSlice;
