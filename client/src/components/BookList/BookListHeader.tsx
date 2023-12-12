import {useEffect, useState} from "react";
import useDebounce from "../../hooks/useDebounce";
import {useNavigate} from "react-router-dom";

const BookListHeader = ({onSearchTextChange, onReset}: { onSearchTextChange: any, onReset: any}) => {
    const [searchText, setSearchText] = useState('');
    const debounceValue = useDebounce(searchText, 500);
    const navigate = useNavigate()

    useEffect(() => {
        if (debounceValue) {
            onSearchTextChange(debounceValue);
        }
    }, [debounceValue]);

    const handleReset = () => {
        setSearchText('');
        onReset();
    }

    const handleOnAddMore = () => {
        navigate('/books/create');
    }


    return (
        <section className="flex justify-end items-center gap-12">
            <div className="flex flex-row gap-4">
                <input className="library-input" placeholder="Search Books"
                       value={searchText}
                       onChange={(e) => setSearchText(e.target.value)}/>
                <button type="button"
                        className="border border-gray-dark py-6 px-12 rounded-8"
                        onClick={handleReset}>
                    Reset
                </button>
            </div>
            <div className="flex flex-row">
                <button type="button"
                        className="w-120 border border-gray-dark py-6 px-12 rounded-8"
                        onClick={handleOnAddMore}>
                    Add Book
                </button>
            </div>
        </section>
    );
}

export default BookListHeader;