import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_BASE_URL} from "../constants";

export const bookService = createApi({
    reducerPath: 'bookService',
    baseQuery: fetchBaseQuery({baseUrl: `${API_BASE_URL}`}),
    tagTypes: ['Books'],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: (params) => `/books?${new URLSearchParams(params).toString()}`,
            providesTags: ['Books'],
        }),
        getBook: builder.query({
            query: (id) => `/books/${id}`,
        }),
        createBook: builder.mutation({
            query: (body) => ({
                url: '/books',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Books'],
        }),
        updateBook: builder.mutation({
            query: ({id, ...patch}) => ({
                url: `/books/${id}`,
                method: 'put',
                body: patch,
            }),
            invalidatesTags: ['Books'],
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Books'],
        })
    }),
});

export const {
    useLazyGetBooksQuery,
    useGetBookQuery,
    useCreateBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation,

} = bookService;