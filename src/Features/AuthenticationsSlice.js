import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BaseURL } from './BaseURL/BaseURL';

export const Authentications = createApi({
    reducerPath: 'Authentications',
    baseQuery: fetchBaseQuery({ baseUrl: BaseURL }),
    endpoints: (builder) => ({
      loginUser: builder.query({
        query: () => '/login',
      }),
    }),
  });


export const { useLoginUserQuery } = Authentications;