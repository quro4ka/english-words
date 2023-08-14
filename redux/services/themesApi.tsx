import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const themesApi = createApi({
  reducerPath: 'themesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    getThemes: builder.query<void, void>({ query: () => 'themes' }),
  }),
})

export const { useGetThemesQuery } = themesApi
