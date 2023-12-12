import {Book} from "../../models/Book.ts";
import {useNavigate} from "react-router-dom";

const ViewBookDetails = ({book}: {book: Book}) => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/books');
    }

    const handleEditClick = () => {
        navigate(`/books/update/${book.id}`);
    }


    return (
        <div className="mt-6 border-t border-gray-light">
            <div className="flex flex-row justify-end items-center gap-8 mt-24">
                <button type="button" onClick={handleBackClick}
                        className="w-120 border border-gray-dark py-6 px-12 rounded-8">
                    Back
                </button>
                <button type="button" onClick={handleEditClick}
                        className="w-120 border border-gray-dark py-6 px-12 rounded-8">
                    Edit
                </button>
            </div>
            <dl className="divide-y divide-gray-light">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-dark">Title</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ book?.title }
                    </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-dark">Author</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ book?.author }</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-dark">Publication Year</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ book?.publication_year }</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-dark">Summary</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        { book?.summary }
                    </dd>
                </div>
            </dl>
        </div>
    )
}

export default ViewBookDetails;