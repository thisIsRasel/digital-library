import {Book} from "../../models/Book.ts";
import {useNavigate} from "react-router-dom";
import {bookService, useDeleteBookMutation} from "../../services/book.service.ts";
import {useDispatch} from "react-redux";

const BookListTableBody = ({books}: {books: Book[]}) => {
    const navigate = useNavigate();
    const [ deleteBook ] = useDeleteBookMutation();
    const dispatch = useDispatch();
    const handleOnViewClick = (id: number) => {
        navigate(`/books/${id}`);
    }

    const handleOnEditClick = (id: number) => {
        navigate(`/books/update/${id}`);
    }

    const handleOnDeleteClick = async (id: number) => {
       const result = await deleteBook(id);
       if( result ) {
           navigate('/books');
       }
    }

    return (
        <tbody className="divide-y divide-gray-dark">
        {books?.length > 0 ? books.map((book) => <tr className="h-40">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                { book?.id }
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                { book?.title }
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                { book?.author }
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                { book?.publication_year }
            </td>
            <td className="flex flex-row justify-end px-6 py-4 whitespace-nowrap text-end text-sm font-medium gap-4">
                <button type="button"
                        onClick={() => handleOnViewClick(book?.id)}
                        className="border border-gray-dark px-4 py-4 rounded-8">View
                </button>
                <button type="button"
                        onClick={() => handleOnEditClick(book?.id)}
                        className="border border-gray-dark px-4 py-4 rounded-8">Edit
                </button>
                <button type="button"
                        onClick={() => handleOnDeleteClick(book?.id)}
                        className="border border-gray-dark px-4 py-4 rounded-8">Delete
                </button>
            </td>
        </tr>) : null}

        </tbody>
    );
}

export default BookListTableBody;