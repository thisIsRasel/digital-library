import BookListTableHeader from "./BookListTableHeader.tsx";
import BookListTableBody from "./BookListTableBody.tsx";
import BookListTablePagination from "./BookListTablePagination.tsx";

const BookListTable = ({data, pageNo, onPageChange, loading}: {
    data: any,
    pageNo: number,
    onPageChange: any,
    loading: boolean
}) => {
    return (
        <div className="flex flex-col mt-32">
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            {
                                data && data?.records?.length > 0 && !loading ? (
                                    <>
                                        <table className="min-w-full divide-gray-dark divide-y">
                                            <BookListTableHeader/>
                                            <BookListTableBody books={data?.records}/>
                                        </table>
                                        <BookListTablePagination pageNo={pageNo}
                                                                 onPageChange={(e: number) => onPageChange(e)}/>
                                    </>
                                ) : null
                            }
                            {
                                data && data?.records?.length === 0 && !loading ? (
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="text-xl font-bold">No books found</div>
                                    </div>
                                ) : null
                            }
                            {
                                loading ? (
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-dark"></div>
                                        <div className="text-xl font-bold mt-4">Loading...</div>
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookListTable;