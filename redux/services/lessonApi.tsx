import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const lessonApi = createApi({
  reducerPath: 'lessonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    getLesson: builder.query<any, any>({ query: (id) => `words?id=${id}` }),
  }),
})

export const { useGetLessonQuery } = lessonApi
