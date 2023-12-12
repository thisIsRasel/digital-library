import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import {REDUCERS} from "../contants";
import {Book} from "../../models/Book.ts";
import {BookState} from "../state/book-state.ts";

// Define the initial state using that type
const initialState: BookState = {
    books: [],
    selectedBook: {
        id: 0,
        title: '',
        author: '',
        publication_year: 0,
        summary: '',
        created_at: new Date(),
        updated_at: new Date(),
    } as Book,
}

export const bookSlice = createSlice({
    name: REDUCERS.BOOKS,
    initialState,
    reducers: {
        selectBook: (state, { payload }) => {
            state.selectedBook = payload.book;
        }
    },
})

export const { selectBook } = bookSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.books.selectedBook;

export default bookSlice.reducer