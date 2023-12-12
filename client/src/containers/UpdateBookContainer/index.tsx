import BookForm from "../../components/BookForm";
import {useGetBookQuery, useUpdateBookMutation, bookService} from "../../services/book.service.ts";
import {Book} from "../../models/Book.ts";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const UpdateBookContainer = ({id}: { id: number }) => {
    const {data, isLoading} = useGetBookQuery(id);
    const [updateBook] = useUpdateBookMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(data);
    }, [data])

    const handleOnSubmit = async (e: Book) => {
        const result = await updateBook(e);

        if (result) {
            console.log("Book updated successfully");
            navigate('/books');
            dispatch(bookService.util?.invalidateTags([{ type: 'Books', id }]));
            dispatch(bookService.util?.invalidateTags(['Books']));
        }
    }

    return (<>
        {
            data && !isLoading ? <BookForm initialValue={data} onSubmit={(e: Book) => handleOnSubmit(e)}/> : null
        }
        {
            isLoading ? (
                <div className="flex flex-col justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-dark"></div>
                    <div className="text-xl font-bold mt-4">Loading...</div>
                </div>
            ) : null
        }

    </>)
}
export default UpdateBookContainer;