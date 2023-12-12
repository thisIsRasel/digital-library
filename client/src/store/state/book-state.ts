import {Book} from "../../models/Book.ts";

export interface BookState {
    books: Book[];
    selectedBook: Book;
}