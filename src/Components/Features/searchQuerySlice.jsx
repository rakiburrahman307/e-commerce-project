import apiSlice from "./apiSlice";

const searchQuerySlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        searchQuery: builder.query({
            query: (query) => ({
                url: `product/search/query?title=${query}`,
                method: "GET"
            }),
            providesTags: ["Search"]
        })
    })
})

export const {
    useSearchQueryQuery,
  } = searchQuerySlice;