import {useLazyGetBooksQuery} from "../../services/book.service.ts";
import {useEffect, useState} from "react";
import BookListHeader from "../../components/BookList/BookListHeader.tsx";
import BookListTable from "../../components/BookList/BookListTable.tsx";

const BooksContainer = () => {
    const [getBooks, {data, isLoading}] = useLazyGetBooksQuery();
    const [searchText, setSearchText] = useState('');
    const [pageNo, setPageNo] = useState(1);
    useEffect(() => {
        const params = {
            page: pageNo || 1,
            ...(searchText ? {sk: searchText} : {})
        }
        getBooks(params);
    }, [searchText, pageNo]);
    const handleOnSearchTextChange = (text: string) => {
        setSearchText(text);
        setPageNo(1);
    }

    const handleOnPageChange = (pgNo: number) => {
        setPageNo(pgNo);
    }

    const handleOnReset = () => {
        setSearchText('');
        setPageNo(1);
    }

    return (
        <section className="flex flex-col">
            <BookListHeader onSearchTextChange={(e: string) => handleOnSearchTextChange(e)} onReset={handleOnReset}/>
            <BookListTable data={data} pageNo={pageNo}
                            loading={isLoading}
                           onPageChange={(e: number) => handleOnPageChange(e)}/>
        </section>
    );
}

export default BooksContainer;