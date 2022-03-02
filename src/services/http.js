import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const httpApi = createApi({
  reducerPath: 'httpApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://react-quotes-fc584-default-rtdb.firebaseio.com/',
  }),
  tagTypes: ['Quote', 'Comments'],
  endpoints: builder => ({
    getQuotes: builder.query({
      query: () => 'quotes.json',
      providesTags: ['Quote'],
    }),
    getQuote: builder.query({
      query: id => `quotes/${id}.json`,
      providesTags: ['Quote'],
    }),
    addQuote: builder.mutation({
      query: quote => ({
        url: 'quotes.json',
        method: 'POST',
        body: quote,
      }),
      invalidatesTags: ['Quote'],
    }),
    getComments: builder.query({
      query: quoteId => `comments/${quoteId}.json`,
      providesTags: ['Comments'],
    }),
    addComment: builder.mutation({
      query: requestData => ({
        url: `comments/${requestData.quoteId}.json`,
        method: 'POST',
        body: requestData.commentData,
      }),
      invalidatesTags: ['Comments'],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetQuotesQuery,
  useGetQuoteQuery,
  useAddQuoteMutation,
  useGetCommentsQuery,
  useAddCommentMutation,
} = httpApi
