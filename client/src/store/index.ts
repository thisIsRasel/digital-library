import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './slices/booksSlice';
import { bookService } from '../services/book.service';
import {setupListeners} from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer: {
        books: bookReducer,
        [bookService.reducerPath]: bookService.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            bookService.middleware,
        ]),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)