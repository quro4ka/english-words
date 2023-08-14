import { configureStore } from '@reduxjs/toolkit'
import { themesApi } from './services/themesApi'
import { topicsApi } from './services/topicsApi'
import { lessonApi } from './services/lessonApi'

export const store = configureStore({
  reducer: {
    [themesApi.reducerPath]: themesApi.reducer,
    [topicsApi.reducerPath]: topicsApi.reducer,
    [lessonApi.reducerPath]: lessonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(themesApi.middleware, topicsApi.middleware, lessonApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
