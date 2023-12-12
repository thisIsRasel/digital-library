import BookForm from "../../components/BookForm";
import useBookForm from "../../hooks/useBookForm.ts";
import {useCreateBookMutation, bookService} from "../../services/book.service.ts";
import {Book} from "../../models/Book.ts";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const CreateBookContainer = () => {
    const {initialValues} = useBookForm();
    const [ createBook] = useCreateBookMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleOnSubmit = async (e: Book) => {
        const result = await createBook(e);
        if( result ) {
            console.log("Book created successfully");
            navigate('/books');
            dispatch(bookService.util?.invalidateTags(['Books']));
        }

    }
    return <BookForm initialValue={initialValues}  onSubmit={(e: Book) => handleOnSubmit(e) }  />
}

export default CreateBookContainer;