import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const topicsApi = createApi({
  reducerPath: 'topicsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    getTopics: builder.query<void, void>({ query: () => 'topics' }),
    getTopic: builder.query<void, void>({ query: (id) => `topics/${id}` }),
  }),
})

export const { useGetTopicsQuery } = topicsApi
